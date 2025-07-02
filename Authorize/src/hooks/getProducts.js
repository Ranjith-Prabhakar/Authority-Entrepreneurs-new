import { useSelector } from "react-redux";
export function useGetProducts() {
  const products = useSelector((state) => state.products.currentPageProducts);
  return products;
}
