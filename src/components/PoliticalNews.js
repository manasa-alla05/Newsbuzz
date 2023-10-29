import React from 'react';
import CategoryNews from './CategoryNews';
import CategoryBackground from './CategoryBackground';

function PoliticsNews() {
  return (
    <>
      <CategoryBackground
        category="Politics"
        backgroundImage="https://static.toiimg.com/thumb/msid-84374944,width-1280,height-720,resizemode-4/.jpg"
        description="Your one-stop destination for all the latest political news"
      />
      <CategoryNews
        category="technology"
        country="in"
      />
    </>
  );
}

export default PoliticsNews;
