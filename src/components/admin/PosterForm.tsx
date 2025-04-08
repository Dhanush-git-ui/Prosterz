
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { ImagePlus, Tag, FileType, DollarSign, Film } from "lucide-react"; // Added Film import
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
  category: z.enum(["albums", "sneakers", "sports", "movies"]),
  subcategory: z.enum(["dc", "marvel", "other"]).optional(),
  priceA4: z.string().min(1, "A4 Price is required"),
  priceA3: z.string().optional(),
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
      category: "albums",
      subcategory: undefined,
      priceA4: "",
      priceA3: "",
      imageUrl: "",
    },
  });

  // Get the current selected category
  const currentCategory = form.watch("category");
  
  // Handle selecting a preview image
  const handleSelectPreviewImage = (imageUrl: string) => {
    form.setValue("imageUrl", imageUrl);
  };

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    try {
      // Format prices with $ if not included
      const formattedPriceA4 = data.priceA4.startsWith("$") 
        ? data.priceA4 
        : `$${data.priceA4}`;
      
      // Set default A3 price based on category and subcategory
      let defaultA3Price = "";
      if (data.category === "movies" && (data.subcategory === "dc" || data.subcategory === "marvel")) {
        defaultA3Price = "$109";
      } else {
        // For other categories, default to A4 price
        defaultA3Price = formattedPriceA4;
      }
      
      const formattedPriceA3 = data.priceA3 && data.priceA3.length > 0
        ? (data.priceA3.startsWith("$") ? data.priceA3 : `$${data.priceA3}`)
        : defaultA3Price;
      
      // Create new poster object
      const newPoster = {
        id: Date.now(), // Generate unique ID
        title: data.title,
        category: data.category,
        subcategory: data.subcategory,
        image: data.imageUrl,
        sizes: {
          A4: formattedPriceA4,
          A3: formattedPriceA3,
        },
        cartAvailable: true
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
      
      // Reset form but stay on the page to allow adding more posters
      form.reset();
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
                    placeholder="e.g. The Dark Knight" 
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
                onValueChange={(value) => {
                  field.onChange(value);
                  if (value !== "movies") {
                    form.setValue("subcategory", undefined);
                  }
                }} 
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
                  <SelectItem value="albums">Albums</SelectItem>
                  <SelectItem value="sneakers">Sneakers</SelectItem>
                  <SelectItem value="sports">Sports</SelectItem>
                  <SelectItem value="movies">Movies</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {currentCategory === "movies" && (
          <FormField
            control={form.control}
            name="subcategory"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Movie Universe</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <div className="relative">
                      <Film className="absolute left-3 top-3 h-4 w-4 text-gray-400 z-10" />
                      <SelectTrigger className="pl-10">
                        <SelectValue placeholder="Select universe" />
                      </SelectTrigger>
                    </div>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="dc">DC Comics</SelectItem>
                    <SelectItem value="marvel">Marvel</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="priceA4"
            render={({ field }) => (
              <FormItem>
                <FormLabel>A4 Price</FormLabel>
                <FormControl>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      placeholder="79" 
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
            name="priceA3"
            render={({ field }) => (
              <FormItem>
                <FormLabel>A3 Price (Optional)</FormLabel>
                <FormControl>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      placeholder="109" 
                      className="pl-10" 
                      {...field} 
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

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

        <div className="text-center mt-4">
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => navigate('/')}
            className="mx-auto"
          >
            View All Posters
          </Button>
        </div>
      </form>
    </Form>
  );
};
