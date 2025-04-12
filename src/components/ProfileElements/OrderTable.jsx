import { useState } from "react";
import { BsStripe } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";

export const AllOrders = () => {
  const orders = [
    {
      id: 1,
      buyer: "Degentech123",
      package: "5 UGC Video, 2 Revision included, Editing, Voice over",
      dueOn: "Nov 07",
      total: "$700",
      timeLeft: "02:02:30:02",
      status: "In progress",
      buttonLabel: "Deliver Now",
      statusStyle: "bg-blue-100 text-blue-800",
      buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white",
    },
    {
      id: 2,
      buyer: "Degentech123",
      package: "5 UGC Video, 2 Revision included, Editing, Voice over",
      dueOn: "Nov 07",
      total: "$300",
      timeLeft: "00:00:00:00",
      status: "Delivered",
      buttonLabel: "Deliver Again",
      statusStyle: "bg-green-100 text-green-800",
      buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white",
    },
    {
      id: 3,
      buyer: "Degentech123",
      package: "5 UGC Video, 2 Revision included, Editing, Voice over",
      dueOn: "Nov 07",
      total: "$300",
      timeLeft: "00:00:00:00",
      status: "Canceled",
      buttonLabel: "Deliver Again",
      statusStyle: "bg-green-100 text-green-800",
      buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white",
    },
  ];
  return (
    <>
      <table className="w-full text-sm text-left rtl:text-right bg-white">
        <caption className="px-6 py-3 text-[16px] font-semibold text-left rtl:text-right text-[#000000] bg-yellow-50">
          Active orders
        </caption>
        <thead className="text-[16px] text-[#686868] border-b border-[#F1E7FD]">
          <tr>
            <th scope="col" className="px-6 py-3 font-normal">
              Buyer
            </th>
            <th scope="col" className="px-6 py-3 font-normal">
              Package
            </th>
            <th scope="col" className="px-6 py-3 font-normal">
              Due on
            </th>
            <th scope="col" className="px-6 py-3 font-normal">
              Total
            </th>
            <th scope="col" className="px-6 py-3 font-normal">
              Time left to deliver
            </th>
            <th scope="col" className="px-6 py-3 font-normal">
              Status
            </th>
            <th scope="col" className="px-6 py-3 font-normal"></th>
            <th scope="col" className="px-6 py-3 font-normal">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b border-[#F1E7FD]">
              <th
                scope="row"
                className="px-6 py-4 flex flex-row gap-2 items-center font-medium text-[#000000] whitespace-nowrap"
              >
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Images.png"
                  alt="buyer-image"
                />
                {order.buyer}
              </th>
              <td className="px-6 py-4">{order.package}</td>
              <td className="px-6 py-4">{order.dueOn}</td>
              <td className="px-6 py-4">{order.total}</td>
              <td className="px-6 py-4">
                <div className="flex justify-start">
                  <div className="flex flex-col items-center px-2">
                    <div className="text-[#1E1E1E] text-[16px] font-semibold">
                      25
                    </div>
                    <div className="text-[#686868] text-[14px]">Days</div>
                  </div>
                  <div className="border border-r-1 border-[#ADD8E6]"></div>
                  <div className="flex flex-col items-center px-2">
                    <div className="text-[#1E1E1E] text-[16px] font-semibold">
                      02
                    </div>
                    <div className="text-[#686868] text-[14px]">Hrs</div>
                  </div>
                  <div className="border border-r-1 border-[#ADD8E6]"></div>
                  <div className="flex flex-col items-center px-2">
                    <div className="text-[#1E1E1E] text-[16px] font-semibold">
                      42
                    </div>
                    <div className="text-[#686868] text-[14px]">Min</div>
                  </div>
                  <div className="border border-r-1 border-[#ADD8E6]"></div>

                  <div className="flex flex-col items-center px-2">
                    <div className="text-[#1E1E1E] text-[16px] font-semibold">
                      02
                    </div>
                    <div className="text-[#686868] text-[14px]">Min</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                {(() => {
                  switch (order.status) {
                    case "In progress":
                      return (
                        <span className="bg-[#0011FF33] text-[#0011FF] text-[16px] font-medium me-2 px-5 py-1 rounded-full">
                          Inprogress
                        </span>
                      );
                    case "Delivered":
                      return (
                        <span class="bg-[#31F47F4D] text-[#19984C] text-[16px] font-medium me-2 px-5 py-1 rounded-full">
                          Delivered
                        </span>
                      );
                    case "Canceled":
                      return (
                        <span class="bg-red-100 text-red-800 text-[16px] font-medium me-2 px-5 py-1 rounded-full">
                          Canceled
                        </span>
                      );

                    default:
                      break;
                  }
                })()}
              </td>
              <td className="px-6 py-4 text-right">
                {order.status === "Delivered" ? (
                  <button className="bg-[#0011FF] text-[16px] font-normal px-5 text-[#fff] py-2 rounded-[22px]">
                    Deliver Again
                  </button>
                ) : (
                  <button className="bg-[#0011FF] text-[16px] font-normal px-5 text-[#fff] py-2 rounded-[22px]">
                    Deliver Now
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export const CompletedOrders = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheckbox = (index) => {
    setCheckedItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const orders = [
    {
      id: 1,
      buyer: "Degentech123",
      package: "5 UGC Video, 2 Revision included, Editing, Voice over",
      dueOn: "Nov 07",
      deliveriedAt: "Nov 25",
      total: "$700",
      timeLeft: "02:02:30:02",
      status: "Completed",
      buttonLabel: "Deliver Now",
      statusStyle: "bg-blue-100 text-blue-800",
      buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white",
    },
    {
      id: 2,
      buyer: "Degentech123",
      package: "5 UGC Video, 2 Revision included, Editing, Voice over",
      dueOn: "Nov 07",
      deliveriedAt: "Nov 28",
      total: "$300",
      timeLeft: "00:00:00:00",
      status: "Completed",
      buttonLabel: "Deliver Again",
      statusStyle: "bg-green-100 text-green-800",
      buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white",
    },
    {
      id: 3,
      buyer: "Degentech123",
      package: "5 UGC Video, 2 Revision included, Editing, Voice over",
      dueOn: "Nov 08",
      deliveriedAt: "Nov 27",
      total: "$300",
      timeLeft: "00:00:00:00",
      status: "Completed",
      buttonLabel: "Deliver Again",
      statusStyle: "bg-green-100 text-green-800",
      buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white",
    },
  ];
  return (
    <>
      <table className="w-full text-sm text-left rtl:text-right bg-white">
        <caption className="px-6 py-3 text-[16px] font-semibold text-left rtl:text-right text-[#000000] bg-yellow-50">
          Active orders
        </caption>
        <thead className="text-[16px] text-[#686868] border-b border-[#F1E7FD]">
          <tr>
            <th scope="col" className="px-6 py-3 font-normal">
              Buyer
            </th>
            <th scope="col" className="px-6 py-3 font-normal">
              Package
            </th>
            <th scope="col" className="px-6 py-3 font-normal">
              Due on
            </th>
            <th scope="col" className="px-6 py-3 font-normal">
              Delivered at
            </th>
            <th scope="col" className="px-6 py-3 font-normal">
              Total
            </th>
            <th scope="col" className="px-6 py-3 font-normal">
              Status
            </th>
            <th scope="col" className="px-6 py-3 font-normal"></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b border-[#F1E7FD]">
              <th
                scope="row"
                className="px-6 py-4 flex flex-row gap-2 items-center font-medium text-[#000000] whitespace-nowrap"
              >
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Images.png"
                  alt="buyer-image"
                />
                {order.buyer}
              </th>
              <td className="px-6 py-4">{order.package}</td>
              <td className="px-6 py-4">{order.dueOn}</td>
              <td className="px-6 py-4">{order.deliveriedAt}</td>
              <td className="px-6 py-4">{order.total}</td>

              <td className="px-6 py-4">
                {(() => {
                  switch (order.status) {
                    case "Completed":
                      return (
                        <span className="bg-[#0011FF] text-[#fff] text-[16px] font-medium me-2 px-5 py-1 rounded-full">
                          Completed
                        </span>
                      );

                    default:
                      break;
                  }
                })()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <section className="mt-16 border rounded-lg">
        <div className="p-6 rounded-lg">
          {/* Terms and Conditions */}
          <div className="flex items-start space-x-3 mb-3">
            <button
              onClick={() => toggleCheckbox(1)}
              className={`min-w-[29px] min-h-[27px] border-2 rounded-[12px] flex items-center justify-center ${
                checkedItems[1]
                  ? "bg-[#0011FF] border-[#0011FF]"
                  : "border-black"
              }`}
            >
              {checkedItems[1] ? (
                <FaCheck size={12} className="text-white " />
              ) : (
                ""
              )}
            </button>
            <p className="text-gray-900">
              I agree to the{" "}
              <a href="#" className="text-blue-600 underline">
                Terms and Conditions
              </a>
            </p>
          </div>

          {/* Other Checkboxes */}
          {[
            "I agree to the UGC Creator Terms and Conditions",
            "Minimum 15-day delay after order completion before funds can be withdrawn.",
          ].map((text, index) => (
            <div key={index} className="flex items-start space-x-3 mb-3">
              <button
                onClick={() => toggleCheckbox(index + 2)}
                className={`min-w-[29px] min-h-[27px] border-2 rounded-[12px] flex items-center justify-center ${
                  checkedItems[index + 2]
                    ? "bg-[#0011FF] border-[#0011FF]"
                    : "border-black"
                }`}
              >
                {checkedItems[index + 2] ? (
                  <FaCheck size={12} className="text-white " />
                ) : (
                  ""
                )}
              </button>
              <p className="text-gray-900">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="pb-12 text-center">
        <button className="bg-[#0011FF] px-6 md:px-16 py-3 rounded-[30px] mt-4 text-[#fff]">
          <div className="flex items-center gap-2">
            <BsStripe size={20} />
            Withdraw my funds Via Stripe*
          </div>
        </button>
      </div>
    </>
  );
};
