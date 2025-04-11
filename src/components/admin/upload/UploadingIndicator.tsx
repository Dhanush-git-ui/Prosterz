
import React from "react";

export const UploadingIndicator: React.FC = () => (
  <div className="flex flex-col items-center">
    <div className="w-12 h-12 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mb-2"></div>
    <p className="text-gray-500">Uploading your image...</p>
  </div>
);
