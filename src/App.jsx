import { Sidebar, Navbar } from "./components";
import { useQuery } from "@tanstack/react-query";
import { Page } from "./features/Page";
import { useSelector } from "react-redux";
import Sort from "./components/Sort";
import fetchProducts from "./utils/FetchProducts";
function App() {
  const skip = useSelector((state) => state.pagination.skip.page);
  const {sortBy,order} = useSelector((state) => state.pagination.sort);
  const {brandName, category, search } = useSelector((state) => state.filter);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["productData", skip, search, sortBy, order, category, brandName],
    queryFn: () =>
      fetchProducts(skip, search, sortBy, order, category, brandName),
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
        {category || sortBy || brandName || search? <></> : <Page />}
      </div>
    </div>
  );
}

export default App;
