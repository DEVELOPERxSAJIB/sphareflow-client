import React, { useState } from "react";
import { countries } from "../../constants/data";
import { languages } from "../../constants/data";
import Select from "react-select";

const UserInfoFormBrand = ({ setUserData, handleSubmit }) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [cities, setCities] = useState([]);
  const [cityLoading, setCityLoading] = useState(false);

  const handleCountryChange = async (e) => {
    const country = e.target.value;
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
        setCities(data.data);
      }
    } catch (err) {
      console.error("Error fetching cities:", err);
    } finally {
      setCityLoading(false);
    }
  };

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle language selection change
  const handleLanguageChange = (selectedOptions) => {
    setSelectedLanguages(selectedOptions);
    setUserData((prevData) => ({
      ...prevData,
      language: selectedOptions.map((option) => option.value),
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 pt-[30px] px-[50px] w-full">
      {/* First Name & Last Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-[14px] text-[#686868]"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-[#F1E7FD] rounded-[40px] px-4 text-[14px] text-[#686868]"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-[14px] text-[#686868]"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-[#F1E7FD] rounded-[40px] px-4 text-[14px] text-[#686868]"
          />
        </div>
      </div>
      {/* Brand Name */}
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mb-4">
        <div>
          <label
            htmlFor="brandName"
            className="block text-[14px] text-[#686868]"
          >
            Brand Name
          </label>
          <input
            type="text"
            id="brandName"
            name="brandName"
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-[#F1E7FD] rounded-[40px] px-4 text-[14px] text-[#686868]"
          />
        </div>
      </div>

      {/* Country & City (as select options) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="country" className="block text-[14px] text-[#686868]">
            Country
          </label>
          <select
            id="country"
            name="country"
            value={selectedCountry}
            onChange={handleCountryChange}
            className="mt-1 p-2 block w-full border border-[#F1E7FD] rounded-[40px] text-[14px] text-[#686868]"
          >
            <option value="" disabled hidden>
              Select a country
            </option>{" "}
            {/* default placeholder */}
            {countries.map((item) => (
              <option
                key={item.value}
                value={item.value}
                selected={item.value === (selectedCountry || "")}
              >
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="city" className="block text-[14px] text-[#686868]">
            City
          </label>
          <select
            id="city"
            name="city"
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-[#F1E7FD] rounded-[40px] text-[14px] text-[#686868]"
            disabled={cities.length === 0}
          >
            <option value="" disabled selected hidden>
              {cityLoading ? "Loading Cities . . ." : "Select a city"}
            </option>

            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Language & Sex */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            htmlFor="language"
            className="block text-[14px] text-[#686868]"
          >
            Language
          </label>
          <Select
            isMulti
            options={languages}
            value={selectedLanguages}
            onChange={handleLanguageChange}
            className="mt-1 focus:outline-none"
            styles={{
              control: (provided) => ({
                ...provided,
                borderColor: "none",
                borderRadius: "20px",
                boxShadow: "none",
                "&:focus": {
                  outline: "none",
                },
              }),
            }}
            classNamePrefix="select"
            placeholder="Select a Language"
          />
        </div>
      </div>

      {/* Date of Birth */}
      <div className="mb-4 hidden">
        <label htmlFor="dob" className="block text-[14px] text-[#686868]">
          Date of Birth
        </label>
        <input
          type="date"
          id="dob"
          name="dob"
          onChange={handleChange}
          className="mt-1 p-2 block w-full border border-[#F1E7FD] rounded-[40px] text-[#686868] text-[14px]"
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-[14px] text-[#686868]"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          onChange={handleChange}
          className="mt-1 p-2 block w-full border border-[#F1E7FD] rounded-[12px] text-[14px] text-[#686868]"
          placeholder="Hey! I am Arrick"
        />
      </div>
    </form>
  );
};

export default UserInfoFormBrand;
