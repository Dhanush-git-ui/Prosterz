
import React from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export const Cart: React.FC = () => {
  const { items, removeFromCart, clearCart, sendToWhatsApp } = useCart();

  const total = items.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0);

  if (items.length === 0) {
    return (
      <Card className="p-6 text-center">
        <p className="text-gray-500">Your cart is empty</p>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center p-4 border rounded">
            <div>
              <h3 className="font-semibold">{item.poster.title}</h3>
              <p className="text-gray-600">
                {item.price} - {item.size}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="destructive"
                size="sm"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">Total:</span>
          <span className="text-lg font-bold">${total.toFixed(2)}</span>
        </div>
        <div className="flex gap-4">
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
