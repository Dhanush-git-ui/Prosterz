
import React from "react";
import { Control } from "react-hook-form";
import { DollarSign } from "lucide-react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PosterFormValues } from "./PosterFormSchema";

interface PriceFieldsProps {
  control: Control<PosterFormValues>;
}

export const PriceFields = ({ control }: PriceFieldsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FormField
        control={control}
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
        control={control}
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
  );
};
