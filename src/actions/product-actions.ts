import { getAllProducts } from "../api/products.api";
import { GET_ALL_PRODUCTS } from "./action-types";

export function fetchAllProductsFromApi() {
  return (dispatch: (arg0: { type: string; payload: any }) => any) => {
    getAllProducts().then((res) =>
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: res.data,
      })
    );
  };
}
