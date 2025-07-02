import { updateFilter } from "../store/slices/productSlice";
import { useDispatch } from "react-redux";
export function useSetFilter() {
  let dispatch = useDispatch();

  function setFilter({ prop, data }) {
    dispatch(updateFilter({ prop, data }));
  }
  return setFilter;
}
