import React, { useState } from "react";
import { FileText, Scissors, User, Video, PenSquare } from "lucide-react";

const CreatePackages = () => {
  const [selectedQuantity, setSelectedQuantity] = useState(null);
  const [selectedRevisions, setSelectedRevisions] = useState(null);
  const [selectedTurnaround, setSelectedTurnaround] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState("12 months");

  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    revisions: null,
    type: "PHOTO",
    quantity: null,
    turnaroundTime: null,
    includesEditing: false,
    includesVoiceOver: false,
    rightsDuration: "",
    feature: "",
    orderTime: 1,
  });

  console.log("Form data from modal", formData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]:
        name === "includesEditing" || name === "includesVoiceOver"
          ? value === "true"
            ? true
            : false
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const services = [
    {
      icon: FileText,
      value: "Brief creation",
    },
    {
      icon: Scissors,
      value: "Editing",
    },
    {
      icon: User,
      value: "Voice over",
    },
    {
      icon: Video,
      value: "Raw footage",
    },
    {
      icon: PenSquare,
      value: "Custom option",
    },
  ];

  const handleServiceClick = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      feature: prevData.feature === value ? "" : value,
    }));
  };

  return (
    <div className="py-6">
      {/* new code */}
      <div className="max-w-2xl  mx-auto p-6 bg-white rounded-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Label Input */}
          <div className="space-y-2">
            <label className="block text-[16px] font-semibold text-[#000000]">
              Label
            </label>
            <input
              type="text"
              placeholder="Ad"
              id="label"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-sm text-gray-500">
              Optional, give a sweet name to your product to attract clients.
            </p>
          </div>

          {/* Video Quantity */}
          <div className="space-y-2">
            <label className="block text-[16px] font-semibold text-[#000000]">
              Video quantity
            </label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => {
                    setSelectedQuantity(num);
                    setFormData((prevData) => ({
                      ...prevData,
                      quantity: null,
                    }));
                  }}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium ${
                    selectedQuantity === num
                      ? "bg-[#0011FF] text-white"
                      : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {num}
                </button>
              ))}
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity ?? null}
                onChange={(e) => {
                  const value = e.target.value;
                  setFormData((prevData) => ({
                    ...prevData,
                    quantity: value === "" ? null : parseInt(value),
                  }));
                  setSelectedQuantity(null);
                }}
                onFocus={() => setSelectedQuantity(null)}
                className="w-10 h-10 p-1 text-center rounded-lg flex items-center justify-center text-sm font-medium bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
              />
            </div>
          </div>

          {/* Free Revisions */}
          <div className="space-y-2">
            <label className="block text-[16px] font-semibold text-[#000000]">
              Free revisions included
            </label>
            <div className="flex space-x-2">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => {
                    setSelectedRevisions(num);
                    setFormData((prevData) => ({
                      ...prevData,
                      revisions: null,
                    }));
                  }}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium ${
                    selectedRevisions === num
                      ? "bg-[#0011FF] text-white"
                      : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {num}
                </button>
              ))}
              <input
                type="number"
                id="revisions"
                name="revisions"
                value={formData.revisions ?? null}
                onChange={(e) => {
                  const value = e.target.value;
                  setFormData((prevData) => ({
                    ...prevData,
                    revisions: value === "" ? null : parseInt(value),
                  }));
                  setSelectedRevisions(0);
                }}
                onFocus={() => setSelectedRevisions(0)}
                className="w-10 h-10 p-1 text-center rounded-lg flex items-center justify-center text-sm font-medium bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
              />
            </div>
            <p className="text-sm text-gray-500">
              We recommend to do 1 or 2 free revisions and charge for more
              changes.
            </p>
          </div>

          {/* Turnaround Time */}
          <div className="space-y-2">
            <label className="block text-[16px] font-semibold text-[#000000]">
              Turnaround time
            </label>
            <div className="flex space-x-2">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <button
                  key={num}
                  type="button"
                  value={formData.turnaroundTime ?? null}
                  onClick={() => {
                    setSelectedTurnaround(num);
                    setFormData((prevData) => ({
                      ...prevData,
                      turnaroundTime: null,
                    }));
                  }}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium ${
                    selectedTurnaround === num
                      ? "bg-[#0011FF] text-white"
                      : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {num}
                </button>
              ))}
              <input
                type="number"
                id="turnaroundTime"
                name="turnaroundTime"
                value={formData.turnaroundTime}
                onChange={(e) => {
                  const value = e.target.value;
                  setFormData((prevData) => ({
                    ...prevData,
                    turnaroundTime: value === "" ? null : parseInt(value),
                  }));
                  setSelectedTurnaround(null);
                }}
                onFocus={() => setSelectedTurnaround(null)}
                className="w-10 h-10 p-1 rounded-lg text-center flex items-center justify-center text-sm font-medium bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
              />
            </div>
            <p className="text-sm text-gray-500">
              Standard turnaround time is under 7 days after package received.
            </p>
          </div>

          {/* Rights Duration */}
          <div className="space-y-2">
            <label className="block text-[16px] font-semibold text-[#000000]">
              Rights Duration
            </label>
            <div className="flex items-center space-x-3">
              <div className="flex space-x-3">
                {["3 months", "6 months", "12 months"].map((duration) => (
                  <button
                    key={duration}
                    type="button"
                    onClick={() => {
                      setSelectedDuration(duration); // Set the selected duration
                      setFormData((prevData) => ({
                        ...prevData,
                        rightsDuration: "", // Reset the dropdown value
                      }));
                    }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      selectedDuration === duration
                        ? "bg-[#0011FF] text-white"
                        : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {duration}
                  </button>
                ))}
              </div>
              {/* Custom Dropdown */}
              <div className="relative">
                <select
                  id="rightsDuration"
                  name="rightsDuration"
                  value={formData.rightsDuration}
                  onChange={(e) => {
                    setFormData((prevData) => ({
                      ...prevData,
                      rightsDuration: e.target.value, // Update the dropdown value
                    }));
                    setSelectedDuration(""); // Reset the button state
                  }}
                  onFocus={() => setSelectedDuration("")} // Reset the button state when dropdown is focused
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none appearance-none"
                >
                  <option value="" disabled hidden>
                    Select duration
                  </option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                    <option key={num} value={`${num} months`}>
                      {num} months
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              Typically, image rights are granted for 1 year.
            </p>
          </div>

          {/* Service Options */}
          <div className="space-y-4">
            <label className="block text-[16px] font-semibold text-[#000000]">
              Rights Duration
            </label>
            <div className="flex items-center flex-wrap gap-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isSelected = formData.feature === service.value; // Check if the service is selected
                return (
                  <button
                    key={index}
                    type="button"
                    className={`flex gap-2 text-[#686868] border border-1 border-[#F1E7FD] items-center cursor-pointer px-4 py-2  font-medium rounded-lg ${
                      isSelected ? "bg-[#0011FF] text-white" : "text-gray-600"
                    }`}
                    onClick={() => handleServiceClick(service.value)} // Toggle selection on click
                  >
                    <div className="w-6 h-6">
                      <Icon className={`w-6 h-6 `} strokeWidth={2} />
                    </div>
                    <span className={`text-sm  `}>{service.value}</span>
                  </button>
                );
              })}
            </div>
            <p className="text-sm text-gray-500">
              Standard turnaround time is under 7 days after package received.
            </p>
          </div>

          {/* Pricing */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-[16px] font-semibold text-[#000000]">
                Starting Price
              </label>
              <div className="flex items-center gap-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <span className="text-[#000000] font-bold text-[20px]">$</span>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full focus:outline-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-[16px] font-semibold text-[#000000]">
                What you will earn
              </label>
              <div className="flex items-center gap-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <span className="text-[#000000] font-bold text-[20px]">$</span>
                <input
                  type="number"
                  value={(formData.price * 0.8).toFixed(2)}
                  disabled
                  className="w-full focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-[#0011FF] text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePackages;
