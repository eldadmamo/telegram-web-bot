import React, { useState } from 'react';
import watermarkImage from '../../images/Hulemekina.png';

const ImageUploader = ({ onImageChange }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Function to handle file selection
    const handleImageChange = (event) => {
        const files = event.target.files;
        const imagesArray = [];

        for (let i = 0; i < files.length; i++) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    canvas.width = img.width;
                    canvas.height = img.height;

                    // Draw the uploaded image onto the canvas
                    ctx.drawImage(img, 0, 0);

                    // Load and draw the watermark image onto the canvas
                    const watermark = new Image();
                    watermark.src = watermarkImage;
                    watermark.onload = () => {
                        // Adjust the size of the watermark image
                        const watermarkWidth = canvas.width * 0.2; // 20% of canvas width
                        const watermarkHeight = (watermark.width / watermark.height) * watermarkWidth;

                        // Position the watermark at the bottom right
                        const x = canvas.width - watermarkWidth - 10; // Right padding
                        const y = canvas.height - watermarkHeight - 10; // Bottom padding

                        ctx.drawImage(watermark, x, y, watermarkWidth, watermarkHeight);

                        const dataURL = canvas.toDataURL('image/jpeg');
                        imagesArray.push(dataURL);

                        if (imagesArray.length === files.length) {
                            setSelectedImage(imagesArray);
                            onImageChange(imagesArray);
                        }
                    };
                };
                img.src = reader.result;
            };
            reader.readAsDataURL(files[i]);
        }
    };

    return (
        <div>
            <h2>Upload Image:</h2>
            <input type="file" onChange={handleImageChange} accept="image/*" multiple required/>
        </div>
    );
};

export default ImageUploader;
