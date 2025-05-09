
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart as CartIcon, X, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

export const ShoppingCart: React.FC = () => {
  const { items, removeFromCart, cartOpen, setCartOpen, totalAmount, sendToWhatsApp } = useCart();
  const isMobile = useIsMobile();

  return (
    <>
      {/* Cart Icon */}
      <motion.button
        className="fixed bottom-8 right-8 z-50 p-3 md:p-4 bg-gradient-to-r from-indigo-600 to-pink-500 rounded-full shadow-lg flex items-center justify-center"
        onClick={() => setCartOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <CartIcon className="text-white" size={isMobile ? 20 : 24} />
        {items.length > 0 && (
          <span className="absolute top-0 right-0 bg-white text-indigo-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
            {items.length}
          </span>
        )}
      </motion.button>

      {/* Cart Drawer */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-xl z-50 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="p-3 md:p-4 border-b flex items-center justify-between">
                <h2 className="text-lg md:text-xl font-semibold">Your Cart</h2>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setCartOpen(false)}
                >
                  <X size={isMobile ? 18 : 20} />
                </Button>
              </div>
              
              <div className="flex-1 overflow-auto p-3 md:p-4">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-gray-500">
                    <CartIcon size={isMobile ? 36 : 48} className="mb-3 md:mb-4 opacity-30" />
                    <p>Your cart is empty</p>
                  </div>
                ) : (
                  <ul className="space-y-3">
                    {items.map((item, index) => (
                      <motion.li 
                        key={`${item.poster.id}-${index}`}
                        className="flex gap-3 md:gap-4 bg-gray-50 p-2 md:p-3 rounded-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <img 
                          src={item.poster.image} 
                          alt={item.poster.title}
                          className="w-14 h-16 md:w-16 md:h-20 object-cover rounded"
                        />
                        <div className="flex-1 text-sm md:text-base">
                          <h3 className="font-medium line-clamp-1">{item.poster.title}</h3>
                          <p className="text-xs md:text-sm text-gray-500">Size: {item.size}</p>
                          <p className="font-semibold">₹{item.price.replace('$', '')}</p>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => removeFromCart(index)}
                          className="self-start h-6 w-6 md:h-8 md:w-8"
                        >
                          <Trash2 size={isMobile ? 14 : 16} className="text-red-500" />
                        </Button>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>
              
              <div className="p-3 md:p-4 border-t">
                <div className="flex justify-between mb-3 md:mb-4">
                  <span className="font-medium">Total:</span>
                  <span className="font-bold">₹{totalAmount.toFixed(2)}</span>
                </div>
                
                <Button 
                  onClick={sendToWhatsApp}
                  disabled={items.length === 0}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-2 rounded-lg flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <span>Order Now via WhatsApp</span>
                  <ArrowRight size={isMobile ? 14 : 16} />
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
