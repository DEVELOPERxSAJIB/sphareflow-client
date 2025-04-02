import { Navigate, Outlet } from "react-router-dom";

const PrivateGuard = () => {
  const user = true;

  return user ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateGuard;