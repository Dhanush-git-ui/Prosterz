
import { motion } from "framer-motion";
import { PosterGrid } from "../components/PosterGrid";
import { DeliveryForm } from "../components/DeliveryForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 w-full bg-white z-50 shadow-sm"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <motion.img
              src="/lovable-uploads/a637c4db-4417-4d0e-86dd-faa0cdf3ea01.png"
              alt="Prosterz Logo"
              className="w-12 h-12"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
            />
            <h1 className="text-2xl font-bold text-gray-800">Prosterz</h1>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#posters" className="text-gray-700 hover:text-gray-900 font-medium">Posters</a>
            <a href="#delivery" className="text-gray-700 hover:text-gray-900 font-medium">Delivery</a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-gray-100 relative"
      >
        <div className="container mx-auto px-6 text-left md:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
              Premium Quality <span className="bg-gradient-to-r from-indigo-600 to-pink-500 text-transparent bg-clip-text">Poster Collection</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8">
              Discover our curated collection of premium posters featuring iconic cars and legendary popstars.
            </p>
            <motion.a 
              href="#posters"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
            >
              Shop Now
            </motion.a>
          </motion.div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute -bottom-10 left-0 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,117.3C672,107,768,117,864,144C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </motion.header>

      {/* Main Content */}
      <main>
        {/* Poster Collection Section */}
        <section id="posters" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Collection</h2>
              <div className="w-20 h-1 bg-indigo-500 rounded"></div>
            </motion.div>
            <PosterGrid />
          </div>
        </section>

        {/* Delivery Section */}
        <section id="delivery" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Delivery Details</h2>
              <div className="w-20 h-1 bg-indigo-500 rounded"></div>
              <p className="text-gray-600 mt-4">Enter your shipping details to calculate delivery options.</p>
            </motion.div>
            <DeliveryForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <img 
                src="/lovable-uploads/a637c4db-4417-4d0e-86dd-faa0cdf3ea01.png" 
                alt="Prosterz Logo" 
                className="w-10 h-10 inline-block mr-2"
              />
              <span className="text-xl font-bold">Prosterz</span>
              <p className="text-gray-400 mt-2">Premium poster collection</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Shop</h3>
                <ul className="space-y-2">
                  <li><a href="#posters" className="text-gray-400 hover:text-white transition-colors">Cars</a></li>
                  <li><a href="#posters" className="text-gray-400 hover:text-white transition-colors">Popstars</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Info</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#delivery" className="text-gray-400 hover:text-white transition-colors">Delivery</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
            <p>© 2023 Prosterz. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
