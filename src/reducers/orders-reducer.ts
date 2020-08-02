import { Order } from "../components/MyOrders";
import { OrdersTypes } from "../actions/action-types";

const initialState = {
  orders: [],
};

export interface OrdersState {
  orders: Order[];
}

export function OrdersReducer(
  state: OrdersState = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case OrdersTypes.GET_CURRENT_ORDERS:
      return { ...state, orders: [...action.payload] };
    case OrdersTypes.ADD_NEW_ORDER:
      return { ...state, orders: [...state.orders, action.payload] };

    default:
      return state;
  }
}
