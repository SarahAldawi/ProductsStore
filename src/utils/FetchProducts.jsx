import axios from "axios";

// const productsUrl = "https://dummyjson.com/products";

// export const customFetch = axios.create({
//   baseURL: productsUrl,
// });

export const fetchProducts = async (skip, searchTerm, sortBy, order) => {
  try {
    if (!searchTerm && !sortBy) {
      const response = await axios(
        "https://dummyjson.com/products" + `?limit=10&skip=${skip}`
      );
      return response.data;
    } else if (sortBy) {
      const response = await axios(
        `https://dummyjson.com/products?sortBy=${sortBy}&order=${order}`
      );
      return response.data;
    } else {
      const response = await axios(
        `https://dummyjson.com/products/search?q=${searchTerm}`
      );
      return response.data;
    }
  } catch (error) {
    throw new Error("Error fetching the data");
  }
};
export default fetchProducts;

///const sortingUrl = `https://dummyjson.com/products?sortBy=&{sortBy}&order=&{order}`
