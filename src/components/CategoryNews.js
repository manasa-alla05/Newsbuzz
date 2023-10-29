import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';


function CategoryNews({ category, country }) {
    const [news, setNews] = useState([]);
  useEffect(() => {
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`;

    axios
      .get(apiUrl)
      .then((response) => setNews(response.data.articles))
      .catch((error) => console.error('Error fetching data:', error));
  }, [category, country]);

  return (
    <>
      <div style={{ marginTop: '70px' }}>
        <div className="row">
          {news.map((article, index) => (
            <div className="col-md-4" key={index}>
              <NewsCard article={article} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CategoryNews;
