
import { motion } from 'framer-motion';
import { WhatsappIcon } from './icons/WhatsappIcon';

export const WhatsAppButton = () => {
  const phoneNumber = '7995902773';
  const message = encodeURIComponent('Hello, I would like to inquire about your posters.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-8 z-50 p-3 bg-green-500 rounded-full shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <WhatsappIcon className="text-white" size={28} />
    </motion.a>
  );
};
