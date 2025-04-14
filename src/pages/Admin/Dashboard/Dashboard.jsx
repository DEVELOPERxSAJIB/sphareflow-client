import "../Stylesheet.css";
import React from "react";
import AdminLayout from "../../../components/Layout/AdminLayout";
import { HiUserGroup } from "react-icons/hi2";
import { RiUserForbidLine } from "react-icons/ri";
import { VscFileSubmodule } from "react-icons/vsc";
import { MdOutlineBugReport } from "react-icons/md";
import { ProfitChart } from "../../../components/Admin/dashboard/ProfitChart";
import { UserChart } from "../../../components/Admin/dashboard/UserChart";
import { OrderTable } from "../../../components/Admin/dashboard/OrderTable";
import { TbMessage2Cancel } from "react-icons/tb";

const Dashboard = () => {
  const recentOrders = [
    {
      id: "1",
      clientName: "Jhon De",
      clientImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpClpLWKKezwE4Puri4ynnx1l29AFXT7njxA&s",
      amount: "142",
      category: "Video",
    },
    {
      id: "2",
      clientName: "Emily Carter",
      clientImage: "https://randomuser.me/api/portraits/women/68.jpg",
      amount: "320",
      category: "Photo",
    },
    {
      id: "3",
      clientName: "Michael Smith",
      clientImage: "https://randomuser.me/api/portraits/men/45.jpg",
      amount: "98",
      category: "Development",
    },
    {
      id: "4",
      clientName: "Sara Lee",
      clientImage: "https://randomuser.me/api/portraits/women/55.jpg",
      amount: "230",
      category: "Marketing",
    },
    {
      id: "5",
      clientName: "David Johnson",
      clientImage: "https://randomuser.me/api/portraits/men/36.jpg",
      amount: "175",
      category: "Consulting",
    },
    {
      id: "6",
      clientName: "Michael Smith",
      clientImage: "https://randomuser.me/api/portraits/men/45.jpg",
      amount: "98",
      category: "Development",
    },
    {
      id: "7",
      clientName: "Jhon De",
      clientImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpClpLWKKezwE4Puri4ynnx1l29AFXT7njxA&s",
      amount: "142",
      category: "Video",
    },
    {
      id: "8",
      clientName: "Emily Carter",
      clientImage: "https://randomuser.me/api/portraits/women/68.jpg",
      amount: "320",
      category: "Photo",
    },
  ];

  const recentBrand = [
    {
      id: "1",
      name: "Sphare Flow",
      joined: "20 Oct 2025",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0p0rAHBTku1B9oTDW-m352X_GHHkzurSQIA&s",
    },
    {
      id: "2",
      name: "NovaTech",
      joined: "15 Sep 2025",
      logo: "https://randomuser.me/api/portraits/lego/1.jpg",
    },
    {
      id: "3",
      name: "Pixelon",
      joined: "05 Aug 2025",
      logo: "https://randomuser.me/api/portraits/lego/2.jpg",
    },
    {
      id: "4",
      name: "CloudNest",
      joined: "10 Jul 2025",
      logo: "https://randomuser.me/api/portraits/lego/3.jpg",
    },
    {
      id: "5",
      name: "EchoBrand",
      joined: "01 Jun 2025",
      logo: "https://randomuser.me/api/portraits/lego/4.jpg",
    },
    {
      id: "6",
      name: "VibeSoft",
      joined: "23 May 2025",
      logo: "https://randomuser.me/api/portraits/lego/5.jpg",
    },
    {
      id: "7",
      name: "UrbanEdge",
      joined: "14 Apr 2025",
      logo: "https://randomuser.me/api/portraits/lego/6.jpg",
    },
    {
      id: "8",
      name: "Zenith Media",
      joined: "28 Mar 2025",
      logo: "https://randomuser.me/api/portraits/lego/7.jpg",
    },
  ];

  const maxOrderShow = recentOrders ? recentOrders.slice(0, 5) : "";
  const maxBrandShow = recentBrand ? recentBrand.slice(0, 5) : "";

  return (
    <AdminLayout>
      {/* Page Header */}
      <div className="block justify-between page-header md:flex">
        <div>
          <h3 className="!text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:text-white dark:hover:text-white text-[1.125rem] font-semibold">
            SphareFlow
          </h3>
        </div>
        <ol className="flex items-center whitespace-nowrap min-w-0">
          <li className="text-[0.813rem] ps-[0.5rem]">
            <a
              className="flex items-center text-primary hover:text-primary dark:text-primary truncate"
              href="javascript:void(0);"
            >
              Dashboards
              <i className="ti ti-chevrons-right flex-shrink-0 text-[#8c9097] dark:text-white/50 px-[0.5rem] overflow-visible rtl:rotate-180" />
            </a>
          </li>
          <li
            className="text-[0.813rem] text-defaulttextcolor font-semibold hover:text-primary dark:text-[#8c9097] dark:text-white/50"
            aria-current="page"
          >
            Sphareflow
          </li>
        </ol>
      </div>
      {/* Page Header Close */}

      {/* Start Row-0 */}
      <div className="grid grid-cols-12 gap-4">
        <div className="lg:col-span-3 md:col-span-4 col-span-12 translate-all duration-300 hover:-translate-y-2">
          <div className="box">
            <div className="box-body">
              <div className="grid grid-cols-12">
                <div className="xxxl:col-span-3 col-span-4 flex items-center ecommerce-icon secondary px-0">
                  <span className="rounded-md p-4 bg-blue-500/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg-white secondary"
                      enableBackground="new 0 0 24 24"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#000000"
                    >
                      <path d="M0,0h24v24H0V0z" fill="none" />
                      <g>
                        <path d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M15,20H6c-0.55,0-1-0.45-1-1v-1h10V20z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z" />
                        <rect height={2} width={6} x={9} y={7} />
                        <rect height={2} width={2} x={16} y={7} />
                        <rect height={2} width={6} x={9} y={10} />
                        <rect height={2} width={2} x={16} y={10} />
                      </g>
                    </svg>
                  </span>
                </div>
                <div className="xxxl:col-span-9 col-span-8 ps-0">
                  <div className="mb-2">Total Profit</div>
                  <div className="text-[#8c9097] dark:text-white/50 mb-1 text-[0.75rem]">
                    <span className="font-semibold text-[1.25rem] leading-none text-defaulttextcolor vertical-bottom">
                      $28,346.00
                    </span>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-4 col-span-12 translate-all duration-300 hover:-translate-y-2">
          <div className="box">
            <div className="box-body">
              <div className="grid grid-cols-12">
                <div className="xxxl:col-span-3 col-span-4 flex items-center px-0">
                  <span className="rounded-md p-4 bg-primary/10">
                    <HiUserGroup size={28} />
                  </span>
                </div>
                <div className="xxxl:col-span-9 col-span-8 ps-0">
                  <div className="mb-2">Total Creator (Seller)</div>
                  <div className="text-[#8c9097] dark:text-white/50 mb-1 text-[0.75rem]">
                    <span className="text-defaulttextcolor font-semibold text-[1.25rem] leading-none vertical-bottom">
                      96
                    </span>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-4 col-span-12 translate-all duration-300 hover:-translate-y-2">
          <div className="box">
            <div className="box-body">
              <div className="grid grid-cols-12">
                <div className="xxxl:col-span-3 col-span-4 flex items-center ecommerce-icon success px-0">
                  <span className="rounded-md p-4 bg-success/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg-white success"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#000000"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </span>
                </div>
                <div className="xxxl:col-span-9 col-span-8 ps-0">
                  <div className="mb-2">Total Brands (Client)</div>
                  <div className="text-[#8c9097] dark:text-white/50 mb-1 text-[0.75rem]">
                    <span className="text-defaulttextcolor font-semibold text-[1.25rem] leading-none vertical-bottom">
                      42
                    </span>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-4 col-span-12 translate-all duration-300 hover:-translate-y-2">
          <div className="box">
            <div className="box-body">
              <div className="grid grid-cols-12">
                <div className="xxxl:col-span-3 col-span-4 flex items-center ecommerce-icon warning px-0">
                  <span className="rounded-md p-4 bg-warning/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg-white warning"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#000000"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>
                  </span>
                </div>
                <div className="xxxl:col-span-9 col-span-8 ps-0">
                  <div className="mb-2">Total Orders</div>
                  <div className="text-[#8c9097] dark:text-white/50 mb-1 text-[0.75rem]">
                    <span className="font-semibold text-[1.25rem] leading-none vertical-bottom text-defaulttextcolor">
                      35,367
                    </span>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="lg:col-span-3 md:col-span-4 col-span-12 translate-all duration-300 hover:-translate-y-2">
          <div className="box">
            <div className="box-body">
              <div className="grid grid-cols-12">
                <div className="xxxl:col-span-3 col-span-4 flex items-center px-0">
                  <span className="rounded-md p-4 bg-indigo-600/10">
                    <VscFileSubmodule
                      color="#fff"
                      size={28}
                      className="bg-indigo-600 p-1 rounded-md"
                    />
                  </span>
                </div>
                <div className="xxxl:col-span-9 col-span-8 ps-0">
                  <div className="mb-2">All Contents</div>
                  <div className="text-[#8c9097] dark:text-white/50 mb-1 text-[0.75rem]">
                    <span className="text-defaulttextcolor font-semibold text-[1.25rem] leading-none vertical-bottom">
                      155
                    </span>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-4 col-span-12 translate-all duration-300 hover:-translate-y-2">
          <div className="box">
            <div className="box-body">
              <div className="grid grid-cols-12">
                <div className="xxxl:col-span-3 col-span-4 flex items-center ecommerce-icon secondary px-0">
                  <span className="rounded-md p-4 bg-red-600/10">
                    <RiUserForbidLine
                      color="#fff"
                      size={28}
                      className="bg-red-600"
                    />
                  </span>
                </div>
                <div className="xxxl:col-span-9 col-span-8 ps-0">
                  <div className="mb-2">Flagged Users</div>
                  <div className="text-[#8c9097] dark:text-white/50 mb-1 text-[0.75rem]">
                    <span className="font-semibold text-[1.25rem] leading-none text-defaulttextcolor vertical-bottom">
                      10
                    </span>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-4 col-span-12 translate-all duration-300 hover:-translate-y-2">
          <div className="box">
            <div className="box-body">
              <div className="grid grid-cols-12">
                <div className="xxxl:col-span-3 col-span-4 flex items-center ecommerce-icon success px-0">
                  <span className="rounded-md p-4 bg-cyan-600/10">
                    <TbMessage2Cancel
                      color="#fff"
                      size={28}
                      className="bg-cyan-600 p-1 rounded-md"
                    />
                  </span>
                </div>
                <div className="xxxl:col-span-9 col-span-8 ps-0">
                  <div className="mb-2">Flagged Message</div>
                  <div className="text-[#8c9097] dark:text-white/50 mb-1 text-[0.75rem]">
                    <span className="text-defaulttextcolor font-semibold text-[1.25rem] leading-none vertical-bottom">
                      04
                    </span>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-4 col-span-12 translate-all duration-300 hover:-translate-y-2">
          <div className="box">
            <div className="box-body">
              <div className="grid grid-cols-12">
                <div className="xxxl:col-span-3 col-span-4 flex items-center ecommerce-icon success px-0">
                  <span className="rounded-md p-4 bg-orange-600/10">
                    <MdOutlineBugReport
                      color="#fff"
                      size={28}
                      className="bg-orange-600 p-1 rounded-md"
                    />
                  </span>
                </div>
                <div className="xxxl:col-span-9 col-span-8 ps-0">
                  <div className="mb-2">Total Reports</div>
                  <div className="text-[#8c9097] dark:text-white/50 mb-1 text-[0.75rem]">
                    <span className="text-defaulttextcolor font-semibold text-[1.25rem] leading-none vertical-bottom">
                      01
                    </span>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Row-0 */}

      {/* Start::row-1 */}
      <div>
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-6">
            <div className="grid grid-cols-12 gap-x-6">
              <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                <div className="box h-96 overflow-y-scroll">
                  <div className="box-header justify-between">
                    <div className="box-title">Activities</div>
                    <a
                      aria-label="anchor"
                      className="flex items-center justify-center h-[1.75rem] !text-defaulttextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium"
                      aria-expanded="false"
                    >
                      View All
                    </a>
                  </div>
                  <div
                    className="box-body mt-0 latest-timeline"
                    id="latest-timeline"
                  >
                    <ul className="timeline-main mb-0 list-unstyled">
                      <li>
                        <div className="featured_icon1 featured-danger" />
                      </li>
                      <li className="mt-0 activity">
                        <a
                          href="javascript:void(0);"
                          className="text-[0.75rem]"
                        >
                          <p className="mb-0">
                            <span className="font-semibold">#Anita</span>{" "}
                            <span className="ms-2 text-[0.75rem]">
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing .
                            </span>
                          </p>
                        </a>
                        <small className="text-[#8c9097] dark:text-white/50 mt-0 mb-0 text-[0 .625rem]">
                          12 mins ago.
                        </small>
                      </li>
                      <li>
                        <div className="featured_icon1 featured-success"> </div>
                      </li>
                      <li className="mt-0 activity">
                        <a
                          href="javascript:void(0);"
                          className="text-[0.75rem]"
                        >
                          <p className="mb-0">
                            <span className="me-2 text-[0.75rem]">
                              New Product reveived.
                            </span>
                            <span className="font-semibold">#FX-321</span>{" "}
                          </p>
                        </a>
                        <small className="text-[#8c9097] dark:text-white/50 mt-0 mb-0 text-[0 .625rem]">
                          28 mins ago.
                        </small>
                      </li>
                      <li>
                        <div className="featured_icon1 featured-danger" />
                      </li>
                      <li className="mt-0 activity">
                        <div className="text-[0.75rem]">
                          <p className="mb-0">
                            <span className="font-semibold text-primary">
                              #Zlatan
                            </span>
                            <span className="ms-2 text-[0.75rem]">
                              shared a page.
                              <a
                                href="https://themeforest.net/user/spruko/portfolio"
                                target="_blank"
                                className="text-success underline text-[0.6875rem]"
                              >
                                https://themeforest.net/user/spruko/ portfolio
                              </a>
                            </span>
                          </p>
                        </div>
                        <small className="text-[#8c9097] dark:text-white/50 mt-0 mb-0 text-[0 .625rem]">
                          37 mins ago.
                        </small>
                      </li>
                      <li>
                        <div className="featured_icon1 featured-success" />
                      </li>
                      <li className="mt-0 activity">
                        <div className="text-[0.75rem]">
                          <p className="mb-0">
                            <span className="font-semibold text-primary">
                              #Hussain
                            </span>{" "}
                            <span className="ms-2 text-[0.75rem]">
                              shared a file.{" "}
                            </span>
                          </p>
                          <small className="text-[#8c9097] dark:text-white/50 mt-0 mb-0 text-[0 .625rem]">
                            1 day ago.
                          </small>
                          <p className="p-1 border border-dotted dark:border-defaultborder/10 wp-50 br-5 mb-0">
                            <a href="javascript:void(0);">
                              <span className="badge bg-success  text-white me-2">
                                PPT
                              </span>{" "}
                              <span className="text-[0.6875rem]">
                                Project_discussion
                              </span>
                            </a>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="featured_icon1 featured-danger" />
                      </li>
                      <li className="mt-0 activity">
                        <a
                          href="javascript:void(0);"
                          className="text-[0.75rem]"
                        >
                          <p className="mb-0">
                            <span className="font-semibold">#Emiley</span>
                            <span className="ms-2 text-[0.75rem]">
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing ipsum dolor...
                            </span>
                            <span className="font-semibold ms-2">More</span>
                          </p>
                        </a>
                        <small className="text-[#8c9097] dark:text-white/50 mt-0 mb-0 text-[0 .625rem]">
                          14 Mar 2022.
                        </small>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                <div className="box h-96 overflow-hidden">
                  <div className="box-header justify-between">
                    <div className="box-title">Recent Placed Orders</div>
                    <div className="hs-dropdown ti-dropdown">
                      <a
                        aria-label="anchor"
                        className="flex items-center justify-center h-[1.75rem] !text-defaulttextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium"
                        aria-expanded="false"
                      >
                        View All
                      </a>
                    </div>
                  </div>
                  <div className="box-body">
                    <ul className="list-none mb-0">
                      {maxOrderShow.map((item) => (
                        <li key={item.id} className="mb-4">
                          <a href="javascript:void(0);">
                            <div className="flex tems-center">
                              <div className="leading-none">
                                <span className="inline-flex justify-center items-center">
                                  <img
                                    src={item.clientImage}
                                    alt
                                    className="w-[2.5rem] h-[2.5rem]leading-[2.5rem] text-[0.8rem] rounded-md"
                                  />
                                </span>
                              </div>
                              <div className="flex-grow ms-2">
                                <p className="font-semibold mb-0">
                                  {item.clientName}
                                </p>
                                <p className="text-[0.75rem] !text-[#8c9097] dark:text-white/50 mb-0">
                                  {item.category}
                                </p>
                              </div>
                              <div>
                                <span className="text-success font-semibold">
                                  ${item.amount}
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="xl:col-span-12 col-span-12">
                <div className="box overflow-hidden">
                  <div className="box-header justify-between">
                    <div className="box-title">Users Graph</div>
                  </div>
                  <d iv className="box-body !p-0">
                    <UserChart />
                    <div className="grid grid-cols-2 border-t border-dashed dark:border-defaultborder/10">
                      <div className="col">
                        <div className="!p-4 border-e border-dashed dark:border-defaultborder/10">
                          <div className="text-[#8c9097] dark:text-white/50 text-[0.75rem] text-center mb-1">
                            Total Brands
                          </div>
                          <div className="flex justify-center items-center">
                            {" "}
                            <span className="me-3 text-[1.625rem] font-semibold">
                              36
                            </span>{" "}
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="!p-4">
                          <div className="text-[#8c9097] dark:text-white/50 text-[0.75rem] text-center mb-1">
                            Total Creators
                          </div>
                          <div className="flex justify-center items-center">
                            {" "}
                            <span className="me-3 text-[1.625rem] font-semibold">
                              754
                            </span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </d>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <div className="grid grid-cols-12 gap-x-6">
              <div className="xl:col-span-12 mb-6 col-span-12">
                <ProfitChart />
              </div>
              <div className="xl:col-span-12 col-span-12"></div>
              <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
                <div className="box h-96 overflow-y-scroll">
                  <div className="box-header justify-between">
                    <div className="box-title">Recent Brands</div>
                    <div className="hs-dropdown ti-dropdown">
                      <a
                        aria-label="anchor"
                        className="flex items-center justify-center h-[1.75rem] !text-defaulttextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium"
                        aria-expanded="false"
                      >
                        View All
                      </a>
                    </div>
                  </div>
                  <div className="box-body">
                    <ul className="list-none mb-0">
                      {maxBrandShow.map((item) => (
                        <li key={item.id} className="mb-4">
                          <a>
                            <div className="flex items-center">
                              <div className="leading-none">
                                <span className="inline-flex justify-center items-center">
                                  <img
                                    src={item.logo}
                                    alt
                                    className="w-[2.5rem] h-[2.5rem]leading-[2.5rem] text-[0.8rem] rounded-md"
                                  />
                                </span>
                              </div>
                              <div className="flex-grow ms-2">
                                <p className="font-semibold mb-0">
                                  {item.name}
                                </p>
                              </div>
                              <div>
                                <span className="text-primary/50 font-semibold">
                                  {item.joined}
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
                <div className="box h-96 overflow-y-scroll">
                  <div className="box-header justify-between">
                    <div className="box-title">Recent Brands</div>
                    <div className="hs-dropdown ti-dropdown">
                      <a
                        aria-label="anchor"
                        className="flex items-center justify-center h-[1.75rem] !text-defaulttextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium"
                        aria-expanded="false"
                      >
                        View All
                      </a>
                    </div>
                  </div>
                  <div className="box-body">
                    <ul className="list-none mb-0">
                      {maxBrandShow.map((item) => (
                        <li key={item.id} className="mb-4">
                          <a>
                            <div className="flex items-center">
                              <div className="leading-none">
                                <span className="inline-flex justify-center items-center">
                                  <img
                                    src={item.logo}
                                    alt
                                    className="w-[2.5rem] h-[2.5rem]leading-[2.5rem] text-[0.8rem] rounded-md"
                                  />
                                </span>
                              </div>
                              <div className="flex-grow ms-2">
                                <p className="font-semibold mb-0">
                                  {item.name}
                                </p>
                              </div>
                              <div>
                                <span className="text-primary/50 font-semibold">
                                  {item.joined}
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End::row-1 */}
      {/* Start:: row-2 */}
      <div className="grid grid-cols-12 gap-x-6">
        <div className="xl:col-span-12 col-span-12">
          <div className="box">
            <div className="box-header justify-between">
              <div className="box-title">Orders Overview</div>
              <div className="flex flex-wrap gap-2">
                <div className="hs-dropdown ti-dropdown">
                  <a
                    aria-label="anchor"
                    className="flex items-center justify-center h-[1.75rem] !text-defaulttextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium"
                    aria-expanded="false"
                  >
                    View All
                  </a>
                </div>
              </div>
            </div>
            <div className="box-body">
              <div className="overflow-x-auto">
                <OrderTable />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End:: row-2 */}

      {/* <div
        id="search-modal"
        className="hs-overlay ti-modal hidden mt-[1.75rem]"
      >
        <div className="ti-modal-box">
          <div className="ti-modal-content !border !border-defaultborder dark:!border-defaultborder/10 !rounded-[0.5rem]">
            <div className="ti-modal-body">
              <div className="input-group border-[2px] border-primary rounded-[0.25rem] w-full flex">
                <a
                  aria-label="anchor"
                  href="javascript:void(0);"
                  className="input-group-text flex items-center bg-light border-e-[#dee2e6] !py-[0.375rem] !px-[0.75rem] !rounded-none !text-[0.875rem]"
                  id="Search-Grid"
                >
                  <i className="fe fe-search header-link-icon text-[0.875rem]" />
                </a>
                <input
                  type="search"
                  className="form-control border-0 px-2 !text-[0.8rem] w-full focus:ring-transparent"
                  placeholder="Search"
                  aria-label="Username"
                />
                <a
                  aria-label="anchor"
                  href="javascript:void(0);"
                  className="flex items-center input-group-text bg-light !py-[0.375rem] !px-[0.75rem] !border-e-0"
                  id="voice-search"
                >
                  <i className="fe fe-mic header-link-icon" />
                </a>
                <div className="hs-dropdown ti-dropdown">
                  <a
                    aria-label="anchor"
                    href="javascript:void(0);"
                    className="flex items-center hs-dropdown-toggle ti-dropdown-toggle btn btn-light btn-icon !bg-light !py-[0.375rem] !rounded-none !px-[0.75rem] text-[0.95rem] h-[2.413rem] w-[2.313rem]"
                  >
                    <i className="fe fe-more-vertical" />
                  </a>
                  <ul className="absolute hs-dropdown-menu ti-dropdown-menu !-mt-2 !p-0 hidden">
                    <li>
                      <a
                        className="ti-dropdown-item flex text-defaulttextcolor dark:text-defaulttextcolor/70 !py-[0.5rem] !px-[0.9375rem] !text-[0.8125rem] font-medium"
                        href="javascript:void(0);"
                      >
                        Action
                      </a>
                    </li>
                    <li>
                      <a
                        className="ti-dropdown-item flex text-defaulttextcolor dark:text-defaulttextcolor/70 !py-[0.5rem] !px-[0.9375rem] !text-[0.8125rem] font-medium"
                        href="javascript:void(0);"
                      >
                        Another action
                      </a>
                    </li>
                    <li>
                      <a
                        className="ti-dropdown-item flex text-defaulttextcolor dark:text-defaulttextcolor/70 !py-[0.5rem] !px-[0.9375rem] !text-[0.8125rem] font-medium"
                        href="javascript:void(0);"
                      >
                        Something else here
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        className="ti-dropdown-item flex text-defaulttextcolor dark:text-defaulttextcolor/70 !py-[0.5rem] !px-[0.9375rem] !text-[0.8125rem] font-medium"
                        href="javascript:void(0);"
                      >
                        Separated link
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-5">
                <p className="font-normal text-[#8c9097] dark:text-white/50 text-[0.813rem] dark:text-gray-200 mb-2">
                  Are You Looking For...
                </p>
                <span className="search-tags text-[0.75rem] !py-[0rem] !px-[0.55rem] dark:border-defaultborder/10">
                  <i className="fe fe-user me-2" />
                  People
                  <a
                    href="javascript:void(0)"
                    className="tag-addon header-remove-btn"
                  >
                    <span className="sr-only">Remove badge</span>
                    <i className="fe fe-x" />
                  </a>
                </span>
                <span className="search-tags text-[0.75rem] !py-[0rem] !px-[0.55rem] dark:border-defaultborder/10">
                  <i className="fe fe-file-text me-2" />
                  Pages
                  <a
                    href="javascript:void(0)"
                    className="tag-addon header-remove-btn"
                  >
                    <span className="sr-only">Remove badge</span>
                    <i className="fe fe-x" />
                  </a>
                </span>
                <span className="search-tags text-[0.75rem] !py-[0rem] !px-[0.55rem] dark:border-defaultborder/10">
                  <i className="fe fe-align-left me-2" />
                  Articles
                  <a
                    href="javascript:void(0)"
                    className="tag-addon header-remove-btn"
                  >
                    <span className="sr-only">Remove badge</span>
                    <i className="fe fe-x" />
                  </a>
                </span>
                <span className="search-tags text-[0.75rem] !py-[0rem] !px-[0.55rem] dark:border-defaultborder/10">
                  <i className="fe fe-server me-2" />
                  Tags
                  <a
                    href="javascript:void(0)"
                    className="tag-addon header-remove-btn"
                  >
                    <span className="sr-only">Remove badge</span>
                    <i className="fe fe-x" />
                  </a>
                </span>
              </div>
              <div className="my-[1.5rem]">
                <p className="font-normal text-[#8c9097] dark:text-white/50 text-[0.813rem] mb-2">
                  Recent Search :
                </p>
                <div
                  id="dismiss-alert"
                  role="alert"
                  className="!p-2 border dark:border-defaultborder/10 rounded-[0.3125rem] flex items-center text-defaulttextcolor dark:text-defaulttextcolor/70 !mb-2 !text-[0.8125rem] alert"
                >
                  <a href="notifications.html">
                    <span>Notifications</span>
                  </a>
                  <a
                    aria-label="anchor"
                    className="ms-auto leading-none"
                    href="javascript:void(0);"
                    data-hs-remove-element="#dismiss-alert"
                  >
                    <i className="fe fe-x !text-[0.8125rem] text-[#8c9097] dark:text-white/50" />
                  </a>
                </div>
                <div
                  id="dismiss-alert-1"
                  role="alert"
                  className="!p-2 border dark:border-defaultborder/10 rounded-[0.3125rem] flex items-center text-defaulttextcolor dark:text-defaulttextcolor/70 !mb-2 !text-[0.8125rem] alert"
                >
                  <a href="alerts.html">
                    <span>Alerts</span>
                  </a>
                  <a
                    aria-label="anchor"
                    className="ms-auto leading-none"
                    href="javascript:void(0);"
                    data-hs-remove-element="#dismiss-alert-1"
                  >
                    <i className="fe fe-x !text-[0.8125rem] text-[#8c9097] dark:text-white/50" />
                  </a>
                </div>
                <div
                  id="dismiss-alert-2"
                  role="alert"
                  className="!p-2 border dark:border-defaultborder/10 rounded-[0.3125rem] flex items-center text-defaulttextcolor dark:text-defaulttextcolor/70 !mb-0 !text-[0.8125rem] alert"
                >
                  <a href="mail.html">
                    <span>Mail</span>
                  </a>
                  <a
                    aria-label="anchor"
                    className="ms-auto lh-1"
                    href="javascript:void(0);"
                    data-hs-remove-element="#dismiss-alert-2"
                  >
                    <i className="fe fe-x !text-[0.8125rem] text-[#8c9097] dark:text-white/50" />
                  </a>
                </div>
              </div>
            </div>
            <div className="ti-modal-footer !py-[1rem] !px-[1.25rem]">
              <div className="inline-flex rounded-md shadow-sm">
                <button
                  type="button"
                  className="ti-btn-group !px-[0.75rem] !py-[0.45rem] rounded-s-[0.25rem] !rounded-e-none ti-btn-primary !text-[0.75rem] dark:border-white/10"
                >
                  Search
                </button>
                <button
                  type="button"
                  className="ti-btn-group ti-btn-primary-full rounded-e-[0.25rem] dark:border-white/10 !text-[0.75rem] !rounded-s-none !px-[0.75rem] !py-[0.45rem]"
                >
                  Clear Recents
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </AdminLayout>
  );
};

export default Dashboard;
