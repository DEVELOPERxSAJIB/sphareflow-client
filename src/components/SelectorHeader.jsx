import React, { useState } from "react";
import LogoSphere from "../assets/common/logosphere.png";
import Menu from "../assets/common/menu.svg";
import { Bell, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./Elements/LanguageSwitcher";
import Notification from "./Elements/Notification";

function SelectorHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <nav className="bg-white flex justify-between items-center px-2 md:px-4 lg:px-6 py-2  rounded-lg">
        <div className="">
          <Link href="/profile">
            <img src={LogoSphere} alt="logo" width={110} height={80} />
          </Link>
        </div>
        {/* desktop navbar */}
        <div className="hidden lg:flex lg:items-center justify-center font-switzer">
          <ul className="flex items-center space-x-6 ">
            <li className="text-sm hover:text-blue-500 cursor-pointer">
              <Link href="/message">
                <span className="flex gap-1 items-center">ageras</span>
              </Link>
            </li>
            <li className="text-sm hover:text-blue-500 cursor-pointer">
              <Link href="/orders">dsfgdsfg</Link>
            </li>
            <li className="text-sm hover:text-blue-500 cursor-pointer">
              <Link href="/edit-profile">
                dsfgsdfg
                <span className={`rounded-md px-1 ms-1 text-white `}></span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex lg:items-center space-x-6 ">
          <LanguageSwitcher />
          <div className="flex items-center space-x-2">
            <img alt="menu" width={30} height={30} className="rounded-full" />
            <p className="text-sm max-w-[100px] truncate"></p>
          </div>
          <Notification />
          <LogOut className="cursor-pointer hover:text-blue-500" />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} aria-label="Toggle Menu">
            <img src={Menu} alt="menu" width={28} height={28} />
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
              <img alt="menu" width={30} height={30} className="rounded-full" />
              <p className="text-sm max-w-[100px] truncate"></p>
            </div>
            <div className="flex items-center space-x-10">
              <Notification />
              <LogOut className="cursor-pointer hover:text-blue-500" />
            </div>
          </div>
          <LanguageSwitcher />
        </div>
        <ul className="flex flex-col space-y-2 p-4">
          <li className="text-sm hover:text-blue-500 cursor-pointer">
            <Link href="/message">Message</Link>
          </li>
          <li className="text-sm hover:text-blue-500 cursor-pointer">
            sadfsadf
          </li>
          <li className="text-sm hover:text-blue-500 cursor-pointer">
            <Link href="/buildpage">
              lasjkdf
              <span className={`rounded-md px-1 ms-1 text-white`}></span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SelectorHeader;
