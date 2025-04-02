import { Navigate, Outlet } from "react-router-dom";

const PublicGuard = () => {
  const user = false;

  return user ? <Navigate to={"/"} /> : <Outlet />;
};

export default PublicGuard;
