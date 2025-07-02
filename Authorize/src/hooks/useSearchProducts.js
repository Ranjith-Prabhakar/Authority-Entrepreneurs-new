import { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";

export function useSearchProducts() {
  const [value, setValue] = useState("");
  const [products, setProducts] = useState([]);
  const { allProducts } = useSelector((state) => state.products);

  function debounce(fn, delay) {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), delay);
    };
  }

  const debouncedSearch = useMemo(() => {
    return debounce((key) => {
      if (!key.trim()) {
        setProducts([]);
        return;
      }

      const matched = allProducts.filter((product) =>
        product.title.toLowerCase().includes(key.toLowerCase())
      );

      setProducts(matched);
    }, 400);
  }, [allProducts]);

  useEffect(() => {
    debouncedSearch(value);
  }, [value, debouncedSearch]);

  return [setValue, products];
}
