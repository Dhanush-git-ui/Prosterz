
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Poster } from '@/data/posters';
import { useToast } from "@/hooks/use-toast";

export interface CartItem {
  poster: Poster;
  size: 'A3' | 'A4';
  price: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (poster: Poster, size: 'A3' | 'A4') => void;
  removeFromCart: (index: number) => void;
  clearCart: () => void;
  totalAmount: number;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  sendToWhatsApp: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const { toast } = useToast();

  const addToCart = (poster: Poster, size: 'A3' | 'A4') => {
    const price = size === 'A3' ? poster.sizes.A3 : poster.sizes.A4;
    setItems(prev => [...prev, { poster, size, price }]);
    toast({
      title: "Added to cart",
      description: `${poster.title} (${size}) has been added to your cart`,
    });
  };

  const removeFromCart = (index: number) => {
    setItems(prev => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalAmount = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', '').replace('₹', ''));
    return sum + price;
  }, 0);

  const sendToWhatsApp = () => {
    if (items.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add some items to your cart first",
        variant: "destructive",
      });
      return;
    }
    
    const phoneNumber = "7995902773";
    let message = "Hello, I'd like to order the following posters:\n\n";
    
    items.forEach((item, index) => {
      const price = item.price.replace('$', '₹');
      message += `${index + 1}. ${item.poster.title} - ${item.size} - ${price}\n`;
    });
    
    message += `\nTotal Amount: ₹${totalAmount.toFixed(2)}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <CartContext.Provider value={{ 
      items, 
      addToCart, 
      removeFromCart, 
      clearCart, 
      totalAmount,
      cartOpen,
      setCartOpen,
      sendToWhatsApp
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
