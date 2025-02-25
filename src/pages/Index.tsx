
import { motion } from "framer-motion";
import { PosterGrid } from "../components/PosterGrid";
import { DeliveryForm } from "../components/DeliveryForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-20 text-center"
      >
        <motion.img
          src="/lovable-uploads/a637c4db-4417-4d0e-86dd-faa0cdf3ea01.png"
          alt="Prosterz Logo"
          className="w-40 h-40 mx-auto mb-8"
          initial={{ scale: 0.8, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
            Prosterz
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto px-4 text-lg">
            A curated collection of premium posters featuring iconic cars and legendary popstars.
          </p>
        </motion.div>
      </motion.header>

      <main>
        <PosterGrid />
        <DeliveryForm />
      </main>
    </div>
  );
};

export default Index;
