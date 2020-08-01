import axios from "axios";
const apiURL = "https://54ri7.sse.codesandbox.io/orders";

export function myOrders() {
  return axios.get(apiURL);
}
