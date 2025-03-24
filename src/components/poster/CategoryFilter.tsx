
import { motion } from "framer-motion";
import { useState } from "react";
import { PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

type CategoryType = "all" | "cars" | "popstars" | "shoes";

interface CategoryFilterProps {
  selectedCategory: CategoryType;
  setSelectedCategory: (category: CategoryType) => void;
  isAdmin: boolean;
}

export const CategoryFilter = ({ 
  selectedCategory, 
  setSelectedCategory,
  isAdmin 
}: CategoryFilterProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAddNewPoster = () => {
    if (isAdmin) {
      navigate("/admin/add-poster");
    } else {
      toast({
        title: "Access Denied",
        description: "Only administrators can add new posters.",
        variant: "destructive",
      });
    }
  };

  return (
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
      <motion.button 
        onClick={() => setSelectedCategory("shoes")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`px-6 py-2 rounded-full border transition-all ${
          selectedCategory === "shoes" 
            ? "bg-gray-900 text-white border-gray-900" 
            : "bg-white text-gray-800 border-gray-300 hover:border-gray-400"
        }`}
      >
        Shoes
      </motion.button>
      
      {isAdmin && (
        <motion.button 
          onClick={handleAddNewPoster}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 rounded-full border bg-gradient-to-r from-indigo-600 to-pink-500 text-white flex items-center gap-2"
        >
          <PlusCircle size={16} />
          Add Poster
        </motion.button>
      )}
    </motion.div>
  );
};
