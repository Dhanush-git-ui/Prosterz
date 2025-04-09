
import React, { useState } from "react";
import { Control, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { Tag, Film, Plus } from "lucide-react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PosterFormValues } from "./PosterFormSchema";

interface CategoryFieldsProps {
  control: Control<PosterFormValues>;
  watch: UseFormWatch<PosterFormValues>;
  setValue: UseFormSetValue<PosterFormValues>;
}

export const CategoryFields = ({ control, watch, setValue }: CategoryFieldsProps) => {
  const [showNewCategory, setShowNewCategory] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  
  // Get the current selected category
  const currentCategory = watch("category");

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      // Add new category to localStorage
      const existingCategories = JSON.parse(localStorage.getItem("customCategories") || "[]");
      if (!existingCategories.includes(newCategory)) {
        const updatedCategories = [...existingCategories, newCategory];
        localStorage.setItem("customCategories", JSON.stringify(updatedCategories));
      }
      
      // Set the form value
      setValue("category", newCategory);
      setShowNewCategory(false);
      setNewCategory("");
    }
  };

  // Get custom categories from localStorage
  const customCategories = JSON.parse(localStorage.getItem("customCategories") || "[]");

  return (
    <>
      {!showNewCategory ? (
        <FormField
          control={control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select 
                onValueChange={(value) => {
                  if (value === "new") {
                    setShowNewCategory(true);
                  } else {
                    field.onChange(value);
                    if (value !== "movies") {
                      setValue("subcategory", undefined);
                    }
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
                  {customCategories.map((category: string) => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                  <SelectItem value="new">
                    <div className="flex items-center">
                      <Plus className="mr-2 h-4 w-4" />
                      Add New Category
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      ) : (
        <div className="space-y-4">
          <FormItem>
            <FormLabel>New Category Name</FormLabel>
            <div className="flex gap-2">
              <Input 
                value={newCategory} 
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="Enter new category name"
              />
              <Button 
                type="button" 
                onClick={handleAddCategory}
                disabled={!newCategory.trim()}
              >
                Add
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setShowNewCategory(false)}
              >
                Cancel
              </Button>
            </div>
          </FormItem>
        </div>
      )}

      {currentCategory === "movies" && (
        <FormField
          control={control}
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
    </>
  );
};
