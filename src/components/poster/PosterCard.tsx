import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Poster } from "@/data/posters";
import { PosterModal } from "./PosterModal";
import { usePosterData } from "@/hooks/usePosterData";
import { ShoppingCart, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { formatPrice } from "@/lib/pricing";

interface PosterCardProps {
  poster: Poster;
  openPopoverId: number | null;
  setOpenPopoverId: (id: number | null) => void;
}

export const PosterCard = ({ 
  poster, 
  openPopoverId,
  setOpenPopoverId 
}: PosterCardProps) => {
  const { isAdmin, deletePoster } = usePosterData();
  const { toast } = useToast();
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const categoryLabel = poster.subcategory
    ? poster.subcategory.toUpperCase()
    : poster.category.charAt(0).toUpperCase() + poster.category.slice(1);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top;  // y position within the element
    
    // Calculate the rotation based on mouse position
    // Higher numbers for more extreme rotation
    const rotateY = ((x / rect.width) - 0.5) * 35; 
    const rotateX = ((y / rect.height) - 0.5) * -35;
    
    setMousePosition({ x: rotateY, y: rotateX });
  };
  
  const resetMousePosition = () => {
    setMousePosition({ x: 0, y: 0 });
  };
  
  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => {
          setIsHovered(false);
          resetMousePosition();
        }}
        onClick={() => {
          if (window.innerWidth < 768) {
            openModal();
          }
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetMousePosition}
        className="group relative flex flex-col cursor-pointer"
        ref={cardRef}
        style={{ perspective: "1000px" }}
      >
        <motion.div 
          className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 shadow-sm ring-1 ring-gray-200/70 transition-shadow group-hover:shadow-xl"
          animate={{ 
            rotateY: mousePosition.x,
            rotateX: mousePosition.y,
          }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 35,
            mass: 0.4
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.img
            src={poster.image}
            alt={poster.title}
            className="h-full w-full object-cover"
            initial={{ scale: 1 }}
            animate={{ 
              scale: isHovered ? 1.1 : 1,
              z: isHovered ? 20 : 0
            }}
            transition={{ duration: 0.4 }}
            style={{ transformStyle: "preserve-3d" }}
          />
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800 shadow-sm backdrop-blur">
            {categoryLabel}
          </span>
          
          {/* Add shadow and reflection effects */}
          {isHovered && (
            <motion.div 
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-20"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent opacity-20"></div>
            </motion.div>
          )}
          
          <motion.div 
            className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center gap-4 opacity-0 md:group-hover:opacity-100 transition-opacity"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: isHovered ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.button 
              className="px-6 py-3 md:py-2 bg-white text-gray-900 font-medium rounded-full transform transition-transform duration-300 shadow-lg touch-manipulation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(event) => {
                event.stopPropagation();
                openModal();
              }}
            >
              Choose Size
            </motion.button>
            {isAdmin && (
              <motion.button
                className="p-2 bg-red-500 text-white rounded-full transform transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={async (event) => {
                  event.stopPropagation();
                  if (window.confirm('Are you sure you want to delete this poster?')) {
                    const success = await deletePoster(poster.id);
                    if (success) {
                      toast({
                        title: "Poster deleted",
                        description: "The poster has been successfully removed.",
                      });
                    }
                  }
                }}
              >
                <Trash2 size={20} />
              </motion.button>
            )}
          </motion.div>
        </motion.div>
        
        <div className="mt-4 flex items-start justify-between gap-3 text-left">
          <div className="min-w-0">
            <h3 className="truncate text-gray-900 font-semibold">{poster.title}</h3>
            <p className="mt-1 text-sm text-gray-600">From {formatPrice(poster.sizes.A4)}</p>
          </div>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              openModal();
            }}
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-900 text-white shadow-sm transition-colors hover:bg-indigo-600"
            aria-label={`Choose size for ${poster.title}`}
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </motion.div>
      
      <PosterModal 
        poster={poster}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};
