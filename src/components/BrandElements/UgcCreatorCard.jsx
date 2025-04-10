import { Star } from "lucide-react";
import React, { useState } from "react";
import { FaCircle, FaHeart } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const UgcCreatorCard = () => {
  const [addFav, setAddFav] = useState(false);

  return (
    <div className="max-w-xs rounded-2xl shadow-lg overflow-hidden">
      {/* Top Status */}
      <div className="relative">
        <img
          className="w-full h-52 object-cover object-top"
          src="https://img.freepik.com/free-photo/young-person-intership_23-2149315589.jpg?semt=ais_country_boost&w=740"
          alt="Dylan"
        />
        <div className="absolute flex items-center gap-2 top-2 left-2 bg-white text-[#333] text-sm font-medium px-3 py-1 rounded-full shadow">
          <FaCircle color="#13CF13" size={12} />
          Availeable (confirmed)
        </div>
        <div className="absolute top-2 right-2">
          {addFav ? (
            <FaHeart
              onClick={() => setAddFav((prev) => !prev)}
              color="#ff3838"
              size={20}
              className="cursor-pointer"
            />
          ) : (
            <FaHeart
              onClick={() => setAddFav((prev) => !prev)}
              color="#bdc3c7"
              size={20}
              className="cursor-pointer"
            />
          )}
        </div>

        <div className="name-location absolute bottom-5 left-2">
          <Link
            to={"/creator"}
            className="text-[30px] ps-1 shadow-md font-bold capitalize text-[#fff]"
          >
            Emmili
          </Link>
          <p className="text-[16px] font-normal flex justify-start items-center gap-1 text-[#fff]">
            <MdOutlineLocationOn size={28} />
            Location in Paris
          </p>
        </div>
        <div className="absolute -bottom-4 left-3 text-[14px] font-semibold shadow-md bg-white text-gray-900 rounded-full px-3 py-1 w-fit">
          €150 / day
        </div>
      </div>

      <div className="p-4">
        <div className="font-medium text-gray-800 py-3">
          Creator UGC / Product Presantation / Testimonial
        </div>

        <div className="flex items-center space-x-1 text-yellow-600">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
          ))}
          <span className="text-gray-500 text-sm ml-1">(3)</span>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {["Video production", "Capcut", "Testimony", "Photograpy"].map(
            (tag) => (
              <button
                key={tag}
                className="bg-[#ecf3f4] text-[#2a6c7d] px-3 py-1 rounded-full text-xs font-medium"
              >
                {tag}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default UgcCreatorCard;
