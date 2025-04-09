import React from "react";
import { Control, UseFormGetValues } from "react-hook-form";
import { ImagePlus, Link } from "lucide-react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PreviewImagesGrid } from "../PreviewImagesGrid";
import { PosterFormValues } from "./PosterFormSchema";

interface ImageUrlFieldProps {
  control: Control<PosterFormValues>;
  getValues: UseFormGetValues<PosterFormValues>;
  previewImages: string[];
  onSelectImage: (imageUrl: string) => void;
}

export const ImageUrlField = ({ 
  control, 
  getValues, 
  previewImages, 
  onSelectImage 
}: ImageUrlFieldProps) => {
  const handleLocalFilePath = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value && value.includes(":\\")) {
      console.log("Local file path entered:", value);
    }
  };

  return (
    <>
      <FormField
        control={control}
        name="imageUrl"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Image URL or Local Path</FormLabel>
            <FormControl>
              <div className="relative">
                <Link className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="https://example.com/image.jpg or C:\path\to\image.jpg" 
                  className="pl-10" 
                  {...field} 
                  onChange={(e) => {
                    field.onChange(e);
                    handleLocalFilePath(e);
                  }}
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="mt-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Or select from available images:</h3>
        <PreviewImagesGrid 
          images={previewImages} 
          selectedImage={getValues("imageUrl")}
          onSelectImage={onSelectImage}
        />
      </div>
    </>
  );
};
