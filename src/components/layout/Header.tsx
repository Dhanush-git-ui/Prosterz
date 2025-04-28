
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-24 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-indigo-50 to-pink-50 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 text-left md:text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-gray-800">
            Premium Quality <span className="bg-gradient-to-r from-indigo-600 to-pink-500 text-transparent bg-clip-text">Poster Collection</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
            Discover our curated collection of premium posters featuring iconic albums and legendary sneakers.
          </p>
          <motion.a 
            href="#posters"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-medium rounded-full hover:opacity-90 transition-colors"
          >
            Shop Now
          </motion.a>
        </motion.div>
      </div>
      
      <div className="absolute -bottom-10 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,117.3C672,107,768,117,864,144C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <motion.div 
        className="absolute top-20 right-10 w-16 h-16 rounded-full bg-purple-300 opacity-40"
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-40 left-10 w-20 h-20 rounded-full bg-pink-300 opacity-30"
        animate={{ 
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 7,
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute top-40 left-1/4 w-12 h-12 rounded-full bg-yellow-300 opacity-30"
        animate={{ 
          y: [0, 15, 0],
          x: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut" 
        }}
      />
    </motion.header>
  );
};
