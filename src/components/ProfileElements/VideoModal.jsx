import "./Stylesheet.css";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { FaRegHeart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { FaHeart } from "react-icons/fa6";


const VideoModal = ({ open, setOpen, videoUrl }) => {
  const [favItem, setFavitem] = useState(false);

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-10"
    >
      <DialogBackdrop className="fixed inset-0 bg-gray-500/75" />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <DialogPanel className="relative w-full max-w-lg transform overflow-hidden rounded-lg bg-white shadow-xl transition-all">
            <div className="flex p-4 justify-between items-center">
              <DialogTitle
                as="h3"
                className="text-[24px] font-bebas text-gray-900"
              >
                Video Preview
              </DialogTitle>
              <RxCross2
                onClick={() => setOpen(false)}
                size={25}
                className="cursor-pointer"
              />
            </div>
            <div className="px-4 pb-4">
              {videoUrl ? (
                <>
                  <div className="text-center">
                    <section>
                      <div className="reel__container relative">
                        {/* Video Background */}
                        <video
                          autoPlay
                          loop
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover z-0"
                        >
                          <source
                            src="https://www.w3schools.com/html/mov_bbb.mp4"
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>

                        {/* Overlay Elements */}
                        <div className="relative z-10 flex flex-col justify-between h-full p-1">
                          {/* Top Bar */}
                          <div className="flex cursor-pointer justify-between items-center">
                            <div className="reel__back-button flex items-center space-x-2">
                              {/* <IoArrowBack size={25} color="#fff" />
                              <p className="text-white">Reels</p> */}
                            </div>
                            {!favItem ? (
                              <FaRegHeart
                                onClick={() => setFavitem((prev) => !prev)}
                                size={25}
                                color="#fff"
                              />
                            ) : (
                              <FaHeart
                                onClick={() => setFavitem((prev) => !prev)}
                                size={25}
                                color="#f53b57"
                              />
                            )}
                          </div>

                          {/* Video Content */}
                          <div className="reel__content">
                            <div className="reel__desc">
                              <div className="reel__user flex items-center space-x-3">
                                <img
                                  src="https://i.ibb.co/x36chgX/Untitled.png"
                                  className="reel__avatar w-10 h-10 rounded-full"
                                />
                                <p className="reel__username text-white font-semibold">
                                  aisyahnrlh
                                </p>
                              </div>
                              <p className="reel__caption text-white">
                                Trees, fogs, and mountains Lorem ipsum dolor sit
                                amet...
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </>
              ) : (
                <p className="text-gray-500">No video selected</p>
              )}
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default VideoModal;
