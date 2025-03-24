
import { useState, useEffect } from "react";
import { Poster, defaultPosters } from "@/data/posters";

export const usePosterData = () => {
  const [posters, setPosters] = useState<Poster[]>(defaultPosters);
  const [isAdmin, setIsAdmin] = useState(false);
  
  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    if (userRole === "admin") {
      setIsAdmin(true);
    }
    
    const customPosters = JSON.parse(localStorage.getItem("posters") || "[]");
    if (customPosters.length > 0) {
      setPosters([...defaultPosters, ...customPosters]);
    }
  }, []);

  return {
    posters,
    isAdmin
  };
};
