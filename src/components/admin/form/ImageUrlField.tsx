
import React from "react";
import { Control, UseFormGetValues, UseFormSetValue } from "react-hook-form";
import { PreviewImagesGrid } from "../PreviewImagesGrid";
import { PosterFormValues } from "./PosterFormSchema";

interface ImageUrlFieldProps {
  control: Control<PosterFormValues>;
  getValues: UseFormGetValues<PosterFormValues>;
  setValue: UseFormSetValue<PosterFormValues>;
  previewImages: string[];
  onSelectImage: (imageUrl: string) => void;
}

export const ImageUrlField = ({ 
  getValues, 
  setValue,
  previewImages, 
  onSelectImage 
}: ImageUrlFieldProps) => {
  return (
    <div className="mt-6">
      <h3 className="text-sm font-medium text-gray-700 mb-3">Select an image for your poster:</h3>
      <PreviewImagesGrid 
        images={previewImages} 
        selectedImage={getValues("imageUrl")}
        onSelectImage={onSelectImage}
      />
    </div>
  );
};
