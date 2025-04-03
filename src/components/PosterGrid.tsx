
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { CategoryFilter } from "./poster/CategoryFilter";
import { PosterCard } from "./poster/PosterCard";
import { usePosterData } from "@/hooks/usePosterData";
import { Poster } from "@/data/posters";

export const PosterGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<"cars" | "popstars" | "shoes" | "all">("all");
  const [openPopoverId, setOpenPopoverId] = useState<number | null>(null);
  const { posters, isAdmin } = usePosterData();
  const { toast } = useToast();

  const handleAddToCart = (poster: Poster) => {
    toast({
      title: "Added to Cart",
      description: `${poster.title} has been added to your cart.`,
    });
    setOpenPopoverId(null);
  };

  // Filter out duplicates by title and then by category
  const uniqueTitles = new Set();
  const uniquePosters = posters.filter(poster => {
    if (!uniqueTitles.has(poster.title)) {
      uniqueTitles.add(poster.title);
      return true;
    }
    return false;
  });

  const filteredPosters = selectedCategory === "all" 
    ? uniquePosters 
    : uniquePosters.filter(poster => poster.category === selectedCategory);

  return (
    <div>
      <CategoryFilter 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        isAdmin={isAdmin}
      />

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
            <PosterCard
              key={poster.id}
              poster={poster}
              onAddToCart={handleAddToCart}
              openPopoverId={openPopoverId}
              setOpenPopoverId={setOpenPopoverId}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
