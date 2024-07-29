/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { format } from "date-fns";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosCalendar } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";
import { ChevronLeft, ChevronRight } from "lucide-react";
const DateSelector = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="mb-4 flex flex-col">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        className=""
        popperClassName="bg-color-tasks-bg shadow-md rounded-md border border-color-background text-color-text"
        calendarClassName="bg-color-tasks-bg"
        dayClassName={(date) => {
          const isSelected = date.getTime() === selectedDate?.getTime();
          const isToday = date.toDateString() === new Date().toDateString();
          return `
            relative m-2 p-1 text-center text-sm 
            ${isSelected ? "bg-color-primary text-white" : ""}
            ${isToday ? "font-bold text-color-text bg-color-primary/20" : "text-color-text/70 hover:bg-color-primary/80 hover:text-white"}
            rounded-md
          `;
        }}
        weekDayClassName={() =>
          "text-black rounded-md w-9 font-title font-semibold text-[0.8rem] "
        }
        monthClassName={() => "flex  flex-col space-y-4 p-3"}
        dateFormat="PPP"
        showPopperArrow={false}
        placeholderText="Pick a date"
        popperPlacement="bottom-start"
        customInput={<CustomInput />}
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className="flex items-center justify-between px-2 py-2">
            <button
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
              type="button"
              className="rounded-md p-1 text-black hover:bg-color-primary hover:text-color-tasks-bg"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="font-title text-sm font-semibold text-black">
              {format(date, "MMMM yyyy")}
            </div>
            <button
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
              type="button"
              className="rounded-md p-1 text-black hover:bg-color-primary hover:text-color-tasks-bg"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
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
      className="w-full rounded-md border border-color-background bg-color-tasks-bg px-3 py-2 pr-10 text-sm text-color-text placeholder:text-color-text/50 focus:border-color-primary focus:outline-none focus:ring-1 focus:ring-color-primary"
      placeholder="Pick a date"
    />
    <IoIosCalendar className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-color-text/70" />
  </div>
));

export default DateSelector;
