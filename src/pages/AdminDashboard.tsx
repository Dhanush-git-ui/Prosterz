
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAdminAuth } from "@/components/admin/useAdminAuth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { PosterTable } from "@/components/admin/PosterTable";
import { usePosterData } from "@/hooks/usePosterData";

const AdminDashboard = () => {
  const { isAdmin } = useAdminAuth();
  const navigate = useNavigate();
  const { posters, categories } = usePosterData();
  const [activeTab, setActiveTab] = useState("all");
  
  // Navigate to add poster page
  const handleAddPoster = () => {
    navigate("/admin/add-poster");
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
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-xl p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-1">Admin Dashboard</h1>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-pink-400 rounded"></div>
              <p className="mt-2 text-gray-600">Manage your posters and categories</p>
            </div>
            <Button 
              onClick={handleAddPoster}
              className="bg-gradient-to-r from-indigo-600 to-pink-500 hover:from-indigo-700 hover:to-pink-600"
            >
              <PlusCircle className="mr-2 h-4 w-4" /> Add New Poster
            </Button>
          </div>
          
          <Tabs 
            defaultValue="all" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="mb-6 flex flex-wrap">
              <TabsTrigger value="all">All Posters</TabsTrigger>
              <TabsTrigger value="albums">Albums</TabsTrigger>
              <TabsTrigger value="sneakers">Sneakers</TabsTrigger>
              <TabsTrigger value="sports">Sports</TabsTrigger>
              <TabsTrigger value="movies">Movies</TabsTrigger>
              <TabsTrigger value="marvel">Marvel</TabsTrigger>
              <TabsTrigger value="dc">DC</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <PosterTable 
                posters={posters} 
                categories={categories}
                filter="all"
              />
            </TabsContent>
            
            <TabsContent value="albums">
              <PosterTable 
                posters={posters} 
                categories={categories}
                filter="albums"
              />
            </TabsContent>
            
            <TabsContent value="sneakers">
              <PosterTable 
                posters={posters} 
                categories={categories}
                filter="sneakers"
              />
            </TabsContent>
            
            <TabsContent value="sports">
              <PosterTable 
                posters={posters} 
                categories={categories}
                filter="sports"
              />
            </TabsContent>
            
            <TabsContent value="movies">
              <PosterTable 
                posters={posters} 
                categories={categories}
                filter="movies"
              />
            </TabsContent>
            
            <TabsContent value="marvel">
              <PosterTable 
                posters={posters} 
                categories={categories}
                filter="marvel"
              />
            </TabsContent>
            
            <TabsContent value="dc">
              <PosterTable 
                posters={posters} 
                categories={categories}
                filter="dc"
              />
            </TabsContent>
          </Tabs>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
