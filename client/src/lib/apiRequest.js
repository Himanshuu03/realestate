import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://realestate-frd5.vercel.app/api",
  withCredentials: true,
});

export default apiRequest;