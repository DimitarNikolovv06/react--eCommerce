import { createStore, applyMiddleware, combineReducers } from "redux";
import { productsReducer } from "../reducers/products-reducer";
import thunk from "redux-thunk";
import { OrdersReducer } from "../reducers/orders-reducer";

export const rootReducer = combineReducers({
  products: productsReducer,
  orders: OrdersReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));
