
import { useState } from "react";
import { motion } from "framer-motion";

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
  // Add all other posters here with their respective images and categories
];

export const PosterGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<"cars" | "popstars" | "all">("all");

  const filteredPosters = selectedCategory === "all" 
    ? posters 
    : posters.filter(poster => poster.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-center gap-4 mb-12">
        <button 
          onClick={() => setSelectedCategory("all")}
          className={`px-6 py-2 rounded-full transition-all ${
            selectedCategory === "all" 
              ? "bg-black text-white" 
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          All
        </button>
        <button 
          onClick={() => setSelectedCategory("cars")}
          className={`px-6 py-2 rounded-full transition-all ${
            selectedCategory === "cars" 
              ? "bg-black text-white" 
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          Cars
        </button>
        <button 
          onClick={() => setSelectedCategory("popstars")}
          className={`px-6 py-2 rounded-full transition-all ${
            selectedCategory === "popstars" 
              ? "bg-black text-white" 
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          Popstars
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosters.map((poster) => (
          <motion.div
            key={poster.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-100"
          >
            <img
              src={poster.image}
              alt={poster.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-medium">{poster.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
