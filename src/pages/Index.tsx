
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LogIn, UserPlus, LogOut, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { PosterGrid } from "../components/PosterGrid";
import { DeliveryForm } from "../components/DeliveryForm";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check authentication status from localStorage
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
    // Clear authentication data
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

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
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
            <a href="#delivery" className="text-gray-700 hover:text-gray-900 font-medium">Delivery</a>
            
            {isAdmin && (
              <motion.button 
                onClick={handleAdminPoster}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Add Poster
              </motion.button>
            )}
          </div>
          
          <div className="flex items-center gap-4">
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
                        : "You are logged in as a user"}
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
              <>
                <Link to="/sign-in">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden md:flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium"
                  >
                    <LogIn size={16} />
                    Sign In
                  </motion.button>
                </Link>
                <Link to="/sign-up">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium"
                  >
                    <UserPlus size={16} />
                    Sign Up
                  </motion.button>
                </Link>
              </>
            )}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 to-pink-50 relative"
      >
        <div className="container mx-auto px-6 text-left md:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
              Premium Quality <span className="bg-gradient-to-r from-indigo-600 to-pink-500 text-transparent bg-clip-text">Poster Collection</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8">
              Discover our curated collection of premium posters featuring iconic cars and legendary popstars.
            </p>
            <motion.a 
              href="#posters"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-medium rounded-full hover:opacity-90 transition-colors"
            >
              Shop Now
            </motion.a>
          </motion.div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute -bottom-10 left-0 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,117.3C672,107,768,117,864,144C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        
        {/* Animated circles in background */}
        <motion.div 
          className="absolute top-20 right-10 w-16 h-16 rounded-full bg-purple-300 opacity-40"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-40 left-10 w-20 h-20 rounded-full bg-pink-300 opacity-30"
          animate={{ 
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 7,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute top-40 left-1/4 w-12 h-12 rounded-full bg-yellow-300 opacity-30"
          animate={{ 
            y: [0, 15, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut" 
          }}
        />
      </motion.header>

      {/* Main Content */}
      <main>
        {/* Poster Collection Section */}
        <section id="posters" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Collection</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-pink-400 rounded"></div>
            </motion.div>
            <PosterGrid />
          </div>
        </section>

        {/* Animated features section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-10 justify-center">
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-md text-center max-w-xs"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
                <p className="text-gray-600">All posters are printed on premium paper for vibrant colors and durability.</p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-md text-center max-w-xs"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.3 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8 4-8-4m16 0l-8 4m8 4l-8 4m8-12v12m-8-8l-8 4m8 4l8-4" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-bold mb-2">Fast Shipping</h3>
                <p className="text-gray-600">We ship worldwide with expedited delivery options available.</p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-md text-center max-w-xs"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.5 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-bold mb-2">Money Back</h3>
                <p className="text-gray-600">Not satisfied? We offer a 30-day money-back guarantee on all purchases.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Delivery Section */}
        <section id="delivery" className="py-20 bg-gradient-to-br from-indigo-50 to-pink-50">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Delivery Details</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-pink-400 rounded"></div>
              <p className="text-gray-600 mt-4">Enter your shipping details to calculate delivery options.</p>
            </motion.div>
            <DeliveryForm />
          </div>
          
          {/* Animated decorative elements */}
          <motion.div 
            className="absolute right-5 top-1/4 w-24 h-24 opacity-10"
            animate={{ 
              rotate: [0, 360],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 30,
              ease: "linear" 
            }}
          >
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FF0066" d="M48.8,-56.1C61.9,-47.2,70.7,-30.5,74.6,-12.5C78.5,5.6,77.5,24.9,68.1,37.8C58.7,50.8,40.9,57.3,23.6,61.5C6.2,65.7,-10.6,67.5,-29.3,64C-48,60.4,-68.5,51.5,-78.5,35.2C-88.4,18.9,-87.8,-4.8,-79.6,-24.5C-71.4,-44.1,-55.6,-59.6,-39,-67C-22.5,-74.3,-5.2,-73.4,11.2,-69.4C27.6,-65.3,35.7,-65,48.8,-56.1Z" transform="translate(100 100)" />
            </svg>
          </motion.div>
          
          <motion.div 
            className="absolute left-5 bottom-1/4 w-32 h-32 opacity-10"
            animate={{ 
              rotate: [0, -360],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 40,
              ease: "linear" 
            }}
          >
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#8A3FFC" d="M42.8,-65.2C54.9,-56.3,63.6,-43.3,67.4,-29.5C71.3,-15.7,70.3,-1.1,66.6,12.2C62.9,25.5,56.5,37.6,46.4,46.4C36.2,55.1,22.4,60.5,7.7,65.1C-7,69.7,-22.5,73.3,-35.8,69C-49.1,64.6,-60.2,52.3,-67.1,37.9C-74,23.4,-76.6,6.8,-74.4,-9.1C-72.1,-25.1,-65.1,-40.5,-54,-52.9C-42.8,-65.4,-27.4,-75.1,-11.7,-77.2C4,-79.4,20,-74,32.8,-65.2Z" transform="translate(100 100)" />
            </svg>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <img 
                src="/lovable-uploads/a637c4db-4417-4d0e-86dd-faa0cdf3ea01.png" 
                alt="Prosterz Logo" 
                className="w-10 h-10 inline-block mr-2"
              />
              <span className="text-xl font-bold">Prosterz</span>
              <p className="text-gray-400 mt-2">Premium poster collection</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Shop</h3>
                <ul className="space-y-2">
                  <li><a href="#posters" className="text-gray-400 hover:text-white transition-colors">Cars</a></li>
                  <li><a href="#posters" className="text-gray-400 hover:text-white transition-colors">Popstars</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Info</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#delivery" className="text-gray-400 hover:text-white transition-colors">Delivery</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
            <p>© 2023 Prosterz. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
