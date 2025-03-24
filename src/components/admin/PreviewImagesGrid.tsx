
import React from "react";
import { motion } from "framer-motion";

interface PreviewImagesGridProps {
  images: string[];
  selectedImage: string;
  onSelectImage: (imageUrl: string) => void;
}

export const PreviewImagesGrid = ({ 
  images, 
  selectedImage, 
  onSelectImage 
}: PreviewImagesGridProps) => {
  return (
    <div className="grid grid-cols-3 gap-3 mt-2">
      {images.map((img, index) => (
        <motion.div 
          key={index}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`cursor-pointer border-2 rounded-md overflow-hidden ${
            selectedImage === img ? "border-indigo-500" : "border-gray-200"
          }`}
          onClick={() => onSelectImage(img)}
        >
          <img 
            src={img} 
            alt={`Preview ${index + 1}`} 
            className="w-full h-24 object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
};
