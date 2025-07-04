import { useNavigate } from "react-router-dom";
export function useProductPageNavigation() {
  const navigate = useNavigate();

  function productPageNavigationHandler(product) {
    if (!product?.id) {
      console.warn("Invalid product passed to navigation handler");
      return;
    }

    navigate(`/product/${product.id}`);
  }

  function fetchSingleProduct(id) {}

  return productPageNavigationHandler;
}
