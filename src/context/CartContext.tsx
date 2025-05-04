
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useToast } from '@/hooks/use-toast';

interface CartItem {
  poster: {
    id: string;
    title: string;
    image: string;
  };
  size: string;
  price: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (index: number) => void;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  totalAmount: number;
  sendToWhatsApp: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Resolved the conflicted implementation by merging the two versions
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const { toast } = useToast();

  const addToCart = (item: CartItem) => {
    setItems(prevItems => [...prevItems, item]);
    setCartOpen(true);
    toast({
      title: "Added to cart",
      description: `${item.poster.title} (${item.size}) has been added to your cart`,
    });
  };

  const removeFromCart = (index: number) => {
    setItems(prevItems => prevItems.filter((_, i) => i !== index));
  };

  const totalAmount = items.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0);

  const sendToWhatsApp = () => {
    if (items.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add some items to your cart first",
        variant: "destructive",
      });
      return;
    }
    
    const phoneNumber = "919502869924";
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
      cartOpen, 
      setCartOpen, 
      totalAmount, 
      sendToWhatsApp 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
