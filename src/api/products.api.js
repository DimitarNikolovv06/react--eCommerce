import axios from "axios";

const apiURL = "https://54ri7.sse.codesandbox.io/products/";

export function getAllProducts() {
  return axios.get(apiURL);
}

export function addProduct(p) {
  return axios.post(apiURL, p);
}
