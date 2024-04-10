import React, { useState } from 'react';

const Engine = [
    "below 800 CC",
    "800 CC",
    "1000 CC",
    "1200 CC",
    "1400 CC",
    "1500 CC",
    "1600 CC",
    "1800 CC",
    "2000 CC",
    "2400 CC",
    "2500 CC",
    "2800 CC",
    "3000 CC",
    "above 3000 CC"
];

function App() {
    const [selectedEngine, setSelectedEngine] = useState('');

    const handleChange = (e) => {
        setSelectedEngine(e.target.value);
    };

    return (
        <div>
            <select required value={selectedEngine} onChange={handleChange} style={{ padding: '10px', fontSize: '16px' }}>
                <option value="">Engine</option>
                {Engine.map((condition, index) => (
                    <option key={index} value={condition}>{condition}</option>
                ))}
            </select>

        </div>
    );
}

export default App;