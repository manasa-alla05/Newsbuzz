import React from 'react';
import CategoryNews from './CategoryNews';
import CategoryBackground from './CategoryBackground';

function HomeNews() {
  return (
    <>
      <CategoryBackground
        category="News Buzz"
        backgroundImage="https://static.vecteezy.com/system/resources/thumbnails/004/215/715/small_2x/3d-world-news-background-loop-free-video.jpg"
        description="Your one-stop destination for all the latest news"
      />
      <CategoryNews
        category="general"
        country="in"
      />
    </>
  );
}

export default HomeNews;
