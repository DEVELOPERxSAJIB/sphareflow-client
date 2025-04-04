import Selection from "../../pages/Selection/Selection";
import CreatePackages from "../../pages/UgcCreator/CreatePackages";
import CreateProfile from "../../pages/UgcCreator/CreateUgcProfile";
import UgcProfile from "../../pages/UgcCreator/UgcProfile";
import PrivateGuard from "./PrivateGuard";

export const PrivateRouter = [
  {
    element: <PrivateGuard />,
    children: [
      {
        path: "/role-selection",
        element: <Selection />,
      },
      {
        path: "/ugc-creator/",
        element: <UgcProfile />,
      },
      {
        path: "/ugc-creator/createprofile",
        element: <CreateProfile />,
      },
      {
        path: "/ugc-creator/createprofile/create-package",
        element: <CreatePackages />,
      },
    ],
  },
];
