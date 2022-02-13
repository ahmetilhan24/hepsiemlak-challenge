import axios from "axios";
//normal request
export const apiHTTP = axios.create({
  baseURL: process.env.VUE_APP_API_URL ,
  headers: {
    "Content-Type": "application/json",
  },
});
