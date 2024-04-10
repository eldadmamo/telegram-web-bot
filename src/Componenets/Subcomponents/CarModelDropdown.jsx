import React, { useState } from 'react';
import cars from "../../list/Car";
const CarSelector = () => {
    const [selectedCompany, setSelectedCompany] = useState('');
    const [selectedModel, setSelectedModel] = useState('');

    // Define a list of car companies and their models


    // Handler for when company selection changes
    const handleCompanyChanges = (event) => {
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
                Make*:
                <select required value={selectedCompany} onChange={handleCompanyChanges} style={{ padding: '10px', fontSize: '16px' }}>
                    <option value="">Company</option>
                    {Object.keys(cars).map((company) => (
                        <option key={company} value={company}>
                            {company}
                        </option>
                    ))}
                </select>
            </label>
            <br />
            <label>
                Model*:
                <select value={selectedModel} onChange={handleModelChange} disabled={!selectedCompany} style={{ padding: '10px', fontSize: '16px' }}>
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