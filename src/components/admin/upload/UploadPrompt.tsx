
import React from "react";
import { Upload } from "lucide-react";

interface UploadPromptProps {
  isDragging: boolean;
}

export const UploadPrompt: React.FC<UploadPromptProps> = ({ isDragging }) => (
  <>
    <Upload className={`h-12 w-12 mb-2 ${isDragging ? "text-indigo-500" : "text-gray-400"}`} />
    <p className="text-center text-gray-500 mb-1">
      {isDragging ? "Drop your image here" : "Drag and drop your poster image here"}
    </p>
    <p className="text-center text-gray-400 text-sm">or click to browse</p>
  </>
);
