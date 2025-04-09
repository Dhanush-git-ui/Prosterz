
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FilePlus, LayoutDashboard } from "lucide-react";

interface CategoryFilterProps {
  selectedCategory: "all" | "albums" | "sneakers" | "sports" | "movies" | "marvel" | "dc";
  setSelectedCategory: (category: "all" | "albums" | "sneakers" | "sports" | "movies" | "marvel" | "dc") => void;
  isAdmin?: boolean;
}

export const CategoryFilter = ({
  selectedCategory,
  setSelectedCategory,
  isAdmin = false,
}: CategoryFilterProps) => {
  const navigate = useNavigate();

  const handleCategoryChange = (category: "all" | "albums" | "sneakers" | "sports" | "movies" | "marvel" | "dc") => {
    setSelectedCategory(category);
  };

  const categories = [
    { id: "all", label: "All" },
    { id: "albums", label: "Albums" },
    { id: "sneakers", label: "Sneakers" },
    { id: "sports", label: "Sports" },
    { id: "movies", label: "Movies" },
    { id: "marvel", label: "Marvel" },
    { id: "dc", label: "DC Comics" },
  ] as const;

  return (
    <div className="mb-10 flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-indigo-500 to-pink-400 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {isAdmin && (
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/admin/dashboard")}
              className="gap-1 items-center border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
            >
              <LayoutDashboard className="h-4 w-4 mr-1" />
              Admin Dashboard
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/admin/add-poster")}
              className="gap-1 items-center border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
            >
              <FilePlus className="h-4 w-4 mr-1" />
              Add New Poster
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
