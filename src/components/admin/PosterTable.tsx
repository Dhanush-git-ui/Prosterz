
import React, { useState } from "react";
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableRow, 
  TableHead, 
  TableCell 
} from "@/components/ui/table";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { 
  Edit, 
  Trash2, 
  MoveVertical,
  Image as ImageIcon, 
  AlertCircle 
} from "lucide-react";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Poster } from "@/data/types";
import { useToast } from "@/hooks/use-toast";

interface PosterTableProps {
  posters: Poster[];
  categories: string[];
  filter: "all" | "albums" | "sneakers" | "sports" | "movies" | "marvel" | "dc";
}

export const PosterTable = ({ posters, categories, filter }: PosterTableProps) => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [posterToDelete, setPosterToDelete] = useState<Poster | null>(null);
  const { toast } = useToast();

  // Filter posters based on selected category/filter
  const filteredPosters = posters.filter(poster => {
    if (filter === "all") return true;
    if (filter === "marvel" || filter === "dc") {
      return poster.category === "movies" && poster.subcategory === filter;
    }
    return poster.category === filter;
  });

  // Handle category change
  const handleCategoryChange = (posterId: number, newCategory: string) => {
    // Get existing posters from localStorage
    const existingPosters = JSON.parse(localStorage.getItem("posters") || "[]");
    
    // Find the poster to update
    const updatedPosters = existingPosters.map((poster: Poster) => {
      if (poster.id === posterId) {
        // Update category and remove subcategory if not movies
        const updatedPoster = {
          ...poster,
          category: newCategory
        };
        
        if (newCategory !== "movies") {
          updatedPoster.subcategory = undefined;
        }
        
        return updatedPoster;
      }
      return poster;
    });
    
    // Save updated posters back to localStorage
    localStorage.setItem("posters", JSON.stringify(updatedPosters));
    
    // Show success toast
    toast({
      title: "Category Updated",
      description: "Poster category has been updated successfully.",
    });
    
    // Reload page to refresh data
    window.location.reload();
  };

  // Handle subcategory change for movie posters
  const handleSubcategoryChange = (posterId: number, newSubcategory: string) => {
    // Get existing posters from localStorage
    const existingPosters = JSON.parse(localStorage.getItem("posters") || "[]");
    
    // Find the poster to update
    const updatedPosters = existingPosters.map((poster: Poster) => {
      if (poster.id === posterId) {
        // Update subcategory
        return {
          ...poster,
          subcategory: newSubcategory
        };
      }
      return poster;
    });
    
    // Save updated posters back to localStorage
    localStorage.setItem("posters", JSON.stringify(updatedPosters));
    
    // Show success toast
    toast({
      title: "Subcategory Updated",
      description: "Poster subcategory has been updated successfully.",
    });
    
    // Reload page to refresh data
    window.location.reload();
  };

  // Handle poster deletion
  const confirmDelete = () => {
    if (!posterToDelete) return;
    
    // Get existing posters from localStorage
    const existingPosters = JSON.parse(localStorage.getItem("posters") || "[]");
    
    // Filter out the poster to delete
    const updatedPosters = existingPosters.filter(
      (poster: Poster) => poster.id !== posterToDelete.id
    );
    
    // Save updated posters back to localStorage
    localStorage.setItem("posters", JSON.stringify(updatedPosters));
    
    // Reset state and show success toast
    setShowDeleteDialog(false);
    setPosterToDelete(null);
    
    toast({
      title: "Poster Deleted",
      description: `"${posterToDelete.title}" has been removed successfully.`,
    });
    
    // Reload page to refresh data
    window.location.reload();
  };

  // Show delete confirmation dialog
  const showDeleteConfirmation = (poster: Poster) => {
    setPosterToDelete(poster);
    setShowDeleteDialog(true);
  };

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              {filter === "movies" && <TableHead>Subcategory</TableHead>}
              <TableHead>A4 Price</TableHead>
              <TableHead>A3 Price</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPosters.length > 0 ? (
              filteredPosters.map((poster) => (
                <TableRow key={poster.id}>
                  <TableCell>
                    <div className="h-16 w-16 overflow-hidden rounded-md border">
                      <img
                        src={poster.image}
                        alt={poster.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{poster.title}</TableCell>
                  <TableCell>
                    <Select
                      defaultValue={poster.category}
                      onValueChange={(value) => handleCategoryChange(poster.id, value)}
                    >
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="albums">Albums</SelectItem>
                        <SelectItem value="sneakers">Sneakers</SelectItem>
                        <SelectItem value="sports">Sports</SelectItem>
                        <SelectItem value="movies">Movies</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  
                  {filter === "movies" && (
                    <TableCell>
                      {poster.category === "movies" && (
                        <Select
                          defaultValue={poster.subcategory || "other"}
                          onValueChange={(value) => handleSubcategoryChange(poster.id, value)}
                        >
                          <SelectTrigger className="w-28">
                            <SelectValue placeholder="Subcategory" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dc">DC</SelectItem>
                            <SelectItem value="marvel">Marvel</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    </TableCell>
                  )}
                  
                  <TableCell>{poster.sizes.A4}</TableCell>
                  <TableCell>{poster.sizes.A3}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => showDeleteConfirmation(poster)}
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={filter === "movies" ? 7 : 6}
                  className="h-24 text-center"
                >
                  <div className="flex flex-col items-center justify-center text-gray-500">
                    <ImageIcon className="h-8 w-8 mb-2 opacity-40" />
                    <p>No posters found in this category</p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Poster</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete{" "}
              <span className="font-semibold">{posterToDelete?.title}</span>?
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-red-500 text-white hover:bg-red-600"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
