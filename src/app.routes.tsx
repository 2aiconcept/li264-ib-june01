// src/app.routes.tsx
import { createBrowserRouter, Navigate } from "react-router";
import App from "./App";
import DashboardPage from "./features/dashbord/pages/DashbordPage";
import { JsxLab } from "./features/dashbord/components/JsxLab";

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
      {
        path: "dashboard",
        Component: DashboardPage, // <- s'affiche à la place du <Outlet /> principal qui se trouve sur App.tsx (en réalité sur MainLayout.txs)
        children: [
          {
            path: "jsxlab",
            Component: JsxLab, // <- s'affiche à la place de <Outlet /> secondaire qui se trouve sur DashboardPage.tsx
          },
        ],
      },
    ],
  },
]);
