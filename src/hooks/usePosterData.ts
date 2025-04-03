
import { useState, useEffect } from "react";
import { Poster, defaultPosters } from "@/data/posters";

export const usePosterData = () => {
  const [posters, setPosters] = useState<Poster[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  
  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    if (userRole === "admin") {
      setIsAdmin(true);
    }
    
    // Make all posters available for cart
    const postersWithCart = defaultPosters.map(poster => ({
      ...poster,
      cartAvailable: true
    }));
    
    const customPosters = JSON.parse(localStorage.getItem("posters") || "[]");
    if (customPosters.length > 0) {
      setPosters([...postersWithCart, ...customPosters]);
    } else {
      setPosters(postersWithCart);
    }
  }, []);

  return {
    posters,
    isAdmin
  };
};
