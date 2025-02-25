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
  }
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
