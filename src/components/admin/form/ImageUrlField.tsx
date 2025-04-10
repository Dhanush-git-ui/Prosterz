
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
  uploadedImage?: string | null;
}

export const ImageUrlField = ({ 
  getValues, 
  setValue,
  previewImages, 
  onSelectImage,
  uploadedImage
}: ImageUrlFieldProps) => {
  // If we have an uploaded image and it's not in previewImages, add it
  const allImages = React.useMemo(() => {
    if (uploadedImage && !previewImages.includes(uploadedImage)) {
      return [...previewImages, uploadedImage];
    }
    return previewImages;
  }, [previewImages, uploadedImage]);

  // If we have an uploaded image, ensure it's selected
  React.useEffect(() => {
    if (uploadedImage) {
      setValue("imageUrl", uploadedImage);
      console.log("Setting image URL from upload:", uploadedImage);
    }
  }, [uploadedImage, setValue]);

  return (
    <div className="mt-6">
      <h3 className="text-sm font-medium text-gray-700 mb-3">Select an image for your poster:</h3>
      <PreviewImagesGrid 
        images={allImages} 
        selectedImage={getValues("imageUrl")}
        onSelectImage={(imageUrl) => {
          onSelectImage(imageUrl);
          setValue("imageUrl", imageUrl);
          console.log("Selected image:", imageUrl);
        }}
      />
    </div>
  );
};
