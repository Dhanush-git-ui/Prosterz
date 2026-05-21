
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { useAdminAuth } from "@/components/admin/useAdminAuth";
import { PosterForm } from "@/components/admin/PosterForm";
import { DragDropUpload } from "@/components/admin/DragDropUpload";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Poster } from "@/data/posters";
import { posterPreviewImages } from "@/data/previewImages";
import { parsePrice } from "@/lib/pricing";

const EditPoster = () => {
  const { isAdmin } = useAdminAuth();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [poster, setPoster] = useState<Poster | null>(null);
  const { toast } = useToast();
  const previewImages = posterPreviewImages;

  useEffect(() => {
    if (id) {
      // Get poster from localStorage
      const storedPosters = JSON.parse(localStorage.getItem("posters") || "[]");
      const foundPoster = storedPosters.find((p: Poster) => p.id === parseInt(id));
      
      if (foundPoster) {
        setPoster(foundPoster);
        setUploadedImage(foundPoster.image);
      } else {
        toast({
          title: "Poster Not Found",
          description: "The poster you're trying to edit doesn't exist.",
          variant: "destructive",
        });
        navigate("/admin/dashboard");
      }
    }
  }, [id, navigate, toast]);

  const handleImageUploaded = (imageUrl: string) => {
    setUploadedImage(imageUrl);
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
          <div className="flex items-center mb-6">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate('/admin/dashboard')} 
              className="mr-2"
            >
              <ArrowLeft size={18} />
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-1">Edit Poster</h1>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-pink-400 rounded"></div>
            </div>
          </div>
          
          <div className="mb-6">
            <p className="text-gray-600 mb-4">Upload your poster image by dragging and dropping or clicking the area below.</p>
            <DragDropUpload 
              onImageUploaded={handleImageUploaded} 
              initialImage={poster?.image}
            />
          </div>

          {poster && (
            <PosterForm 
              previewImages={uploadedImage && !previewImages.includes(uploadedImage) ? [...previewImages, uploadedImage] : previewImages} 
              initialImageUrl={uploadedImage || poster.image}
              editMode={true}
              posterId={poster.id}
              initialValues={{
                title: poster.title,
                category: poster.category,
                subcategory: poster.subcategory,
                priceA4: String(parsePrice(poster.sizes.A4)),
                priceA3: String(parsePrice(poster.sizes.A3)),
              }}
            />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default EditPoster;
