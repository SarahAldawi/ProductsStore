import axios from "axios";
import { Search, Card, FilterBtn, Sidebar } from "./components";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
function App() {
  const [searchField, setSearchField] = useState("");
  const [skip, setSkip] = useState(0);
  const [page, setPage] = useState(0);

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
      <div className="join">
        <button
          className="join-item btn"
          onClick={() => {
            setSkip(skip - 10);
            setPage(page - 1);
          }}
          disabled={skip === 0}
        >
          «
        </button>
        <button className="join-item btn">Page {page + 1}</button>
        <button
          className="join-item btn"
          onClick={() => {
            setSkip(skip + 10);
            setPage(page + 1);
          }}
        >
          »
        </button>
      </div>
    </div>
  );
}

export default App;
