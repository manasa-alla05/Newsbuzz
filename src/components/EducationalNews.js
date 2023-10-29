import React from 'react';
import CategoryNews from './CategoryNews';
import CategoryBackground from './CategoryBackground';

function EducationNews() {
  return (
    <>
      <CategoryBackground
        category="Education"
        backgroundImage="https://e0.pxfuel.com/wallpapers/730/407/desktop-wallpaper-new-health-and-medicine-full-1920%C3%971080-for-pc-background-medical-health-care-news-health-health-care.jpg"
        description="Your one-stop destination for all the latest education news"
      />
      <CategoryNews
        category="health"
        country="in"
      />
    </>
  );
}

export default EducationNews;
