import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/", 
});

export const convertCoords = (data) => API.post("/convert", data);
export const getHistory = () => API.get("/history");
