
import { motion } from "framer-motion";

export interface CategoryFilterProps {
  selectedCategory: "cars" | "popstars" | "shoes" | "all";
  setSelectedCategory: (category: "cars" | "popstars" | "shoes" | "all") => void;
  isAdmin?: boolean;
}

export const CategoryFilter = ({ 
  selectedCategory, 
  setSelectedCategory,
  isAdmin
}: CategoryFilterProps) => {
  const categories = [
    { id: "all", label: "All" },
    { id: "cars", label: "Cars" },
    { id: "popstars", label: "Popstars" },
    { id: "shoes", label: "Shoes" }
  ] as const;

  return (
    <div className="mb-8 flex flex-wrap gap-3">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => setSelectedCategory(category.id)}
          className={`px-5 py-2 rounded-full font-medium transition-colors ${
            selectedCategory === category.id
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category.label}
        </motion.button>
      ))}
    </div>
  );
};
