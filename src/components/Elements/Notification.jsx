import { Bell } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNotification = () => {
    setIsOpen((prev) => !prev);
  };

  const handleResetNotificationUnreadCount = async () => {};

  return (
    <div className="relative">
      <div
        onClick={() => {
          toggleNotification();
          handleResetNotificationUnreadCount();
        }}
        className="relative cursor-pointer"
      >
        <Bell className="text-[#0011FF] hover:text-blue-600" />
        <GoDotFill color="red" className="absolute top-0.5 -right-0.5" />
      </div>
      {isOpen && (
        <div className="absolute -right-10 lg:right-0 mt-2 border rounded-md w-[250px] sm:w-[300px] lg:w-[500px] p-4 bg-white shadow-lg z-50">
          <h2 className="text-lg ">Notification</h2>
          <div className="flex flex-col gap-1 max-h-[400px] overflow-y-auto space-y-2 pt-2">
            <Link href={""} className="flex gap-3 ">
              <div className="w-[10%] lg:w-[5%] pt-1 text-center">
                <Bell />
              </div>
              <div className="flex flex-col justify-center w-[90%] lg:w-[95%]">
                <p className="text-xs text-gray-500">Hello </p>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
