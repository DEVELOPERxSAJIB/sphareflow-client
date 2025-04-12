import { createBrowserRouter } from "react-router-dom";
import { PublicRouter } from "./public/PublicRouter";
import { PrivateRouter } from "./private/PrivateRouter";
import { AdminRouter } from "./admin/AdminRouter";

const Routes = createBrowserRouter([
  ...PublicRouter,
  ...PrivateRouter,
  ...AdminRouter
]);

export default Routes;
