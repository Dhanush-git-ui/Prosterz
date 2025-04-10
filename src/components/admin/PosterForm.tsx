
import React, { useEffect, useState } from "react";
import { Form } from "@/components/ui/form";
import { BasicInfoFields } from "./form/BasicInfoFields";
import { CategoryFields } from "./form/CategoryFields";
import { PriceFields } from "./form/PriceFields";
import { ImageUrlField } from "./form/ImageUrlField";
import { FormActions } from "./form/FormActions";
import { usePosterForm } from "./hooks/usePosterForm";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

interface PosterFormProps {
  previewImages: string[];
  initialImageUrl?: string;
  editMode?: boolean;
  posterId?: number;
  initialValues?: {
    title: string;
    category: string;
    subcategory?: string;
    priceA4: string;
    priceA3: string;
  };
  onSuccess?: () => void;
}

export const PosterForm = ({ 
  previewImages, 
  initialImageUrl = "", 
  editMode = false,
  posterId,
  initialValues,
  onSuccess
}: PosterFormProps) => {
  // Track uploaded image state
  const [uploadedImage, setUploadedImage] = useState<string | null>(initialImageUrl || null);
  
  // Use form hook for all the form logic
  const { form, onSubmit, handleSelectPreviewImage, isSubmitting } = usePosterForm({ 
    initialImageUrl: uploadedImage || initialImageUrl,
    editMode,
    posterId,
    onSuccess
  });
  
  const navigate = useNavigate();

  // Set initial values if in edit mode
  useEffect(() => {
    if (editMode && initialValues) {
      console.log("Setting initial form values:", initialValues);
      console.log("Initial image URL:", initialImageUrl);
      
      form.reset({
        title: initialValues.title,
        category: initialValues.category,
        subcategory: initialValues.subcategory as any,
        priceA4: initialValues.priceA4,
        priceA3: initialValues.priceA3,
        imageUrl: initialImageUrl,
      });
    } else if (uploadedImage) {
      // If we have an uploaded image URL, set it
      console.log("Setting uploaded image URL:", uploadedImage);
      form.setValue("imageUrl", uploadedImage);
    }
  }, [editMode, initialValues, initialImageUrl, form, uploadedImage]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if image URL is selected
    const imageUrl = form.getValues("imageUrl");
    if (!imageUrl || imageUrl.trim() === "") {
      toast.error("Please select an image for your poster");
      return;
    }
    
    try {
      console.log("Form submission - current values:", form.getValues());
      await form.handleSubmit(onSubmit)(e);
      if (!editMode) {
        toast.success("Poster added successfully!");
        navigate("/admin/dashboard");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to save poster. Please try again.");
    }
  };
  
  // Handler for image uploads
  const handleImageUploaded = (imageUrl: string) => {
    console.log("Image uploaded:", imageUrl);
    setUploadedImage(imageUrl);
    form.setValue("imageUrl", imageUrl);
  };
  
  return (
    <Form {...form}>
      <form onSubmit={handleFormSubmit} className="space-y-6">
        {/* Title field */}
        <BasicInfoFields control={form.control} />
        
        {/* Category fields - pass watch and setValue for dynamic subcategory */}
        <CategoryFields 
          control={form.control} 
          watch={form.watch} 
          setValue={form.setValue} 
        />
        
        {/* Price fields */}
        <PriceFields control={form.control} />
        
        {/* Image selection grid */}
        <ImageUrlField 
          control={form.control}
          getValues={form.getValues}
          setValue={form.setValue}
          previewImages={previewImages}
          onSelectImage={handleSelectPreviewImage}
          uploadedImage={uploadedImage}
        />

        {/* Form actions */}
        <FormActions 
          isSubmitting={isSubmitting} 
          isEditMode={editMode} 
          onSave={form.handleSubmit(onSubmit)}
        />
      </form>
    </Form>
  );
};
