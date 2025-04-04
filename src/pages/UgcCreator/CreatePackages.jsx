import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import { FileText, Scissors, User, Video, PenSquare } from "lucide-react";

const CreatePackages = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    revisions: 0,
    type: "PHOTO",
    quantity: 1,
    turnaroundTime: 0,
    includesEditing: false,
    includesVoiceOver: false,
    rightsDuration: "",
    feature: "",
    orderTime: 1,
  });

  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedRevisions, setSelectedRevisions] = useState(0);
  const [selectedTurnaround, setSelectedTurnaround] = useState(5);
  const [selectedDuration, setSelectedDuration] = useState("12 months");
  const [isModalOpen, setIsModalOpen] = useState(true); // For demo purpose

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Package:", formData);
    // You can call a parent handler or API here
    setIsModalOpen(false);
  };

  const handleServiceClick = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      feature: prevData.feature === value ? "" : value, // toggle
    }));
  };

  const services = [
    { icon: FileText, value: "Brief creation" },
    { icon: Scissors, value: "Editing" },
    { icon: User, value: "Voice over" },
    { icon: Video, value: "Raw footage" },
    { icon: PenSquare, value: "Custom option" },
  ];

  if (!isModalOpen) return null;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="flex justify-end">
        <button onClick={() => setIsModalOpen(false)}>
          <MdCancel size={28} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* ... previous inputs stay same */}

        {/* Type & Includes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Type
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            >
              <option value="PHOTO">Photo</option>
              <option value="VIDEO">Video</option>
              <option value="AUDIO">Audio</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="includesEditing"
              name="includesEditing"
              checked={formData.includesEditing}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  includesEditing: e.target.checked,
                }))
              }
            />
            <label htmlFor="includesEditing" className="text-sm text-gray-700">
              Includes Editing
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="includesVoiceOver"
              name="includesVoiceOver"
              checked={formData.includesVoiceOver}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  includesVoiceOver: e.target.checked,
                }))
              }
            />
            <label
              htmlFor="includesVoiceOver"
              className="text-sm text-gray-700"
            >
              Includes Voice Over
            </label>
          </div>
        </div>

        {/* Service Features */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Service Feature
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {services.map(({ icon: Icon, value }) => (
              <button
                key={value}
                type="button"
                onClick={() => handleServiceClick(value)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg border ${
                  formData.feature === value
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{value}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Price ($)
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg"
          >
            Create Package
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePackages;
