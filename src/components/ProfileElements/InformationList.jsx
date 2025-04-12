import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsStripe } from "react-icons/bs";

const InformationList = ({ scrollToSection }) => {
  const [clickedItem, setClickedItem] = useState(0);

  const items = [
    "Basic Information",
    "Industries",
    "Equipment",
    "Filming",
    "Pets",
    "Add UGC",
    "Upload UCG",
  ];

  const handleClick = (index) => {
    setClickedItem(index);
    scrollToSection(index);
  };

  return (
    <>
      <div className="max-w-[360px] rounded-[12px] lg:block md:hidden sm:hidden xs:hidden">
        <Link className="flex items-center justify-center gap-3 shadow-md translate-all duration-300 bg-white text-slate-800 hover:bg-red-500 w-full px-6 md:px-16 py-3 rounded-[30px] mb-4 hover:text-[#fff]">
          Delete Account
        </Link>
      </div>
      <div className="max-w-[360px] rounded-[12px] bg-white shadow-md lg:block md:hidden sm:hidden xs:hidden">
        <ul className="text-start cursor-pointer relative">
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => handleClick(index)}
              className="flex items-center font-switzer border-b py-5 text-[#686868] font-semibold relative lg:text-[15px] md:text-[12px] sm:text-[12px] xs:text-[12px] pl-6"
            >
              {item}
              {clickedItem === index && (
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[3px] h-[60%] bg-[#0011FF]"></span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-[360px] rounded-[12px] lg:block md:hidden sm:hidden xs:hidden">
        <Link to={'/creator/profile/stripe-connect'} className="flex items-center justify-center gap-3 shadow-md translate-all duration-300 bg-[#0011FF] text-white hover:bg-blue-600 w-full px-6 md:px-16 py-3 rounded-[30px] mt-4 hover:text-[#fff]">
          <BsStripe />
          Connect Stripe*
        </Link>
      </div>
    </>
  );
};

export default InformationList;
