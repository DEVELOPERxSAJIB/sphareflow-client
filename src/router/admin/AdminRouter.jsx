import Dashboard from "../../pages/Admin/Dashboard/Dashboard";
import FlaggedMessages from "../../pages/Admin/Messaging/FlaggedMessages";
import Messages from "../../pages/Admin/Messaging/Messages";
import FlaggedUsers from "../../pages/Admin/User/FlaggedUsers";
import UserLogs from "../../pages/Admin/User/UserLogs";
import Users from "../../pages/Admin/User/Users";
import AdminGuard from "./AdminGuard";

export const AdminRouter = [
  {
    element: <AdminGuard />,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/dashboard/users",
        element: <Users />,
      },
      {
        path: "/admin/dashboard/user-logs",
        element: <UserLogs />,
      },
      {
        path: "/admin/dashboard/user-logs",
        element: <UserLogs />,
      },
      {
        path: "/admin/dashboard/flagged-users",
        element: <FlaggedUsers />,
      },
      {
        path: "/admin/dashboard/all-messages",
        element: <Messages />,
      },
      {
        path: "/admin/dashboard/flagged-messages",
        element: <FlaggedMessages />,
      },
    ],
  },
];
