
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

export const DeliveryForm = () => {
  const openWhatsApp = () => {
    window.open(`https://wa.me/919502869924`, '_blank');
  };

  const openEmail = () => {
    window.open(`mailto:Prosterzzzz@gmail.com`, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="w-full py-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
      >
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 bg-gradient-to-br from-indigo-500 to-pink-500 p-12 text-white">
            <motion.h3 
              variants={itemVariants}
              className="text-3xl font-bold mb-6"
            >
              Get In Touch
            </motion.h3>
            <motion.p 
              variants={itemVariants}
              className="mb-8 opacity-90"
            >
              Have questions about our posters? Contact us directly through WhatsApp or email.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="mb-6"
            >
              <h4 className="text-xl font-semibold mb-2">Our Hours</h4>
              <p className="opacity-90">Monday - Friday: 9AM - 6PM</p>
              <p className="opacity-90">Saturday: 10AM - 4PM</p>
              <p className="opacity-90">Sunday: Closed</p>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="relative h-40 mt-12 overflow-hidden"
            >
              <div className="absolute w-60 h-60 bg-white/10 rounded-full -bottom-20 -left-20"></div>
              <div className="absolute w-40 h-40 bg-white/10 rounded-full -top-10 right-10"></div>
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/2 p-12">
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold text-gray-800 mb-8"
            >
              Contact Us
            </motion.h3>
            
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openWhatsApp}
              className="flex items-center p-5 bg-green-50 rounded-lg mb-6 cursor-pointer group"
            >
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-600 transition-colors">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                <p className="text-gray-600">+91 9502869924</p>
              </div>
              <motion.div 
                className="ml-auto"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openEmail}
              className="flex items-center p-5 bg-indigo-50 rounded-lg cursor-pointer group"
            >
              <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mr-4 group-hover:bg-indigo-600 transition-colors">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Email</h4>
                <p className="text-gray-600">Prosterzzzz@gmail.com</p>
              </div>
              <motion.div 
                className="ml-auto"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="mt-12 text-center"
            >
              <p className="text-gray-500">We'll get back to you as soon as possible!</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
