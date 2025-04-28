import React, { createContext, useContext, useState, ReactNode } from 'react';

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

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (item: CartItem) => {
    setItems(prevItems => [...prevItems, item]);
    setCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    setItems(prevItems => prevItems.filter((_, i) => i !== index));
  };

  const totalAmount = items.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0);

  const sendToWhatsApp = () => {
    const phoneNumber = '919502869924';
    const itemsList = items.map(item => 
      `${item.poster.title} (${item.size}) - ₹${item.price.replace('$', '')}`
    ).join('\n');
    const message = `Hello, I would like to place an order for:\n\n${itemsList}\n\nTotal: ₹${totalAmount.toFixed(2)}`;
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, cartOpen, setCartOpen, totalAmount, sendToWhatsApp }}>
      {children}
    </CartContext.Provider>
  );
};
