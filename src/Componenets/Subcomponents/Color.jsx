import React, { useState } from 'react';

const Color = [
    'Black',
    'Blue',
    'Dark blue',
    'Sky blue',
    'Brown',
    'Burgundy',
    'White',
    'Yellow',
    'Green',
    'Silver',
    'Red',
    'Kaki (1D9)',
    'Purple',
    'Pencil',
    'Grey',
    'Golden',
    'Champagne',
    'Orange'
];

function App() {
    const [selectedColor, setSelectedColor] = useState('');

    const handleChange = (e) => {
        setSelectedColor(e.target.value);
    };

    return (
        <div>
            <select required value={selectedColor} onChange={handleChange} style={{ padding: '10px', fontSize: '16px' }}>
                <option value="">Color</option>
                {Color.map((condition, index) => (
                    <option key={index} value={condition}>{condition}</option>
                ))}
            </select>

        </div>
    );
}

export default App;
