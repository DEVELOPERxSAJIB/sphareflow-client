import BrandProfile from "../../pages/Brand/BrandProfile.jsx";
import BrandOrders from "../../pages/Brand/MyOrders.jsx";
import SearchCreator from "../../pages/Brand/SearchCreator.jsx";
import Selection from "../../pages/Selection/Selection";
import ChatPage from "../../pages/UgcCreator/ChatPage.jsx";
import ConnectStripe from "../../pages/UgcCreator/ConnectStripe";
import CreatePackages from "../../pages/UgcCreator/CreatePackages";
import CreateProfile from "../../pages/UgcCreator/CreateUgcProfile";
import EditProfile from "../../pages/UgcCreator/EditUgcProfile.jsx";
import MyOrders from "../../pages/UgcCreator/MyOrders.jsx";
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
        path: "/creator/edit-profile",
        element: <EditProfile />,
      },
      {
        path: "/creator/profile/package",
        element: <CreatePackages />,
      },
      {
        path: "/creator/profile/stripe-connect",
        element: <ConnectStripe />,
      },
      {
        path: "/creator/profile/message",
        element: <ChatPage />,
      },
      {
        path: "/creator/profile/myorders",
        element: <MyOrders />,
      },





      {
        path : "/brand",
        element : <BrandProfile />
      },
      {
        path : "/brand/search-creator",
        element : <SearchCreator />
      },
      {
        path : "/brand/my-orders",
        element : <BrandOrders />
      }
    ],
  },
];
