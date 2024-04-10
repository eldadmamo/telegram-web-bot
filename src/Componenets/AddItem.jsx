import React, {useEffect, useState} from 'react';
import './carForm.css'; // Import the CSS file

import CarModelDropdown from "./Subcomponents/CarModelDropdown";
import CarCondition from "./Subcomponents/CarCondition";
import CarYear from "./Subcomponents/CarYear";
import FuelType from "./Subcomponents/FuelType";
import Transmission from "./Subcomponents/Transmission";
import Color from "./Subcomponents/Color";
import Engine from "./Subcomponents/Engine";
import ImageUploader from "./Subcomponents/ImageUploader"; // Import the ImageUploader component


function CarForm({ onAddCar }) {
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [price, setPrice] = useState('');
    const [images, setImages] = useState([]);
    const [selectedCar, setSelectedCar] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const [make, model] = selectedCar.split(' ');
        const newCar = {
            make,
            model,
            year: year,
            price: price,
            images: images
        };
        onAddCar(newCar);
        // Reset form fields
        setMake('');
        setModel('');
        setYear('');
        setPrice('');
        setImages([]);
    };

    const handleImageChange = (selectedImages) => {
        setImages(selectedImages);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1 style={{textAlign: "center"}}>HuleMekina</h1>
            <label>
                Condition*:
                <CarCondition/>
            </label>
            <label>
                <CarModelDropdown selectedMake={make} value={model} onChange={setModel}/>
            </label>
            <label>
                Year*:
                <CarYear/>
            </label>
            <label>
                Price:
                <input
                    type="text"
                    value={price}
                    onChange={(e) => {
                        const inputPrice = e.target.value;
                        // Replace any non-digit characters with an empty string
                        const formattedPrice = inputPrice.replace(/\D/g, '');
                        // Add commas after every three digits
                        const numberWithCommas = formattedPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                        // Update the state with the formatted price
                        setPrice(numberWithCommas);
                    }}
                    required
                />
            </label>
            {/* Include the ImageUploader component */}
            <ImageUploader onImageChange={handleImageChange} />
            {images.length > 0 && (
                <div className="preview">
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Preview ${index + 1}`} style={{ width: '100px', height: '100px' }}/>
                    ))}
                </div>
            )}
            <label>
                Fuel*:
                <FuelType />
            </label>
            <label>
                Transmission*:
                <Transmission/>
            </label>
            <label>
                Color*:
                <Color/>
            </label>
            <label>
                Engine*:
                <Engine/>
            </label>

            <button type="submit">Add Car</button>
        </form>
    );
}

export default CarForm;
