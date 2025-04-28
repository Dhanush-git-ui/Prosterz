import React from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export const Cart: React.FC = () => {
  const { cartItems, removeFromCart, clearCart, sendToWhatsApp } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
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
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center p-4 border rounded">
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-600">
                ${item.price.toFixed(2)} x {item.quantity}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <p className="font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => removeFromCart(item.id)}
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