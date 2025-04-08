
import React from "react";
import { Control } from "react-hook-form";
import { FileType } from "lucide-react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PosterFormValues } from "./PosterFormSchema";

interface BasicInfoFieldsProps {
  control: Control<PosterFormValues>;
}

export const BasicInfoFields = ({ control }: BasicInfoFieldsProps) => {
  return (
    <FormField
      control={control}
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
  );
};
