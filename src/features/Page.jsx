import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./pageSlice";
import { nextPage, prevPage } from "./skipSlice";

export function Page() {
  const page = useSelector((state) => state.page.value);
  const dispatch = useDispatch();
  return (
    <>
      <div className="join">
        <button
          className="join-item btn"
          onClick={() => {
            dispatch(decrement());
            dispatch(prevPage());
          }}
          disabled={page === 0}
        >
          «
        </button>
        <button className="join-item btn">Page {page + 1}</button>
        <button
          className="join-item btn"
          onClick={() => {
            dispatch(increment());
            dispatch(nextPage());
          }}
        >
          »
        </button>
      </div>
    </>
  );
}
