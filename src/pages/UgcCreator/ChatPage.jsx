import React, { useState } from "react";
import SelectorHeader from "../../components/SelectorHeader";
import { FaCircle } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";

const ChatPage = () => {
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    price: 0,
    revisions: 0,
    type: "Photo",
    quantity: 1,
    includesEditing: "No",
    includesVoiceOver: "No",
    orderTime: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="lg:px-20 md:px-5 sm:px-5 xs:px-5 pt-5 px-4 h-screen">
      <SelectorHeader />

      {/* Package Modal */}

      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-white px-6 py-5 sm:p-6">
                <DialogTitle
                  as="h3"
                  className="text-lg flex justify-between font-semibold text-gray-900 mb-4"
                >
                  Create Package
                  <RxCross2 className="cursor-pointer" size={20} onClick={() => setOpen(false)} />
                </DialogTitle>
                <hr />

                <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Price
                      </label>
                      <input
                        type="number"
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                        className="mt-1 w-full rounded-md border border-gray-300 px-2 py-1 focus:outline-none focus:ring focus:ring-blue-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Revisions
                      </label>
                      <input
                        type="number"
                        name="revisions"
                        value={form.revisions}
                        onChange={handleChange}
                        className="mt-1 w-full rounded-md border border-gray-300 px-2 py-1 focus:outline-none focus:ring focus:ring-blue-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Type
                      </label>
                      <select
                        name="type"
                        value={form.type}
                        onChange={handleChange}
                        className="mt-1 w-full rounded-md border border-gray-300 px-2 py-1"
                      >
                        <option value="Photo">Photo</option>
                        <option value="Video">Video</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Quantity
                      </label>
                      <input
                        type="number"
                        name="quantity"
                        value={form.quantity}
                        onChange={handleChange}
                        className="mt-1 w-full rounded-md border border-gray-300 px-2 py-1"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Includes Editing
                    </label>
                    <select
                      name="includesEditing"
                      value={form.includesEditing}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-md border border-gray-300 px-2 py-1"
                    >
                      <option value="No">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Includes Voice Over
                    </label>
                    <select
                      name="includesVoiceOver"
                      value={form.includesVoiceOver}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-md border border-gray-300 px-2 py-1"
                    >
                      <option value="No">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Order Time (in days)
                    </label>
                    <input
                      type="number"
                      name="orderTime"
                      value={form.orderTime}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-md border border-gray-300 px-2 py-1"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0011FF] text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <div className="flex mt-6 rounded-lg h-[90%] relative overflow-hidden">
        {/* Sidebar */}
        <div className="w-1/4 bg-white border-r border-gray-300">
          {/* Sidebar Header */}
          <header className="p-4 border-b border-gray-300 flex justify-between items-center bg-[#0011FF] text-white">
            <h1 className="text-2xl font-semibold">All Messages</h1>
          </header>

          {/* Contact List */}
          <div className="overflow-y-auto h-screen p-3 mb-9 pb-20">
            {[
              "Alice",
              "Martin",
              "Charlie",
              "David",
              "Ella",
              "Fiona",
              "George",
              "Hannah",
              "Martin",
              "Charlie",
              "David",
              "Ella",
              "Fiona",
              "George",
              "Hannah",
              "Ian",
              "Jack",
            ].map((name, index) => (
              <div
                key={index}
                className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
              >
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
                  <img
                    src={`https://placehold.co/200x/${
                      index % 2 === 0 ? "ffa8e4" : "ad922e"
                    }/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato`}
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{name}</h2>
                  <p className="text-gray-600">Message goes here...</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1">
          {/* Chat Header */}
          <header className="bg-white p-4 text-gray-700">
            <h3 className="text-2xl font-semibold">Md Sajib Shikder</h3>
            <p>Last seen 12:41 PM</p>
            <p className="flex flex-row justify-start items-center gap-1">
              <FaCircle color="#13CF13" size={12} />
              Online
            </p>
          </header>

          {/* Chat Messages */}
          <div className="h-[90%] overflow-y-auto p-4 pb-36">
            {[
              { sender: "Alice", message: "Hey Bob, how's it going?" },
              {
                sender: "Bob",
                message:
                  "Hi Alice! I'm good, just finished a great book. How about you?",
              },
              {
                sender: "Alice",
                message: "That book sounds interesting! What's it about?",
              },
              {
                sender: "Bob",
                message:
                  "It's about an astronaut stranded on Mars, trying to survive. Gripping stuff!",
              },
              {
                sender: "Alice",
                message:
                  "I'm intrigued! Maybe I'll borrow it from you when you're done?",
              },
              {
                sender: "Bob",
                message: "Of course! I'll drop it off at your place tomorrow.",
              },
              { sender: "Alice", message: "Thanks, you're the best!" },
              { sender: "Alice", message: "Hey Bob, how's it going?" },
              {
                sender: "Bob",
                message:
                  "Hi Alice! I'm good, just finished a great book. How about you?",
              },
              {
                sender: "Alice",
                message: "That book sounds interesting! What's it about?",
              },
              {
                sender: "Bob",
                message:
                  "It's about an astronaut stranded on Mars, trying to survive. Gripping stuff!",
              },
              {
                sender: "Alice",
                message:
                  "I'm intrigued! Maybe I'll borrow it from you when you're done?",
              },
              {
                sender: "Bob",
                message: "Of course! I'll drop it off at your place tomorrow.",
              },
              { sender: "Alice", message: "Thanks, you're the best!" },
              { sender: "Alice", message: "Hey Bob, how's it going?" },
              {
                sender: "Bob",
                message:
                  "Hi Alice! I'm good, just finished a great book. How about you?",
              },
              {
                sender: "Alice",
                message: "That book sounds interesting! What's it about?",
              },
              {
                sender: "Bob",
                message:
                  "It's about an astronaut stranded on Mars, trying to survive. Gripping stuff!",
              },
              {
                sender: "Alice",
                message:
                  "I'm intrigued! Maybe I'll borrow it from you when you're done?",
              },
              {
                sender: "Bob",
                message: "Of course! I'll drop it off at your place tomorrow.",
              },
              { sender: "Alice", message: "Thanks, you're the best!" },
              { sender: "Alice", message: "Hey Bob, how's it going?" },
              {
                sender: "Bob",
                message:
                  "Hi Alice! I'm good, just finished a great book. How about you?",
              },
              {
                sender: "Alice",
                message: "That book sounds interesting! What's it about?",
              },
              {
                sender: "Bob",
                message:
                  "It's about an astronaut stranded on Mars, trying to survive. Gripping stuff!",
              },
              {
                sender: "Alice",
                message:
                  "I'm intrigued! Maybe I'll borrow it from you when you're done?",
              },
              {
                sender: "Bob",
                message: "Of course! I'll drop it off at your place tomorrow.",
              },
              { sender: "Alice", message: "Thanks, you're the best!" },
              { sender: "Alice", message: "Hey Bob, how's it going?" },
              {
                sender: "Bob",
                message:
                  "Hi Alice! I'm good, just finished a great book. How about you?",
              },
              {
                sender: "Alice",
                message: "That book sounds interesting! What's it about?",
              },
              {
                sender: "Bob",
                message:
                  "It's about an astronaut stranded on Mars, trying to survive. Gripping stuff!",
              },
              {
                sender: "Alice",
                message:
                  "I'm intrigued! Maybe I'll borrow it from you when you're done?",
              },
              {
                sender: "Bob",
                message: "Of course! I'll drop it off at your place tomorrow.",
              },
              { sender: "Alice", message: "Thanks, you're the best!" },
            ].map((msg, index) => (
              <div
                key={index}
                className={`flex mb-4 ${
                  msg.sender === "Bob" ? "justify-end" : ""
                }`}
              >
                {msg.sender !== "Bob" && (
                  <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                    <img
                      src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                      alt="User Avatar"
                      className="w-8 h-8 rounded-full"
                    />
                  </div>
                )}
                <div
                  className={`flex max-w-96 ${
                    msg.sender === "Bob"
                      ? " bg-[#0011FF] text-[#fff]"
                      : "bg-white text-[#000]"
                  } rounded-lg p-3 gap-3`}
                >
                  <p className="">{msg.message}</p>
                </div>
                {msg.sender === "Bob" && (
                  <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                    <img
                      src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                      alt="My Avatar"
                      className="w-8 h-8 rounded-full"
                    />
                  </div>
                )}
              </div>
            ))}
            <div
            className={`bg-[#fff] my-4 md:ml-10 rounded-xl border border-[#EEE] shadow-sm w-[40%]`}
          >
            <div className="top-area p-4">
              <div className="flex justify-between items-center">
                <h2 className="font-bebas text-[24px] text-black">
                  Video1/ Photo1
                </h2>
                <span className="text-[#4B19FF] text-[24px] font-bebas">
                  $200
                </span>
              </div>

              <ul className="space-y-2 text-gray-800">
                {["Video Creation", "5 Rivisions", "30 days timeline"]?.map((item) => (
                  <li className="text-[20px] text-[#686868] flex items-center gap-2">
                    <span className=" text-[#4B19FF]">✔</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
            style={{
              borderBottomLeftRadius : "15px",
              borderBottomRightRadius : "15px"
            }} 
             className="flex justify-center gap-4 p-4 bg-[#FFFCF3]">
              <button className="bg-[#0011FF] text-[white] rounded-full px-6 lg:px-16 py-2 self-center w-fit">
                Buy Now
              </button>
            </div>
          </div>
          </div>
          {/* <footer className="bg-white border-t border-gray-300 p-4 absolute bottom-0 w-3/4">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Type a message..."
                className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
              />
              <button className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2">
                Send
              </button>
            </div>
          </footer> */}
          <footer className="bg-white border-t border-gray-300 p-4 absolute bottom-0 w-3/4">
            <div className="flex items-center justify-center">
              <textarea
                className="w-full p-4 border border-[#ADD8E6] rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#ADD8E6]"
                placeholder={"Type your message here..."}
              ></textarea>

              <div
                className="buttons absolute flex gap-3 flex-row bottom-6
              right-6"
              >
                <button
                  onClick={() => setOpen(true)}
                  className="bg-[#0011FF] text-white px-6 py-2 rounded-[32px] hover:bg-blue-600 flex items-center"
                >
                  Create Package
                </button>

                <button className="bg-[#0011FF] flex-row justify-center gap-2 text-white px-10 py-2 rounded-[32px] hover:bg-blue-600 flex items-center">
                  Send
                  <IoMdSend />
                </button>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
