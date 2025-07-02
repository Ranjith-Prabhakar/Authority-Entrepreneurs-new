import { useSelector } from "react-redux";

export default function useGetCategories() {
  let categories = useSelector((state) => state.products.category);
  return categories;
}
