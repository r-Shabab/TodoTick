/* eslint-disable react/prop-types */
import { useState } from "react";

const DateButton = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);
    if (onDateChange) {
      onDateChange(date);
    }
  };

  return (
    <div className="relative inline-block">
      <input
        type="date"
        name="date"
        id="date"
        value={selectedDate}
        onChange={handleDateChange}
        className="rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-color-primary-btn"
      />
    </div>
  );
};

export default DateButton;
