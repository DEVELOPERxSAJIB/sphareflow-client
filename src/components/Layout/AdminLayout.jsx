import { AdminSidebar } from "../Admin/Sidebar";
import { Separator } from "../ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import LanguageSwitcher from "../Elements/LanguageSwitcher";
import Notification from "../Elements/Notification";
import { LogOut } from "lucide-react";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMenuFold } from "react-icons/ai";

const AdminLayout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset className="px-8 py-4 bg-[#F0F1F7]">
        <div>
          <nav className="bg-white shadow-sm rounded-lg px-4 flex h-16 shrink-0 justify-between items-center md:px-4 lg:px-6 py-2">
            <div className="flex items-center justify-start gap-10">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
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
                  <AiOutlineMenuFold size={25} />
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
            <div className="flex flex-col gap-4 px-4 py-4">
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
          </div>
        </div>

        {children}

        {/* <div className="flex mt-4 flex-1 flex-col gap-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div> */}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AdminLayout;
