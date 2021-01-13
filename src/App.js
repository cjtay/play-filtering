import React, { useState, useEffect } from 'react';

import './App.css';

const data = [1, 4, 6, 7, 8, 10, 20, 30];

function App() {
    const [filter, setFilter] = useState('');

    const handleChange = (e) => {
        const selectedFilter = e.target.value;
        setFilter(selectedFilter);
    };

    const handleFilter = () => {
        const filteredData = data.filter((item) => {
            return item > filter;
        });
        console.log(filteredData);
    };

    useEffect(() => {
        handleFilter();
    });

    return (
        <div className="App">
            <label htmlFor="time">Choose a time</label>
            <select
                name="time"
                id="time"
                onChange={handleChange}
                onBlur={handleChange}
                value={filter}
            >
                <option disabled defaultValue="-"></option>
                <option value="5">more than 5</option>
                <option value="10">more than 10</option>
                <option value="30">more than 30</option>
            </select>
            <h2>Selected: {filter}</h2>
            <button onClick={handleFilter}>Filter</button>
        </div>
    );
}

export default App;
