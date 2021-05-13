import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  console.log("NAVBAR was rendered");
  return (
    <div className="navbar">
      <ul className="navbar__menu">
        <li className="navbar__item">
          <NavLink className="navbar__link" to="/">
            Home
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" to="todos">
            Todos
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" to="users">
            Users
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" to="contacts">
            Contacts
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
