import { Order } from "../components/MyOrders";
import { OrdersTypes } from "../actions/action-types";

const initialState = {
  orders: [
    {
      id: 2632,
      status: "payment",
      price: "69.9",
      currency: "BGN",
      items: [
        {
          name: "Leather High Heel Sandals With Gathering",
          price: 39.95,
          image:
            "https://cf.shopee.com.my/file/36df2e1d04ca103f16ccefffa9927728",
          id: 1,
        },
        {
          name: "Pleated Palazzo Trousers TRF",
          price: 29.95,
          image: "https://cf.shopee.ph/file/fecc650ca5802d709890a66cc00cfe23",
          id: 2,
        },
      ],
    },
  ],
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
      return { ...state };
    case OrdersTypes.ADD_NEW_ORDER:
      return {
        ...state,
        orders: [
          ...state.orders.map((o) =>
            o.id === 2632 ? { ...o, items: [...o.items, action.payload] } : o
          ),
        ],
      };

    default:
      return state;
  }
}
