import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:5005",
});

service.interceptors.request.use((config) => {
  const storedToken = localStorage.getItem("authToken");
  config.headers = storedToken && { Authorization: `Bearer ${storedToken}` };

  return config;
});

export default service;
