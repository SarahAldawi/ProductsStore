import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "./paginationSlice";

export function Page() {
<<<<<<< HEAD
  const page = useSelector((state) => state.pagination.skip.page);
=======
  const skip = useSelector((state) => state.pagination);
>>>>>>> dawi
  const dispatch = useDispatch();
  return (
    <>
      <div className="join justify-center mt-4">
        <button
          className="join-item btn"
          onClick={() => {
            dispatch(prevPage());
          }}
          disabled={page === 0}
        >
          «
        </button>
        <button className="join-item btn">Page {page?(page/10)+1:1}</button>
        <button
          className="join-item btn"
          onClick={() => {
            dispatch(nextPage());
          }}
        >
          »
        </button>
      </div>
    </>
  );
}
