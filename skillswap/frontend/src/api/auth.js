import axios from "axios";

// Define API URL
const API_URL = "http://localhost:5000/api/auth";

// SignUp API function
export const signUp = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Something went wrong");
  }
};

// SignIn API function
export const signIn = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/signin`, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Something went wrong");
  }
};
