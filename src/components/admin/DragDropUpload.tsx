
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Upload, Image, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { toast as sonnerToast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface DragDropUploadProps {
  onImageUploaded: (imageUrl: string) => void;
  initialImage?: string;
}

export const DragDropUpload = ({ onImageUploaded, initialImage }: DragDropUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(initialImage || null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (initialImage) {
      setUploadedImage(initialImage);
    }
  }, [initialImage]);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

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
      
      // Check if Supabase is connected
      if (supabase) {
        // Try to upload to Supabase storage
        try {
          // Check if the posters bucket exists, create if not
          const { data: buckets } = await supabase.storage.listBuckets();
          const postersBucket = buckets?.find(bucket => bucket.name === 'posters');
          
          if (!postersBucket) {
            // If storage is not set up, fall back to local URL
            console.log("Supabase storage not configured, using local URL");
            useLocalUrl();
            return;
          }
          
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
        // If Supabase is not connected, use local URL
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

  const uploadingContent = (
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mb-2"></div>
      <p className="text-gray-500">Uploading your image...</p>
    </div>
  );

  return (
    <div className="mb-6">
      <div
        onClick={handleFileClick}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`
          border-2 border-dashed rounded-lg p-6 transition-colors duration-200 
          cursor-pointer flex flex-col items-center justify-center min-h-[200px]
          ${isDragging ? "border-indigo-500 bg-indigo-50" : "border-gray-300 hover:border-indigo-400 hover:bg-gray-50"}
          ${uploadedImage ? "border-green-500 bg-green-50" : ""}
        `}
      >
        {isUploading ? (
          uploadingContent
        ) : !uploadedImage ? (
          <>
            <Upload className={`h-12 w-12 mb-2 ${isDragging ? "text-indigo-500" : "text-gray-400"}`} />
            <p className="text-center text-gray-500 mb-1">
              {isDragging ? "Drop your image here" : "Drag and drop your poster image here"}
            </p>
            <p className="text-center text-gray-400 text-sm">or click to browse</p>
          </>
        ) : (
          <div className="flex flex-col items-center">
            <div className="relative mb-2">
              <img 
                src={uploadedImage} 
                alt="Uploaded poster" 
                className="h-32 object-contain rounded"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder.svg"; 
                  console.log("Error loading image, using placeholder");
                }}
              />
              <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1">
                <Check className="h-4 w-4 text-white" />
              </div>
            </div>
            <p className="text-green-600 font-medium">Image uploaded successfully!</p>
            <p className="text-gray-400 text-sm">Click to upload a different image</p>
          </div>
        )}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />
      </div>
    </div>
  );
};
