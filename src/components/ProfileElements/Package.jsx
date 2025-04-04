const Package = ({ widthClass = "w-full" }) => {
  const packages = [
    {
      id: "1",
      name: "Video 1",
      price: "200",
      features: [
        "1 UGC Video",
        "1 Revision included",
        "5 Days delivery",
        "Editing",
        "Voice over",
      ],
    },
    {
      id: "2",
      name: "Video 2",
      price: "350",
      features: [
        "2 UGC Videos",
        "2 Revisions included",
        "7 Days delivery",
        "Advanced Editing",
        "Voice over & Captions",
      ],
    },
    {
      id: "3",
      name: "Video 3",
      price: "500",
      features: [
        "3 UGC Videos",
        "Unlimited Revisions",
        "10 Days delivery",
        "Premium Editing",
        "Professional Voice over",
      ],
    },
    {
      id: "4",
      name: "Video 4",
      price: "750",
      features: [
        "4 UGC Videos",
        "Unlimited Revisions",
        "15 Days delivery",
        "Cinematic Editing",
        "Custom Voice over",
      ],
    },
    {
      id: "5",
      name: "Video 5",
      price: "1000",
      features: [
        "5 UGC Videos",
        "Unlimited Revisions",
        "20 Days delivery",
        "Hollywood-Grade Editing",
        "Exclusive Sound Design",
      ],
    },
  ];

  return (
    <>
      {packages?.map((item) => (
        <>
          <div
            key={item.id}
            className={`bg-[#fff] mt-4 rounded-xl border border-[#EEE] shadow-sm ${widthClass}`}
          >
            <div className="top-area p-4 ">
              <div className="flex justify-between items-center">
                <h2 className="font-bebas text-[24px] text-black">
                  {item?.name}
                </h2>
                <span className="text-[#4B19FF] text-[24px] font-bebas">
                  ${item?.price}
                </span>
              </div>

              <ul className="mt-3 space-y-2 text-gray-800">
                {item?.features?.map((item) => (
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
             className="flex justify-between gap-4 p-4 bg-[#FFFCF3]">
              <button className="border border-[#0011FF] rounded-full px-6 lg:px-16 py-2 self-center w-fit">
                Edit
              </button>
              <button className="bg-[#0011FF] text-[white] rounded-full px-6 lg:px-16 py-2 self-center w-fit">
                Delete
              </button>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default Package;
