import axios from "axios";
const apiURL = "https://54ri7.sse.codesandbox.io/orders";

export function myOrders() {
  return axios.get(apiURL);
}

export async function addOrder(order) {
  const orders = await (await axios.get(`${apiURL}/2632/`)).data;

  const newOrders = {
    ...orders,
    items: [...orders.items, order],
  };

  return axios.put(`${apiURL}/2632/`, newOrders);
}
