// CategoryBackground.js
import React from 'react';

function CategoryBackground({ category, backgroundImage, description }) {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    minHeight: '50vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center', // Center text horizontally
  
    
  };

  return (
    <div style={backgroundStyle}>
      <h1 style={{ fontSize: '80px', fontWeight: 'bold', color: 'white' ,alignContent:'center'}}>
        {category}
      </h1>
      <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', alignContent:'center' }}>
        {description}
      </h2>
    </div>
  );
}

export default CategoryBackground;
