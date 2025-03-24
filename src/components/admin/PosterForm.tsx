
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
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
import { PreviewImagesGrid } from "./PreviewImagesGrid";

// Form schema with validation
const formSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  category: z.enum(["cars", "popstars", "shoes"]),
  price: z.string().min(1, "Price is required"),
  imageUrl: z.string().min(1, "Image URL is required"),
});

export type FormValues = z.infer<typeof formSchema>;

interface PosterFormProps {
  previewImages: string[];
}

export const PosterForm = ({ previewImages }: PosterFormProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
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

  // Handle selecting a preview image
  const handleSelectPreviewImage = (imageUrl: string) => {
    form.setValue("imageUrl", imageUrl);
  };

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

  return (
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
                  <SelectItem value="shoes">Shoes</SelectItem>
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

        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Or select from available images:</h3>
          <PreviewImagesGrid 
            images={previewImages} 
            selectedImage={form.getValues("imageUrl")}
            onSelectImage={handleSelectPreviewImage}
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-indigo-600 to-pink-500 hover:from-indigo-700 hover:to-pink-600"
        >
          Add Poster
        </Button>
      </form>
    </Form>
  );
};
