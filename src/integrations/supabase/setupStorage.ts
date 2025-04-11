
import { supabase } from "./client";

export const setupStorage = async () => {
  try {
    // Check if the posters bucket exists
    const { data: buckets, error: bucketsError } = await supabase.storage.listBuckets();
    
    if (bucketsError) {
      console.error("Error checking storage buckets:", bucketsError);
      return { success: false, error: bucketsError };
    }
    
    // Check if posters bucket exists
    const postersBucket = buckets?.find((bucket) => bucket.name === 'posters');
    
    if (!postersBucket) {
      // Create the posters bucket
      const { error: createError } = await supabase.storage.createBucket('posters', {
        public: true, // Make the bucket public
        fileSizeLimit: 10485760, // 10MB file size limit
      });
      
      if (createError) {
        console.error("Error creating posters bucket:", createError);
        return { success: false, error: createError };
      }
      
      console.log("Created posters storage bucket successfully");
    } else {
      console.log("Posters bucket already exists");
    }
    
    return { success: true };
    
  } catch (error) {
    console.error("Error setting up storage:", error);
    return { success: false, error };
  }
};
