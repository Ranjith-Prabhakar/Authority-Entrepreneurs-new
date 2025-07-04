import axios from "../api/axiosInstance";

export const getProducts = async () => {
  try {
    const products = await axios.get("/products");
    return products.data;
  } catch (error) {
    console.error(error);
  }
};

export const getSingleProduct = async (id) => {
  try {
    const product = await axios.get(`/products/${id}`);
    return product.data;
  } catch (error) {
    console.error(error);
  }
};
