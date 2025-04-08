
import React from "react";
import { Control, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { Tag, Film } from "lucide-react";
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
import { PosterFormValues } from "./PosterFormSchema";

interface CategoryFieldsProps {
  control: Control<PosterFormValues>;
  watch: UseFormWatch<PosterFormValues>;
  setValue: UseFormSetValue<PosterFormValues>;
}

export const CategoryFields = ({ control, watch, setValue }: CategoryFieldsProps) => {
  // Get the current selected category
  const currentCategory = watch("category");

  return (
    <>
      <FormField
        control={control}
        name="category"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Category</FormLabel>
            <Select 
              onValueChange={(value) => {
                field.onChange(value);
                if (value !== "movies") {
                  setValue("subcategory", undefined);
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
