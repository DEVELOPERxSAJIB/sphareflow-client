import React, { useState } from "react";
import SelectorHeader from "../../components/SelectorHeader";
import Button from "../../components/Elements/Button";
import "../Stylesheet.css";

export default function SelectionPage() {
  const [selectedType, setSelectedType] = useState(null);

  const handleSubmit = () => {
    // Handle submission logic here
    console.log("Selected type:", selectedType);
  };

  return (
    <>
      <div className="bg-[#F1E7FD] lg:px-20 px-3 pt-5 min-h-screen">
        <SelectorHeader />

        <div className="min-h-screen flex flex-col items-center justify-center p-4">
          <div className="max-w-full w-full space-y-20 md:px-[20%]">
            <div className="role-boxes grid grid-cols-1 md:grid-cols-2 gap-8">
              <div
                className={`z-40 box-1 relative bg-white rounded-xl border-2 cursor-pointer transition-all ${
                  selectedType === "brand"
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 hover:border-blue-400 hover:shadow-md"
                }`}
                onClick={() => setSelectedType("brand")}
              >
                <h2 className="font-bebas text-[24px] md:py-20 md:px-8 font-normal text-[#4B19FF] text-center">
                  I AM A BRAND / COMPANY
                </h2>
              </div>

              <div
                className={`bg-white box-2 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedType === "creator"
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 hover:border-blue-400 hover:shadow-md"
                }`}
                onClick={() => setSelectedType("creator")}
              >
                <h2 className="font-bebas text-[24px] md:py-20 md:px-8 font-semibold text-[#4B19FF] text-center">
                  I AM AN UGC CREATOR
                </h2>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={!selectedType}
              className={`mx-auto flex py-3 px-24 rounded-full font-medium text-white transition-colors ${
                selectedType
                  ? "bg-[#0011FF] hover:bg-blue-600"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Let's go
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
