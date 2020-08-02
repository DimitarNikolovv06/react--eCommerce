import { ProductTypes } from "./action-types";
import { Product } from "../components/AddProduct";
import { Dispatch } from "redux";

export function fetchAllProductsFromApi() {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ProductTypes.GET_ALL_PRODUCTS,
    });
  };
}

export function addNewProduct(p: Product) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ProductTypes.ADD_NEW_PRODUCT,
      payload: p,
    });
  };
}
