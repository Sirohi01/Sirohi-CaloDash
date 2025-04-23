import React from 'react';

const DateSelector = ({ date, setDate }) => {
    return (
        <div className="mb-4">
        <label className="mr-2 font-medium">Select Date:</label>
        <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border px-2 py-1 rounded"
        />
        </div>
    );
};

export default DateSelector;
