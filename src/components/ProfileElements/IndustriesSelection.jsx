import React, { useState } from "react";

const IndustriesSelection = ({
  title,
  description,
  industries,
  onSelect,
  selectedIndustries,
}) => {
  const [showAll, setShowAll] = useState(false);

  const visibleIndustries = showAll ? industries : industries.slice(0, 6);

  const toggleShowAll = () => setShowAll(!showAll);

  return (
    <div className="flex flex-col justify-center">
      <h3 className="font-switzer font-bold text-[20px]">{title}</h3>
      <p className="font-switzer text-[#686868] mt-1">{description}</p>
      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {visibleIndustries.map((industry, index) => (
          <button
            key={index}
            className={`border px-3 py-2 rounded-[22px] ${
              selectedIndustries.includes(industry.value)
                ? "bg-[#0011FF] text-white"
                : "text-gray-500 hover:bg-gray-100"
            } transition-all duration-200`}
            onClick={() => onSelect(industry.value)}
          >
            {industry.label}
          </button>
        ))}
      </div>
      {industries.length > 6 && (
        <button
          onClick={toggleShowAll}
          className="border mt-3 border-[#0011FF] bg-[#0011FF] text-white text-[16px] rounded-full px-16 py-2 self-center w-fit"
        >
          {showAll ? "See Less" : "See More"}
        </button>
      )}
    </div>
  );
};

export default IndustriesSelection;
