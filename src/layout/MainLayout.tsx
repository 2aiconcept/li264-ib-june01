// src/layout/MainLayout.tsx
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Nav } from "./Nav";

const MainLayout = () => {
  return (
    <div className="d-flex flex-column vh-100">
      {/* Header - toute la largeur en haut */}
      <header className="bg-light border-bottom shadow-sm">
        <Header />
      </header>

      {/* Contenu principal - flexbox horizontal */}
      <div className="d-flex flex-grow-1 overflow-hidden">
        {/* Sidebar - à gauche, toute la hauteur restante */}
        <aside
          className="bg-dark text-white"
          style={{ width: "250px", minWidth: "250px" }}
        >
          <Nav />
        </aside>

        {/* Zone de contenu principale - prend l'espace restant */}
        <main className="flex-grow-1 bg-white p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
