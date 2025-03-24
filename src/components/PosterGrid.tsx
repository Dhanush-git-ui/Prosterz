
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { PlusCircle, X } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Poster {
  id: number;
  image: string;
  title: string;
  category: "cars" | "popstars" | "shoes";
  price: string;
}

const defaultPosters: Poster[] = [
  // Original posters
  {
    id: 1,
    image: "/lovable-uploads/a637c4db-4417-4d0e-86dd-faa0cdf3ea01.png",
    title: "Prosterz Logo",
    category: "popstars",
    price: "$24.99"
  },
  {
    id: 2,
    image: "/lovable-uploads/bdffd0c7-b2ca-4ca6-a07e-91f173ed1207.png",
    title: "Lamborghini Revuelto",
    category: "cars",
    price: "$29.99"
  },
  {
    id: 3,
    image: "/lovable-uploads/8dd0d458-cc70-420b-bd7f-7a2fd4ac44f5.png",
    title: "Ferrari LaFerrari",
    category: "cars",
    price: "$29.99"
  },
  {
    id: 4,
    image: "/lovable-uploads/1c9f001d-6edf-48a9-9fd6-203e81e21c29.png",
    title: "Toyota Supra",
    category: "cars",
    price: "$27.99"
  },
  {
    id: 5,
    image: "/lovable-uploads/00a070d4-729c-4793-91ee-7cdcff7e76e9.png",
    title: "Porsche 918 Spyder",
    category: "cars",
    price: "$29.99"
  },
  {
    id: 6,
    image: "/lovable-uploads/a25191a1-f9f4-42b2-85a6-2a308f820904.png",
    title: "BMW M3 Sports Evolution",
    category: "cars",
    price: "$27.99"
  },
  {
    id: 7,
    image: "/lovable-uploads/5c392f8e-d75b-438d-9eac-cd3f38ffefbe.png",
    title: "Porsche RWB",
    category: "cars",
    price: "$29.99"
  },
  {
    id: 8,
    image: "/lovable-uploads/8da519a5-4326-45cc-a93b-266c3f5ca7ee.png",
    title: "Lamborghini Aventador",
    category: "cars",
    price: "$29.99"
  },
  {
    id: 9,
    image: "/lovable-uploads/b3213296-a70e-4664-b291-9da165dd636e.png",
    title: "Porsche GT3 RS",
    category: "cars",
    price: "$27.99"
  },
  {
    id: 10,
    image: "/lovable-uploads/269c6c48-824c-4c7b-ac22-293e10ff0b7f.png",
    title: "BMW M4 GT4",
    category: "cars",
    price: "$27.99"
  },
  {
    id: 11,
    image: "/lovable-uploads/b5ce56fc-ab10-4e5d-aaa7-112410851752.png",
    title: "Cinnamon Girl",
    category: "popstars",
    price: "$24.99"
  },
  {
    id: 12,
    image: "/lovable-uploads/e544cf84-c984-408e-8db2-690ce557c461.png",
    title: "FEIN",
    category: "popstars",
    price: "$24.99"
  },
  {
    id: 13,
    image: "/lovable-uploads/d3c85a47-1931-43c0-aaef-21b35e7d9402.png",
    title: "Die With A Smile",
    category: "popstars",
    price: "$24.99"
  },
  {
    id: 14,
    image: "/lovable-uploads/358bb3f5-0364-48c0-8295-bfb47d273098.png",
    title: "Starboy",
    category: "popstars",
    price: "$24.99"
  },
  {
    id: 15,
    image: "/lovable-uploads/318e6db9-d1b1-4ef7-be5d-ef48753bb9a3.png",
    title: "Cry For Me",
    category: "popstars",
    price: "$24.99"
  },
  {
    id: 16,
    image: "/lovable-uploads/a5c5c4a8-ca40-4862-8f20-b74c93a67fcd.png",
    title: "CO2",
    category: "popstars",
    price: "$24.99"
  },
  {
    id: 17,
    image: "/lovable-uploads/97887c36-5bb5-45b3-b163-da34aafff753.png",
    title: "Lamborghini Aventador SVJ",
    category: "cars",
    price: "$29.99"
  },
  {
    id: 18,
    image: "/lovable-uploads/167ca374-f186-466d-93b9-55ad3cf82d0c.png",
    title: "BMW M4 Nighthawk",
    category: "cars",
    price: "$27.99"
  },
  {
    id: 19,
    image: "/lovable-uploads/5eebaa3f-6875-4580-b7fa-b2e13fe7630e.png",
    title: "Mazda RX-7 Spirit",
    category: "cars",
    price: "$28.99"
  },
  {
    id: 20,
    image: "/lovable-uploads/494cd1a5-593b-48c9-9f8d-90a8a52dc728.png",
    title: "Lamborghini Revuelto LAMBO",
    category: "cars",
    price: "$29.99"
  },
  {
    id: 21,
    image: "/lovable-uploads/2d1b2d0a-1b4f-45cf-8388-905f15f44a6d.png",
    title: "Ferrari LaFerrari Masterpiece",
    category: "cars",
    price: "$29.99"
  },
  {
    id: 22,
    image: "/lovable-uploads/a8b46723-86bf-4747-9599-9600f4cec148.png",
    title: "Toyota GR Supra",
    category: "cars",
    price: "$27.99"
  },
  {
    id: 23,
    image: "/lovable-uploads/1836880e-b38f-470b-b38e-332b4a89e90c.png",
    title: "Porsche 918 Spyder Elegance",
    category: "cars",
    price: "$29.99"
  },
  {
    id: 24,
    image: "/lovable-uploads/a9230ae5-f7f1-45b6-8170-45a1b584fc8c.png",
    title: "BMW M3 Evolution",
    category: "cars",
    price: "$27.99"
  },
  {
    id: 25,
    image: "/lovable-uploads/7cc7b66b-fb61-4c00-ad48-63f49a035a00.png",
    title: "Porsche 911 RWB",
    category: "cars",
    price: "$29.99"
  },
  {
    id: 26,
    image: "/lovable-uploads/50e1e322-7d76-4507-9465-ec9af542ff8f.png",
    title: "BMW M4 GT4 Motorsport",
    category: "cars",
    price: "$27.99"
  },
  {
    id: 27,
    image: "/lovable-uploads/19cbeb0b-982a-4168-ae89-3c66f269d8b7.png",
    title: "Porsche GT3 RS Heritage",
    category: "cars",
    price: "$27.99"
  },
  {
    id: 28,
    image: "/lovable-uploads/c9ae4602-7abc-4cf0-890c-3c83554475b7.png",
    title: "Honda NSX-R Classic",
    category: "cars",
    price: "$28.99"
  },
  // New car posters
  {
    id: 29,
    image: "/lovable-uploads/900f507c-7cb5-4735-a12c-58d03ba34d7b.png",
    title: "Ford Mustang Classic",
    category: "cars",
    price: "$28.99"
  },
  {
    id: 30,
    image: "/lovable-uploads/1e113fae-1117-432f-aed8-6c4c6f607cfd.png",
    title: "Toyota Supra MK5",
    category: "cars",
    price: "$29.99"
  },
  // New shoe posters
  {
    id: 31,
    image: "/lovable-uploads/a569b8e9-7b2a-4f82-b56f-419f0e1b9698.png",
    title: "Nike Air Max 2023",
    category: "shoes",
    price: "$19.99"
  },
  {
    id: 32,
    image: "/lovable-uploads/63f56bc2-c12d-4c4e-ad2e-ef7ecb9ed408.png",
    title: "Nike One Step Ahead",
    category: "shoes",
    price: "$19.99"
  },
  {
    id: 33,
    image: "/lovable-uploads/44bf5969-8c36-4527-aab2-bc27bf031ec1.png",
    title: "Air Max Iconic",
    category: "shoes",
    price: "$19.99"
  },
  {
    id: 34,
    image: "/lovable-uploads/4304ad5d-1375-4102-a5c8-a1f0764cbb61.png",
    title: "Lacoste Limited Edition",
    category: "shoes",
    price: "$21.99"
  },
  {
    id: 35,
    image: "/lovable-uploads/9d8bdc86-d65b-45e3-8dcc-ba4a43cce84a.png",
    title: "Puma Suede Classic",
    category: "shoes",
    price: "$18.99"
  },
  {
    id: 36,
    image: "/lovable-uploads/27ffc1f8-9a48-40ba-aee9-ccb52f2d5283.png",
    title: "Nike High Drip",
    category: "shoes",
    price: "$22.99"
  },
  {
    id: 37,
    image: "/lovable-uploads/2ab6faf1-f3f3-4802-9069-28b8175b3374.png",
    title: "Nike Drip Edition",
    category: "shoes",
    price: "$22.99"
  },
  {
    id: 38,
    image: "/lovable-uploads/016d19da-2838-4374-b644-0b7992c34fc9.png",
    title: "Nike Air Force",
    category: "shoes",
    price: "$21.99"
  },
  {
    id: 39,
    image: "/lovable-uploads/eb0e2058-5b28-45c1-9d57-1c951aa1ba3c.png",
    title: "Yeezy Elevate",
    category: "shoes",
    price: "$24.99"
  },
];

export const PosterGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<"cars" | "popstars" | "shoes" | "all">("all");
  const [hoveredPosterId, setHoveredPosterId] = useState<number | null>(null);
  const [posters, setPosters] = useState<Poster[]>(defaultPosters);
  const [isAdmin, setIsAdmin] = useState(false);
  const [openPopoverId, setOpenPopoverId] = useState<number | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

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

  const handleAddToCart = (poster: Poster) => {
    toast({
      title: "Added to Cart",
      description: `${poster.title} has been added to your cart.`,
    });
    setOpenPopoverId(null);
  };

  const filteredPosters = selectedCategory === "all" 
    ? posters 
    : posters.filter(poster => poster.category === selectedCategory);

  return (
    <div>
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
            <motion.div
              key={poster.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              onHoverStart={() => setHoveredPosterId(poster.id)}
              onHoverEnd={() => setHoveredPosterId(null)}
              className="group relative flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <motion.img
                  src={poster.image}
                  alt={poster.title}
                  className="h-full w-full object-cover"
                  initial={{ scale: 1 }}
                  animate={{ 
                    scale: hoveredPosterId === poster.id ? 1.1 : 1
                  }}
                  transition={{ duration: 0.4 }}
                />
                
                <motion.div 
                  className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: hoveredPosterId === poster.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Popover open={openPopoverId === poster.id} onOpenChange={(open) => {
                    if (open) {
                      setOpenPopoverId(poster.id);
                    } else {
                      setOpenPopoverId(null);
                    }
                  }}>
                    <PopoverTrigger asChild>
                      <motion.button 
                        className="px-6 py-2 bg-white text-gray-900 font-medium rounded-full transform transition-transform duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Quick View
                      </motion.button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80 p-0" side="bottom">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="rounded-md overflow-hidden"
                      >
                        <div className="relative">
                          <img 
                            src={poster.image} 
                            alt={poster.title} 
                            className="w-full h-48 object-cover"
                          />
                          <button 
                            onClick={() => setOpenPopoverId(null)}
                            className="absolute top-2 right-2 bg-white rounded-full p-1 hover:bg-gray-100"
                          >
                            <X size={16} className="text-gray-700" />
                          </button>
                        </div>
                        <div className="p-4 bg-white">
                          <h3 className="font-medium text-lg">{poster.title}</h3>
                          <p className="text-gray-600 mb-2">Category: {poster.category}</p>
                          <div className="flex justify-between items-center mt-3">
                            <p className="text-gray-900 font-bold">{poster.price}</p>
                            <motion.button
                              onClick={() => handleAddToCart(poster)}
                              className="px-4 py-1.5 bg-gradient-to-r from-indigo-600 to-pink-500 text-white text-sm rounded-full"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Add to Cart
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    </PopoverContent>
                  </Popover>
                </motion.div>
              </div>
              
              <div className="mt-4 text-left">
                <h3 className="text-gray-900 font-medium">{poster.title}</h3>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-gray-700">{poster.price}</p>
                  <motion.button 
                    className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAddToCart(poster)}
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
