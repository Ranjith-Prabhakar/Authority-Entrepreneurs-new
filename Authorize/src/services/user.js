import axios from "../api/axiosInstance";

export const loginUser = async (payload) => {
  try {
    const products = await axios.post("/auth/login", payload);
    return products.data;
  } catch (error) {
    console.error(error);
    return { id: 1 };
  }
};

export const signUpUser = async (payload) => {
  try {
    const products = await axios.post("/users", payload);
    return products.data;
  } catch (error) {
    console.error(error);
  }
};
