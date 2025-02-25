
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Poster {
  id: number;
  image: string;
  title: string;
  category: "cars" | "popstars";
}

const posters: Poster[] = [
  {
    id: 1,
    image: "public/lovable-uploads/a637c4db-4417-4d0e-86dd-faa0cdf3ea01.png",
    title: "Prosterz Logo",
    category: "popstars"
  },
  {
    id: 2,
    image: "public/lovable-uploads/bdffd0c7-b2ca-4ca6-a07e-91f173ed1207.png",
    title: "Lamborghini Revuelto",
    category: "cars"
  },
  {
    id: 3,
    image: "public/lovable-uploads/8dd0d458-cc70-420b-bd7f-7a2fd4ac44f5.png",
    title: "Ferrari LaFerrari",
    category: "cars"
  },
  {
    id: 4,
    image: "public/lovable-uploads/1c9f001d-6edf-48a9-9fd6-203e81e21c29.png",
    title: "Toyota Supra",
    category: "cars"
  },
  {
    id: 5,
    image: "public/lovable-uploads/00a070d4-729c-4793-91ee-7cdcff7e76e9.png",
    title: "Porsche 918 Spyder",
    category: "cars"
  },
  {
    id: 6,
    image: "public/lovable-uploads/a25191a1-f9f4-42b2-85a6-2a308f820904.png",
    title: "BMW M3 Sports Evolution",
    category: "cars"
  },
  {
    id: 7,
    image: "public/lovable-uploads/5c392f8e-d75b-438d-9eac-cd3f38ffefbe.png",
    title: "Porsche RWB",
    category: "cars"
  },
  {
    id: 8,
    image: "public/lovable-uploads/8da519a5-4326-45cc-a93b-266c3f5ca7ee.png",
    title: "Lamborghini Aventador",
    category: "cars"
  },
  {
    id: 9,
    image: "public/lovable-uploads/b3213296-a70e-4664-b291-9da165dd636e.png",
    title: "Porsche GT3 RS",
    category: "cars"
  },
  {
    id: 10,
    image: "public/lovable-uploads/269c6c48-824c-4c7b-ac22-293e10ff0b7f.png",
    title: "BMW M4 GT4",
    category: "cars"
  },
  {
    id: 11,
    image: "public/lovable-uploads/b5ce56fc-ab10-4e5d-aaa7-112410851752.png",
    title: "Cinnamon Girl",
    category: "popstars"
  },
  {
    id: 12,
    image: "public/lovable-uploads/e544cf84-c984-408e-8db2-690ce557c461.png",
    title: "FEIN",
    category: "popstars"
  },
  {
    id: 13,
    image: "public/lovable-uploads/d3c85a47-1931-43c0-aaef-21b35e7d9402.png",
    title: "Die With A Smile",
    category: "popstars"
  },
  {
    id: 14,
    image: "public/lovable-uploads/358bb3f5-0364-48c0-8295-bfb47d273098.png",
    title: "Starboy",
    category: "popstars"
  },
  {
    id: 15,
    image: "public/lovable-uploads/318e6db9-d1b1-4ef7-be5d-ef48753bb9a3.png",
    title: "Cry For Me",
    category: "popstars"
  },
  {
    id: 16,
    image: "public/lovable-uploads/a5c5c4a8-ca40-4862-8f20-b74c93a67fcd.png",
    title: "CO2",
    category: "popstars"
  }
];

export const PosterGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<"cars" | "popstars" | "all">("all");

  const filteredPosters = selectedCategory === "all" 
    ? posters 
    : posters.filter(poster => poster.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div 
        className="flex justify-center gap-4 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.button 
          onClick={() => setSelectedCategory("all")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-2 rounded-full transition-all ${
            selectedCategory === "all" 
              ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" 
              : "bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200"
          }`}
        >
          All
        </motion.button>
        <motion.button 
          onClick={() => setSelectedCategory("cars")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-2 rounded-full transition-all ${
            selectedCategory === "cars" 
              ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white" 
              : "bg-gradient-to-r from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200"
          }`}
        >
          Cars
        </motion.button>
        <motion.button 
          onClick={() => setSelectedCategory("popstars")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-2 rounded-full transition-all ${
            selectedCategory === "popstars" 
              ? "bg-gradient-to-r from-rose-600 to-orange-600 text-white" 
              : "bg-gradient-to-r from-rose-100 to-orange-100 hover:from-rose-200 hover:to-orange-200"
          }`}
        >
          Popstars
        </motion.button>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosters.map((poster) => (
            <motion.div
              key={poster.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.03 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg"
            >
              <img
                src={poster.image.replace('public/', '/')}
                alt={poster.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-medium">{poster.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
