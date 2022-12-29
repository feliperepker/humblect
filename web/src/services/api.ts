import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "https://localhost:7122"
  //baseURL:"https://agvexterno-api.als.devtest.aws.scania.com"
});

api.interceptors.request.use(async config => {
  const token = getToken();
    if (config.headers){
      config.headers.Authorization = `Bearer ${token}`;
    }
  return config
})



export default api;