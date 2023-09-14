import PropTypes from 'prop-types';
import { Image } from 'cloudinary-react';
import React from 'react';

const Gallery = ({ cloudinary }) => {

    console.log(cloudinary);

    // const publicId = 'c1539_b_923_IMG_5422_olj00w'
    // const publicId = 'Captura_de_pantalla_2023-07-12_142735_j2zo8g';
    const imageUrl = cloudinary?.image('Captura_de_pantalla_2023-07-12_142735_j2zo8g.png').toURL();
   

    return ( 
        <div>
            {/* <img src={imageUrl} alt="imagen1" /> */}
            <img className='w-[350px] h-[350px]' src='https://res.cloudinary.com/dtsmy1ksn/image/upload/v1694663548/gl/Captura_de_pantalla_2023-07-12_142735_j2zo8g.png' alt="imagen1" />
            {/* <Image
        cloudName="dtsmy1ksn" // Reemplaza con tu cloudName
        publicId={publicId}
        format="jpg" // Convierte la imagen a formato JPEG
        width="600" // Ajusta el ancho deseado
        height="200" // Ajusta la altura deseada
        crop="fill" // Ajusta el método de recorte según tus necesidades
        alt="imagen1"
      /> */}
        </div>
     );
};

Gallery.propTypes = {
    cloudinary: PropTypes.object, //indica que esperamos que las props sean tipo object
  };

 
export default Gallery;