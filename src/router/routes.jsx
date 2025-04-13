import { createBrowserRouter } from "react-router-dom";
import { PublicRouter } from "./public/PublicRouter";
import { PrivateRouter } from "./private/PrivateRouter";
import { AdminRouter } from "./admin/AdminRouter";

const routes = createBrowserRouter([
  ...PublicRouter,
  ...PrivateRouter,
  ...AdminRouter
]);

export default routes;
