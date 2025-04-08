import React, { useState } from "react";
import { MdOutlineDriveFolderUpload } from "react-icons/md";

const BrandBasicCardInfo = () => {
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
        <div className="image-area h-[124px] w-[124px]">
          <img
            className="h-full w-full object-cover rounded-full mt-3"
            src={imageSrc}
            alt="uploaded-image"
            width={124}
            height={124}
          />
        </div>
      ) : (
        <img
          className="mt-3"
          src={
            "https://s3-alpha-sig.figma.com/img/ec95/bbdc/9093e5cc5c55732c6506e7cf1a97c9d6?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aM1DDb7iqWCnSlZIyrUfSxrAgvVefZGIqnkjoXIcF4KO6lzeqtqZhQ8nm3BjJld5mxfwdBoiV010ywpQ7WdIiKsjfjXG6xNhH7726ElMoZbi2daxPFcb6Zf-P0HL9E~CYdymONHVf1dfDP87YntkDW0z9fk-ist4qJuvdvfaCBycNX8pQuz~F0RoZb~mo3K7zCCTWIltL4T3Mr7NAgJCAaGclNQQunhy~tFqaJuegDtVw-ErYagQ4oOh8XVjJItYNAyDv1oAqHiiFYQ2GPeDMP1VYHg34ICj-Xcjt~tr2lBulTsStDUHsiiZdvt7C15gZX4srhgY7-iwtDdZVKI7Bw__"
          }
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

export default BrandBasicCardInfo;
