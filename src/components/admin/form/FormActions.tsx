
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Save } from "lucide-react";

interface FormActionsProps {
  isSubmitting?: boolean;
  isEditMode?: boolean;
  onSave?: () => void;
}

export const FormActions = ({ isSubmitting = false, isEditMode = false, onSave }: FormActionsProps) => {
  const navigate = useNavigate();
  
  const handleSave = () => {
    if (onSave) {
      onSave();
    }
  };
  
  return (
    <>
      <Button 
        type="submit" 
        disabled={isSubmitting}
        onClick={handleSave}
        className="w-full bg-gradient-to-r from-indigo-600 to-pink-500 hover:from-indigo-700 hover:to-pink-600"
      >
        {isSubmitting ? (isEditMode ? "Saving..." : "Adding...") : (
          <div className="flex items-center justify-center gap-2">
            <Save className="h-4 w-4" />
            {isEditMode ? "Save Poster" : "Add Poster"}
          </div>
        )}
      </Button>

      <div className="text-center mt-4">
        <Button 
          type="button" 
          variant="outline" 
          onClick={() => navigate('/admin/dashboard')}
          className="mx-auto"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>
      </div>
    </>
  );
};
