import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api", // replace if backend is hosted
  withCredentials: true,
});

export default instance;
