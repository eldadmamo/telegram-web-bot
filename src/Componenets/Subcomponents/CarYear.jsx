import React, { useState } from 'react';
import CarYear from "../../list/Caryear";

function App() {
    const [selectedYear, setSelectedYear] = useState('');

    const handleChange = (e) => {
        setSelectedYear(e.target.value);
    };

    return (
        <div>
            <select required value={selectedYear} onChange={handleChange} style={{ padding: '10px', fontSize: '16px' }}>
                <option value="">Year</option>
                {CarYear.map((condition, index) => (
                    <option key={index} value={condition}>{condition}</option>
                ))}
            </select>

        </div>
    );
}

export default App;
