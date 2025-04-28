import React from 'react';
import { Button } from '@/components/ui/button';
import { CartButton } from './CartButton';

export const Navbar: React.FC = () => {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">Prosterz</h1>
          <div className="hidden md:flex space-x-4">
            <Button variant="ghost">Albums</Button>
            <Button variant="ghost">Sneakers</Button>
            <Button variant="ghost">Sports</Button>
            <Button variant="ghost">Movies</Button>
            <Button variant="ghost">Marvel</Button>
            <Button variant="ghost">DC Comics</Button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <CartButton />
          <Button variant="default">Sign In with Instagram</Button>
        </div>
      </div>
    </nav>
  );
};