import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FiMaximize2 } from "react-icons/fi";
import demo1 from "../../assets/temp/demo-1.png";
import demo2 from "../../assets/temp/demo-2.png";
import demo3 from "../../assets/temp/demo-3.png";
import demo4 from "../../assets/temp/demo-4.png";
import VideoModal from "./VideoModal";
import { FaPause } from "react-icons/fa";

const videos = [
  { id: 1, src: demo1, duration: "00:41" },
  { id: 2, src: demo2, duration: "00:41" },
  { id: 3, src: demo3, duration: "00:41" },
  { id: 4, src: demo4, duration: "00:41" },
  { id: 5, src: demo1, duration: "00:41" },
  { id: 6, src: demo4, duration: "00:41" },
];

const VideoGallery = () => {
  const [active, setActive] = useState(4);

  const [playingVideo, setPlayingVideo] = useState(null);

  const togglePlay = (videoId) => {
    setPlayingVideo(playingVideo === videoId ? null : videoId);
  };

  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  const handleOpenModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setOpen(true);
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center items-center p-1 sm:p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:gap-3 lg:grid-cols-4 gap-4">
          {videos.map((video) => (
            <div
              key={video.id}
              className={`relative group w-[273px] h-[346px] rounded-[12px] overflow-hidden cursor-pointer transition-all ${
                active === video.id
                  ? "border-4 border-blue-500 ease-in-out"
                  : "border-4 border-transparent"
              }`}
              onMouseEnter={() => setActive(video.id)}
            >
              {/* Video Thumbnail */}
              <img
                src={video.src}
                alt={`Thumbnail ${video.id}`}
                className="w-full h-full object-cover group-hover:scale-105 duration-300 transition-all ease-in-out rounded-[12px]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-between items-end p-3">
                {playingVideo === video.id ? (
                  <FaPause
                    onClick={() => togglePlay(video.id)}
                    className="text-white text-base cursor-default"
                  />
                ) : (
                  <FaPlay
                    onClick={() => togglePlay(video.id)}
                    className="text-white text-base cursor-default"
                  />
                )}

                <div className="flex gap-2 items-center">
                  <span className="text-white text-sm">{video.duration}</span>
                  <FiMaximize2
                    onClick={() => handleOpenModal(video.id)}
                    className="text-white text-base"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <VideoModal open={open} setOpen={setOpen} videoUrl={selectedVideo} />
      </div>
      <button className="border border-[#0011FF] bg-[#0011FF] text-white text-[16px] rounded-full px-16 py-2 self-center w-fit">
        See More
      </button>
    </div>
  );
};

export default VideoGallery;
