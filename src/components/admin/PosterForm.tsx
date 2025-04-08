
import React from "react";
import { Form } from "@/components/ui/form";
import { BasicInfoFields } from "./form/BasicInfoFields";
import { CategoryFields } from "./form/CategoryFields";
import { PriceFields } from "./form/PriceFields";
import { ImageUrlField } from "./form/ImageUrlField";
import { FormActions } from "./form/FormActions";
import { usePosterForm } from "./hooks/usePosterForm";

interface PosterFormProps {
  previewImages: string[];
  initialImageUrl?: string;
}

export const PosterForm = ({ previewImages, initialImageUrl = "" }: PosterFormProps) => {
  // Use form hook for all the form logic
  const { form, onSubmit, handleSelectPreviewImage, isSubmitting } = usePosterForm({ initialImageUrl });
  
  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-6">
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
        
        {/* Image URL field and preview grid */}
        <ImageUrlField 
          control={form.control}
          getValues={form.getValues}
          previewImages={previewImages}
          onSelectImage={handleSelectPreviewImage}
        />

        {/* Form actions */}
        <FormActions isSubmitting={isSubmitting} />
      </form>
    </Form>
  );
};
