
import React from "react";
import { motion } from "framer-motion";
import { Music, ShoppingBag, Trophy, Film, Plus } from "lucide-react";
import { Link } from "react-router-dom";

type CategoryType = "albums" | "sneakers" | "sports" | "movies" | "all";

interface CategoryFilterProps {
  selectedCategory: CategoryType;
  setSelectedCategory: React.Dispatch<React.SetStateAction<CategoryType>>;
  isAdmin?: boolean;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  setSelectedCategory,
  isAdmin = false,
}) => {
  const categories = [
    { id: "all", name: "All", icon: null },
    { id: "albums", name: "Albums", icon: <Music className="w-4 h-4" /> },
    { id: "sneakers", name: "Sneakers", icon: <ShoppingBag className="w-4 h-4" /> },
    { id: "sports", name: "Sports", icon: <Trophy className="w-4 h-4" /> },
    { id: "movies", name: "Movies", icon: <Film className="w-4 h-4" /> },
  ];

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Explore Posters</h2>
        {isAdmin && (
          <Link to="/admin/add-poster">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-ghibli-green to-ghibli-darkgreen text-white rounded-full text-sm"
            >
              <Plus className="w-4 h-4" />
              Add Poster
            </motion.button>
          </Link>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => setSelectedCategory(category.id as CategoryType)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all ${
              selectedCategory === category.id
                ? "bg-gradient-to-r from-indigo-600 to-pink-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.icon}
            {category.name}
          </motion.button>
        ))}
      </div>
    </div>
  );
};
