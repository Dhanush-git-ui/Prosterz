
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { posterFormSchema, PosterFormValues } from "../form/PosterFormSchema";
import { toast as sonnerToast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface UsePosterFormProps {
  initialImageUrl?: string;
  editMode?: boolean;
  posterId?: number;
  onSuccess?: () => void;
}

export const usePosterForm = ({ initialImageUrl = "", editMode = false, posterId, onSuccess }: UsePosterFormProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize form
  const form = useForm<PosterFormValues>({
    resolver: zodResolver(posterFormSchema),
    defaultValues: {
      title: "",
      category: "albums",
      subcategory: undefined,
      priceA4: "",
      priceA3: "",
      imageUrl: initialImageUrl,
    },
  });

  // Handle selecting a preview image
  const handleSelectPreviewImage = (imageUrl: string) => {
    console.log("Setting form image URL to:", imageUrl);
    form.setValue("imageUrl", imageUrl);
  };

  // Handle form submission
  const onSubmit = async (data: PosterFormValues) => {
    try {
      setIsSubmitting(true);
      console.log("Submitting form data:", data);
      
      // Format prices with ₹ if not included
      const formattedPriceA4 = data.priceA4.startsWith("₹") || data.priceA4.startsWith("$")
        ? data.priceA4 
        : `₹${data.priceA4}`;
      
      // Set default A3 price based on category and subcategory
      let defaultA3Price = "";
      if (data.category === "movies" && (data.subcategory === "dc" || data.subcategory === "marvel")) {
        defaultA3Price = "₹109";
      } else {
        // For other categories, default to A4 price + 30
        const a4Price = parseInt(data.priceA4.replace(/[^\d]/g, ''));
        defaultA3Price = a4Price ? `₹${a4Price + 30}` : formattedPriceA4;
      }
      
      const formattedPriceA3 = data.priceA3 && data.priceA3.length > 0
        ? (data.priceA3.startsWith("₹") || data.priceA3.startsWith("$") ? data.priceA3 : `₹${data.priceA3}`)
        : defaultA3Price;
      
      // Make sure we have a valid image URL that's accessible
      let imageUrl = data.imageUrl;
      console.log("Processing image URL:", imageUrl);
      
      // If the image is a blob URL (from a file input), we need to handle it differently
      if (imageUrl.startsWith('blob:')) {
        try {
          const response = await fetch(imageUrl);
          const blob = await response.blob();
          const fileName = `poster_${Date.now()}.${blob.type.split('/')[1] || 'png'}`;
          
          // Check if Supabase is available and try to upload
          if (supabase) {
            try {
              // Check if storage bucket exists first
              const { data: bucketData } = await supabase.storage.getBuckets();
              let bucketExists = false;
              
              if (bucketData) {
                bucketExists = bucketData.some(bucket => bucket.name === 'posters');
              }
              
              if (bucketExists) {
                const { data: uploadData, error: uploadError } = await supabase.storage
                  .from('posters')
                  .upload(`poster_images/${fileName}`, blob);
                  
                if (!uploadError && uploadData) {
                  const { data: publicUrlData } = supabase.storage
                    .from('posters')
                    .getPublicUrl(`poster_images/${fileName}`);
                    
                  if (publicUrlData) {
                    imageUrl = publicUrlData.publicUrl;
                    console.log("Uploaded to Supabase, new URL:", imageUrl);
                  }
                } else {
                  console.error("Error uploading to Supabase:", uploadError);
                }
              } else {
                console.log("Storage bucket 'posters' doesn't exist, using blob URL");
              }
            } catch (uploadErr) {
              console.error("Supabase upload error:", uploadErr);
            }
          }
        } catch (err) {
          console.error("Error processing blob URL:", err);
        }
      }
      
      // Use a placeholder if the path is local or invalid
      if (!imageUrl || 
          (imageUrl.includes(":\\") || 
          (imageUrl.includes("/") && 
           !imageUrl.startsWith("http") && 
           !imageUrl.startsWith("/lovable-uploads") &&
           !imageUrl.startsWith("/") &&
           !imageUrl.startsWith("blob:")))) {
        console.log("Invalid image path detected, using placeholder");
        imageUrl = "/placeholder.svg";
      } else {
        // Ensure the image starts with the proper path
        if (!imageUrl.startsWith('/lovable-uploads/') && 
            !imageUrl.startsWith('http') &&
            !imageUrl.startsWith('blob:')) {
          imageUrl = `/lovable-uploads/${imageUrl.split('/').pop()}`;
          console.log("Fixed image path:", imageUrl);
        }
      }
      
      // Create new poster object
      const newPoster = {
        id: editMode && posterId ? posterId : Date.now(), // Generate unique ID
        title: data.title,
        category: data.category,
        subcategory: data.subcategory,
        image: imageUrl,
        sizes: {
          A4: formattedPriceA4,
          A3: formattedPriceA3,
        },
        cartAvailable: true
      };
      
      console.log("Creating poster object:", newPoster);
      
      // Try to store in local storage
      // Get existing posters from localStorage or initialize empty array
      const existingPostersString = localStorage.getItem("posters");
      const existingPosters = existingPostersString ? JSON.parse(existingPostersString) : [];
      
      console.log("Existing posters:", existingPosters);
      
      let updatedPosters;
      if (editMode && posterId) {
        // If editing, replace the existing poster
        updatedPosters = existingPosters.map((poster: any) => 
          poster.id === posterId ? newPoster : poster
        );
      } else {
        // Add new poster to array
        updatedPosters = [...existingPosters, newPoster];
      }
      
      console.log("Updated posters:", updatedPosters);
      
      // Save updated posters back to localStorage
      localStorage.setItem("posters", JSON.stringify(updatedPosters));
      
      // Show toast notification
      toast({
        title: editMode ? "Poster Updated!" : "Success!",
        description: editMode 
          ? "Your poster has been updated." 
          : "New poster has been added to your collection.",
      });

      sonnerToast.success(editMode ? "Poster Updated!" : "Poster Added!", {
        description: editMode 
          ? "Your poster has been updated successfully" 
          : "Your new poster has been added to the collection",
      });

      if (onSuccess) {
        onSuccess();
      }

      // Navigate to the admin dashboard after successful submission
      navigate("/admin/dashboard");
      
    } catch (error) {
      console.error("Error adding poster:", error);
      toast({
        title: "Error",
        description: "Failed to add new poster.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    onSubmit,
    handleSelectPreviewImage,
    isSubmitting
  };
};
