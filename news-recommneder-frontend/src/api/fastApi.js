
import axios from "axios";
const fastApi = axios.create({
  baseURL: "https://personalizednewsrecommenderapp-fastapi-a1t2.onrender.com", 
});


export const fetchRecommendations = (payload) => {
  return fastApi.post("/recommend", payload);
};
