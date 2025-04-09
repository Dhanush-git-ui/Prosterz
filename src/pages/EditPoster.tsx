
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

const EditPoster = () => {
  const { isAdmin } = useAdminAuth();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [poster, setPoster] = useState<Poster | null>(null);
  const { toast } = useToast();
  
  const previewImages = [
    "/lovable-uploads/97887c36-5bb5-45b3-b163-da34aafff753.png",
    "/lovable-uploads/167ca374-f186-466d-93b9-55ad3cf82d0c.png",
    "/lovable-uploads/5eebaa3f-6875-4580-b7fa-b2e13fe7630e.png",
    "/lovable-uploads/494cd1a5-593b-48c9-9f8d-90a8a52dc728.png",
    "/lovable-uploads/2d1b2d0a-1b4f-45cf-8388-905f15f44a6d.png",
    "/lovable-uploads/a8b46723-86bf-4747-9599-9600f4cec148.png",
    "/lovable-uploads/1836880e-b38f-470b-b38e-332b4a89e90c.png",
    "/lovable-uploads/a9230ae5-f7f1-45b6-8170-45a1b584fc8c.png",
    "/lovable-uploads/7cc7b66b-fb61-4c00-ad48-63f49a035a00.png",
    "/lovable-uploads/50e1e322-7d76-4507-9465-ec9af542ff8f.png",
    "/lovable-uploads/19cbeb0b-982a-4168-ae89-3c66f269d8b7.png",
    "/lovable-uploads/c9ae4602-7abc-4cf0-890c-3c83554475b7.png",
    "/lovable-uploads/900f507c-7cb5-4735-a12c-58d03ba34d7b.png",
    "/lovable-uploads/1e113fae-1117-432f-aed8-6c4c6f607cfd.png",
    "/lovable-uploads/a569b8e9-7b2a-4f82-b56f-419f0e1b9698.png",
    "/lovable-uploads/63f56bc2-c12d-4c4e-ad2e-ef7ecb9ed408.png",
    "/lovable-uploads/44bf5969-8c36-4527-aab2-bc27bf031ec1.png",
    "/lovable-uploads/4304ad5d-1375-4102-a5c8-a1f0764cbb61.png",
    "/lovable-uploads/9d8bdc86-d65b-45e3-8dcc-ba4a43cce84a.png",
    "/lovable-uploads/27ffc1f8-9a48-40ba-aee9-ccb52f2d5283.png",
    "/lovable-uploads/2ab6faf1-f3f3-4802-9069-28b8175b3374.png",
    "/lovable-uploads/016d19da-2838-4374-b644-0b7992c34fc9.png",
    "/lovable-uploads/eb0e2058-5b28-45c1-9d57-1c951aa1ba3c.png",
    // Adding new uploaded images
    "/lovable-uploads/a69b8046-49f0-493e-b520-3ae195f66319.png",
    "/lovable-uploads/a06cd3a1-9626-4fc2-94f7-7d27848b62fd.png",
    "/lovable-uploads/81878a10-bcdb-48fa-8031-4e3acddb47b8.png",
    "/lovable-uploads/e95eafe6-e351-42e7-a111-45cc67599a16.png",
    "/lovable-uploads/f49cb557-f61f-43a5-b1e7-67cb218b3fcf.png",
    "/lovable-uploads/608ba133-6a5a-4173-8205-6ee83f8f7c6d.png",
    "/lovable-uploads/3d98ecec-6e8c-41d3-83b1-f0ec51971ff6.png",
    "/lovable-uploads/aa7fb0df-7ad6-41a3-9e61-5f83fe53d8a9.png",
    "/lovable-uploads/9cb189f7-7e11-4d4a-94e0-e65245470f31.png",
    "/lovable-uploads/b7d713b4-098a-4ccc-9ea1-c92ec06e083f.png",
    "/lovable-uploads/86398209-c105-471f-a2c0-04a6e33603e2.png",
    "/lovable-uploads/a16f602b-5d86-474d-b4c7-03699d363a5b.png",
    "/lovable-uploads/fd3b709e-82c0-418b-b867-1066474d5300.png",
  ];

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
                priceA4: poster.sizes.A4.replace(/[₹$]/g, ''),
                priceA3: poster.sizes.A3.replace(/[₹$]/g, ''),
              }}
            />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default EditPoster;
