import { OrdersTypes } from "./action-types";
import { Dispatch } from "redux";
import { Product } from "../components/AddProduct";

export function fetchAllOrdersFromAPI() {
  return (dispatch: Dispatch) => {
    dispatch({
      type: OrdersTypes.GET_CURRENT_ORDERS,
    });
  };
}

export function addNewItem(order: Product) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: OrdersTypes.ADD_NEW_ORDER,
      payload: order,
    });
  };
}
