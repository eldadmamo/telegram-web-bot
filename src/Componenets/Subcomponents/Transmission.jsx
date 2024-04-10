import React, { useState } from 'react';

const Transmission = [
    'Manual',
    'Automatic'
];

function App() {
    const [selectedTransmission, setSelectedTransmission] = useState('');

    const handleChange = (e) => {
        setSelectedTransmission(e.target.value);
    };

    return (
        <div>
            <select required value={selectedTransmission} onChange={handleChange} style={{ padding: '10px', fontSize: '16px' }}>
                <option value="">Transmission</option>
                {Transmission.map((condition, index) => (
                    <option key={index} value={condition}>{condition}</option>
                ))}
            </select>

        </div>
    );
}

export default App;
