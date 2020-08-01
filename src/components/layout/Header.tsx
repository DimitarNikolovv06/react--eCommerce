import React from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

export const Header: React.FC = () => {
  return (
    <header>
      <div className="logo-div">
        <FiShoppingCart className="logo" />
        <h2 className="logo-text">eShop.com</h2>
      </div>

      <ul className="navbar">
        <li>
          <NavLink activeClassName="active" className="nav-link" to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" className="nav-link" to="/orders">
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" className="nav-link" to="/add">
            Add Product
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
