
import { Navbar } from "../components/layout/Navbar";
import { Header } from "../components/layout/Header";
import { PosterGrid } from "../components/PosterGrid";
import { DeliveryForm } from "../components/DeliveryForm";
import { FeaturesSection } from "../components/features/FeaturesSection";
import { Footer } from "../components/layout/Footer";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />
      <Header />

      <main className="w-full">
        <section id="posters" className="py-20 bg-white w-full">
          <div className="container mx-auto px-4 md:px-6 max-w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Collection</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-pink-400 rounded"></div>
            </motion.div>
            <PosterGrid />
          </div>
        </section>

        <FeaturesSection />

        <section id="delivery" className="py-20 bg-gradient-to-br from-indigo-50 to-pink-50 relative overflow-hidden w-full">
          <div className="container mx-auto px-4 md:px-6 max-w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-pink-400 rounded"></div>
              <p className="text-gray-600 mt-4">Get in touch with us through WhatsApp or email.</p>
            </motion.div>
            <DeliveryForm />
          </div>
          
          <motion.div 
            className="absolute right-5 top-1/4 w-24 h-24 opacity-10"
            animate={{ 
              rotate: [0, 360],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 30,
              ease: "linear" 
            }}
          >
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FF0066" d="M48.8,-56.1C61.9,-47.2,70.7,-30.5,74.6,-12.5C78.5,5.6,77.5,24.9,68.1,37.8C58.7,50.8,40.9,57.3,23.6,61.5C6.2,65.7,-10.6,67.5,-29.3,64C-48,60.4,-68.5,51.5,-78.5,35.2C-88.4,18.9,-87.8,-4.8,-79.6,-24.5C-71.4,-44.1,-55.6,-59.6,-39,-67C-22.5,-74.3,-5.2,-73.4,11.2,-69.4C27.6,-65.3,35.7,-65,48.8,-56.1Z" transform="translate(100 100)" />
            </svg>
          </motion.div>
          
          <motion.div 
            className="absolute left-5 bottom-1/4 w-32 h-32 opacity-10"
            animate={{ 
              rotate: [0, -360],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 40,
              ease: "linear" 
            }}
          >
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#8A3FFC" d="M42.8,-65.2C54.9,-56.3,63.6,-43.3,67.4,-29.5C71.3,-15.7,70.3,-1.1,66.6,12.2C62.9,25.5,56.5,37.6,46.4,46.4C36.2,55.1,22.4,60.5,7.7,65.1C-7,69.7,-22.5,73.3,-35.8,69C-49.1,64.6,-60.2,52.3,-67.1,37.9C-74,23.4,-76.6,6.8,-74.4,-9.1C-72.1,-25.1,-65.1,-40.5,-54,-52.9C-42.8,-65.4,-27.4,-75.1,-11.7,-77.2C4,-79.4,20,-74,32.8,-65.2Z" transform="translate(100 100)" />
            </svg>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
