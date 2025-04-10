import React from "react";

const EquipmentsSelection = ({
  title,
  description,
  equipments,
  onSelect,
  selectedEquipment,
}) => {
  return (
    <div className="flex flex-col justify-center">
      <h3 className="font-switzer font-bold text-[20px]">{title}</h3>
      <p className="font-switzer text-[#686868] mt-1">{description}</p>
      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {equipments.map((equipment, index) => (
          <button
            key={index}
            className={`border px-3 py-2 rounded-[22px] ${
                selectedEquipment.includes(equipment.value)
                ? "bg-[#0011FF] text-white"
                : "text-gray-500 hover:bg-gray-100"
            } transition-all duration-200`}
            onClick={() => onSelect(equipment.value)}
          >
            {equipment.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EquipmentsSelection;
