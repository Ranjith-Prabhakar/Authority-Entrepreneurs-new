import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateSelectedProduct } from "../store/slices/productSlice";
import { getSingleProduct } from "../services/products";
import dummy from "../assets/dummy.json";
export default function useProductSetter(id) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        let data = await getSingleProduct(id);
        data = data ? data : dummy[0];
        console.log("data---", data);
        dispatch(updateSelectedProduct(data));
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProduct();
  }, [id, dispatch]);
}
