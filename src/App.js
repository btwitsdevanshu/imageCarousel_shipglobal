
import React from 'react';
import Carousel from './Carousel';
import './App.css';  // Ensure this file is imported

const App = () => {
  const images = [
    'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];

  const fallbackImage = 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  return (
    <div>
      
      <Carousel images={images} fallbackImage={fallbackImage} />
    </div>
  );
};

export default App;
