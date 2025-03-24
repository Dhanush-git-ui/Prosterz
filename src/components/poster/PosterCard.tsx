
import { useState } from "react";
import { motion } from "framer-motion";
import { Poster } from "@/data/posters";
import { PosterPopover } from "./PosterPopover";

interface PosterCardProps {
  poster: Poster;
  onAddToCart: (poster: Poster) => void;
  openPopoverId: number | null;
  setOpenPopoverId: (id: number | null) => void;
}

export const PosterCard = ({ 
  poster, 
  onAddToCart, 
  openPopoverId,
  setOpenPopoverId 
}: PosterCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative flex flex-col"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <motion.img
          src={poster.image}
          alt={poster.title}
          className="h-full w-full object-cover"
          initial={{ scale: 1 }}
          animate={{ 
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ duration: 0.4 }}
        />
        
        <motion.div 
          className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <PosterPopover 
            poster={poster}
            isOpen={openPopoverId === poster.id}
            onOpenChange={(open) => {
              if (open) {
                setOpenPopoverId(poster.id);
              } else {
                setOpenPopoverId(null);
              }
            }}
            onAddToCart={onAddToCart}
          />
        </motion.div>
      </div>
      
      <div className="mt-4 text-left">
        <h3 className="text-gray-900 font-medium">{poster.title}</h3>
        <div className="flex justify-between items-center mt-1">
          <p className="text-gray-700">{poster.price}</p>
          <motion.button 
            className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onAddToCart(poster)}
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
