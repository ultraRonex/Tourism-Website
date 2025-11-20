import React from 'react';
import './Gallery.css';

const images = [
  '/images/travel1.jpg',
  '/images/travel2.jpg',
  '/images/travel3.jpg',
  '/images/travel4.jpg',
];

function Gallery() {
  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <img key={index} src={img} alt="Travel" />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
