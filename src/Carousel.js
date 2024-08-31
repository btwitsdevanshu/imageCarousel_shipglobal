import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ images, fallbackImage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle image loading error
  const handleError = (e) => {
    e.target.src = fallbackImage;
  };

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          onError={handleError}
          className="carousel-image"
        />
      </div>
      <button className="carousel-control left" onClick={prevImage}>
        &#10094;
      </button>
      <button className="carousel-control right" onClick={nextImage}>
        &#10095;
      </button>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
