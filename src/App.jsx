import axios from "axios";
import { Search, Card, FilterBtn, Sidebar } from "./components";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Page } from "./features/Page";
import { useSelector } from "react-redux";
// import {customFetch} from './utils/index'
function App() {
  const skip = useSelector((state) => state.skip.value);
  console.log(skip)
  const [searchField, setSearchField] = useState("");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["productData", skip],
    queryFn: async () => {
      try {
        const response = await axios(
          "https://dummyjson.com/products" + `?limit=10&skip=${skip}`
        );
        return response.data;
      } catch (error) {
        throw new Error("Error fetching the data");
      }
    },
  });

  //////prefetch Data

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error fetching</div>;
  }

  const { products } = data;
  const filteredItem = products.filter((person) => {
    return person.brand.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className="container">
      <Search data={data} />
      {/* <Sidebar/> */}
      <FilterBtn
        setSearchField={setSearchField}
        filteredItem={filteredItem}
        data={data}
      />

      <Card data={data} filteredItem={filteredItem} />
      <Page />
    </div>
  );
}

export default App;
