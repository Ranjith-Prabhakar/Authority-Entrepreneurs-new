import { updateSort } from "../store/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
export function useSetSort() {
  let dispatch = useDispatch();
  let { sort } = useSelector((state) => state.products);

  function sortHandler(action) {
    dispatch(updateSort(action));
  }

  return [
    sortHandler,
    (sort = sort === 1 ? "Price-High-Low" : "Price-Low-High"),
  ];
}
