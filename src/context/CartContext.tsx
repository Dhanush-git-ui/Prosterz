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

<<<<<<< HEAD
export const useCart = (): CartContextType => {
=======
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
    
    const phoneNumber = "9502869924";
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
>>>>>>> origin/main
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
