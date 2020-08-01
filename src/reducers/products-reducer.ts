import { GET_ALL_PRODUCTS } from "../actions/action-types";

const initialState = {
  products: [],
};

export function productsReducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
}
