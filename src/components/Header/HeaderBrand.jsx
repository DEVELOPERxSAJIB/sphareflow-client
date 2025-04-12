import React, { useState } from "react";
import LogoSphere from "../../assets/common/Sphareflow.svg";
import Menu from "../../assets/common/menu.svg";
import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "../Elements/LanguageSwitcher";
import Notification from "../Elements/Notification";
import { RxCross2 } from "react-icons/rx";
import { GoDotFill } from "react-icons/go";

const HeaderBrand = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <nav className="bg-white flex justify-between items-center px-2 md:px-4 lg:px-6 py-2  rounded-lg">
        <div className="flex items-center justify-start gap-10">
          <Link to="/brand">
            <img src={LogoSphere} alt="logo" width={110} height={80} />
          </Link>
          <button className="bg-[#0011FF] hidden md:block px-4 py-2 rounded-md text-[#fff]">
            <Link to={'/brand/search-creator'} className="flex items-center gap-2 text-[16px] font-normal">
              + Search for Creator UGC
            </Link>
          </button>
        </div>
        {/* desktop navbar */}
        <div className="hidden lg:flex lg:items-center justify-center font-switzer">
          <ul className="flex items-center space-x-6 ">
            <li className="text-[16px] text-[#000] hover:text-[#0011FF] cursor-pointer">
              <Link
                className="flex items-center gap-0"
                to="/brand/profile"
              >
                <span className="block">Message</span>
                <GoDotFill color="red" className="mt-0.5" />
              </Link>
            </li>
            <li className="text-[16px] text-[#000] hover:text-[#0011FF] cursor-pointer">
              <Link to="/brand/my-orders">My Orders</Link>
            </li>
            <li className="text-[16px] text-[#000] hover:text-[#0011FF] cursor-pointer">
              <Link
                className="flex flex-row items-center gap-2"
                to="/brand"
              >
                Profile
                <span className="bg-[#0011FF] text-white text-[13px] font-normal px-2.5 py-0.5 rounded-full">
                  Available
                </span>
                <span className="bg-gray-100 text-gray-800 text-[13px] font-medium me-2 px-2.5 py-0.5 rounded-full">
                  Unvailable
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex lg:items-center space-x-6 ">
          <LanguageSwitcher />
          <div className="flex items-center space-x-2">
            <img
              src="https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png"
              alt="menu"
              width={30}
              height={30}
              className="rounded-full"
            />
            <p className="text-sm max-w-[100px] truncate"></p>
          </div>
          <Notification />
          <LogOut className="cursor-pointer text-[#0011FF] hover:text-blue-600" />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden mt-2">
          <button onClick={toggleMobileMenu} aria-label="Toggle Menu">
            {isMobileMenuOpen ? (
              <RxCross2 size={25} />
            ) : (
              <img src={Menu} alt="menu" width={28} height={28} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white  rounded-lg mt-2 shadow-lg transition-all duration-500 ease-in-out transform ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col gap-4 px-4 pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png"
                alt="menu"
                width={30}
                height={30}
                className="rounded-full"
              />
              <p className="text-[16px] text-[#000] max-w-[100px] truncate"></p>
            </div>
            <div className="flex items-center space-x-10">
              <Notification />
              <LogOut className="cursor-pointer text-[#0011FF] hover:text-blue-600" />
            </div>
          </div>
          <LanguageSwitcher />
        </div>
        <ul className="flex flex-col space-y-2 p-4">
          <li className="text-[16px] text-[#000] hover:text-[#0011FF] cursor-pointer">
            <Link className="flex items-center gap-0" href="/message">
              <span>Message</span>
              <GoDotFill color="red" className="mt-1" />
            </Link>
          </li>
          <li className="text-[16px] text-[#000] hover:text-[#0011FF] cursor-pointer">
            My Orders
          </li>
          <li className="text-[16px] text-[#000] hover:text-[#0011FF] cursor-pointer">
            <Link
              className="flex flex-row gap-3 items-center"
              href="/buildpage"
            >
              Profile
              <span className="bg-[#0011FF] text-white text-[13px] font-normal px-2.5 py-0.5 rounded-full">
                Available
              </span>
              <span className="bg-gray-100 text-gray-800 text-[13px] font-medium me-2 px-2.5 py-0.5 rounded-full">
                Unvailable
              </span>
            </Link>
          </li>
          <li className="text-[16px] text-[#000] hover:text-[#0011FF] cursor-pointer">
            <button className="bg-[#0011FF] w-full px-4 py-2 rounded-md text-[#fff]">
              <div className="flex items-center gap-2 text-[16px] font-normal justify-center">
                + Search for Creator UGC
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderBrand;
