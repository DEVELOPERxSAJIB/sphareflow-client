import React, { useCallback, useRef, useState } from "react";
import HeaderUgcCreatorProfile from "../../components/Header/HeaderUgcCreatorProfile";
import { industries } from "../../constants/data";
import LocationCard from "../../components/ProfileElements/LocationCard";
import { FaCheck } from "react-icons/fa";
import BrandInformationList from "../../components/BrandElements/BrandInformationList";
import BrandBasicCardInfo from "../../components/BrandElements/BrandBasicCardInfo";
import UserInfoFormBrand from "../../components/BrandElements/UserInfoFormBrand";
import IndustriesForBrand from "../../components/BrandElements/IndustriesForBrand";
import HeaderBrand from "../../components/Header/HeaderBrand";

const BrandProfile = () => {
  const [uploadProfile, setUploadProfile] = useState("");
  const [userData, setUserData] = useState({});

  console.log(uploadProfile, userData);

  const [selectedIndustries, setSelectedIndustries] = useState([]);

  const profileSettingRef = useRef(null);
  const industriesRef = useRef(null);
  const locationRef = useRef(null);

  const handleIndustrySelect = useCallback((industry) => {
    setSelectedIndustries((prev) =>
      prev.includes(industry)
        ? prev.filter((i) => i !== industry)
        : [...prev, industry]
    );
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheckbox = (index) => {
    setCheckedItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="lg:px-20 md:px-5 sm:px-5 xs:px-5 pt-5 px-4 h-screen">
      <HeaderBrand />
      <div className="flex flex-col lg:flex-row mt-5">
        <div className="w-full lg:w-[30%] hidden lg:block lg:sticky top-5 h-max">
          <BrandInformationList
            scrollToSection={(index) => {
              switch (index) {
                case 0: // Change from 1 to 0
                  profileSettingRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                  break;
                case 1:
                  industriesRef.current?.scrollIntoView({ behavior: "smooth" });
                  break;
                case 2:
                  locationRef.current?.scrollIntoView({ behavior: "smooth" });
                  break;
                default:
                  break;
              }
            }}
          />
        </div>
        <div className="w-full lg:w-[70%] md:w-[100%] sm:w-[100%] xs:w-[100%]">
          <div
            ref={profileSettingRef}
            className="bg-[white] flex flex-col lg:flex-row rounded-[12px]"
          >
            <div className="lg:w-[25%] md:w-[100%] sm:w-[100%] xs:w-[100%] border-r mt-3">
              <BrandBasicCardInfo setUploadProfile={setUploadProfile} />
            </div>
            <div className="lg:w-[75%] md:w-[100%] sm:w-[100%] xs:w-[100%] flex justify-center items-center w-full h-full">
              <UserInfoFormBrand
                setUserData={setUserData}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
          <div
            ref={industriesRef}
            className="rounded-[12px] bg-[#fff] my-4 p-5"
            id="industries"
          >
            <IndustriesForBrand
              title={"Industries"}
              description={"Select at least 1 industry"}
              industries={industries}
              onSelect={handleIndustrySelect}
              selectedIndustries={selectedIndustries}
            />
          </div>
        </div>
      </div>

      <div className="py-3 flex flex-col justify-center gap-10">
        <section
          ref={locationRef}
          className="bg-[#fff] mt-8 px-5 border rounded-lg"
        >
          <LocationCard />
        </section>

        <section className="border rounded-lg">
          <div className="p-6 rounded-lg">
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
              <p className="text-gray-900">
                I agree to the{" "}
                <a href="#" className="text-blue-600 underline">
                  Terms and Conditions
                </a>
              </p>
            </div>

            {/* Other Checkboxes */}
            {[
              "Brand Terms and Conditions – Specific rules for content creators, including payment, intellectual property, and professional conduct.",
              "Privacy & Data Protection Policy – Ensuring personal data (name, surname, email, and address) remains confidential.",
            ].map((text, index) => (
              <div key={index} className="flex items-start space-x-3 mb-3">
                <button
                  onClick={() => toggleCheckbox(index + 2)}
                  className={`min-w-[29px] min-h-[27px] border-2 rounded-[12px] flex items-center justify-center ${
                    checkedItems[index + 2]
                      ? "bg-[#0011FF] border-[#0011FF]"
                      : "border-black"
                  }`}
                >
                  {checkedItems[index + 2] ? (
                    <FaCheck size={12} className="text-white " />
                  ) : (
                    ""
                  )}
                </button>
                <p className="text-gray-900">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="pb-12 text-center">
          <button
            className="bg-[#0011FF] px-6 md:px-16 py-3 rounded-[30px] mt-4 text-[#fff]"
            onClick={handleSubmit}
          >
            Let's Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandProfile;
