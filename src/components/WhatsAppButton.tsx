import { motion } from 'framer-motion';
import { WhatsappIcon } from './icons/WhatsappIcon';
import { useCart } from '@/context/CartContext';

export const WhatsAppButton = () => {
  const { items, totalAmount } = useCart();
  const phoneNumber = '+91 9502869924';
  
  const handleWhatsAppClick = () => {
    let message = 'Hello, I would like to inquire about your posters.';
    
    if (items.length > 0) {
      message = "Hello, I'd like to order the following posters:\n\n";
      
      items.forEach((item, index) => {
        const price = item.price.replace('$', '₹');
        message += `${index + 1}. ${item.poster.title} - ${item.size} - ${price}\n`;
      });
      
      message += `\nTotal Amount: ₹${totalAmount.toFixed(2)}`;
    }
    
    const encodedMessage = encodeURIComponent(message);
    const formattedNumber = phoneNumber.replace(/\s+/g, '');
    const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-8 right-8 z-50 bg-green-500 rounded-full shadow-lg flex items-center gap-2 px-4 py-3 md:p-3 md:px-3"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <WhatsappIcon className="text-white" size={24} />
      <span className="text-white text-sm font-medium md:hidden">Chat with us</span>
      {items.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
          {items.length}
        </span>
      )}
    </motion.button>
  );
};