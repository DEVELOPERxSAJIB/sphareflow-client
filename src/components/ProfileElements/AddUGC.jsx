import { useState } from "react";
import { CiVideoOn } from "react-icons/ci";
import { TiCameraOutline } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { TbPhotoUp } from "react-icons/tb";

const AddUGC = () => {
  const [isOpen, setIsModalOpen] = useState(false);
  const [toggle, setToggle] = useState("Video");
  const [videoUrl, setVideoUrl] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleModal = () => {
    setIsModalOpen(true);
  };

  const handleToggle = (type) => {
    if (type === "Video" && !imageUrl) {
      setToggle("Video");
    }
    if (type === "Photo" && !videoUrl) {
      setToggle("Photo");
    }
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "video/mp4") {
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };

  return (
    <div>
      <Dialog open={isOpen} onClose={setIsModalOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-white px-6 py-5 sm:p-6">
                <DialogTitle
                  as="h3"
                  className="text-lg flex justify-between font-semibold text-gray-900 mb-4"
                >
                  Upload Video or Photo
                  <RxCross2
                    className="cursor-pointer"
                    size={20}
                    onClick={() => setIsModalOpen(false)}
                  />
                </DialogTitle>
                <hr />

                <div className="w-full mt-4 flex justify-between bg-[#F4F5F7] py-2 rounded-[12px] px-2">
                  <button
                    className="w-[49%] h-[40px] rounded-md text-[14px]"
                    onClick={() => handleToggle("Video")}
                    disabled={!!imageUrl}
                    style={{
                      background: toggle === "Video" ? "#0011FF" : "white",
                      color: toggle === "Video" ? "white" : "#0011FF",
                      cursor: imageUrl ? "not-allowed" : "pointer",
                    }}
                  >
                    Video
                  </button>

                  <button
                    className="w-[49%] h-[40px] rounded-md text-[14px]"
                    onClick={() => handleToggle("Photo")}
                    disabled={!!videoUrl}
                    style={{
                      background: toggle === "Photo" ? "#0011FF" : "white",
                      color: toggle === "Photo" ? "white" : "#0011FF",
                      cursor: videoUrl ? "not-allowed" : "pointer",
                    }}
                  >
                    Photo
                  </button>
                </div>

                <form className="mt-4 space-y-4">
                  {toggle === "Video" ? (
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex flex-col items-center justify-center w-full">
                        {videoUrl ? (
                          <div className="relative">
                            <video
                              loop
                              playsInline
                              controls
                              className="border border-dotted border-blue-700 relative w-full h-[630px] object-cover rounded-lg py-3"
                            >
                              <source src={videoUrl} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                            <span
                              onClick={() => setVideoUrl(null)}
                              className="p-1 rounded-lg translate-all duration-300 bg-red-600 hover:bg-red-800  text-[#fff] absolute right-3 top-6"
                            >
                              <RxCross2 size={20} />
                            </span>
                          </div>
                        ) : (
                          <label
                            htmlFor="dropzone-file"
                            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer"
                          >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <FaCloudUploadAlt color="#C6C7DA" size={36} />
                              <span className="font-semibold text-[16px] text-[333]">
                                Click to upload Video
                              </span>
                            </div>

                            <input
                              id="dropzone-file"
                              type="file"
                              className="hidden"
                              accept="video/mp4"
                              onChange={handleVideoUpload}
                            />
                          </label>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex flex-col items-center justify-center w-full">
                        {imageUrl ? (
                          <div className="relative w-full h-auto rounded-lg overflow-hidden py-3">
                            <img
                              src={imageUrl}
                              alt="uploaded preview"
                              className="border border-1 border-blue-700 w-full h-full object-cover rounded-lg"
                            />
                            <span
                              onClick={() => setImageUrl(null)}
                              className="p-1 rounded-lg translate-all duration-300 bg-red-600 hover:bg-red-800  text-[#fff] absolute right-3 top-6"
                            >
                              <RxCross2 size={20} />
                            </span>
                          </div>
                        ) : (
                          <label
                            htmlFor="dropzone-file"
                            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer"
                          >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <TbPhotoUp color="#C6C7DA" size={36} />
                              <span className=" font-semibold text-[16px] text-[333]">
                                Click to upload Photo
                              </span>
                            </div>

                            <input
                              id="dropzone-file"
                              type="file"
                              className="hidden"
                              accept="image/*"
                              onChange={handleImageUpload}
                            />
                          </label>
                        )}
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-[#0011FF] text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition"
                  >
                    Upload
                  </button>
                </form>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold text-[20px]">Add UGC</h3>
          <p className="text-[#686868] mt-1">
            Add rates here for video and photo services'
          </p>
        </div>
        <button
          className="flex gap-2 bg-[#0011FF] border px-3 py-2 rounded-full text-white"
          onClick={handleModal}
        >
          Upload Video and Photos
        </button>
      </div>
      <div className="mt-6 flex gap-3 items-center justify-center space-x-3">
        <button
          className="flex gap-2 bg-[#F1E7FD] border px-3 py-2 rounded-[12px] text-black"
          onClick={() => {
            handleModal(),
            setToggle('Video')
          }}
        >
          <CiVideoOn size={25} />
          Video
        </button>
        <button
          className="flex gap-2 bg-[#F1E7FD] border px-3 py-2 rounded-[12px] text-black"
          onClick={() => {
            handleModal(),
            setToggle('Photo')
          }}
        >
          <TiCameraOutline size={25} />
          Photos
        </button>
      </div>
    </div>
  );
};

export default AddUGC;
