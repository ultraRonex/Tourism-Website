// // src/components/Footer.js
// import React from 'react';
// // import './Footer.css'; // Assuming you have a CSS file for styling

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <p>© 2025 Your Company Name. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Your Website Name. All rights reserved.</p>
      {/* Example of social media links */}
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
