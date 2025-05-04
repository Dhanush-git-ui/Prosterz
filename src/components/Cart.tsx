
import React from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';

export const Cart: React.FC = () => {
  const { items, removeFromCart, clearCart, sendToWhatsApp } = useCart();
  const isMobile = useIsMobile();
  
  const total = items.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0);

  if (items.length === 0) {
    return (
      <Card className="p-4 md:p-6 text-center">
        <p className="text-gray-500">Your cart is empty</p>
      </Card>
    );
  }

  return (
    <Card className="p-4 md:p-6">
      <h2 className="text-xl md:text-2xl font-bold mb-4">Your Cart</h2>
      <div className="space-y-3 md:space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center p-3 md:p-4 border rounded text-sm md:text-base">
            <div className="flex-grow mr-2">
              <h3 className="font-semibold line-clamp-1">{item.poster.title}</h3>
              <p className="text-gray-600 text-xs md:text-sm">
                {item.price} - {item.size}
              </p>
            </div>
            <Button
              variant="destructive"
              size={isMobile ? "sm" : "default"}
              onClick={() => removeFromCart(index)}
              className="flex-shrink-0"
            >
              Remove
            </Button>
          </div>
        ))}
      </div>
      <div className="mt-4 md:mt-6 border-t pt-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-base md:text-lg font-semibold">Total:</span>
          <span className="text-base md:text-lg font-bold">₹{total.toFixed(2)}</span>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
          <Button
            variant="outline"
            className="w-full"
            onClick={clearCart}
          >
            Clear Cart
          </Button>
          <Button
            className="w-full"
            onClick={sendToWhatsApp}
          >
            Order via WhatsApp
          </Button>
        </div>
      </div>
    </Card>
  );
};
