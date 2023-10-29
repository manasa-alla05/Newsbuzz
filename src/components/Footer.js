// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Your Website Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
