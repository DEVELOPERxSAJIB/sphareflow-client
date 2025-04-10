import React, { useState } from "react";
import {
  ageGroup,
  content,
  countries,
  equipment,
  gender,
  industries,
  languages,
  pets,
  responseTime,
} from "../../constants/data.js";
import HeaderBrand from "../../components/Header/HeaderBrand.jsx";
import { FaArrowLeft } from "react-icons/fa";
import CustomSelectTag from "../../components/BrandElements/CustomSelectTag.jsx";
import CustomRange from "../../components/BrandElements/CustomRange.jsx";
import UgcCreatorCard from "../../components/BrandElements/UgcCreatorCard.jsx";

const SearchCreator = () => {



  const [page, setPage] = useState(1);
  const limit = 10;
  const totalUsers = 121;
  const totalPages = Math.ceil(totalUsers / limit);

  //   const startIndex = (page - 1) * limit;
  //   const endIndex = startIndex + limit;
  //   const paginatedUsers = data?.users.slice(startIndex, endIndex) || [];

  const [openDropdown, setOpenDropdown] = useState(null);
  const [industryValue, setIndustryValue] = useState("");
  const [contentValue, setcontentValue] = useState("");
  const [responseTimeValue, setResponseTimeValue] = useState("");
  const [languageValue, setLanguageValue] = useState("");
  const [genderValue, setGenderValue] = useState("");
  const [ageGroupValue, setAgeGroupValue] = useState("");
  const [audianceLocationValue, setAudianceLocationValue] = useState("");
  const [equipmentsValue, setEquipmentsValue] = useState("");

  // nearby range
  const [minAroundMe, setMinAroundMe] = useState("");
  const [maxAroundMe, setMaxAroundMe] = useState("");

  // price range
  const [minRange, setMinRange] = useState("");
  const [maxRange, setMaxRange] = useState("");

  const handleIndustryChange = (value) => {
    setIndustryValue(value);
    console.log("Selected Industry:", value);
  };

  const handleContentChange = (value) => {
    setcontentValue(value);
    console.log("Selected content:", value);
  };

  const handleResponseTimeValue = (value) => {
    setResponseTimeValue(value);
  };

  const handleLanguageValue = (value) => {
    setLanguageValue(value);
  };

  const handleGenderValue = (value) => {
    setGenderValue(value);
  };

  const handleAgeGroupValue = (value) => {
    setAgeGroupValue(value);
  };

  const handleAudianceLocationValue = (value) => {
    setAudianceLocationValue(value);
  };

  const handleEquipmentsValue = (value) => {
    setEquipmentsValue(value);
  };

  //  Country and city handler
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [cities, setCities] = useState([]);
  const [cityLoading, setCityLoading] = useState(false);

  const handleCountryValue = async (country) => {
    setSelectedCountry(country);
    setCities([]);

    if (!country) return;
    setCityLoading(true);

    try {
      const res = await fetch(
        "https://countriesnow.space/api/v0.1/countries/cities",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ country }),
        }
      );

      const data = await res.json();
      if (data?.data) {
        setCities(data.data); // array of strings
      }
    } catch (err) {
      console.error("Error fetching cities:", err);
    } finally {
      setCityLoading(false);
    }
  };

  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#F1E7FD] px-6 md:px-20 h-screen lg:px-20 xs:px-2 pt-5">
      <HeaderBrand />
      <div>
        <div className="mt-5">
          <p className="font-bebas text-[24px]">Discover</p>
          <p className="font-switzer text-[16px]">Search for Influencers</p>
        </div>
        <div></div>

        <div className="font-switzer border bg-[#fff] rounded-[12px] mt-5 flex flex-col lg:flex-row h-[77vh]">
          <div className="mt-5 scrollbar-hide w-auto flex flex-col flex-1 border-r ">
            <p className="pl-4 text-[#000000] font-medium text-[14px]">
              Creator Preferences
            </p>
            <div className="overflow-y-auto relative flex-1">
              <div className="mt-3 px-4">
                <div className="">
                  <p className="text-[#686868] text-[12px] font-medium py-3">
                    Industry / Interest Category
                  </p>
                  <CustomSelectTag
                    options={industries}
                    onChange={handleIndustryChange}
                    selected={industryValue}
                    isOpen={openDropdown === "industry"}
                    onToggle={(val) => setOpenDropdown(val ? "industry" : null)}
                  />
                </div>

                <div className="mt-2">
                  <p className="text-[#686868] text-[12px] font-medium py-3">
                    Content Type
                  </p>
                  <CustomSelectTag
                    options={content}
                    onChange={handleContentChange}
                    selected={contentValue}
                    isOpen={openDropdown === "content"}
                    onToggle={(val) => setOpenDropdown(val ? "content" : null)}
                  />
                </div>

                <div className="mt-2">
                  <p className="text-[#686868] text-[12px] font-medium py-3">
                    Around Me
                  </p>
                  <CustomRange
                    minRange={minAroundMe}
                    maxRange={maxAroundMe}
                    setMinRange={setMinAroundMe}
                    setMaxRange={setMaxAroundMe}
                    minPlaceHolder="0 KM"
                    maxPlaceHolder="5 KM"
                  />
                </div>

                <div className="mt-2">
                  <p className="text-[#686868] text-[12px] font-medium py-3">
                    Average response time
                  </p>
                  <CustomSelectTag
                    options={responseTime}
                    onChange={handleResponseTimeValue}
                    selected={responseTimeValue}
                    isOpen={openDropdown === "responseTime"}
                    onToggle={(val) =>
                      setOpenDropdown(val ? "responseTime" : null)
                    }
                  />
                </div>

                <div className="mt-2">
                  <p className="text-[#686868] text-[12px] font-medium py-3">
                    Country
                  </p>
                  <CustomSelectTag
                    options={countries}
                    onChange={handleCountryValue}
                    selected={selectedCountry}
                    isOpen={openDropdown === "country"}
                    onToggle={(val) => setOpenDropdown(val ? "country" : null)}
                  />
                </div>

                <div className="mt-2">
                  <p className="text-[#686868] text-[12px] font-medium py-3">
                    City
                  </p>
                  <CustomSelectTag
                    options={cities.map((city) => ({
                      value: city,
                      label: city,
                    }))}
                    onChange={(value) => setSelectedCity(value)}
                    selected={selectedCity}
                    isOpen={openDropdown === "city"}
                    onToggle={(val) => setOpenDropdown(val ? "city" : null)}
                    loading={cityLoading}
                  />
                </div>

                <div className="mt-2">
                  <p className="text-[#686868] text-[12px] font-medium py-3">
                    Language
                  </p>
                  <CustomSelectTag
                    options={languages}
                    onChange={handleLanguageValue}
                    selected={languageValue}
                    isOpen={openDropdown === "language"}
                    onToggle={(val) => setOpenDropdown(val ? "language" : null)}
                  />
                </div>

                <div className="mt-2">
                  <p className="text-[#686868] text-[12px] font-medium py-3">
                    Age Group
                  </p>
                  <CustomSelectTag
                    options={ageGroup}
                    onChange={handleAgeGroupValue}
                    selected={ageGroupValue}
                    isOpen={openDropdown === "ageGroup"}
                    onToggle={(val) => setOpenDropdown(val ? "ageGroup" : null)}
                  />
                </div>

                <div className="mt-2">
                  <p className="text-[#686868] text-[12px] font-medium py-3">
                    Gender
                  </p>
                  <CustomSelectTag
                    options={gender}
                    onChange={handleGenderValue}
                    selected={genderValue}
                    isOpen={openDropdown === "gender"}
                    onToggle={(val) => setOpenDropdown(val ? "gender" : null)}
                  />
                </div>

                <div className="mt-2">
                  <p className="text-[#686868] text-[12px] font-medium py-3">
                    Price Range
                  </p>
                  <CustomRange
                    minRange={minRange}
                    maxRange={maxRange}
                    setMinRange={setMinRange}
                    setMaxRange={setMaxRange}
                    minPlaceHolder="$5"
                    maxPlaceHolder="$2000"
                  />
                </div>

                <div className="mt-2">
                  <p className="text-[#686868] text-[12px] font-medium py-3">
                    Audiance Location
                  </p>
                  <CustomSelectTag
                    options={pets}
                    onChange={handleAudianceLocationValue}
                    selected={audianceLocationValue}
                    isOpen={openDropdown === "audloc"}
                    onToggle={(val) => setOpenDropdown(val ? "audloc" : null)}
                  />
                </div>

                <div className="mt-2">
                  <p className="text-[#686868] text-[12px] font-medium py-3">
                    Equipments
                  </p>
                  <CustomSelectTag
                    options={equipment}
                    onChange={handleEquipmentsValue}
                    selected={equipmentsValue}
                    isOpen={openDropdown === "equipments"}
                    onToggle={(val) =>
                      setOpenDropdown(val ? "equipments" : null)
                    }
                  />
                </div>
              </div>
            </div>
            <button
              className="bg-button w-full text-white py-3 text-[16px] mt-8 rounded-bl-[12px]"
            >
              Search & Filter
            </button>
          </div>

          <div className="scrollbar-hide relative overflow-y-auto w-4/5  sm:pl-0">
            <div className="flex justify-end">
              <button
                className="px-4 py-3 cursor-pointer bg-transparent text-[#0011FF] "
                onClick={() => setOpen(!open)}
              >
                <FaArrowLeft />
              </button>
            </div>

            {/* Sidebar */}
            <div
              className={`absolute top-0 right-0 h-full bg-[#dff9fb] shadow-lg transition-transform duration-300 ease-in-out z-30 ${
                open ? "translate-x-0 overscroll-none" : "translate-x-full"
              } w-[35vw]`}
            >
              <div className="px-4 py-1.5 flex justify-between items-center border-b">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  {" "}
                  <FaArrowLeft
                    className="cursor-pointer"
                    color="#000"
                    onClick={() => setOpen(false)}
                  />{" "}
                  Enlarge map
                </h2>
              </div>
              <div className="relative w-full h-full">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
                  frameborder="0"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3 px-4">
              <UgcCreatorCard />
              <UgcCreatorCard />
              <UgcCreatorCard />
              <UgcCreatorCard />
              <UgcCreatorCard />
              <UgcCreatorCard />
              <UgcCreatorCard />
              <UgcCreatorCard />
              <UgcCreatorCard />
              <UgcCreatorCard />
            </div>

            {/* pagenation */}
            <footer className="bg-slate-100 w-full sticky bottom-0 left-0 right-0 z-40 mt-6 rounded-br-[12px] flex items-center justify-between px-4">
              <p className="w-auto ">1 - 24 of more then 608 pages</p>
              <div className="py-3 space-x-1">
                {/* Previous button */}
                <button
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                  className="px-3 py-2 border rounded bg-gray-300 disabled:opacity-50"
                >
                  «
                </button>

                {/* Page numbers */}
                {[...Array(totalPages)].map((_, index) => {
                  const pageNumber = index + 1;

                  // Show only a sliding window of 5 pages
                  if (
                    pageNumber === 1 ||
                    pageNumber === totalPages ||
                    (pageNumber >= page - 1 && pageNumber <= page + 1)
                  ) {
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => setPage(pageNumber)}
                        className={`px-3 py-2 border rounded ${
                          page === pageNumber
                            ? "bg-[#0010FF] text-white"
                            : "bg-gray-200"
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  }

                  // Ellipsis logic
                  if (
                    (pageNumber === page + 2 && page < totalPages - 3)
                  ) {
                    return (
                      <span key={pageNumber} className="px-2 text-gray-500">
                        ...
                      </span>
                    );
                  }

                  return null;
                })}

                {/* Next button */}
                <button
                  disabled={page === totalPages}
                  onClick={() => setPage(page + 1)}
                  className="px-3 py-2 border rounded bg-gray-300 disabled:opacity-50"
                >
                  »
                </button>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCreator;
