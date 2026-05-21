
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAdminAuth } from "@/components/admin/useAdminAuth";
import { PosterForm } from "@/components/admin/PosterForm";
import { DragDropUpload } from "@/components/admin/DragDropUpload";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { SupabaseStatus } from "@/components/admin/SupabaseStatus";
import { posterPreviewImages } from "@/data/previewImages";

const AdminPoster = () => {
  const { isAdmin } = useAdminAuth();
  const navigate = useNavigate();
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const previewImages = posterPreviewImages;

  const handleImageUploaded = (imageUrl: string) => {
    console.log("Image uploaded in AdminPoster:", imageUrl);
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
              <h1 className="text-3xl font-bold text-gray-800 mb-1">Add New Poster</h1>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-pink-400 rounded"></div>
            </div>
          </div>
          
          {/* Display Supabase connection status */}
          <SupabaseStatus />
          
          <div className="mb-6">
            <p className="text-gray-600 mb-4">Upload your poster image by dragging and dropping or clicking the area below.</p>
            <DragDropUpload onImageUploaded={handleImageUploaded} />
          </div>

          <PosterForm 
            previewImages={uploadedImage && !previewImages.includes(uploadedImage) ? 
              [...previewImages, uploadedImage] : previewImages} 
            initialImageUrl={uploadedImage || ""}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default AdminPoster;
