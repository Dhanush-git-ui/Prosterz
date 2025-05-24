import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const PosterFinder = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    
    const message = `Hello! I would like to find a poster named "${searchTerm}"`;
    const phoneNumber = '+91 9502869924';
    const encodedMessage = encodeURIComponent(message);
    const formattedNumber = phoneNumber.replace(/\s+/g, '');
    const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto mb-12"
    >
      <div className="relative flex gap-2">
        <Input
          placeholder="Search for a poster..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          className="pr-10"
        />
        <Button
          onClick={handleSearch}
          className="bg-gradient-to-r from-indigo-600 to-pink-500 min-w-[100px]"
        >
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
      </div>
    </motion.div>
  );
};