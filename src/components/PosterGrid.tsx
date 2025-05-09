
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { CategoryFilter } from "./poster/CategoryFilter";
import { PosterCard } from "./poster/PosterCard";
import { usePosterData } from "@/hooks/usePosterData";
import { Poster } from "@/data/posters";

export const PosterGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<"albums" | "sneakers" | "sports" | "movies" | "marvel" | "dc" | "all">("all");
  const [openPopoverId, setOpenPopoverId] = useState<number | null>(null);
  const { posters, isAdmin } = usePosterData();
  const { toast } = useToast();

  // For Ghibli theme - add decorative leaves
  useEffect(() => {
    const addLeaves = () => {
      const container = document.getElementById('poster-grid-container');
      if (!container) return;

      const leaves = document.querySelectorAll('.ghibli-leaf');
      leaves.forEach(leaf => leaf.remove());

      for (let i = 0; i < 6; i++) {
        const leaf = document.createElement('div');
        leaf.className = 'ghibli-leaf';
        leaf.style.left = `${Math.random() * 100}%`;
        leaf.style.top = `${Math.random() * 100}%`;
        leaf.style.animationDelay = `${Math.random() * 5}s`;
        
        // Create SVG leaf
        const leafSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        leafSvg.setAttribute("width", "30");
        leafSvg.setAttribute("height", "30");
        leafSvg.setAttribute("viewBox", "0 0 24 24");
        leafSvg.setAttribute("fill", "none");
        leafSvg.setAttribute("stroke", "#8BD0B4");
        leafSvg.setAttribute("stroke-width", "1");
        leafSvg.setAttribute("stroke-linecap", "round");
        leafSvg.setAttribute("stroke-linejoin", "round");
        
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z");
        leafSvg.appendChild(path);
        
        leaf.appendChild(leafSvg);
        container.appendChild(leaf);
      }
    };

    addLeaves();
    window.addEventListener('resize', addLeaves);
    
    return () => {
      window.removeEventListener('resize', addLeaves);
    };
  }, [selectedCategory]);

  // Filter posters based on selected category and subcategory
  const filteredPosters = posters.filter(poster => {
    if (selectedCategory === "all") {
      return true;
    } else if (selectedCategory === "dc" || selectedCategory === "marvel") {
      return poster.category === "movies" && poster.subcategory === selectedCategory;
    } else {
      return poster.category === selectedCategory;
    }
  });

  // Filter out duplicates by title
  const uniqueTitles = new Set();
  const uniquePosters = filteredPosters.filter(poster => {
    if (!uniqueTitles.has(poster.title)) {
      uniqueTitles.add(poster.title);
      return true;
    }
    return false;
  });

  return (
    <div id="poster-grid-container" className="relative">
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8"
        >
          {uniquePosters.map((poster) => (
            <PosterCard
              key={poster.id}
              poster={poster}
              openPopoverId={openPopoverId}
              setOpenPopoverId={setOpenPopoverId}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
