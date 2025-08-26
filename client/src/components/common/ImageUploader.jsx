import { useState } from 'react';
import { Button, CircularProcess } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const ImageUploader = ({ onImageUpload }) => {
  const [isUploading, setIsUploading] = useState(false);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    //timeout simulation set for development testing
    // setTimeout(() => {
    //   const imageUrl = URL.createObjectURL(file);
    //   onImageUpload(imageUrl);
    //   setIsUploading(false);
    // }, 1000);
    // Simulate an API call
    try {
      await onImageUpload(file);
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div>
      <input
        accept="image/*"
        id="image-upload"
        type="file"
        onChange={handleImageUpload}
        style={{ display: "none" }}
      />
      <label htmlFor="image-upload">
        <Button
          variant="contained"
          color="primary"
          component="span"
          startIcon={<CloudUploadIcon />}
          disabled={isUploading}
        >
          {isUploading ? <CircularProgress size={24} /> : "Upload Image"}
        </Button>
      </label>
      {isUploading && <CircularProgress />}
    </div>
  );
};

export default ImageUploader;
