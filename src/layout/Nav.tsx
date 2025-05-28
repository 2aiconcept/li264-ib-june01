// src/layout/Nav.tsx
import { NavLink } from "react-router";
import "./Nav.css";

export const Nav = () => {
  return (
    <nav className="p-3">
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link text-white   rounded ${isActive ? "active" : ""}`
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              `nav-link text-white px-3 py-2 rounded ${
                isActive ? "active" : ""
              }`
            }
          >
            Commandes
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink
            to="/customers"
            className={({ isActive }) =>
              `nav-link text-white px-3 py-2 rounded ${
                isActive ? "active" : ""
              }`
            }
          >
            Clients
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
