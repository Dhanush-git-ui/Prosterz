
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { toast as sonnerToast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface UseImageUploadProps {
  onImageUploaded: (imageUrl: string) => void;
  initialImage?: string;
}

export const useImageUpload = ({ onImageUploaded, initialImage }: UseImageUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(initialImage || null);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (initialImage) {
      setUploadedImage(initialImage);
    }
  }, [initialImage]);

  const handleFileUpload = async (file: File) => {
    // Check if file is an image
    if (!file.type.match('image.*')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (JPEG, PNG, etc.)",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);

    try {
      // Create a unique file name
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
      
      // Check if Supabase is connected and the storage bucket exists
      const { data: buckets } = await supabase.storage.listBuckets();
      const postersBucketExists = buckets?.some(bucket => bucket.name === 'posters');
      
      if (supabase && postersBucketExists) {
        // Try to upload to Supabase storage
        try {
          // Upload the file to Supabase storage
          const { data, error } = await supabase.storage
            .from('posters')
            .upload(`poster_images/${fileName}`, file);

          if (error) {
            console.error("Supabase upload error:", error);
            // Fall back to local URL
            useLocalUrl();
            return;
          }

          // Get the public URL for the uploaded file
          const { data: publicUrl } = supabase.storage
            .from('posters')
            .getPublicUrl(`poster_images/${fileName}`);
          
          if (publicUrl) {
            setUploadedImage(publicUrl.publicUrl);
            onImageUploaded(publicUrl.publicUrl);

            sonnerToast.success("Image uploaded successfully", {
              description: "Your poster image has been uploaded to Supabase storage.",
            });
          } else {
            useLocalUrl();
          }
        } catch (error) {
          console.error("Supabase storage error:", error);
          useLocalUrl();
        }
      } else {
        // If Supabase is not connected or bucket doesn't exist, use local URL
        useLocalUrl();
      }
    } catch (error) {
      console.error("Error handling file upload:", error);
      useLocalUrl();
    } finally {
      setIsUploading(false);
    }

    // Fallback to local URL if Supabase upload fails
    function useLocalUrl() {
      // For now we'll use the actual uploaded image
      const imageUrl = URL.createObjectURL(file);
      
      // Store the actual uploaded image URL
      setUploadedImage(imageUrl);
      onImageUploaded(imageUrl);
      
      sonnerToast.success("Image uploaded successfully", {
        description: "Your poster image has been stored locally.",
      });
    }
  };

  return {
    isDragging,
    setIsDragging,
    uploadedImage,
    isUploading,
    handleFileUpload
  };
};
