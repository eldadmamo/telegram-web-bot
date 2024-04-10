import React, { useState } from 'react';

const CarSelector = () => {
    const [selectedCompany, setSelectedCompany] = useState('');
    const [selectedModel, setSelectedModel] = useState('');

    // Define a list of car companies and their models
    const cars = {
        Toyota: ['Corolla', 'Camry', 'Prius'],
        Honda: ['Accord', 'Civic', 'CR-V'],
        Ford: ['Fusion', 'Mustang', 'Escape'],
    };

    // Handler for when company selection changes
    const handleCompanyChange = (event) => {
        const selectedCompany = event.target.value;
        setSelectedCompany(selectedCompany);
        setSelectedModel(''); // Reset selected model when company changes
    };

    // Handler for when model selection changes
    const handleModelChange = (event) => {
        setSelectedModel(event.target.value);
    };

    return (
        <div>
            <label>
                Make Company of the car:
                <select value={selectedCompany} onChange={handleCompanyChange}>
                    <option value="">Select Company</option>
                    {Object.keys(cars).map((company) => (
                        <option key={company} value={company}>
                            {company}
                        </option>
                    ))}
                </select>
            </label>
            <br />
            <label>
                Model:
                <select value={selectedModel} onChange={handleModelChange} disabled={!selectedCompany}>
                    <option value="">Select Model</option>
                    {selectedCompany && cars[selectedCompany].map((model) => (
                        <option key={model} value={model}>
                            {model}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
};

export default CarSelector;
