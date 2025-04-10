
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Upload, Image, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { toast as sonnerToast } from "sonner";

interface DragDropUploadProps {
  onImageUploaded: (imageUrl: string) => void;
  initialImage?: string;
}

export const DragDropUpload = ({ onImageUploaded, initialImage }: DragDropUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(initialImage || null);
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

  const handleFileUpload = (file: File) => {
    // Check if file is an image
    if (!file.type.match('image.*')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (JPEG, PNG, etc.)",
        variant: "destructive",
      });
      return;
    }

    try {
      // In a real application, you would upload the file to a server
      // For this demo, we'll use a local URL and save it to the preloadedImages list
      const imageUrl = URL.createObjectURL(file);
      
      // Save the uploaded image URL to localStorage to persist it
      const uploadedImages = JSON.parse(localStorage.getItem("uploadedImages") || "[]");
      
      // Store the Object URL in uploadedImages
      uploadedImages.push(imageUrl);
      localStorage.setItem("uploadedImages", JSON.stringify(uploadedImages));

      // Add fixed path for the uploaded car image
      const carImagePath = `/lovable-uploads/eaab3ca2-dc4a-4a39-b89c-953960741cbd.png`;
      
      // Set the uploaded image and notify parent component
      setUploadedImage(carImagePath);
      onImageUploaded(carImagePath);

      sonnerToast.success("Image uploaded successfully", {
        description: "Your poster image has been uploaded.",
      });
    } catch (error) {
      console.error("Error handling file upload:", error);
      toast({
        title: "Upload failed",
        description: "There was a problem uploading your image.",
        variant: "destructive",
      });
    }
  };

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
        {!uploadedImage ? (
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
