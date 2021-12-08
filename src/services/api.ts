import axios from "axios";

const api = axios.create({
  baseURL: "https://61afdef93e2aba0017c49574.mockapi.io/api/v1/",
  timeout: 5000,
});

export default api;
