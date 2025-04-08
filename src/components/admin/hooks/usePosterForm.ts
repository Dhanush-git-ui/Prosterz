
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { posterFormSchema, PosterFormValues } from "../form/PosterFormSchema";

interface UsePosterFormProps {
  initialImageUrl?: string;
}

export const usePosterForm = ({ initialImageUrl = "" }: UsePosterFormProps) => {
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
      // Format prices with $ if not included
      const formattedPriceA4 = data.priceA4.startsWith("$") 
        ? data.priceA4 
        : `$${data.priceA4}`;
      
      // Set default A3 price based on category and subcategory
      let defaultA3Price = "";
      if (data.category === "movies" && (data.subcategory === "dc" || data.subcategory === "marvel")) {
        defaultA3Price = "$109";
      } else {
        // For other categories, default to A4 price
        defaultA3Price = formattedPriceA4;
      }
      
      const formattedPriceA3 = data.priceA3 && data.priceA3.length > 0
        ? (data.priceA3.startsWith("$") ? data.priceA3 : `$${data.priceA3}`)
        : defaultA3Price;
      
      // Create new poster object
      const newPoster = {
        id: Date.now(), // Generate unique ID
        title: data.title,
        category: data.category,
        subcategory: data.subcategory,
        image: data.imageUrl,
        sizes: {
          A4: formattedPriceA4,
          A3: formattedPriceA3,
        },
        cartAvailable: true
      };
      
      // Get existing posters from localStorage or initialize empty array
      const existingPosters = JSON.parse(localStorage.getItem("posters") || "[]");
      
      // Add new poster to array
      existingPosters.push(newPoster);
      
      // Save updated posters back to localStorage
      localStorage.setItem("posters", JSON.stringify(existingPosters));
      
      toast({
        title: "Success!",
        description: "New poster has been added.",
      });
      
      // Reset form but stay on the page to allow adding more posters
      form.reset({
        title: "",
        category: "albums",
        subcategory: undefined,
        priceA4: "",
        priceA3: "",
        imageUrl: "",
      });
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
