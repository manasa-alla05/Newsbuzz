import React from 'react';

const defaultImageUrl= "https://media.licdn.com/dms/image/C5603AQHwZ1Uny2ouzw/profile-displayphoto-shrink_800_800/0/1606628930124?e=2147483647&v=beta&t=lRcLVX2mM90PimO4ZrnWHQPioeSCaaluDLY0H6TAnkg";

function NewsCard({ article }) {
  // Function to truncate text to a specified limit
  function truncateText(text, limit) {
    if (!text) {
      return ' '.repeat(limit); // Fill with spaces if text is null or undefined
    }
    if (text.length >= limit) {
      return text.slice(0, limit) + '...'; // Truncate if text exceeds the limit
    }
    return text + ' '.repeat(limit - text.length); // Pad with spaces to reach the limit
  }

  // Define CSS styles for controlling image size
  const imageStyles = {
    width: '100%', // Adjust the width to your preferred size
    height: '300px', // Adjust the height to your preferred size
  };

  return (
    <div className="card mb-4">
      <img src={article.urlToImage||defaultImageUrl} className="card-img-top" alt="News" style={imageStyles} />
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{truncateText(article.description, 80)}</p>
        <a
          href={article.url}
          className="btn btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
