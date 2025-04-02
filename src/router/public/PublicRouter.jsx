import ForgetPassword from "../../pages/Auth/ForgetPassword";
import Login from "../../pages/Auth/Login";
import Register from "../../pages/Auth/Register";
import PublicGuard from "./PublicGuard";

export const PublicRouter = [
  {
    element: <PublicGuard />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
    ],
  },
];
