import { myOrders } from "../api/orders.api";
import { OrdersTypes } from "./action-types";
import { Dispatch } from "redux";

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
