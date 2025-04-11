import React, { useState } from "react";
import HeaderBrand from "../../components/Header/HeaderBrand";
import { FaCheck } from "react-icons/fa6";
import { HiOutlineUpload } from "react-icons/hi";
import { BiSolidError } from "react-icons/bi";
import { Link } from "react-router-dom";
import CustomSelectTag from "../../components/BrandElements/CustomSelectTag";
import { ratings } from "../../constants/data";

const RatingAndFeedback = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const [openDropdown, setOpenDropdown] = useState(null);
  const [ratingValue, setRatingValue] = useState();

  const toggleCheckbox = (index) => {
    setCheckedItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleRatingValue = (value) => {
    setRatingValue(value);
  };

  return (
    <div className="lg:px-20 md:px-5 sm:px-5 xs:px-5 pt-5 px-4 h-screen">
      <HeaderBrand />

      <div className="max-w-3xl mx-auto my-6 text-[#000000] text-[24px]">
        <h1 className="text-[24px] font-bebas font-bold mb-4">
          Receive the order
        </h1>
      </div>

      <div className="flex gap-3  p-6 max-w-3xl mx-auto bg-[#FFFCF3] rounded-t-lg items-center">
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
        <span className="text-sm font-semibold text-gray-700">Active</span>
      </div>
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-b-lg">
        <div className="relative mt-6 border-l-2 border-[#0011FF] pl-4">
          <div className="relative ">
            <div className="absolute -left-[25px] top-[16%] flex items-center justify-center transform -translate-y-1/2 h-4 w-4 border border-[#0011FF] bg-[#0011FF] rounded-full">
              <FaCheck color="#fff" size={12} />
            </div>
            <div className="flex w-full justify-between">
              <div className="flex flex-col gap-3">
                <h3 className="text-[16px] font-medium text-[#000000]">
                  Rate your experience with this UGC creator:
                </h3>
                <p className="text-[14px]  text-[#686868]">
                  (1 = Very poor, 5 = Excellent)
                </p>
              </div>
              <div className="self-center px-3 py-1 text-[16px] font-medium w-36">
                <CustomSelectTag
                  selected={ratingValue}
                  onChange={handleRatingValue}
                  options={ratings}
                  isOpen={openDropdown === "rating"}
                  onToggle={(val) => setOpenDropdown(val ? "rating" : null)}
                />
              </div>
            </div>
          </div>

          <div className="relative mt-6">
            <div className="absolute -left-[25px] top-[8%] flex items-center justify-center transform -translate-y-1/2 h-4 w-4 border border-[#0011FF] bg-[#fff] rounded-full space-y-4">
              <FaCheck color="#fff" size={12} />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex w-full justify-between">
                <div className="flex flex-col gap-3">
                  <h3 className="text-[16px] font-medium text-[#000000]">
                    Private feedback (optional, visible only to SphereFlow):
                  </h3>
                </div>
                <div className="self-center flex items-center justify-center gap-2 px-3 py-1 text-[16px] font-medium border border-[#0011FF] text-[#0011FF] rounded-lg">
                  <HiOutlineUpload size={22} />
                  Upload Files
                </div>
              </div>
              <textarea
                className="w-full p-2 border border-[#F1E7FD] rounded-md text-[#686868] text-[14px] min-h-[100px]"
                placeholder="Enter your requirements here..."
                name=""
                id=""
              />
            </div>
          </div>
        </div>
        <div className="my-6 px-4">
          <p className="text-[#686868] text-[14px] font-normal">
            Please provide an honest and fair rating based on:
          </p>
          <ul className="">
            <li className="text-[#686868] text-[14px] font-normal">
              • The quality of the delivered content
            </li>
            <li className="text-[#686868] text-[14px] font-normal">
              • Respect of deadlines and contract terms
            </li>
            <li className="text-[#686868] text-[14px] font-normal">
              • Professionalism and communication
            </li>
            <li className="text-[#686868] text-[14px] font-normal">
              • Overall satisfaction with the collaboration
            </li>
          </ul>
        </div>
        <div className="my-3 px-4">
          <p className="flex justify-start items-center gap-1 text-[#686868] text-[14px] font-normal">
            <BiSolidError size={20} className="text-yellow-600" /> Important:
          </p>
          <ul className="">
            <li className="text-[#686868] text-[14px] font-normal">
              • A rating below 3 stars requires a short explanation.
            </li>
            <li className="text-[#686868] text-[14px] font-normal">
              • Unjustified negative ratings may lead to a review of your
              account.
            </li>
            <li className="text-[#686868] text-[14px] font-normal">
              • Ratings should be based on objective criteria, not personal
              preferences.
            </li>
          </ul>
        </div>
      </div>

      <section className="border rounded-lg max-w-3xl mx-auto">
        <div className="py-6 rounded-lg">
          {/* Terms and Conditions */}
          <div className="flex items-center space-x-3 mb-3">
            <button
              onClick={() => toggleCheckbox(1)}
              className={`min-w-[29px] min-h-[27px] border-2 rounded-[12px] flex items-center justify-center ${
                checkedItems[1]
                  ? "bg-[#0011FF] border-[#0011FF]"
                  : "border-black"
              }`}
            >
              {checkedItems[1] ? (
                <FaCheck size={12} className="text-white " />
              ) : (
                ""
              )}
            </button>
            <p className="text-[#000000] text-[12px]">
              I confirm that I have read the Terms and Conditions and the Brand
              Policies, and I certify that the information provided is true.
            </p>
          </div>

          <div className="flex items-center justify-center gap-10 py-3">
            <button className="bg-[#0011FF] hidden md:block px-4 py-2 rounded-md text-[#fff]">
              <Link
                to={"/brand/order-feeback"}
                className="max-w-[228px] flex items-center gap-2 text-[16px] font-normal text-start"
              >
                Send
              </Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RatingAndFeedback;
