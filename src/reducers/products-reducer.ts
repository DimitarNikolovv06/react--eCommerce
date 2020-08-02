import { ProductTypes } from "../actions/action-types";
import { Product } from "../components/AddProduct";

const initialState = {
  products: [],
};

export interface ProductsState {
  products: Product[];
}

export type Action = {
  type: string;
  payload: any;
};

export function productsReducer(
  state: ProductsState = initialState,
  action: Action
) {
  switch (action.type) {
    case ProductTypes.GET_ALL_PRODUCTS:
      return { ...state, products: [...action.payload] };
    case ProductTypes.ADD_NEW_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    default:
      return state;
  }
}
