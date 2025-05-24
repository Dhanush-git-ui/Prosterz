import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, DollarSign } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { defaultPosters } from '@/data/posters';

export const PosterFinder = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [searchMode, setSearchMode] = useState<'name' | 'price'>('name');

  const handleSearch = () => {
    let message = 'Hello! I would like to find ';
    
    if (searchMode === 'name') {
      message += `a poster named "${searchTerm}"`;
    } else {
      message += `posters between ₹${minPrice} and ₹${maxPrice}`;
    }

    const phoneNumber = '+91 9502869924';
    const encodedMessage = encodeURIComponent(message);
    const formattedNumber = phoneNumber.replace(/\s+/g, '');
    const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto mb-12"
    >
      <h3 className="text-xl font-semibold mb-4">Find Your Perfect Poster</h3>
      
      <div className="flex gap-2 mb-4">
        <Button
          variant={searchMode === 'name' ? 'default' : 'outline'}
          onClick={() => setSearchMode('name')}
          className="flex-1"
        >
          Search by Name
        </Button>
        <Button
          variant={searchMode === 'price' ? 'default' : 'outline'}
          onClick={() => setSearchMode('price')}
          className="flex-1"
        >
          Search by Price
        </Button>
      </div>

      {searchMode === 'name' ? (
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Enter poster name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      ) : (
        <div className="flex gap-2">
          <div className="relative flex-1">
            <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              type="number"
              placeholder="Min price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="relative flex-1">
            <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              type="number"
              placeholder="Max price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      )}

      <Button
        onClick={handleSearch}
        className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-pink-500"
      >
        <Search className="mr-2 h-4 w-4" />
        Find Poster
      </Button>
    </motion.div>
  );
};