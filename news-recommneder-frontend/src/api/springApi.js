
import axios from "axios";

const springApi = axios.create({
  baseURL: "https://personalizednewsrecommenderapp-33ca.onrender.com/api/news"
});

export const fetchArticles = (category = "general") => {
  return springApi.get(`/fetch?category=${category}`);
};
