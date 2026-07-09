import axios from "axios";

const api = axios.create({
  baseURL: "https://cansinorock-2.onrender.com/api",
});

export default api;
