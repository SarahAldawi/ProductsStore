import axios from "axios";
import { debounce } from "lodash";

const url = "https://dummyjson.com/products";
export const fetchProducts = async (
  page,
  search,
  sortBy,
  order,
  category,
  brand
) => {
  try {
    let query;
    if (!search && !sortBy && !category && !brand) {
      query = `?limit=10&skip=${page}`;
    } else if (sortBy && !search) {
      query = `?sortBy=${sortBy}&order=${order}`;
    } else if (category && !search) {
      query = `/category/${category}`;
    } else if (brand) {
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
