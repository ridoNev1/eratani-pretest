import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axiosInstance.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`;
axiosInstance.defaults.headers.common["Content-Type"] = "application/json";

export default axiosInstance;
