import { Sidebar, Navbar } from "./components";
import { useQuery } from "@tanstack/react-query";
import { Page } from "./features/Page";
import { useSelector } from "react-redux";
import Sort from "./components/Sort";
import fetchProducts from "./utils/FetchProducts";
import _, { debounce } from "lodash";
function App() {
  const { sortBy, order } = useSelector((state) => state.pagination.sort);
  const { brand, category, search } = useSelector((state) => state.filters);
  const { page } = useSelector((state) => state.pagination.skip);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["productData", page, search, sortBy, order, category, brand],
    queryFn: () => fetchProducts(page, search, sortBy, order, category, brand),
  });

  

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
        {category || sortBy || brand ? <></> : <Page />}
      </div>
    </div>
  );
}

export default App;
