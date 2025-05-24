import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const PosterFinder = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [activeTab, setActiveTab] = useState('name');

  const handleNameSearch = () => {
    if (!searchTerm.trim()) return;
    
    const message = `Hello! I would like to find a poster named "${searchTerm}"`;
    const phoneNumber = '+91 9502869924';
    const encodedMessage = encodeURIComponent(message);
    const formattedNumber = phoneNumber.replace(/\s+/g, '');
    const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePriceSearch = () => {
    if (!minPrice && !maxPrice) return;
    
    const priceRange = `${minPrice || '0'} - ${maxPrice || 'any'}`;
    const message = `Hello! I'm looking for posters in the price range of ₹${priceRange}`;
    const phoneNumber = '+91 9502869924';
    const encodedMessage = encodeURIComponent(message);
    const formattedNumber = phoneNumber.replace(/\s+/g, '');
    const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleKeyPress = (e: React.KeyboardEvent, searchType: 'name' | 'price') => {
    if (e.key === 'Enter') {
      if (searchType === 'name') {
        handleNameSearch();
      } else {
        handlePriceSearch();
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto mb-12"
    >
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="name">Search by Name</TabsTrigger>
          <TabsTrigger value="price">Search by Price</TabsTrigger>
        </TabsList>

        <TabsContent value="name" className="mt-0">
          <div className="flex gap-2">
            <Input
              placeholder="Enter poster name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => handleKeyPress(e, 'name')}
              className="flex-1"
            />
            <Button
              onClick={handleNameSearch}
              className="bg-gradient-to-r from-indigo-600 to-pink-500 min-w-[100px]"
            >
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="price" className="mt-0">
          <div className="flex gap-2">
            <Input
              type="number"
              placeholder="Min price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              onKeyPress={(e) => handleKeyPress(e, 'price')}
              className="flex-1"
            />
            <Input
              type="number"
              placeholder="Max price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              onKeyPress={(e) => handleKeyPress(e, 'price')}
              className="flex-1"
            />
            <Button
              onClick={handlePriceSearch}
              className="bg-gradient-to-r from-indigo-600 to-pink-500 min-w-[100px]"
            >
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};