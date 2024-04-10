import watermark from '../../images/Hulemekina.png';
import {Resizer} from "react-image-file-resizer/build/index";
import React, {useState} from "react"; // Import your watermark image

function HandleImageChange(){
    const [images, setImages] = useState([]);

    const handleImageChanging = async (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 10) {
            alert('You can only upload up to 10 photos.');
            return;
        }

        const compressedImages = await Promise.all(
            files.map(async (file) => {
                try {
                    // Resize the image using Resizer from react-image-file-resizer
                    const compressedImage = await resizeImage(file);
                    // Add watermark to the compressed image
                    const watermarkedImage = await addWatermark(compressedImage);
                    return watermarkedImage;
                } catch (error) {
                    console.error('Image compression error:', error);
                    return null;
                }
            })
        );

        setImages((prevImages) => [...prevImages, ...compressedImages.filter(Boolean)]);
    };

    const addWatermark = (image) => {
        return new Promise((resolve, reject) => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            const watermarkImg = new Image();
            watermarkImg.src = watermark;

            watermarkImg.onload = function () {
                // Draw the image on the canvas
                canvas.width = image.width;
                canvas.height = image.height;
                ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

                // Draw the watermark on the canvas (bottom right and top center)
                const watermarkSize = Math.min(canvas.width, canvas.height) * 0.1; // Adjust watermark size here
                ctx.drawImage(watermarkImg, canvas.width - watermarkSize, canvas.height - watermarkSize, watermarkSize, watermarkSize);
                ctx.drawImage(watermarkImg, canvas.width / 2 - watermarkSize / 2, 0, watermarkSize, watermarkSize);

                // Convert canvas to base64 encoded image
                const watermarkedImage = canvas.toDataURL('image/jpeg', 0.8); // Adjust image quality here
                resolve(watermarkedImage);
            };
        });
    };

    const resizeImage = (file) => {
        return new Promise((resolve, reject) => {
            Resizer.imageFileResizer(
                file,
                300, // width
                300, // height
                'JPEG', // format
                80, // quality
                0, // rotation
                (uri) => {
                    resolve(uri);
                },
                'base64', // outputType
                300, // maxWidth (optional)
                300 // maxHeight (optional)
            );
        });
    };

    return(
        <div>
            <label>
                Upload Images (up to 10):
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageChanging}
                    required
                />
            </label>
        </div>
    )
}


export default HandleImageChange;



