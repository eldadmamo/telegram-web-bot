import React, { useState } from 'react';

const FuelType = [
    'Benzine',
    'Diesel',
    'Hybrid',
    'Electric'
];

function App() {
    const [selectedFuel, setSelectedFuel] = useState('');

    const handleChange = (e) => {
        setSelectedFuel(e.target.value);
    };

    return (
        <div>
            <select required value={selectedFuel} onChange={handleChange} style={{ padding: '10px', fontSize: '16px' }}>
                <option value="">Fuel Type</option>
                {FuelType.map((condition, index) => (
                    <option key={index} value={condition}>{condition}</option>
                ))}
            </select>

        </div>
    );
}

export default App;
