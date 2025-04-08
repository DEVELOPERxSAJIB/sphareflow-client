import React, { useState } from "react";
import { AllOrders, CompletedOrders } from "../../components/ProfileElements/OrderTable";
import HeaderUgcCreatorProfile from "../../components/Header/HeaderUgcCreatorProfile";

const MyOrders = () => {
  const [activeTab, setActiveTab] = useState("active");

  const toggleTab = (value) => {
    setActiveTab(value);
  };

  return (
    <div className="lg:px-20 md:px-5 sm:px-5 xs:px-5 pt-5 px-4 h-screen">
      <HeaderUgcCreatorProfile />

      <div className="mt-8 min-h-screen">
        <h1 className="text-xl font-bold mb-4">MY ORDERS</h1>
        <div className="flex space-x-6 pb-2 mb-4">
          <button
            onClick={() => toggleTab("active")}
            className={`${
              activeTab === "active"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 border-b-2 border-transparent"
            } font-semibold pb-1`}
          >
            Active
          </button>
          <button
            onClick={() => toggleTab("completed")}
            className={`${
              activeTab === "completed"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 border-b-2 border-transparent"
            } font-semibold pb-1`}
          >
            Completed
          </button>
        </div>

        <div className="rounded-xl overflow-hidden">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            {activeTab === "active" && <AllOrders />}
            {activeTab === "completed" && <CompletedOrders />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
