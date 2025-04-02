import React from "react";
import Logo from "../../assets/common/logosphere.png";
import { IoArrowBackCircle } from "react-icons/io5";
import LoginAnimation from "../../components/Elements/LoginAnimation";
import { Link } from "react-router-dom";

function ForgetPassword() {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="lg:flex lg:flex-row md:flex-col h-screen">
      <div className="hidden lg:block w-[50%] h-screen px-3">
        <LoginAnimation />
      </div>
      <div className="lg:w-[50%] md:w-[100%] sm:w-[100%] bg-primary h-screen flex flex-col items-center">
        <div className="self-start ml-5 mt-5">
          <img src={Logo} alt="Logo" width={120} />
        </div>
        <div className="lg:mt-[25%] xs:mt-[150px] bg-white px-8 py-8 rounded-lg w-full max-w-md">
          <div className="flex">
            <Link className="mt-[2px]" to="/login">
              <IoArrowBackCircle size={28} color="gray" />
            </Link>
            <h2 className="ml-3 text-2xl font-bold text-left mb-6">
              Enter your Email
            </h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="someone@example.com"
                className="placeholder:text-sm mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>



            <button
              type="submit"
              className="w-full h-[40px] bg-[#0010FF] text-white hover:bg-blue-600 transition duration-200 mb-4 rounded-[32px]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
