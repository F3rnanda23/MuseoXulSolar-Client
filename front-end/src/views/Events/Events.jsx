import instaLogo from "../../imagenes/footer/instagram.png";
import FaceLogo from "../../imagenes/footer/facebook.png";
import phoneIcon from "../../imagenes/footer/llamada-telefonica.png";
import twitterLogo from "../../imagenes/footer/twitter.png";
import envelopeIcon from "../../imagenes/footer/sobre.png";
import imagenbg from "../../imagenes/background/bg1.png";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { FormattedMessage } from 'react-intl';
import { useState } from 'react';
import imagenes from "./imageness";


const Events = () => {

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

  const backgroundStyle = {
    backgroundImage: `url(${imagenbg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };


  return (
    <div className="bg-gray-100 ">
      <main
        style={backgroundStyle}
        className="flex flex-col justify-start items-center min-h-screen "
      >
        <div className=" ">
          <h1 className=" rounded flex text-2xl font-bold mb-4 mt-10">
            <FormattedMessage
              id="eventos.titulo"
              defaultMessage='Eventos' />
          </h1>
        </div>
        <div className="w-3/5 flex flex-col items-center h-full bg-gray-200 p-6 rounded-lg shadow-lg">
          <p className="mt-4 text-lg text-gray-700">
            <FormattedMessage
              id="eventos.texto"
              defaultMessage='El museo ofrece sus instalaciones para distintas actividades: presentación de libros, música, ciclos de conferencias, cursos, entrega de premios, actos culturales y empresariales.'
            />
            <br></br>
            <br></br>
            <FormattedMessage
              id="eventos.texto2"
              defaultMessage='Un lugar ideal para organizar eventos. Su salón principal de 140 m2 aproximadamente permite la realización de una reunión en un contexto privilegiado, donde conviven la excelente colección de obras del Museo y el entorno especial de la arquitectura.'
            />
            <br></br>
            <br></br>
            <h2 className="bg-gray-300  rounded flex justify-center items-center text-2xl font-bold mb-4">
              <FormattedMessage
                id="eventos.info"
              />
            </h2>
            <div className="flex justify-evenly mt-2">
              <div href="" className="flex flex-col items-center">
                <img className="w-12 h-12 flex justify-center items-center" src={phoneIcon}></img>
                <span><FormattedMessage
                  id="eventos.telefono"
                  defaultMessage='Teléfono: (011) 4824-3302/4821-5378' />
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img className="w-12 h-12 flex justify-center items-center" src={envelopeIcon}></img>
                <span className="">Mail: coordinacionpanklub@xulsolar.org.ar</span>
              </div>
            </div>
          </p>
        </div>
      

      <div className="my-8">
        <div className="relative flex flex-col">

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
              {imagenes.map((image, index) => (
                <img
                  className="w-auto sm:w-[220px] max-h-72 mt-6 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                  key={index}
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
          {selectedImage && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
              <div className="max-w-3xl p-4 bg-gray-500 rounded-lg shadow-lg">
                <img
                  src={selectedImage.img}
                  alt={selectedImage.name}
                  className="w-full  max-h-[400px]"

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
      </div>
      </main>
    </div>
  );
};

export default Events;
