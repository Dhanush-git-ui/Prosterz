
import { useState, useEffect } from "react";
import { defaultPosters, Poster } from "@/data/posters";

export const usePosterData = () => {
  const [posters, setPosters] = useState<Poster[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Check if user is admin
    const userRole = localStorage.getItem("userRole");
    setIsAdmin(userRole === "admin");
    
    // Get posters from localStorage or use default posters
    const storedPosters = localStorage.getItem("posters");
    
    if (storedPosters) {
      const parsedPosters = JSON.parse(storedPosters);
      setPosters(parsedPosters);
    } else {
      // If no posters in localStorage, save default posters
      localStorage.setItem("posters", JSON.stringify(defaultPosters));
      setPosters(defaultPosters);
    }
    
    setIsLoading(false);
  }, []);

  // Extract unique categories from posters
  const allCategories = Array.from(new Set(posters.map(poster => poster.category)));
  
  // Get custom categories from localStorage
  const customCategories = JSON.parse(localStorage.getItem("customCategories") || "[]");
  
  // Merge default and custom categories
  const categories = Array.from(new Set([...allCategories, ...customCategories]));
  
  // Get subcategories for movies
  const movieSubcategories = Array.from(
    new Set(
      posters
        .filter(poster => poster.category === "movies" && poster.subcategory)
        .map(poster => poster.subcategory)
    )
  );

  return { 
    posters, 
    isAdmin, 
    isLoading, 
    categories,
    movieSubcategories,
    setPosters
  };
};
