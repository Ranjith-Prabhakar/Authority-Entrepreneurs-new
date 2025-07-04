import { useSelector } from "react-redux";
export function useGetProduct() {
  const product = useSelector((state) => state.products.selectedProduct);
  return product;
}
