import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateSelectedProduct } from "../store/slices/productSlice";
import { getSingleProduct } from "../services/products";
export default function useProductSetter(id) {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getSingleProduct(id);
        console.log("data---", data);
        dispatch(updateSelectedProduct(data));
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProduct();
  }, [dispatch]);
}
