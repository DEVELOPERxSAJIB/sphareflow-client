import React, { useState } from "react";
import { MdOutlineDriveFolderUpload } from "react-icons/md";

const BasicInfoCard = () => {
  const [imageSrc, setImageSrc] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);      
    }
  };

  return (
    <div className="w-full flex flex-col items-center h-auto p-4">
      <h3 className="font-bold text-[16px]">Basic Information</h3>
      {imageSrc ? (
        <img
          className="mt-3 rounded-[50vh]"
          src={imageSrc}
          alt="uploaded-image"
          width={124}
          height={124}
        />
      ) : (
        <img
          className="mt-3"
          src={'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png'}
          alt="upload-image"
          width={124}
          height={124}
        />
      )}

      {/* Hidden file input */}
      <input
        type="file"
        id="fileInput"
        className="hidden"
        accept="image/*"
        onChange={handleImageUpload}
      />

      <label
        htmlFor="fileInput"
        className="px-6 py-1 bg-[#fff] flex mt-4 justify-center items-center text-[#0011FF] cursor-pointer"
      >
        <MdOutlineDriveFolderUpload size={25} />
        Upload Photo
      </label>
    </div>
  );
};

export default BasicInfoCard;
