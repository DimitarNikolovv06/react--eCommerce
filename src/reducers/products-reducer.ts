import { ProductTypes } from "../actions/action-types";
import { Product } from "../components/AddProduct";

const initialState = {
  products: [
    {
      name: "Rubberised Print T-Shirt",
      price: 9.99,
      image:
        "https://st.depositphotos.com/2251265/4803/i/450/depositphotos_48037605-stock-photo-man-wearing-t-shirt.jpg",
      id: 1,
    },
    {
      name: "Contrast Top TRF",
      price: 11.99,
      image: "https://picture-cdn.wheretoget.it/tvrznj-i.jpg",
      id: 2,
    },
    {
      name: "Tied Leather Heeled Sandals",
      price: 49.95,
      image:
        "https://celticandco.global.ssl.fastly.net/usercontent/img/col-12/69602.jpg",
      id: 3,
    },
    {
      name: "Leather High Heel Sandals With Gathering",
      price: 39.95,
      image: "https://cf.shopee.com.my/file/36df2e1d04ca103f16ccefffa9927728",
      id: 4,
    },
    {
      name: "Pleated Palazzo Trousers TRF",
      price: 29.95,
      image: "https://cf.shopee.ph/file/fecc650ca5802d709890a66cc00cfe23",
      id: 5,
    },
    {
      name: "Skinny Trousers With Belt",
      price: 19.99,
      image:
        "https://emma.bg/images/products/damski-pantalon-faded-black-super-skinnytrousers-1.jpg",
      id: 6,
    },
  ],
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
      return { ...state };
    case ProductTypes.ADD_NEW_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    default:
      return state;
  }
}
