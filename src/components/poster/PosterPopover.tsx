
import { motion } from "framer-motion";
import { X } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Poster } from "@/data/posters";

interface PosterPopoverProps {
  poster: Poster;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onAddToCart: (poster: Poster) => void;
}

export const PosterPopover = ({ 
  poster, 
  isOpen, 
  onOpenChange, 
  onAddToCart 
}: PosterPopoverProps) => {
  return (
    <Popover open={isOpen} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <motion.button 
          className="px-6 py-2 bg-white text-gray-900 font-medium rounded-full transform transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Quick View
        </motion.button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" side="bottom">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="rounded-md overflow-hidden"
        >
          <div className="relative">
            <img 
              src={poster.image} 
              alt={poster.title} 
              className="w-full h-48 object-cover"
            />
            <button 
              onClick={() => onOpenChange(false)}
              className="absolute top-2 right-2 bg-white rounded-full p-1 hover:bg-gray-100"
            >
              <X size={16} className="text-gray-700" />
            </button>
          </div>
          <div className="p-4 bg-white">
            <h3 className="font-medium text-lg">{poster.title}</h3>
            <p className="text-gray-600 mb-2">Category: {poster.category}</p>
            <div className="flex justify-between items-center mt-3">
              <p className="text-gray-900 font-bold">{poster.price}</p>
              <motion.button
                onClick={() => onAddToCart(poster)}
                className="px-4 py-1.5 bg-gradient-to-r from-indigo-600 to-pink-500 text-white text-sm rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Add to Cart
              </motion.button>
            </div>
          </div>
        </motion.div>
      </PopoverContent>
    </Popover>
  );
};
