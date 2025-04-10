import React, { useEffect, useRef } from "react";
import { FaAngleDown } from "react-icons/fa";

const CustomSelectTag = ({
  options,
  onChange,
  isOpen,
  onToggle,
  selected,
  loading,
}) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onToggle(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onToggle]);

  const selectedLabel =
    options.find((item) => item.value === selected)?.label ||
    options[0]?.label ||
    "Select Default";

  return (
    <div ref={dropdownRef} className="relative">
      {/* Toggle dropdown */}
      <div
        onClick={() => onToggle(!isOpen)}
        className="w-full h-[42px] flex items-center justify-between rounded-[12px] border border-[#DCDCDC] bg-white text-[14px] text-placeholder-light px-3 cursor-pointer"
      >
        <span className={`${selected ? "text-black" : "text-[#A2A2A2]"}`}>
          {selectedLabel}
        </span>
        <FaAngleDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <ul className="absolute w-full bg-white border border-[#DCDCDC] rounded-[12px] mt-2 shadow-lg z-10 max-h-[250px] overflow-y-auto scrollbar-hide">
          {loading ? (
            <li className="px-4 py-2 text-[14px] text-gray-500 cursor-default">
              Loading...
            </li>
          ) : options.length > 0 ? (
            options.map((option) => (
              <li
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  onToggle(false);
                }}
                className={`px-4 py-2 hover:bg-gray-200 text-[14px] cursor-pointer ${
                  selected === option.value ? "bg-gray-200" : ""
                }`}
              >
                {option.label}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-[14px] text-gray-500 cursor-default">
              No options available
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default CustomSelectTag;
