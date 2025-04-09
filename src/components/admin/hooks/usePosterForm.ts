
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { posterFormSchema, PosterFormValues } from "../form/PosterFormSchema";
import { toast as sonnerToast } from "sonner";

interface UsePosterFormProps {
  initialImageUrl?: string;
  editMode?: boolean;
  posterId?: number;
}

export const usePosterForm = ({ initialImageUrl = "", editMode = false, posterId }: UsePosterFormProps) => {
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

  // Handle form submission
  const onSubmit = async (data: PosterFormValues) => {
    try {
      setIsSubmitting(true);
      
      // Format prices with ₹ if not included
      const formattedPriceA4 = data.priceA4.startsWith("₹") || data.priceA4.startsWith("$")
        ? data.priceA4 
        : `₹${data.priceA4}`;
      
      // Set default A3 price based on category and subcategory
      let defaultA3Price = "";
      if (data.category === "movies" && (data.subcategory === "dc" || data.subcategory === "marvel")) {
        defaultA3Price = "₹109";
      } else {
        // For other categories, default to A4 price
        defaultA3Price = formattedPriceA4;
      }
      
      const formattedPriceA3 = data.priceA3 && data.priceA3.length > 0
        ? (data.priceA3.startsWith("₹") || data.priceA3.startsWith("$") ? data.priceA3 : `₹${data.priceA3}`)
        : defaultA3Price;
      
      // Process local file path if needed
      let imageUrl = data.imageUrl;
      if (imageUrl.includes(":\\")) {
        // This is where you would handle local file paths
        // For now, we'll just use it as is, but in a production app,
        // this would need to be handled differently
        console.log("Using local file path:", imageUrl);
        // In a real application, you'd upload this file to a server
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
      
      // Get existing posters from localStorage or initialize empty array
      const existingPosters = JSON.parse(localStorage.getItem("posters") || "[]");
      
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

  // Handle selecting a preview image
  const handleSelectPreviewImage = (imageUrl: string) => {
    form.setValue("imageUrl", imageUrl);
  };

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
    handleSelectPreviewImage,
    isSubmitting
  };
};
