import React from "react";
import Logo from "../../assets/common/logosphere.png";
import LoginAnimation from "../../components/Elements/LoginAnimation";
import { Link } from "react-router-dom";
// import { PuffLoader } from 'react-spinners';

const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleForgot = () => {};

  const handleRegister = () => {};

  return (
    <div className="lg:flex lg:flex-row md-flex-col h-screen">
      <div className="hidden lg:block w-[50%] h-screen px-3">
        <LoginAnimation />
      </div>
      <div className="lg:w-[50%] md:w-[100%] sm:w-[100%] bg-primary h-screen flex flex-col items-center">
        <div className="self-start ml-5 mt-5">
          <img src={Logo} alt="Logo" width={120} />
        </div>
        <div className="lg:mt-[15%] xs:mt-[90px] bg-white px-8 py-8 rounded-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-left mb-6">Login</h2>

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
                placeholder="someone@example.com"
                id="email"
                required
                className="placeholder:text-[14px] mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="********"
                required
                className="placeholder:text-[14px] mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#0010FF] text-white py-2 hover:bg-blue-600 transition duration-200 mb-4 rounded-[32px] flex items-center justify-center"
            >
              {/* {fetching ? <PuffLoader color="white" size={24} /> : `Let's Go!`} */}
              Let's go
            </button>

            <Link to={"/forget-password"}>
              <p
                className="cursor-pointer text-center text-sm text-blue-500 hover:underline"
                onClick={handleForgot}
              >
                Forgot Password?
              </p>
            </Link>

            <Link to={"/register"}>
              <p
                onClick={handleRegister}
                className="mt-3 cursor-pointer text-center text-sm text-blue-500 hover:underline"
              >
                Don&apos;t have an account? Register
              </p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
