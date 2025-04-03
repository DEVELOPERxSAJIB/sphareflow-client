import React, { useState, Suspense } from "react";
import { PuffLoader } from "react-spinners";
import { Link } from "react-router-dom";
import SelectorHeader from "../SelectorHeader";
import { Link2Icon } from "lucide-react";
import { FaEye } from "react-icons/fa";
import { RiUserSharedLine } from "react-icons/ri";
import { FaRegHandshake } from "react-icons/fa6";
import { BsGenderMale } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";
import { FaCheck } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import VideoGallery from "../ProfileElements/VideoGallery";
import BorderLinearProgress from "../ProfileElements/ProgressBar";
import LocationCard from "../ProfileElements/LocationCard";
import Package from "../ProfileElements/Package";
import Calendar from "../ProfileElements/Calender";

const UgcCreatorProfile = () => {
  const [toggle, setToggle] = useState("Video");

  const handleToggle = (value) => {
    setToggle(value);
  };
  const [toggleAvailableAndUnavailable, setToggleAvailableAndUnavailable] =
    useState(true);

  const handleToggleAvailableAndUnavailable = (value) => {
    setToggleAvailableAndUnavailable(value);
  };

  const handleContact = async () => {};

  // const handleCopyToClipboard = () => {};

  return (
    <div className="bg-[#F1E7FD] lg:px-20 px-3 pt-5 min-h-screen">
      <SelectorHeader />

      {/* Profile Section */}
      <section className="flex lg:flex-row flex-col gap-6 mt-2 md:mt-6">
        <section className="lg:w-[70%] w-[100%]">
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full">
            {/* Availability Section */}
            <div className="flex justify-between bg-white p-2 rounded-md">
              <button
                className="px-8 w-full h-[40px] text-[#fff] rounded-md text-[16px]"
                onClick={() => {
                  handleToggleAvailableAndUnavailable(true);
                }}
                style={{
                  background:
                    toggleAvailableAndUnavailable === true
                      ? "#0011FF"
                      : "white",
                  color:
                    toggleAvailableAndUnavailable === true ? "white" : "black",
                }}
              >
                Available
              </button>
              <button
                className="px-8 w-full h-[40px] text-[#fff] rounded-md text-[16px]"
                onClick={() => {
                  handleToggleAvailableAndUnavailable(false);
                }}
                style={{
                  background:
                    toggleAvailableAndUnavailable === false ? "blue" : "white",
                  color:
                    toggleAvailableAndUnavailable === false
                      ? "white"
                      : "#0011FF",
                }}
              >
                Unavailable
              </button>
            </div>

            {/* Profile Link Section */}
            <div className="relative w-full group">
              <button className="flex items-center justify-center gap-2 h-[56px] w-full text-[16px] rounded-md px-2 transition-all duration-300 bg-white text-[#0011FF] hover:bg-[#0011FF] hover:text-white">
                <Link2Icon size={20} className="flex-shrink-0" />
                <div className="truncate overflow-hidden whitespace-nowrap">
                  sphere-flow profile kaslddddfh
                </div>
              </button>

              <div className="max-w-[300px] absolute shadow-lg hidden group-hover:block bg-[#333] text-white font-semibold px-3 py-[6px] text-[13px] right-0 left-0 mx-auto w-max bottom-16 rounded">
                sphere-flow.com/profile?user_id=kjadufuytf$#$%$%^uygsajd
              </div>
            </div>

            {/* Public Profile Preview Section */}
            <Link className="w-full" href={`/profile}`}>
              <button className="text-center h-[56px] w-full rounded-md flex items-center justify-center gap-2 bg-white text-[#0011FF] text-[16px] px-2 hover:text-white hover:bg-[#0011FF]">
                <FaEye size={20} />
                Preview my public profile
              </button>
            </Link>
          </section>

          <section className={`bg-[#fff] mt-3 rounded-md flex flex-col`}>
            <div>
              <div className="flex lg:flex-row flex-col">
                {/* Profile Info */}
                <section className="lg:w-[25%] w-[100%] pt-[50px] border-b-[1px] border-[#F1E7FD]">
                  <div className="flex justify-center">
                    <img
                      src="https://www.svgrepo.com/show/496485/profile-circle.svg"
                      className="rounded-[50vh]"
                      alt="Profile"
                      width={110}
                      height={110}
                    />
                  </div>
                  <h3 className="font-bold text-lg text-center mt-3">
                    Md Sajib Shikder
                  </h3>
                  <p className="text-gray text-[12px] text-center pb-6 break-words whitespace-normal px-3">
                    sajibshikder78971@gmail.com
                  </p>
                </section>

                {/* Stats Section */}
                <section
                  style={{ borderLeft: "1px solid #F1E7FD" }}
                  className="lg:w-[75%] w-[100%]"
                >
                  {/* Top Stats */}
                  <section className="flex flex-col  pt-5">
                    <section className="flex lg:flex-row flex-col lg:px-0 px-4 mb-4 rounded-sm">
                      <div className="min-w-[144px] lg:ml-8 ml-0 flex items-center border border-[#F1E7FD] bg-[#F1E7FD] rounded-lg px-5 py-2">
                        <RiUserSharedLine size={25} color="#0011FF" />
                        <div className="pl-5">
                          <p className="font-semibold text-[16px]">20.5k</p>
                          <p className="text-[12px]">Followers</p>
                        </div>
                      </div>

                      <div className="min-w-[144px] lg:ml-8 items-center ml-0 flex bg-[#F1E7FD] rounded-lg px-5 py-2 lg:mt-0 mt-3">
                        <FaRegHandshake
                          className="-rotate-45"
                          size={25}
                          color="#0011FF"
                        />
                        <div className="pl-5">
                          <p className="font-semibold text-[16px]">17.5%</p>
                          <p className="text-[12px]">Engagement</p>
                        </div>
                      </div>

                      <div className="min-w-[144px] lg:ml-8 items-center ml-0 flex bg-[#F1E7FD] rounded-lg px-5 py-2 lg:mt-0 mt-3">
                        <FaCheck size={25} color="#0011FF" />
                        <div className="pl-5">
                          <p className="font-semibold text-[16px]">5/5</p>
                          <p className="text-[12px]">Score</p>
                        </div>
                      </div>
                    </section>
                    <hr />

                    {/* Bottom Stats */}
                    <section className=" border-[#F1E7FD] md:flex justify-between lg:flex-row flex-col pt-3 mb-4 md:pl-5">
                      <div className="flex mr-[60px] p-3 rounded-md">
                        <div className="bg-[#F1E7FD] flex justify-center items-center rounded-md p-2">
                          <BsGenderMale size={25} color="#0011FF" />
                        </div>
                        <div className="pl-3">
                          <p className="text-[#686868] text-[12px]">Gender</p>
                          <p className="font-semibold mt-1 text-[16px]">Male</p>
                        </div>
                      </div>
                      <div className="flex mr-[60px] p-3 rounded-md">
                        <div className="bg-[#F1E7FD] flex justify-center items-center rounded-md p-2">
                          <FaLocationDot size={25} color="#0011FF" />
                        </div>
                        <div className="pl-3">
                          <p className="text-[#686868] text-[12px]">Location</p>
                          <p className="text-[16px] font-semibold mt-1">
                            Paris, Franch
                          </p>
                        </div>
                      </div>
                      <div className="flex mr-[60px] p-3 rounded-md">
                        <div className="bg-[#F1E7FD] flex justify-center items-center rounded-md p-2">
                          <GrLanguage size={25} color="#0011FF" />
                        </div>
                        <div className="pl-3">
                          <p className="text-[#686868] text-[12px]">Language</p>
                          <p className="text-[16px] font-semibold mt-1">
                            <ul>
                              <li>English</li>
                            </ul>
                          </p>
                        </div>
                      </div>
                    </section>

                    <section>
                      <div className="border-t border-[#F1E7FD] flex lg:flex-row flex-col justify-between py-8 px-8">
                        <div className="flex items-center">
                          <div className="bg-[#F1E7FD] p-2 rounded-lg">
                            <FaRegClock size={25} color="#0011FF" />
                          </div>
                          <div className="pl-5">
                            <p className="text-[12px] text-[#686868]">
                              Avarage response time
                            </p>
                            <p className="text-[16px] font-semibold">1hr</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <button
                            onClick={handleContact}
                            className="bg-[#0011FF] text-white px-10 py-2 flex gap-2 space-x-10 items-center rounded-[32px] text-[14px] lg:mt-0 mt-5"
                          >
                            <FaRegEnvelope size={20} color="#fff" />
                            Contact Me
                          </button>
                        </div>
                      </div>
                    </section>
                    <hr />
                  </section>
                </section>
              </div>

              <div className="relative pb-8 flex flex-col justify-center">
                <section className="p-4 px-8">
                  <p className="text-[14px]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sunt asperiores totam officiis suscipit quidem qui quia fuga
                    sit ex optio aliquam id commodi molestias at laboriosam
                    voluptates, ipsam illo eius.
                    <br />
                    <span className="text-[gray]">
                      #Industries: #Health, Wellness, Fitness #Cosmetics
                      #Consumer Goods #Food and Beverages #Home #App & Tech
                      #Travel & Places.
                    </span>{" "}
                    <br />
                    <span className="text-[#0011FF] cursor-pointer">
                      See less
                    </span>
                  </p>
                </section>
                <button className="border border-[#0011FF] rounded-full px-16 py-2 self-center w-fit">
                  Edit
                </button>
              </div>
            </div>
          </section>

          <section className="mt-5 bg-[#fff] flex justify-between px-5 border py-4 rounded-lg">
            <h2 className="font-bebas text-[24px]">My UGC</h2>
          </section>

          <section className="mt-5 bg-[#fff] px-5 border py-4 rounded-lg">
            <VideoGallery />
          </section>

          <section className="mt-5 bg-[#fff] px-5 border py-4 rounded-lg">
            <LocationCard />
          </section>

          <section>
            <Suspense
              fallback={
                <div className="flex justify-center mt-8">
                  <PuffLoader color="#0011FF" size={50} />
                </div>
              }
            ></Suspense>
          </section>
        </section>

        {/* Empty Sections for Future Content */}

        <section className="lg:w-[30%] w-[100%]">
          <div className="w-[100%] px-4 flex items-center justify-between bg-[white] py-2 rounded-[12px]">
            <h3 className="text-[24px] font-bebas text-[#4B19FF]">
              Your score :{" "}
            </h3>

            <div className="relative flex-1 mx-3">
              <BorderLinearProgress variant="determinate" value={60} />

              {/* Icon at the exact progress position */}
              <div
                className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-[#0011FF] rounded-full flex items-center justify-center"
                style={{ left: `${60}%`, transform: "translate(-50%, -50%)" }}
              >
                <span className="text-white text-xs">✔</span>
              </div>
            </div>

            <span className="text-[#4B19FF] font-bebas text-[24px]">100%</span>
          </div>

          <div className="w-[100%] mt-4 flex justify-between bg-[white] py-2 rounded-[12px] px-2">
            <button
              className="w-[49%] h-[40px] text-[#fff] rounded-md text-[14px]"
              onClick={() => handleToggle("Video")}
              style={{
                background: toggle === "Video" ? "#0011FF" : "white",
                color: toggle === "Video" ? "white" : "black",
              }}
            >
              Video
            </button>
            <button
              className="h-[40px] w-[49%] text-[#fff] rounded-md text-[14px]"
              onClick={() => handleToggle("Photo")}
              style={{
                background: toggle === "Photo" ? "blue" : "white",
                color: toggle === "Photo" ? "white" : "#0011FF",
              }}
            >
              Photo{" "}
            </button>
          </div>

          <Package />

          <div className="py-3 text-center flex flex-col gap-2">
            <p className="px-4">Contact me for any questions, additional options or custom orders.</p>
            <button className="w-full bg-[#0011FF] text-white rounded-full px-16 py-2 self-center">
              Edit
            </button>
          </div>

          <div className="align-center flex-col mt-7 hidden">
            <p className="font-switzer text-[12px] text-center"></p>
            <button className="text-[14px] px-[50px] py-[10px] bg-[#0011FF] mt-5 text-[#fff] rounded-[32px]"></button>
          </div>

          <div className="p-4 bg-white my-4 rounded-lg">
            <Calendar />
          </div>
        </section>
      </section>
    </div>
  );
};

export default UgcCreatorProfile;
