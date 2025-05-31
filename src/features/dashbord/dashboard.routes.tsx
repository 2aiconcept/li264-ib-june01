import ES6Lab from "./components/ES6Lab";
import HooksLab from "./components/HooksLab";
import JsxLab from "./components/JsxLab";
import DashboardPage from "./pages/DashboardPage";
import PropsLab from "./components/PropsLab";

export const DashboardRoutes = {
  path: "dashboard",
  Component: DashboardPage, // <- s'affiche à la place du <Outlet /> principal qui se trouve sur App.tsx (en réalité sur MainLayout.txs)
  children: [
    {
      path: "jsxlab",
      Component: JsxLab, // <- s'affiche à la place de <Outlet /> secondaire qui se trouve sur DashboardPage.tsx
    },
    {
      path: "es6lab",
      Component: ES6Lab, // <- s'affiche à la place de <Outlet /> secondaire qui se trouve sur DashboardPage.tsx
    },
    {
      path: "propslab",
      Component: PropsLab, // <- s'affiche à la place de <Outlet /> secondaire qui se trouve sur DashboardPage.tsx
    },
    {
      path: "hookslab",
      Component: HooksLab, // <- s'affiche à la place de <Outlet /> secondaire qui se trouve sur DashboardPage.tsx
    },
  ],
};
