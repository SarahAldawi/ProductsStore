import axios from "axios";

const productsUrl = "https://dummyjson.com/products";

export const customFetch = axios.create({
  baseURL: productsUrl,
});


