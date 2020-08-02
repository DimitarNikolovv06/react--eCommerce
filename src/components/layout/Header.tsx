import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store/store";
import { fetchAllOrdersFromAPI } from "../../actions/orders-actions";

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const orders = useSelector<AppState, AppState["orders"]["orders"]>(
    (state) => state.orders.orders
  );

  useEffect(() => {
    dispatch(fetchAllOrdersFromAPI());
  }, [dispatch]);

  return (
    <header>
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
      <div className="order-count">
        {orders[0] ? orders[0].items.length : 0}
      </div>
    </header>
  );
};
