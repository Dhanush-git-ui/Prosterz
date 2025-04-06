
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogIn, LogOut, User, UserPlus, Instagram, ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

export const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { items, setCartOpen } = useCart();

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    const email = localStorage.getItem("userEmail");
    const role = localStorage.getItem("userRole");
    
    if (authStatus === "true" && email) {
      setIsAuthenticated(true);
      setUserEmail(email);
      setIsAdmin(role === "admin");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userRole");
    
    setIsAuthenticated(false);
    setUserEmail("");
    setIsAdmin(false);
    
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  const handleAdminPoster = () => {
    if (isAdmin) {
      navigate("/admin/add-poster");
    } else {
      toast({
        title: "Access Denied",
        description: "Only administrators can access this feature.",
        variant: "destructive",
      });
    }
  };

  const handleInstagramLogin = () => {
    // In a real implementation, this would redirect to Instagram OAuth
    toast({
      title: "Instagram Login",
      description: "Redirecting to Instagram for authentication...",
    });

    // For demo purposes, simulate login after 1 second
    setTimeout(() => {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userEmail", "user@instagram.com");
      setIsAuthenticated(true);
      setUserEmail("user@instagram.com");
      
      toast({
        title: "Logged in",
        description: "Successfully logged in with Instagram.",
      });
    }, 1000);
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 w-full bg-white z-50 shadow-sm"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <motion.img
            src="/lovable-uploads/a637c4db-4417-4d0e-86dd-faa0cdf3ea01.png"
            alt="Prosterz Logo"
            className="w-12 h-12"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
          />
          <h1 className="text-2xl font-bold text-gray-800">Prosterz</h1>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#posters" className="text-gray-700 hover:text-gray-900 font-medium">Posters</a>
          <a href="#delivery" className="text-gray-700 hover:text-gray-900 font-medium">Contact</a>
        </div>
        
        <div className="flex items-center gap-4">
          <motion.button 
            onClick={() => setCartOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2"
          >
            <ShoppingCart className="text-gray-700" size={20} />
            {items.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {items.length}
              </span>
            )}
          </motion.button>

          {isAuthenticated ? (
            <Dialog>
              <DialogTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm font-medium"
                >
                  <User size={16} />
                  {isAdmin ? "Admin" : "Account"}
                </motion.button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Your Account</DialogTitle>
                  <DialogDescription>
                    {isAdmin 
                      ? "You are logged in as an administrator" 
                      : "You are logged in with Instagram"}
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p className="text-sm text-gray-500 mb-4">
                    <strong>Email:</strong> {userEmail}
                  </p>
                  {isAdmin && (
                    <Button 
                      onClick={handleAdminPoster}
                      className="w-full mb-3 bg-indigo-600 hover:bg-indigo-700"
                    >
                      Add New Poster
                    </Button>
                  )}
                  <Button 
                    onClick={handleLogout}
                    className="w-full bg-gray-200 text-gray-800 hover:bg-gray-300"
                  >
                    <LogOut size={16} className="mr-2" />
                    Sign Out
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleInstagramLogin}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              <Instagram size={16} />
              Sign In with Instagram
            </motion.button>
          )}
        </div>
      </div>
    </motion.nav>
  );
};
