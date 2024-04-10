import React, { useState } from 'react';

const ImageUploader = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Function to handle file selection
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setSelectedImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <h1>Image Uploader</h1>
            <input type="file" onChange={handleImageChange} accept="image/*" />
            {selectedImage && (
                <div>
                    <h2>Selected Image:</h2>
                    <img src={selectedImage} alt="Uploaded" style={{ maxWidth: '100%' }} />
                </div>
            )}
        </div>
    );
};

export default ImageUploader;