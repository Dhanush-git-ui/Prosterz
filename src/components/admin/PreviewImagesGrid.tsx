
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 9;
  const totalPages = Math.ceil(images.length / imagesPerPage);
  
  const startIndex = currentPage * imagesPerPage;
  const visibleImages = images.slice(startIndex, startIndex + imagesPerPage);
  
  const goToNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };
  
  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {visibleImages.map((img, index) => (
          <motion.div 
            key={startIndex + index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer border-2 rounded-md overflow-hidden ${
              selectedImage === img ? "border-indigo-500" : "border-gray-200"
            }`}
            onClick={() => onSelectImage(img)}
          >
            <img 
              src={img} 
              alt={`Preview ${startIndex + index + 1}`} 
              className="w-full h-24 object-cover"
            />
          </motion.div>
        ))}
      </div>
      
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-3">
          <button 
            onClick={goToPrevPage} 
            disabled={currentPage === 0}
            className={`p-2 rounded-full ${currentPage === 0 ? 'text-gray-300' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-sm text-gray-500">
            Page {currentPage + 1} of {totalPages}
          </span>
          <button 
            onClick={goToNextPage} 
            disabled={currentPage === totalPages - 1}
            className={`p-2 rounded-full ${currentPage === totalPages - 1 ? 'text-gray-300' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};
