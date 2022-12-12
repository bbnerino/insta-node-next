import axios from "axios";
export const URL = "http://localhost:8080";

export const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-type": "application/json",
    // Authorization : `Bearer ${sessionStorage.getItem("token")||""}`
  },
});
export const getToken = () => {
  return typeof window !== "undefined" ? sessionStorage.getItem("token") : null;
};
