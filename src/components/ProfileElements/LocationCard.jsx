import { Fullscreen } from "lucide-react";
import React, { useState } from "react";

const LocationCard = () => {
  const [location, setLocation] = useState("1 street, 75001 Paris");

  return (
    <div className="w-full p-4">
      {/* Title */}
      <h3 className="font-bebas text-[24px] text-[#000]">
        YOUR LOCALISATION :
      </h3>

      {/* Location Input */}
      <div className="mt-2 bg-[#FFFCF3] text-[#4B19FF] py-2 rounded-lg text-sm">
        <span>Something like </span>
        <span className="underline cursor-pointer">{location}</span>
      </div>

      <div style={{
        borderBottomLeftRadius : '30px',
        borderBottomRightRadius : '30px'
      }} className="mt-4 overflow-hidden rounded-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3678.077125026889!2d89.56624807603896!3d22.799605924610674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQ3JzU4LjYiTiA4OcKwMzQnMDcuOCJF!5e0!3m2!1sen!2sbd!4v1743664193805!5m2!1sen!2sbd"
          className="w-full"
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default LocationCard;
