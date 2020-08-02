import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllOrdersFromAPI } from "../actions/orders-actions";
import { AppState } from "../store/store";

export type item = {
  name: string;
  price: number;
  image: string;
};

export interface Order {
  id: number;
  currency: string;
  items: item[];
  price: string;
  status: string;
}

export const MyOrders: React.FC = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state: AppState) => state.orders.orders);

  useEffect(() => {
    dispatch(fetchAllOrdersFromAPI());
  }, [dispatch]);

  return (
    <>
      <div className="add">
        <div className="new-p">
          <h3>My orders</h3>
        </div>
        {orders.map((order: Order, i: number) => (
          <div
            key={i}
            style={{ display: "flex", width: "100%" }}
            className="orders"
          >
            <div style={{ width: "20%" }} className="order-block">
              <p>Order # {order.id}</p>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", width: "40%" }}
              className="order-block"
            >
              {order.items.map((item, i) => (
                <div
                  key={i}
                  style={{
                    textAlign: "left",
                    marginRight: "auto",
                    paddingLeft: 50,
                  }}
                >
                  {"-"}
                  {item.name}
                </div>
              ))}
            </div>
            <div style={{ width: "20%" }} className="order-block">
              <p>
                {order.price} {order.currency}
              </p>
            </div>
            <div
              style={{
                width: "20%",
                borderRight: "2px solid rgb(172, 160, 160",
              }}
              className="order-block"
            >
              <p>{order.status}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
