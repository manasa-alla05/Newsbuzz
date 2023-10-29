import React from 'react';
import CategoryNews from './CategoryNews';
import CategoryBackground from './CategoryBackground';

function InternationalNews() {
  return (
    <>
      <CategoryBackground
        category="International"
        backgroundImage="https://img.freepik.com/free-vector/technology-background-with-earth-circuit-diagram_1017-19385.jpg"
        description="Stay updated with the latest international news"
      />
      <CategoryNews
        category="politics"
        country="us"
      />
    </>
  );
}

export default InternationalNews;
