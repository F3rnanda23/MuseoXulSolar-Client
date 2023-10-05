import { useState } from 'react';

import logofooter from '../../imagenes/footer/logosfooter.png';
import instaLogo from '../../imagenes/footer/instagram.png'
import FaceLogo from '../../imagenes/footer/facebook.png'
import twitterLogo from '../../imagenes/footer/twitter.png'
import mapaLogo from '../../imagenes/footer/marcador.png'
import envelopeIcon from '../../imagenes/footer/sobre.png'
import phoneIcon from '../../imagenes/footer/llamada-telefonica.png'
import { FormattedMessage } from 'react-intl';

import './footer.css'


const Footer = () => {

  const [showLinks1, setShowLinks1] = useState(false);
  const [showLinks2, setShowLinks2] = useState(false);
  const [showLinks3, setShowLinks3] = useState(false);
  const [showLinks4, setShowLinks4] = useState(false);
  const [showLinks5, setShowLinks5] = useState(false);
  const [showLinks6, setShowLinks6] = useState(false);

  const handle1Click = () => {
    setShowLinks1(!showLinks1);
  };

  const handle2Click = () => {
    setShowLinks2(!showLinks2);
  };

  const handle3Click = () => {
    setShowLinks3(!showLinks3);
  };

  const handle4Click = () => {
    setShowLinks4(!showLinks4);
  };

  const handle5Click = () => {
    setShowLinks5(!showLinks5);
  };

  const handle6Click = () => {
    setShowLinks6(!showLinks6);
  };

  return (

    <footer className="bg-gray-300 h-screen w-full md:h-2/3 footer-container">

      <div className='flex flex-col'>

        <div className="flex flex-col items-center md:flex-row ml-20 bg-gray-300">

          <div className="flex flex-col w-1/4">
            <h5
              className="text-orange-200 font-bold mt-5 cursor-pointer"
              onClick={handle1Click}
            >
              <FormattedMessage id='footer.museo' defaultMessage='El Museo' />
            </h5>

            <div className={`block md:hidden ${showLinks1 ? 'block' : 'hidden'}`}>

              <a href="/Museum" className="block">
                <FormattedMessage id='footer.museo' defaultMessage='El Museo' /></a>

              <a href="/Biography" className="block">
                <FormattedMessage id='footer.biografia' defaultMessage='Biografía' /></a>

              <a href="/Store" className="block">
                <FormattedMessage id='footer.tienda' defaultMessage='Tienda' /></a>

              <a href="/Collection" className="block">
                <FormattedMessage id='footer.coleccion' defaultMessage='Colección' /></a>

              <a href='/Exhibitions' className="block">
                <FormattedMessage id='footer.exposiciones' defaultMessage='Exposiciones' /></a>

              <a href="/Education" className="block">
                <FormattedMessage id='footer.educacion' defaultMessage='Educación' /></a>

            </div>

            <div className="hidden md:block">
              <a href="/Museum" className="block hover:font-semibold">
                <FormattedMessage id='footer.museo' defaultMessage='El Museo' /></a>

              <a href="/Biography" className="block hover:font-semibold">
                <FormattedMessage id='footer.biografia' defaultMessage='Biografía' /> </a>

              <a href="/fundacion" className="block hover:font-semibold">
                Fundación Pan Klub</a>

              <a href="/Collection" className="block hover:font-semibold">
                <FormattedMessage id='footer.coleccion' defaultMessage='Colección' /></a>

              <a href='/Exhibitions' className="block hover:font-semibold">
                <FormattedMessage id='footer.exposiciones' defaultMessage='Exposiciones' /></a>

              <a href="/Education" className="block hover:font-semibold">
                <FormattedMessage id='footer.educacion' defaultMessage='Educación' /></a>

            </div>
          </div>

          <div className="flex flex-col w-1/4">

            <h5 className="text-orange-200 font-bold mt-5 cursor-pointer"
              onClick={handle2Click}>
              <FormattedMessage id='footer.secciones' defaultMessage='Secciones'
              /></h5>

            <div className={`block md:hidden ${showLinks2 ? 'block' : 'hidden'}`}>

              <a href="/visits" className="block">
                <FormattedMessage id='footer.horarios' defaultMessage='Horarios y Visitas' /></a>

              <a href="/Activities" className="block">
                <FormattedMessage id='footer.actividades' defaultMessage='Actividades' /></a>

              <a href="/Events" className="block">
                <FormattedMessage id='footer.eventos' defaultMessage='Eventos' /></a>

              <a href="/Donations" className="block">
                <FormattedMessage id='footer.donaciones' defaultMessage='Donaciones' /></a>

            </div>
            <div className="hidden md:block ">

              <a href="/visits" className="block hover:font-semibold">
                <FormattedMessage id='footer.horarios' defaultMessage='Horarios y Visitas' /></a>

              <a href="/Activities" className="block hover:font-semibold">
                <FormattedMessage id='footer.actividades' defaultMessage='Actividades' /></a>

              <a href="/Events" className="block hover:font-semibold">
                <FormattedMessage id='footer.eventos' defaultMessage='Eventos' /></a>

              <a href="/Donations" className="block hover:font-semibold">
                <FormattedMessage id='footer.donaciones' defaultMessage='Donaciones' /></a>

            </div>

          </div>

          <div className="flex flex-col w-1/4">

            <h5 className="text-orange-200 font-bold mt-5 cursor-pointer"
              onClick={handle3Click}>
              <FormattedMessage id='footer.contacto' defaultMessage='Contacto' /></h5>

            <div className={`block md:hidden ${showLinks3 ? 'block' : 'hidden'}`}>

              <div className="flex mt-2">

                <img className="w-4 h-4 mr-2" aria-hidden="true" src={envelopeIcon} alt="Envelope Icon" />
                <h5>
                  <FormattedMessage id='footer.correo' defaultMessage='Correo' /></h5>
              </div>
              <h5 className='mb-2 italic'>info@xulsolar.org.ar</h5>

              <div className="flex mt-2">
                <img className="w-4 h-4 mr-2" aria-hidden="true" src={phoneIcon} alt="Phone Icon" />
                <h5 >
                  <FormattedMessage id='footer.telefono' defaultMessage='Telefono' /></h5>
              </div>
              <h5 className='mb-2 italic'>(011) 4824-3302/4821-5378</h5>
            </div>

            <div className="hidden md:block">

              <div className="flex mt-2">

                <img className="w-4 h-4 mr-2" aria-hidden="true" src={envelopeIcon} alt="Envelope Icon" />
                <h5>
                  <FormattedMessage id='footer.correo' defaultMessage='Correo' /></h5>
              </div>
              <h5 className='mb-2 italic '>info@xulsolar.org.ar</h5>

              <div className="flex mt-2">
                <img className="w-4 h-4 mr-2" aria-hidden="true" src={phoneIcon} alt="Phone Icon" />
                <h5 >
                  <FormattedMessage id='footer.telefono' defaultMessage='Telefono' /></h5>
              </div>
              <h5 className='mb-2 italic'>(011) 4824-3302/4821-5378</h5>
            </div>

            <div>

              <h5 className="text-orange-200 font-bold mt-5 cursor-pointer"
                onClick={handle4Click}>
                <FormattedMessage id='footer.redesosciales' defaultMessage='Redes Sociales'
                /></h5>
              <div className={`block md:hidden ${showLinks4 ? 'block' : 'hidden'}`}>

                <div className="sm:flex items-center sm:justify-between">

                  <div className="flex flex-col md:flex-row mt-4 space-y-2 justify-center items-center sm:mt-0">

                    <a href="https://www.facebook.com/MuseoXulSolar/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <img className="w-4 h-4" aria-hidden="true" src={FaceLogo} alt="Facebook Page" />
                    </a>
                    <a href="https://www.instagram.com/museo.xul.solar/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <img className="w-4 h-4" aria-hidden="true" src={instaLogo} alt="Descripción del enlace" />
                      <span className="sr-only">Instagram page</span>
                    </a>
                    <a href="https://twitter.com/xul_solar" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <img className="w-4 h-4" aria-hidden="true" src={twitterLogo} alt="Descripción del enlace" />
                      <span className="sr-only">Twitter page</span>
                    </a>
                  </div>
                </div>

              </div>

              <div className='hidden md:block'>

                <div className="sm:flex sm:items-center sm:justify-between">

                  <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">

                    <a href="https://www.facebook.com/MuseoXulSolar/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <img className="w-4 h-4" aria-hidden="true" src={FaceLogo} alt="Facebook Page" />
                    </a>
                    <a href="https://www.instagram.com/museo.xul.solar/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <img className="w-4 h-4" aria-hidden="true" src={instaLogo} alt="Descripción del enlace" />
                      <span className="sr-only">Instagram page</span>
                    </a>
                    <a href="https://twitter.com/xul_solar" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <img className="w-4 h-4" aria-hidden="true" src={twitterLogo} alt="Descripción del enlace" />
                      <span className="sr-only">Twitter page</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>

          <div className="flex flex-col w-1/4">

            <h5 className="text-orange-200 font-bold mt-5 cursor-pointer"
              onClick={handle5Click}>
              <FormattedMessage id='footer.teayudo' defaultMessage='Te ayudo'
              /></h5>

            <div className={`block md:hidden ${showLinks5 ? 'block' : 'hidden'}`}>
              <a href="/Faqs">FAQS</a>
            </div>

            <div className='hidden md:block hover:font-semibold'>
              <a href="/Faqs">FAQS</a>
            </div>

            <h5 className="text-orange-200 font-bold mt-5 cursor-pointer"
              onClick={handle6Click}>
              <FormattedMessage id='footer.direccion' defaultMessage='Direccion'
              /></h5>

            <div className={`block md:hidden ${showLinks6 ? 'block' : 'hidden'}`}>
              <h5 className='mb-2 mr-5'>Laprida 1212, C1425EKF CABA, Argentina</h5>
              <p>
                <a href="https://goo.gl/maps/PLd1b1vyyPnVHq5W9" target="_blank" rel="noopener noreferrer">
                  <FormattedMessage
                    id='footer.vermapa'
                    defaultMessage='Ver Mapa'
                  />
                  <img className="w-4 h-4" aria-hidden="true" src={mapaLogo} alt="" />
                </a>
              </p>
            </div>

            <div className='hidden md:block'>
              <h5 className='mb-2 mr-5'>Laprida 1212, C1425EKF CABA, Argentina</h5>
              <p>
                <a href="https://goo.gl/maps/PLd1b1vyyPnVHq5W9" target="_blank" rel="noopener noreferrer" className='hover:font-semibold'>
                  <FormattedMessage
                    id='footer.vermapa'
                    defaultMessage='Ver Mapa'
                  />
                  <img className="w-4 h-4" aria-hidden="true" src={mapaLogo} alt="" />
                </a>
              </p>

            </div>

          </div>
        </div>
        <div className="h-1/3 flex flex-row items-center justify-center mt-1">

          <img src={logofooter} alt="Xul Solar" className="h-4/5 w-1/8 ml-12" />
          <p className="hidden md:block text-center mr-5 text-xs px-10">
            <FormattedMessage
              id='footer.derechos'
              defaultMessage='Fundación Pan Klub - Museo Xul Solar Como única titular de los derechos de propiedad intelectual (Ley 11.723) sobre toda la obra de Alejandro Xul Solar (Oscar Agustín Alejandro Schulz Solari), advierte que es la única que puede autorizar su reproducción por cualquier medio o soporte y otorgar certificados de autenticidad sobre la misma. Para informes, dirigirse a: Laprida 1212, CABA (011) 4824-3302/4821-5378'
            /></p>
        </div>

      </div>

    </footer>


  )
}

export default Footer;

