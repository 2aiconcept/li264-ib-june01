import { createBrowserRouter } from "react-router";
import App from "./App";
import DashboardPage from "./features/dashbord/pages/DashbordPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: DashboardPage,
      },
    ],
  },
]);
