
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface FormActionsProps {
  isSubmitting?: boolean;
}

export const FormActions = ({ isSubmitting = false }: FormActionsProps) => {
  const navigate = useNavigate();
  
  return (
    <>
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-indigo-600 to-pink-500 hover:from-indigo-700 hover:to-pink-600"
      >
        {isSubmitting ? "Adding..." : "Add Poster"}
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
    </>
  );
};
