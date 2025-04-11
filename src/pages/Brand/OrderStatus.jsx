import React, { useState } from "react";
import HeaderBrand from "../../components/Header/HeaderBrand";
import { FaCheck } from "react-icons/fa6";
import { HiOutlineUpload } from "react-icons/hi";
import { BsClock } from "react-icons/bs";
import { LuImageUp } from "react-icons/lu";
import { Link } from "react-router-dom";

const OrderStatus = () => {
  const [checkedItems, setCheckedItems] = useState({});
  

  const toggleCheckbox = (index) => {
    setCheckedItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="lg:px-20 md:px-5 sm:px-5 xs:px-5 pt-5 px-4 h-screen">
      <HeaderBrand />

      <div className="max-w-3xl mx-auto my-6 text-[#000000] text-[24px]">
        <h1 className="text-[24px] font-bebas font-bold mb-4">Order Status</h1>
      </div>

      <div className="flex gap-3  p-6 max-w-3xl mx-auto bg-[#FFFCF3] rounded-t-lg items-center">
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
        <span className="text-sm font-semibold text-gray-700">Status</span>
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
                  Payment
                </h3>
                <p className="text-[14px]  text-[#686868]">
                  Amount : 199.00 USD
                </p>
              </div>
              <div className="self-center px-3 py-1 text-[16px] font-medium bg-[#31F47F4D] text-[#19984C] rounded-full">
                Completed
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
                    Requirements
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

          <div className="relative mt-6">
            <div className="absolute -left-[25px] top-[23%] flex items-center justify-center transform -translate-y-1/2 h-4 w-4 border border-[#0011FF] bg-[#fff] rounded-full space-y-4">
              <FaCheck color="#fff" size={12} />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex w-full justify-between">
                <div className="flex flex-col gap-3">
                  <h3 className="text-[16px] font-medium text-[#000000]">
                    Delivery Status
                  </h3>
                  <p className="flex flex-row gap-1 items-center text-[14px]  text-[#686868]">
                    <BsClock />
                    Expected: 12/25/2024
                  </p>
                </div>
                <div className="self-center px-3 py-1 text-[16px] font-medium bg-[#CCCFFF] text-[#0011FF] rounded-full">
                  In Process
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-6">
            <div className="absolute -left-[25px] top-[35%] flex items-center justify-center transform -translate-y-1/2 h-4 w-4 border border-[#0011FF] bg-[#fff] rounded-full">
              <FaCheck color="#fff" size={12} />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex w-full justify-between">
                <div className="flex flex-col gap-3">
                  <h3 className="text-[16px] font-medium text-[#000000]">
                    Delivery Proof
                  </h3>
                </div>
                <div className="self-center flex items-center justify-center gap-2 px-3 py-1 text-[16px] font-medium border border-[#0011FF] text-[#0011FF] rounded-lg">
                  <LuImageUp size={22} />
                  Upload Files
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-10 py-10">
        <button className="bg-[#0011FF] hidden md:block px-4 py-2 rounded-md text-[#fff]">
          <Link
            to={"/brand/search-creator"}
            className="max-w-[228px] flex items-center gap-2 text-[16px] font-normal text-start"
          >
            I reject the order, the UGC creator did not comply with the
            contract.
          </Link>
        </button>
        <button className="bg-[#0011FF] hidden md:block px-4 py-2 rounded-md text-[#fff]">
          <Link
            to={"/brand/order-feeback"}
            className="max-w-[228px] flex items-center gap-2 text-[16px] font-normal text-start"
          >
            I confirm the received order, everything complies with the contract.
          </Link>
        </button>
      </div>

      <section className="border rounded-lg max-w-3xl mx-auto">
        <div className="py-6 rounded-lg">
          {/* Terms and Conditions */}
          <div className="flex items-start space-x-3 mb-3">
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
              Rejection should only be used in cases where the creator has
              clearly failed to meet the agreed terms. Minor subjective
              differences or preferences are not valid reasons for rejection. In
              case of disputes, an investigation will be conducted to validate
              the brand’s request. If the rejection is justified, the UGC
              creator will not be paid.
            </p>
          </div>

          <div className="flex items-start space-x-3 mb-3">
            <button
              onClick={() => toggleCheckbox(2)}
              className={`min-w-[29px] min-h-[27px] border-2 rounded-[12px] flex items-center justify-center ${
                checkedItems[2]
                  ? "bg-[#0011FF] border-[#0011FF]"
                  : "border-black"
              }`}
            >
              {checkedItems[2] ? (
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
        </div>
      </section>
    </div>
  );
};

export default OrderStatus;
