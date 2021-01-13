import React from 'react';

const Display = ({ data }) => {
    console.log('Display: ', data);
    return (
        <div>
            {data.map((item, i) => (
                <div key={i}>{item}</div>
            ))}
        </div>
    );
};

export default Display;
