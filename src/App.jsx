import { FilterBtn, Sidebar, Navbar } from "./components";
import { useQuery } from "@tanstack/react-query";
import { Page } from "./features/Page";
import { useSelector } from "react-redux";
import Sort from "./components/Sort";
import fetchProducts from "./utils/FetchProducts";
function App() {
  const skip = useSelector((state) => state.skip.value);
  const searchTerm = useSelector((state) => state.search.value);
  const sortBy = useSelector((state) => state.sort.sort);
  const order = useSelector((state) => state.sort.order);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["productData", skip, searchTerm, sortBy, order],
    queryFn: () => fetchProducts(skip, searchTerm, sortBy, order),
  });

  //////prefetch Data

  if (isLoading) {
    return (
      <div className="bg-gray-100">
        <Navbar />

        <div className="flex items-center justify-center">
          <span className="loading loading-spinner loading-lg">Loading...</span>
        </div>
      </div>
    );
  }
  if (isError) {
    return <div>Error fetching</div>;
  }

  return (
    <div className="bg-gray-100">
      <Navbar />
      <Sort />
      <div className=" mx-auto max-w-screen grid grid-flow-row	">
        <Sidebar data={data} />
        <FilterBtn data={data} />
        <Page />
      </div>
    </div>
  );
}

export default App;
