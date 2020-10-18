import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.2.104:3333/",
});

export default api;
