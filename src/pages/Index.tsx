
import { motion } from "framer-motion";
import { PosterGrid } from "../components/PosterGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-20 text-center"
      >
        <motion.img
          src="public/lovable-uploads/a637c4db-4417-4d0e-86dd-faa0cdf3ea01.png"
          alt="Prosterz Logo"
          className="w-40 h-40 mx-auto mb-8"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <h1 className="text-4xl font-bold mb-4">Prosterz</h1>
        <p className="text-gray-600 max-w-xl mx-auto px-4">
          A curated collection of premium posters featuring iconic cars and legendary popstars.
        </p>
      </motion.header>

      <main>
        <PosterGrid />
      </main>
    </div>
  );
};

export default Index;
