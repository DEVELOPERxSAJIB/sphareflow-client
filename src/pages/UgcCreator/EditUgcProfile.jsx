import React from "react";
import { useState, useRef, useCallback } from "react";
import InformationList from "../../components/ProfileElements/InformationList";
import BasicInfoCard from "../../components/ProfileElements/BasicInfoCard";
import UserInfoForm from "../../components/ProfileElements/UserInfoForm";
import { equipment, filming, industries, pets } from "../../constants/data";
import IndustriesSelection from "../../components/ProfileElements/IndustriesSelection";
import EquipmentsSelection from "../../components/ProfileElements/EquipmentsSelection";
import AddUGC from "../../components/ProfileElements/AddUGC";
import Package from "../../components/ProfileElements/Package";
import Calendar from "../../components/ProfileElements/Calender";
import LocationCard from "../../components/ProfileElements/LocationCard";
import { FaCheck } from "react-icons/fa";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import HeaderUgcCreatorProfile from "../../components/Header/HeaderUgcCreatorProfile";
import { Link } from "react-router-dom";

function EditProfile() {
  const [uploadProfile, setUploadProfile] = useState("");
  const [userData, setUserData] = useState({});

  console.log(uploadProfile, userData);

  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [selectedFilming, setSelectedFilming] = useState([]);
  const [selectedPets, setSelectedPets] = useState([]);

  const profileSettingRef = useRef(null);
  const industriesRef = useRef(null);
  const equipmentRef = useRef(null);
  const filmingRef = useRef(null);
  const petsRef = useRef(null);
  const addUCGRef = useRef(null);
  const createPackageRef = useRef(null);

  const handleIndustrySelect = useCallback((industry) => {
    setSelectedIndustries((prev) =>
      prev.includes(industry)
        ? prev.filter((i) => i !== industry)
        : [...prev, industry]
    );
  }, []);

  const handleEquipmentSelect = useCallback((equipment) => {
    setSelectedEquipment((prev) =>
      prev.includes(equipment)
        ? prev.filter((i) => i !== equipment)
        : [...prev, equipment]
    );
  }, []);

  const handleFilmingSelect = useCallback((filming) => {
    setSelectedFilming((prev) =>
      prev.includes(filming)
        ? prev.filter((i) => i !== filming)
        : [...prev, filming]
    );
  }, []);

  const handlePetsSelect = useCallback((pets) => {
    setSelectedPets((prev) =>
      prev.includes(pets) ? prev.filter((i) => i !== pets) : [...prev, pets]
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
      <HeaderUgcCreatorProfile />
      <div className="flex flex-col lg:flex-row mt-5">
        <div className="w-full lg:w-[30%] hidden lg:block lg:sticky top-5 h-max">
          <InformationList
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
                  equipmentRef.current?.scrollIntoView({ behavior: "smooth" });
                  break;
                case 3:
                  filmingRef.current?.scrollIntoView({ behavior: "smooth" });
                  break;
                case 4:
                  petsRef.current?.scrollIntoView({ behavior: "smooth" });
                  break;
                case 5:
                  addUCGRef.current?.scrollIntoView({ behavior: "smooth" });
                  break;
                case 6:
                  createPackageRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
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
              <BasicInfoCard setUploadProfile={setUploadProfile} />
            </div>
            <div className="lg:w-[75%] md:w-[100%] sm:w-[100%] xs:w-[100%] flex justify-center items-center w-full h-full">
              <UserInfoForm
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
            <IndustriesSelection
              title={"Industries"}
              description={"Select at least 1 industry"}
              industries={industries}
              onSelect={handleIndustrySelect}
              selectedIndustries={selectedIndustries}
            />
          </div>
          <div
            ref={equipmentRef}
            className="rounded-[12px] bg-[#fff] py-4 p-5"
            id="equipment"
          >
            <EquipmentsSelection
              title={"Equipment"}
              description={"With what equipment could you shoot your UGC?*"}
              equipments={equipment}
              onSelect={handleEquipmentSelect}
              selectedEquipment={selectedEquipment}
            />
          </div>
          <div
            ref={filmingRef}
            className="rounded-[12px] bg-[#fff] mt-4 p-5"
            id="filming"
          >
            <IndustriesSelection
              title={"Filmin"}
              description={
                "With what types of people could you shoot your UGC?*"
              }
              industries={filming}
              onSelect={handleFilmingSelect}
              selectedIndustries={selectedFilming}
            />
          </div>
          <div
            ref={petsRef}
            className="rounded-[12px] bg-[#fff] mt-4 p-5"
            id="pets"
          >
            <IndustriesSelection
              title={"Pets"}
              description={"Do you have pets that could appear in your UGC?"}
              industries={pets}
              onSelect={handlePetsSelect}
              selectedIndustries={selectedPets}
            />
          </div>
          <div
            ref={addUCGRef}
            className="rounded-[12px] bg-[#fff] mt-4 p-5"
            id="add-ucg"
          >
            <AddUGC />
          </div>

          <div ref={createPackageRef} className="mt-8">
            <div className="flex justify-between">
              <h3 className="font-bold font-switzer text-[20px]">Package</h3>
              <Link to={'/creator/profile/package'} className="bg-[#0011FF] px-5 text-[#fff] py-2 rounded-[22px]">
                Create Package
              </Link>
            </div>
            <div className="flex gap-2 flex-wrap flex-col md:flex-row justify-between">
              <Package widthClass="md:w-[48.9%] w-full" />
            </div>
          </div>

          <div className="py-4">
            <Calendar />
          </div>
        </div>
      </div>

      <div className="py-3 flex flex-col justify-center gap-10">
        <section className="bg-[#fff] mt-8 px-5 border rounded-lg">
          <LocationCard />
        </section>

        <section className="px-5 border rounded-lg">
          <div className="bg-[#F4EAF7] p-6 rounded-lg">
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
              "UGC Creator Terms and Conditions – Specific rules for content creators, including payment, intellectual property, and professional conduct.",
              "Privacy & Data Protection Policy – Ensuring personal data (name, surname, email, and address) remains confidential.",
              "Mandatory Requirements for UGC Creator Accounts",
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

            {/* Bullet List */}
            <ul className="ml-8 text-gray-700 text-sm">
              <li>
                • All fields marked with (*) must be completed to create an
                account.
              </li>
              <li>• Username Rules:</li>
              <li className="ml-4">- No numbers allowed.</li>
              <li className="ml-4">
                - Only lowercase letters, ".", "-", and "_" are permitted.
              </li>
              <li>• The username cannot be changed after registration.</li>
              <li>
                • Professional Conduct: Creators must maintain respectful
                communication with brands.
              </li>
              <li>
                • Inactive Account Policy: Accounts inactive for 365 days may be
                deleted by SphereFlow.
              </li>
              <li>
                • Content Ownership: Creators own their content but grant
                SphereFlow and clients usage rights under agreed terms.
              </li>
            </ul>
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
}

export default EditProfile;
