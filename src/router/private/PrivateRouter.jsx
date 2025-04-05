import Selection from "../../pages/Selection/Selection";
import ConnectStripe from "../../pages/UgcCreator/ConnectStripe";
import CreatePackages from "../../pages/UgcCreator/CreatePackages";
import CreateProfile from "../../pages/UgcCreator/CreateUgcProfile";
import UgcProfile from "../../pages/UgcCreator/UgcProfile";
import PrivateGuard from "./PrivateGuard";

export const PrivateRouter = [
  {
    element: <PrivateGuard />,
    children: [
      {
        path: "/select-role",
        element: <Selection />,
      },
      {
        path: "/creator",
        element: <UgcProfile />,
      },
      {
        path: "/creator/profile",
        element: <CreateProfile />,
      },
      {
        path: "/creator/profile/package",
        element: <CreatePackages />,
      },
      {
        path: "/creator/profile/stripe-connect",
        element: <ConnectStripe />,
      },
    ],
  },
];
