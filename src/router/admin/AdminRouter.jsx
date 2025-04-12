import AdminLayout from "../../components/Layout/AdminLayout";
import Dashboard from "../../pages/Admin/Dashboard/Dashboard";
import AdminGuard from "./AdminGuard";

export const AdminRouter = [
  {
    element: <AdminGuard />,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
    ],
  },
];
