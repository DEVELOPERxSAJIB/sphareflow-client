import React from "react";

const CustomRange = ({ minRange, maxRange, setMinRange, setMaxRange, minPlaceHolder, maxPlaceHolder }) => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <input
          className="border px-2 border-[#dcdcdc] rounded-[12px] w-[140px] h-[42px]"
          type="number"
          placeholder={minPlaceHolder}
          value={minRange}
          maxLength={5}
          onChange={(e) => setMinRange(e.target.value)}
        />
        <p className="ml-3 mr-3 pt-3 text-[12px]">To</p>
        <input
          className="border px-2 border-[#dcdcdc] rounded-[12px] w-[140px] h-[42px]"
          type="number"
          placeholder={maxPlaceHolder}
          value={maxRange}
          maxLength={5}
          onChange={(e) => setMaxRange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default CustomRange;
