
import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { ImagePlus, Tag, FileType, DollarSign } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect } from "react";

// Form schema with validation
const formSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  category: z.enum(["cars", "popstars"]),
  price: z.string().min(1, "Price is required"),
  imageUrl: z.string().min(1, "Image URL is required"),
});

type FormValues = z.infer<typeof formSchema>;

const AdminPoster = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  
  useEffect(() => {
    // Check if user is admin
    const userRole = localStorage.getItem("userRole");
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    
    if (userRole !== "admin" || isAuthenticated !== "true") {
      toast({
        title: "Access denied",
        description: "You don't have permission to access this page.",
        variant: "destructive",
      });
      navigate("/");
    } else {
      setIsAdmin(true);
    }
  }, [navigate, toast]);
  
  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      category: "cars",
      price: "",
      imageUrl: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    try {
      // Format price with $ if not included
      const formattedPrice = data.price.startsWith("$") 
        ? data.price 
        : `$${data.price}`;
      
      // Create new poster object
      const newPoster = {
        id: Date.now(), // Generate unique ID
        title: data.title,
        category: data.category,
        price: formattedPrice,
        image: data.imageUrl,
      };
      
      // Get existing posters from localStorage or initialize empty array
      const existingPosters = JSON.parse(localStorage.getItem("posters") || "[]");
      
      // Add new poster to array
      existingPosters.push(newPoster);
      
      // Save updated posters back to localStorage
      localStorage.setItem("posters", JSON.stringify(existingPosters));
      
      toast({
        title: "Success!",
        description: "New poster has been added.",
      });
      
      // Reset form
      form.reset();
      
      // Redirect to home page
      navigate("/");
    } catch (error) {
      console.error("Error adding poster:", error);
      toast({
        title: "Error",
        description: "Failed to add new poster.",
        variant: "destructive",
      });
    }
  };

  if (!isAdmin) {
    return null; // Don't render anything while checking permissions
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-pink-50 pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6"
      >
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Add New Poster</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-pink-400 rounded"></div>
            <p className="text-gray-600 mt-4">Fill in the details to add a new poster to the collection.</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Poster Title</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <FileType className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input 
                          placeholder="e.g. Ferrari LaFerrari" 
                          className="pl-10" 
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <div className="relative">
                          <Tag className="absolute left-3 top-3 h-4 w-4 text-gray-400 z-10" />
                          <SelectTrigger className="pl-10">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </div>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="cars">Cars</SelectItem>
                        <SelectItem value="popstars">Popstars</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input 
                          placeholder="24.99" 
                          className="pl-10" 
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image URL</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <ImagePlus className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input 
                          placeholder="https://example.com/image.jpg" 
                          className="pl-10" 
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-indigo-600 to-pink-500 hover:from-indigo-700 hover:to-pink-600"
              >
                Add Poster
              </Button>
            </form>
          </Form>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminPoster;
