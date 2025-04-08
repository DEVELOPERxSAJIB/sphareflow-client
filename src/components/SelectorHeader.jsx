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

        <div className="hidden lg:flex lg:items-center space-x-6 ">
          <LanguageSwitcher />
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
        <div className="flex flex-col gap-4 px-4 py-4">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}

export default SelectorHeader;
