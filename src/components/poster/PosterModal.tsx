
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, X } from "lucide-react";
import { Poster } from "@/data/posters";
import { DialogContent, DialogOverlay, Dialog } from "@/components/ui/dialog";

interface PosterModalProps {
  poster: Poster;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (poster: Poster) => void;
}

export const PosterModal = ({ 
  poster, 
  isOpen, 
  onClose, 
  onAddToCart 
}: PosterModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <AnimatePresence>
        {isOpen && (
          <DialogContent className="w-full max-w-6xl p-0 bg-transparent border-none shadow-none h-[90vh]" onPointerDownOutside={onClose}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full flex flex-col md:flex-row bg-white rounded-lg overflow-hidden"
            >
              <div className="relative w-full md:w-3/4 bg-gray-100 h-full">
                <motion.img 
                  src={poster.image} 
                  alt={poster.title} 
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                />
                <button 
                  onClick={onClose}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-10"
                >
                  <X size={24} className="text-gray-700" />
                </button>
              </div>

              <div className="w-full md:w-1/4 p-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">{poster.title}</h2>
                  <p className="text-gray-600">Category: {poster.category}</p>
                  
                  <div className="space-y-3 mt-6">
                    <h3 className="text-lg font-medium">Available Sizes:</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">A4</span>
                          <span className="text-sm text-gray-500">(210 × 297 mm)</span>
                        </div>
                        <span className="font-semibold">₹{poster.sizes.A4.replace('$', '')}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">A3</span>
                          <span className="text-sm text-gray-500">(297 × 420 mm)</span>
                        </div>
                        <span className="font-semibold">₹{poster.sizes.A3.replace('$', '')}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <motion.button
                    onClick={() => onAddToCart(poster)}
                    className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-medium rounded-full flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ShoppingCart size={18} />
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
};
