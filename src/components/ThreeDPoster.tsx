
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const ThreeDPoster = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const posterRef = useRef<HTMLDivElement>(null);
  const [elementCenter, setElementCenter] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const updateElementPosition = () => {
      if (posterRef.current) {
        const rect = posterRef.current.getBoundingClientRect();
        setElementCenter({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        });
      }
    };
    
    updateElementPosition();
    window.addEventListener('resize', updateElementPosition);
    window.addEventListener('scroll', updateElementPosition);
    
    return () => {
      window.removeEventListener('resize', updateElementPosition);
      window.removeEventListener('scroll', updateElementPosition);
    };
  }, []);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  
  const calculateRotation = () => {
    if (!elementCenter) return { x: 0, y: 0 };
    
    // Calculate the distance from mouse to center
    const deltaX = mousePosition.x - elementCenter.x;
    const deltaY = mousePosition.y - elementCenter.y;
    
    // Normalize the rotation (less extreme)
    const rotateY = deltaX * 0.03; // Horizontal rotation
    const rotateX = -deltaY * 0.03; // Vertical rotation (inverted)
    
    return { x: rotateX, y: rotateY };
  };
  
  const rotation = calculateRotation();
  
  return (
    <div 
      className="py-10 max-w-lg mx-auto"
      onMouseMove={handleMouseMove}
      ref={posterRef}
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-800">Featured Poster</h2>
        <p className="text-gray-600">Move your mouse to see the 3D effect</p>
      </motion.div>
      
      <motion.div
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d"
        }}
        className="relative w-full h-[450px] bg-white rounded-xl shadow-xl"
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
          mass: 0.5
        }}
      >
        <div className="absolute inset-2 rounded-lg overflow-hidden bg-gradient-to-br from-indigo-500 to-pink-500">
          <img 
            src="/lovable-uploads/1c9f001d-6edf-48a9-9fd6-203e81e21c29.png" 
            alt="Featured Poster" 
            className="w-full h-full object-cover opacity-90 mix-blend-overlay"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center p-4 bg-black/30 backdrop-blur-sm rounded-lg">
              <h3 className="text-3xl font-bold mb-2">Premium Collection</h3>
              <p className="text-lg">Exclusive designs for your space</p>
            </div>
          </div>
        </div>
        
        {/* Reflection effect */}
        <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-10"></div>
        </div>
      </motion.div>
    </div>
  );
};
