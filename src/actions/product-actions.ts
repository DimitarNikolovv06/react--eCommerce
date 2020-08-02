import { getAllProducts, addProduct } from "../api/products.api";
import { ProductTypes } from "./action-types";
import { Product } from "../components/AddProduct";
import { Action } from "../reducers/products-reducer";
import { Dispatch } from "redux";
import { AppState } from "../store/store";

export function fetchAllProductsFromApi() {
  return (dispatch: Dispatch, getState: () => AppState) => {
    getAllProducts().then((res) =>
      dispatch({
        type: ProductTypes.GET_ALL_PRODUCTS,
        payload: res.data,
      })
    );
  };
}

export function addNewProduct(p: Product) {
  return (dispatch: Dispatch) => {
    addProduct(p)
      .then((res) =>
        dispatch({
          type: ProductTypes.ADD_NEW_PRODUCT,
          payload: res.data,
        })
      )
      .catch((err) => console.log(err));
  };
}
