
import React from "react";
import { Check } from "lucide-react";

interface UploadedPreviewProps {
  imageUrl: string;
}

export const UploadedPreview: React.FC<UploadedPreviewProps> = ({ imageUrl }) => (
  <div className="flex flex-col items-center">
    <div className="relative mb-2">
      <img 
        src={imageUrl} 
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
);
