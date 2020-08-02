import { getAllProducts, addProduct } from "../api/products.api";
import { ProductTypes } from "./action-types";
import { Product } from "../components/AddProduct";
import { Dispatch } from "redux";

export function fetchAllProductsFromApi() {
  return (dispatch: Dispatch) => {
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
