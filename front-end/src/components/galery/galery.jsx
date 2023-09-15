
import React, { useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import images from './links';

import fir1 from '../../imagenes/gallery/fir1.png'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  function slideLeft() {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  function slideRight() {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  }

 
  function handleImageClick(image) {
    setSelectedImage(image);
  }

  function handleCloseClick() {
    setSelectedImage(null);
  }

  return (
    <div className="relative flex flex-col bg-gray-100">
      <div className="relative flex items-center">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          size={40}
          onClick={slideLeft}
        />

        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {images.map((image) => (
            <img
              className="w-auto sm:w-[220px] max-h-72 mt-6 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
              key={image.name}
              src={image.img}
              alt={image.name}
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>

        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          size={40}
          onClick={slideRight}
        />
      </div>
      <div>
     <img src={fir1} alt="xul" className='w-9 h-9 mb-5 ml-auto sm:mr-[250px]'/>
      </div>

 
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="max-w-3xl p-4 bg-gray-500 rounded-lg shadow-lg">
            <img
              src={selectedImage.img}
              alt={selectedImage.name}
              className="w-full  max-h-[600px]" 
          
            />
            <button
              className="mt-4 p-2 bg-orange-200 text-gray-100 rounded hover:bg-gray-100 hover:text-orange-200"
              onClick={handleCloseClick}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
