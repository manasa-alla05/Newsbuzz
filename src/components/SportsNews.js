// SportsNews.js
import React from 'react';
import CategoryNews from './CategoryNews';
import CategoryBackground from './CategoryBackground';

function SportsNews() {
  return (
    <>
  
      <CategoryBackground
        category="Sports"
        backgroundImage="https://media.istockphoto.com/id/1097254326/video/futuristic-glow-stage-loopable.jpg?s=480x480&k=20&c=Ly1WgL1gsXkAF805sbT5ynZXXVHHSpb_EAJWH6TLIWA="
        description="Your one stop destination for all the latest sports news"
      />
  <CategoryNews
      category="sports"
      country="in"
    />
    </>
  );
}

export default SportsNews;
