// src/api/fastApi.js
import axios from "axios";

const fastApi = axios.create({
  baseURL: "https://personalizednewsrecommenderapp-fastapi.onrender.com"
});

export const fetchRecommendations = (payload) => {
  return fastApi.post("/recommend", payload);
};
