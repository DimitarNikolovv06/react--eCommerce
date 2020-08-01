import React, { useState, useEffect } from "react";
import { myOrders } from "../api/orders.api";

type item = {
  name: string;
  price: string;
  image: string;
};

interface Order {
  id: number;
  currency: string;
  items: item[];
  price: string;
  status: string;
}

export const MyOrders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 0,
      price: "",
      currency: "",
      items: [
        {
          name: "",
          price: "",
          image: "",
        },
      ],
      status: "",
    },
  ]);

  useEffect(() => {
    myOrders()
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="add">
        <div className="new-p">
          <h3>My orders</h3>
        </div>
        {orders.map((order) => (
          <div style={{ display: "flex", width: "100%" }} className="orders">
            <div style={{ width: "20%" }} className="order-block">
              <p>Order # {order.id}</p>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", width: "40%" }}
              className="order-block"
            >
              {order.items.map((item) => (
                <div
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
