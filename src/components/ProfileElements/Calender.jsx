import React, { useState } from "react";
import dayjs from "dayjs";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDates, setSelectedDates] = useState({});

  const handleDateClick = (day) => {
    setSelectedDates((prev) => ({
      ...prev,
      [day]: !prev[day],
    }));
  };

  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");
  const daysInMonth = endOfMonth.date();
  const firstDayOfWeek = startOfMonth.day(); // 0 (Sunday) to 6 (Saturday)

  const prevMonth = () => setCurrentDate(currentDate.subtract(1, "month"));
  const nextMonth = () => setCurrentDate(currentDate.add(1, "month"));

  // Generate days for calendar
  const days = [];
  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push(<div key={`empty-${i}`} className="text-gray-400"></div>);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(
      <div
        key={day}
        className={`cursor-pointer rounded-full text-[24px] font-medium text-center ${
            selectedDates[day] ? "text-[#686868]" : "text-[#4B19FF]"
          }`}
          onClick={() => handleDateClick(day)}
      >
        {day}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-4 w-full">
      {/* Month & Year */}
      <div className="flex justify-between items-center mb-3">
        <button onClick={prevMonth}>
          <ChevronLeft size={18} />
        </button>
        <h2 className="font-bebas text-[24px]">
          {currentDate.format("MMMM YYYY")}
        </h2>
        <button onClick={nextMonth}>
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Availability Legend */}
      <div className="flex items-center text-[24px] mb-2">
        <span className="text-[#0011FF] font-medium font-bebas">AVAILABLE</span>
        <span className="mx-1 text-gray-400">/</span>
        <span className="text-gray-600 font-bebas">UNAVAILABLE</span>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 py-4 gap-1 text-[24px] font-bebas text-[#333333]">
        <div className="text-center font-medium">MO</div>
        <div className="text-center font-medium">TU</div>
        <div className="text-center font-medium">WE</div>
        <div className="text-center font-medium">TH</div>
        <div className="text-center font-medium">FR</div>
        <div className="text-center font-medium">SA</div>
        <div className="text-center font-medium">SU</div>
        {days}
      </div>

      {/* Last Update */}
      <p className="text-[24px] text-[#333333] mt-4">
        Last calendar update: 1 day ago
      </p>
    </div>
  );
};

export default Calendar;
