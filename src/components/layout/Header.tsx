import React from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { AppState } from "../../store/store";

export const Header: React.FC = (props) => {
  const {
    orders: [myOrders],
  } = useSelector((state: AppState) => state.orders);

  return (
    <header>
      {console.log(myOrders)}
      <div className="logo-div">
        <FiShoppingCart className="logo" />
        <h2 className="logo-text">eShop.com</h2>
      </div>

      <div className="navbar">
        <NavLink activeClassName="active" className="nav-link" to="/products">
          Products
        </NavLink>
        <NavLink activeClassName="active" className="nav-link" to="/orders">
          <p>Orders</p>
        </NavLink>
        <NavLink activeClassName="active" className="nav-link" to="/add">
          Add Product
        </NavLink>
      </div>
      <TiShoppingCart className="orders-icon" />
      <div className="order-count">{myOrders.items.length}</div>
    </header>
  );
};
