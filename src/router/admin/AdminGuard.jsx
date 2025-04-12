import { Navigate, Outlet } from "react-router-dom";

const AdminGuard = () => {
  const admin = true;

  return admin ? <Outlet /> : <Navigate to={"/login"} />;
};

export default AdminGuard;