import axios from "../api/axiosInstance";

export const getProducts = async () => {
  try {
    const products = await axios.get("/products");
    return products.data;
  } catch (error) {
    console.error(error);
  }
};
