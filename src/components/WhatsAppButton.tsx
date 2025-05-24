import { motion } from 'framer-motion';
import { WhatsappIcon } from './icons/WhatsappIcon';
import { useCart } from '@/context/CartContext';
import { defaultPosters } from '@/data/posters';

export const WhatsAppButton = () => {
  const { items, totalAmount } = useCart();
  const phoneNumber = '+91 9502869924';
  
  const findPosterByName = (name: string) => {
    return defaultPosters.find(poster => 
      poster.title.toLowerCase().includes(name.toLowerCase())
    );
  };

  const findPostersByPriceRange = (min: number, max: number) => {
    return defaultPosters.filter(poster => {
      const priceA4 = parseFloat(poster.sizes.A4.replace(/[₹$]/g, ''));
      return priceA4 >= min && priceA4 <= max;
    });
  };

  const handleWhatsAppClick = () => {
    let message = 'Hello! 👋\n\n';
    message += 'Welcome to Prosterz! How can I help you today?\n\n';
    message += '1. 🔍 Find a specific poster by name\n';
    message += '2. 💰 Find posters within a price range\n';
    message += '3. 🛒 Place an order\n\n';
    
    if (items.length > 0) {
      message += '📌 Your current cart:\n';
      items.forEach((item, index) => {
        const price = item.price.replace('$', '₹');
        message += `${index + 1}. ${item.poster.title} - ${item.size} - ${price}\n`;
      });
      message += `\nTotal Amount: ₹${totalAmount.toFixed(2)}`;
    }

    message += '\n\nReply with your choice (1, 2, or 3) or type your query directly!';
    
    const encodedMessage = encodeURIComponent(message);
    const formattedNumber = phoneNumber.replace(/\s+/g, '');
    const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-24 right-8 z-50 p-3 bg-green-500 rounded-full shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <WhatsappIcon className="text-white" size={28} />
    </motion.button>
  );
};