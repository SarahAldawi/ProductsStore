import axios from "axios";

const url = "https://dummyjson.com/products";
export const fetchProducts = async (
  skip,
  search,
  sortBy,
  order,
  category,
  brandName
) => {
  try {
    let query;
    if (!search && !sortBy && !category && !brandName) {
      query = `?limit=10&skip=${skip}`;
    } else if (sortBy && !search) {
      query = `?sortBy=${sortBy}&order=${order}`;
    } else if (category && !search) {
      query = `/category/${category}`;
    } else if (brandName) {
      query = "?limit=0";
    } else {
      query = `/search?q=${search}`;
    }
    const response = await axios(url + query);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching the data");
  }
};
export default fetchProducts;
