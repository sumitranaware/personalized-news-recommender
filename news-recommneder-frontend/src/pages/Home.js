import React, { useEffect, useState } from "react";
import { fetchArticles } from "../api/springApi"; // Ensure this fetches general news
import moment from "moment";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [dateTime, setDateTime] = useState(moment());

  useEffect(() => {
    fetchArticles("general")
      .then((res) => setArticles(res.data))
      .catch((err) => console.error("Error fetching news", err));

    const interval = setInterval(() => setDateTime(moment()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mt-4">
      <div className="text-center mb-4">
        <h1>📰 Welcome to the News Recommender</h1>
        <p className="lead">
          Go to Recommendations to get articles based on your interests!
        </p>
        <p className="text-muted fs-5">
          {dateTime.format("dddd, MMMM Do YYYY, hh:mm:ss A")}
        </p>
        <a className="btn btn-primary" href="/recommendations">
          Get Recommendations
        </a>
      </div>

      <h3 className="mb-3">🗞️ Latest General News</h3>
      <div className="row">
        {articles.map((article, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <a href={article.url} className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
