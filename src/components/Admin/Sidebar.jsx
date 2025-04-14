import * as React from "react";
import {
  GalleryVerticalEnd,
  Settings2,
  SquareTerminal,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "../ui/sidebar";
import { NavMain } from "./nav-main";
import { TeamSwitcher } from "./team-switcher";
import { NavUser } from "./nav-user";
import { LuUsers } from "react-icons/lu";
import { TiMessages } from "react-icons/ti";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdReportGmailerrorred } from "react-icons/md";


const data = {
  user: {
    name: "Md Sajib Shikder",
    email: "sajib@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "SphereFlow",
      logo: GalleryVerticalEnd,
      plan: "Connect Brands and Creators",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "User",
      url: "#",
      icon: LuUsers,
      items: [
        {
          title: "All Users",
          url: "/admin/dashboard/users",
        },
        {
          title: "User Logs",
          url: "/admin/dashboard/user-logs",
        },
        {
          title: "Flagged Users",
          url: "/admin/dashboard/flagged-users",
        },
      ],
    },
    {
      title: "Messeging",
      url: "#",
      icon: TiMessages,
      items: [
        {
          title: "All Messages",
          url: "/admin/dashboard/all-messages",
        },
        {
          title: "Flagged Messages",
          url: "/admin/dashboard/flagged-messages",
        },
      ],
    },
    {
      title: "Contents",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "All Content",
          url: "/admin/dashboard/all-content",
        },
        {
          title: "Flagged Content",
          url: "/admin/dashboard/flagged-content",
        },
      ],
    },
    {
      title: "Payments",
      url: "/admin/dashboard/payments",
      icon: RiSecurePaymentLine,
    },
    {
      title: "Reports",
      url: "/admin/dashboard/reports",
      icon: MdReportGmailerrorred,
    },
  ],
};

export function AdminSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
