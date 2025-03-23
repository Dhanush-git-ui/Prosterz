
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Poster {
  id: number;
  image: string;
  title: string;
  category: "cars" | "popstars";
  price: string;
}

const posters: Poster[] = [
  {
    id: 1,
    image: "/lovable-uploads/a637c4db-4417-4d0e-86dd-faa0cdf3ea01.png",
    title: "Prosterz Logo",
    category: "popstars",
    price: "$24.99"
  },
  {
    id: 2,
    image: "/lovable-uploads/bdffd0c7-b2ca-4ca6-a07e-91f173ed1207.png",
    title: "Lamborghini Revuelto",
    category: "cars",
    price: "$29.99"
  },
  {
    id: 3,
    image: "/lovable-uploads/8dd0d458-cc70-420b-bd7f-7a2fd4ac44f5.png",
    title: "Ferrari LaFerrari",
    category: "cars",
    price: "$29.99"
  },
  {
    id: 4,
    image: "/lovable-uploads/1c9f001d-6edf-48a9-9fd6-203e81e21c29.png",
    title: "Toyota Supra",
    category: "cars",
    price: "$27.99"
  },
  {
    id: 5,
    image: "/lovable-uploads/00a070d4-729c-4793-91ee-7cdcff7e76e9.png",
    title: "Porsche 918 Spyder",
    category: "cars",
    price: "$29.99"
  },
  {
    id: 6,
    image: "/lovable-uploads/a25191a1-f9f4-42b2-85a6-2a308f820904.png",
    title: "BMW M3 Sports Evolution",
    category: "cars",
    price: "$27.99"
  },
  {
    id: 7,
    image: "/lovable-uploads/5c392f8e-d75b-438d-9eac-cd3f38ffefbe.png",
    title: "Porsche RWB",
    category: "cars",
    price: "$29.99"
  },
  {
    id: 8,
    image: "/lovable-uploads/8da519a5-4326-45cc-a93b-266c3f5ca7ee.png",
    title: "Lamborghini Aventador",
    category: "cars",
    price: "$29.99"
  },
  {
    id: 9,
    image: "/lovable-uploads/b3213296-a70e-4664-b291-9da165dd636e.png",
    title: "Porsche GT3 RS",
    category: "cars",
    price: "$27.99"
  },
  {
    id: 10,
    image: "/lovable-uploads/269c6c48-824c-4c7b-ac22-293e10ff0b7f.png",
    title: "BMW M4 GT4",
    category: "cars",
    price: "$27.99"
  },
  {
    id: 11,
    image: "/lovable-uploads/b5ce56fc-ab10-4e5d-aaa7-112410851752.png",
    title: "Cinnamon Girl",
    category: "popstars",
    price: "$24.99"
  },
  {
    id: 12,
    image: "/lovable-uploads/e544cf84-c984-408e-8db2-690ce557c461.png",
    title: "FEIN",
    category: "popstars",
    price: "$24.99"
  },
  {
    id: 13,
    image: "/lovable-uploads/d3c85a47-1931-43c0-aaef-21b35e7d9402.png",
    title: "Die With A Smile",
    category: "popstars",
    price: "$24.99"
  },
  {
    id: 14,
    image: "/lovable-uploads/358bb3f5-0364-48c0-8295-bfb47d273098.png",
    title: "Starboy",
    category: "popstars",
    price: "$24.99"
  },
  {
    id: 15,
    image: "/lovable-uploads/318e6db9-d1b1-4ef7-be5d-ef48753bb9a3.png",
    title: "Cry For Me",
    category: "popstars",
    price: "$24.99"
  },
  {
    id: 16,
    image: "/lovable-uploads/a5c5c4a8-ca40-4862-8f20-b74c93a67fcd.png",
    title: "CO2",
    category: "popstars",
    price: "$24.99"
  }
];

export const PosterGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<"cars" | "popstars" | "all">("all");
  const [hoveredPosterId, setHoveredPosterId] = useState<number | null>(null);

  const filteredPosters = selectedCategory === "all" 
    ? posters 
    : posters.filter(poster => poster.category === selectedCategory);

  return (
    <div>
      <motion.div 
        className="flex flex-wrap justify-center gap-4 mb-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.button 
          onClick={() => setSelectedCategory("all")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-2 rounded-full border transition-all ${
            selectedCategory === "all" 
              ? "bg-gray-900 text-white border-gray-900" 
              : "bg-white text-gray-800 border-gray-300 hover:border-gray-400"
          }`}
        >
          All
        </motion.button>
        <motion.button 
          onClick={() => setSelectedCategory("cars")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-2 rounded-full border transition-all ${
            selectedCategory === "cars" 
              ? "bg-gray-900 text-white border-gray-900" 
              : "bg-white text-gray-800 border-gray-300 hover:border-gray-400"
          }`}
        >
          Cars
        </motion.button>
        <motion.button 
          onClick={() => setSelectedCategory("popstars")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-2 rounded-full border transition-all ${
            selectedCategory === "popstars" 
              ? "bg-gray-900 text-white border-gray-900" 
              : "bg-white text-gray-800 border-gray-300 hover:border-gray-400"
          }`}
        >
          Popstars
        </motion.button>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={selectedCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {filteredPosters.map((poster) => (
            <motion.div
              key={poster.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              onHoverStart={() => setHoveredPosterId(poster.id)}
              onHoverEnd={() => setHoveredPosterId(null)}
              className="group relative flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <motion.img
                  src={poster.image}
                  alt={poster.title}
                  className="h-full w-full object-cover"
                  initial={{ scale: 1 }}
                  animate={{ 
                    scale: hoveredPosterId === poster.id ? 1.1 : 1
                  }}
                  transition={{ duration: 0.4 }}
                />
                
                <motion.div 
                  className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: hoveredPosterId === poster.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.button 
                    className="px-6 py-2 bg-white text-gray-900 font-medium rounded-full transform transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Quick View
                  </motion.button>
                </motion.div>
              </div>
              
              <div className="mt-4 text-left">
                <h3 className="text-gray-900 font-medium">{poster.title}</h3>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-gray-700">{poster.price}</p>
                  <motion.button 
                    className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
