/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosCalendar } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";

const DateSelector = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="mb-4 flex flex-col">
      <label className="sr-only mb-2 font-button text-sm font-semibold text-color-text xl:text-lg">
        Due Date
      </label>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        className="w-full rounded-md border-2 border-color-background py-2 pl-10 pr-10 text-color-text shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-color-primary-btn"
        popperClassName="rounded-lg text-color-text bg-color-tasks-bg"
        calendarClassName="bg-color-sidebar shadow-lg rounded-lg"
        dayClassName={(date) => "hover:bg-color-sidebar/60 rounded-full"}
        dateFormat="MMMM d, yyyy"
        placeholderText="Select a date"
        popperPlacement="bottom"
        customInput={<CustomInput />}
      />
    </div>
  );
};

const CustomInput = React.forwardRef(({ value, onClick, onChange }, ref) => (
  <div className="relative">
    <input
      value={value}
      onChange={onChange}
      onClick={onClick}
      ref={ref}
      className="w-full rounded-md border-2 border-color-background py-2 pl-10 pr-10 text-color-text shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-color-primary-btn"
      placeholder="Select a date"
    />
    <IoIosCalendar className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 fill-color-primary-btn" />
    {value && (
      <button
        onClick={(e) => {
          e.stopPropagation();
          onChange(null);
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2"
        type="button"
      >
        <IoCloseCircle className="h-5 w-5 fill-red-500" />
      </button>
    )}
  </div>
));

export default DateSelector;
