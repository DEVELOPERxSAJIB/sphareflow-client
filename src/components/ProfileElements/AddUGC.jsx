import { useState } from "react";
import CreatePostModal from "../../components/ProfileElements/VideoModal";
import { CiVideoOn } from "react-icons/ci";
import { TiCameraOutline } from "react-icons/ti";

const AddUGC = () => {
  const [isOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      {/* <CreatePostModal
        isOpen={isOpen}
        setIsModalOpen={setIsModalOpen}
        onSubmit={handleSubmit}
      /> */}
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
          onClick={handleModal}
        >
          <CiVideoOn size={25} />
          Video
        </button>
        <button
          className="flex gap-2 bg-[#F1E7FD] border px-3 py-2 rounded-[12px] text-black"
          onClick={handleModal}
        >
          <TiCameraOutline size={25} />
          Photos
        </button>
      </div>
    </div>
  );
};

export default AddUGC;
