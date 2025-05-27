// src/layout/Nav.tsx
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="p-3">
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link text-white px-3 py-2 rounded ${
                isActive ? "bg-primary" : ""
              }`
            }
          >
            🏠 Dashboard
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              `nav-link text-white px-3 py-2 rounded ${
                isActive ? "bg-primary" : ""
              }`
            }
          >
            📦 Commandes
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <span
            className="nav-link text-white-50 px-3 py-2 rounded text-decoration-none"
            style={{ cursor: "not-allowed" }}
          >
            👥 Clients <small>(bientôt)</small>
          </span>
        </li>
      </ul>
    </nav>
  );
};
