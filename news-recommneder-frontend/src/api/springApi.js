// src/api/springApi.js
import axios from "axios";

const springApi = axios.create({
  baseURL: "https://personalizednewsrecommenderapp-backend.onrender.com/api/news"  // <-- use your actual Spring Boot deployed URL
});


export const fetchArticles = (category = "general") => {
  return springApi.get(`/fetch?category=${category}`);
};
