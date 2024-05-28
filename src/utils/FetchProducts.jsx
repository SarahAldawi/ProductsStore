import axios from "axios";

const url = "https://dummyjson.com/products";
export const fetchProducts = async (
  skip,
  searchTerm,
  sortBy,
  order,
  category,
  brand
) => {
  try {
    let query;
    if (!searchTerm && !sortBy && !category && !brand) {
      query = `?limit=10&skip=${skip}`;
    } else if (sortBy && !searchTerm) {
      query = `?sortBy=${sortBy}&order=${order}`;
    } else if (category && !searchTerm) {
      query = `/category/${category}`;
    } else if (brand) {
      query = "?limit=0";
    } else {
      query = `/search?q=${searchTerm}`;
    }
    const response = await axios(url + query);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching the data");
  }
};
export default fetchProducts;
