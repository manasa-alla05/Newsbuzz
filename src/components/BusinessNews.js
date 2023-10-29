import React from 'react';
import CategoryNews from './CategoryNews';
import CategoryBackground from './CategoryBackground';

function BusinessNews() {
  return (
    <>
      <CategoryBackground
        category="Business"
        backgroundImage="https://vuliclaw.com/wp-content/uploads/2023/01/ADEX-first-regional-power-exchange.jpg"
        description="Your one-stop destination for all the latest business news"
      />
      <CategoryNews
        category="business"
        country="in"
      />
    </>
  );
}

export default BusinessNews;
