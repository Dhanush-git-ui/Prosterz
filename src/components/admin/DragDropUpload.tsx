
import React, { useRef } from "react";
import { UploadingIndicator } from "./upload/UploadingIndicator";
import { UploadPrompt } from "./upload/UploadPrompt";
import { UploadedPreview } from "./upload/UploadedPreview";
import { useImageUpload } from "./upload/useImageUpload";

interface DragDropUploadProps {
  onImageUploaded: (imageUrl: string) => void;
  initialImage?: string;
}

export const DragDropUpload = ({ onImageUploaded, initialImage }: DragDropUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { isDragging, setIsDragging, uploadedImage, isUploading, handleFileUpload } = 
    useImageUpload({ onImageUploaded, initialImage });

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  return (
    <div className="mb-6">
      <div
        onClick={handleFileClick}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`
          border-2 border-dashed rounded-lg p-6 transition-colors duration-200 
          cursor-pointer flex flex-col items-center justify-center min-h-[200px]
          ${isDragging ? "border-indigo-500 bg-indigo-50" : "border-gray-300 hover:border-indigo-400 hover:bg-gray-50"}
          ${uploadedImage ? "border-green-500 bg-green-50" : ""}
        `}
      >
        {isUploading ? (
          <UploadingIndicator />
        ) : !uploadedImage ? (
          <UploadPrompt isDragging={isDragging} />
        ) : (
          <UploadedPreview imageUrl={uploadedImage} />
        )}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />
      </div>
    </div>
  );
};
