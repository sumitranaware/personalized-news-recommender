import axios from "axios";

const springApi = axios.create({
  baseURL: "https://personalizednewsrecommenderapp-fastapi.onrender.com"

});

export const fetchArticles = (category = "general") => {
  return springApi.get(`/fetch?category=${category}`);
};
