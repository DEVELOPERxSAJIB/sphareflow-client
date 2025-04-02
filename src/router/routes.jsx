import { createBrowserRouter } from "react-router-dom";
import { PublicRouter } from "./public/PublicRouter";
import { PrivateRouter } from "./private/PrivateRouter";

const routes = createBrowserRouter([...PublicRouter, ...PrivateRouter]);

export default routes;
