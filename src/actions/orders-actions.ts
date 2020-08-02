import { myOrders, addOrder } from "../api/orders.api";
import { OrdersTypes } from "./action-types";
import { Dispatch } from "redux";
import { Product } from "../components/AddProduct";

export function fetchAllOrdersFromAPI() {
  return (dispatch: Dispatch) => {
    myOrders().then((res) =>
      dispatch({
        type: OrdersTypes.GET_CURRENT_ORDERS,
        payload: res.data,
      })
    );
  };
}

export function addNewItem(order: Product) {
  return (dispatch: Dispatch) => {
    addOrder(order).then((res) =>
      dispatch({
        type: OrdersTypes.ADD_NEW_ORDER,
        payload: res.data,
      })
    );
  };
}
