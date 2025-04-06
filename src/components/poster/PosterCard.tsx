
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Poster } from "@/data/posters";
import { PosterModal } from "./PosterModal";

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
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top;  // y position within the element
    
    // Calculate the rotation based on mouse position
    // Higher numbers for more extreme rotation
    const rotateY = ((x / rect.width) - 0.5) * 20; 
    const rotateX = ((y / rect.height) - 0.5) * -20;
    
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
        onMouseMove={handleMouseMove}
        onMouseLeave={resetMousePosition}
        className="group relative flex flex-col"
        ref={cardRef}
        style={{ perspective: "1000px" }}
      >
        <motion.div 
          className="relative aspect-[3/4] overflow-hidden bg-gray-100"
          animate={{ 
            rotateY: mousePosition.x,
            rotateX: mousePosition.y,
          }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 25,
            mass: 0.5
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
            className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: isHovered ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.button 
              className="px-6 py-2 bg-white text-gray-900 font-medium rounded-full transform transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openModal}
            >
              Quick View
            </motion.button>
          </motion.div>
        </motion.div>
        
        <div className="mt-4 text-left">
          <h3 className="text-gray-900 font-medium">{poster.title}</h3>
          <p className="text-gray-700 mt-1">From ₹{poster.sizes.A4.replace('$', '')}</p>
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
