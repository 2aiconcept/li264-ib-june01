// src/app.routes.tsx
import { createBrowserRouter, Navigate } from "react-router";
import App from "./App";
// import DashboardPage from "./features/dashbord/pages/DashboardPage";
// import JsxLab from "./features/dashbord/components/JsxLab";
// import ES6Lab from "./features/dashbord/components/ES6Lab";
// import HooksLab from "./features/dashbord/components/HooksLab";
import { OrdersRoutes } from "./features/orders/orders.routes";
import NotFoundPage from "./features/notFound/pages/NotFoundPage";
import { DashboardRoutes } from "./features/dashbord/dashboard.routes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App, // <- s'affiche dans le <div id="root"></div> de index.html
    children: [
      {
        index: true,
        element: (
          <Navigate
            to="/dashboard"
            replace
          />
        ),
      },
      OrdersRoutes,
      DashboardRoutes,
      {
        path: "*",
        Component: NotFoundPage, // <- s'affiche à la place de <Outlet /> principale
      },
    ],
  },
]);
