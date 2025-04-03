import SingleReelView from "../../components/Profiles/SingleReelView";
import Profile from "../../pages/Profile/Profile";
import Selection from "../../pages/Selection/Selection";
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
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/profile/video/:id",
        element: <SingleReelView />,
      },
    ],
  },
];
