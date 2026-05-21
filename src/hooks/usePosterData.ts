
import { useState, useEffect } from "react";
import { defaultPosters, Poster } from "@/data/posters";
import { toast } from "sonner";
import { parsePrice } from "@/lib/pricing";

const normalizePoster = (poster: Poster): Poster => ({
  ...poster,
  image: poster.image?.replace(/^\/[^/]+-uploads\//, "/uploads/") || "/placeholder.svg",
  sizes: {
    A4: String(parsePrice(poster.sizes?.A4 || 0)),
    A3: String(parsePrice(poster.sizes?.A3 || 0)),
  },
});

export const usePosterData = () => {
  const [posters, setPosters] = useState<Poster[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const loadPosters = () => {
    // Check if user is admin
    const userRole = localStorage.getItem("userRole");
    setIsAdmin(userRole === "admin");
    
    try {
      // Get posters from localStorage or use default posters
      const storedPosters = localStorage.getItem("posters");
      
      if (storedPosters) {
        try {
          const parsedPosters = JSON.parse(storedPosters);
          
          // Make sure all posters have valid image URLs
          const validatedPosters = parsedPosters.map((poster: Poster) => {
            const normalizedPoster = normalizePoster(poster);
            // Check if the image URL is valid
            if (!normalizedPoster.image || 
                normalizedPoster.image.includes(":\\") || 
                (normalizedPoster.image.includes("/") && 
                 !normalizedPoster.image.startsWith("http") && 
                 !normalizedPoster.image.startsWith("/uploads") &&
                 !normalizedPoster.image.startsWith("/"))) {
              console.log("Invalid image URL found:", normalizedPoster.image);
              return {
                ...normalizedPoster,
                image: "/placeholder.svg" 
              };
            }
            return normalizedPoster;
          });
          
          setPosters(validatedPosters);
          localStorage.setItem("posters", JSON.stringify(validatedPosters));
          console.log("Loaded posters:", validatedPosters);
        } catch (error) {
          console.error("Error parsing posters from localStorage:", error);
          // If parsing fails, reset with default posters
          const normalizedDefaults = defaultPosters.map(normalizePoster);
          localStorage.setItem("posters", JSON.stringify(normalizedDefaults));
          setPosters(normalizedDefaults);
        }
      } else {
        // If no posters in localStorage, save default posters
        const normalizedDefaults = defaultPosters.map(normalizePoster);
        localStorage.setItem("posters", JSON.stringify(normalizedDefaults));
        setPosters(normalizedDefaults);
      }
    } catch (error) {
      console.error("Error loading posters:", error);
      setPosters(defaultPosters.map(normalizePoster));
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    loadPosters();
  }, []);

  // Function to update posters in state and localStorage
  const updatePosters = (newPosters: Poster[]) => {
    setPosters(newPosters);
    localStorage.setItem("posters", JSON.stringify(newPosters));
  };

  // Function to delete a poster by ID
  const deletePoster = async (posterId: number) => {
    try {
      const updatedPosters = posters.filter(poster => poster.id !== posterId);
      await updatePosters(updatedPosters);
      toast.success("Poster deleted successfully");
      return true;
    } catch (error) {
      console.error('Error deleting poster:', error);
      toast.error("Failed to delete poster");
      return false;
    }
  };

  // Extract unique categories from posters
  const allCategories = Array.from(new Set(posters.map(poster => poster.category)));
  
  // Get custom categories from localStorage
  let customCategories: string[] = [];
  try {
    customCategories = JSON.parse(localStorage.getItem("customCategories") || "[]");
  } catch (error) {
    console.error("Error parsing custom categories:", error);
    localStorage.setItem("customCategories", JSON.stringify([]));
  }
  
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
    setPosters: updatePosters,
    deletePoster,
    refreshPosters: loadPosters
  };
};
