import React, { useState } from 'react';

const ConditionOptions = [
    'new',
    'used',
];

function CarCondition() {
    const [selectedCondition, setSelectedCondition] = useState('');

    const handleChange = (e) => {
        setSelectedCondition(e.target.value);
    };

    return (
        <div>
            <select required value={selectedCondition} onChange={handleChange} style={{ padding: '10px', fontSize: '16px' }}>
                <option value="">Condition</option>
                {ConditionOptions.map((condition, index) => (
                    <option key={index} value={condition}>{condition}</option>
                ))}
            </select>
        </div>
    );
}

export default CarCondition;
