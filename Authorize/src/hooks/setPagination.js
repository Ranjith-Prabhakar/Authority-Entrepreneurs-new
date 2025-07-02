import { useSelector } from "react-redux";
import { updatePagination } from "../store/slices/productSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export function useSetPagination() {
  const { allProducts, productsAfterFilterNSort, currentTab } = useSelector(
    (state) => state.products
  );
  let [totalPage, setTotalPage] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setTotalPage(Math.floor(productsAfterFilterNSort.length / 6));
  }, [productsAfterFilterNSort]);

  const paginationHandler = (tabNo) => {
    const lastIndex = tabNo > 0 ? tabNo * 6 : 1 * 6;
    if (lastIndex < productsAfterFilterNSort.length) {
      dispatch(updatePagination({ lastIndex, tabNo: tabNo > 0 ? tabNo : 1 }));
    }
  };

  return [paginationHandler, totalPage, currentTab];
}
