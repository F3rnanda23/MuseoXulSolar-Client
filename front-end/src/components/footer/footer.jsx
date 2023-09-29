import logofooter from '../../imagenes/footer/logosfooter.png';
import instaLogo from '../../imagenes/footer/instagram.png'
import FaceLogo from '../../imagenes/footer/facebook.png'
import twitterLogo from '../../imagenes/footer/twitter.png'
import mapaLogo from '../../imagenes/footer/marcador.png'
import envelopeIcon from '../../imagenes/footer/sobre.png'
import phoneIcon from '../../imagenes/footer/llamada-telefonica.png'
import { FormattedMessage } from 'react-intl';


const Footer = () => {

  return (
    <footer className="bg-gray-300 h-2/3 w-full">


      <div className="flex flex-row ml-20 bg-gray-300">

        <div className="flex flex-col w-1/4">
          <h5 className="text-orange-200 font-bold mt-5">
            <FormattedMessage
              id='footer.museo'
              defaultMessage='El Museo'
            /></h5>
          <a href="/Museum">
          <FormattedMessage
              id='footer.museo'
              defaultMessage='El Museo'
            /></a>
          <a href="/Biography">
          <FormattedMessage
              id='footer.biografia'
              defaultMessage='Biografía'
            /></a>
          <a href="/Store">
          <FormattedMessage
              id='footer.tienda'
              defaultMessage='Tienda'
            /></a>
          <a href="/Collection">
          <FormattedMessage
              id='footer.coleccion'
              defaultMessage='Colección'
            /></a>
          <a href='/Exhibitions'>
          <FormattedMessage
              id='footer.exposiciones'
              defaultMessage='Exposiciones'
            /></a>
          <a href="/Education">
          <FormattedMessage
              id='footer.educacion'
              defaultMessage='Educación'
            /></a>

        </div>

        <div className="flex flex-col w-1/4">
          <h5 className="text-orange-200 font-bold mt-5">
          <FormattedMessage
              id='footer.secciones'
              defaultMessage='Secciones'
            /></h5>
          <a href="/visits">
          <FormattedMessage
              id='footer.horarios'
              defaultMessage='Horarios y Visitas'
            /></a>
          <a href="/Activities">
          <FormattedMessage
              id='footer.actividades'
              defaultMessage='Actividades'
            /></a>
          <a href="/Events" >
          <FormattedMessage
              id='footer.eventos'
              defaultMessage='Eventos'
            /></a>
          <a href="/Donations" >
          <FormattedMessage
              id='footer.donaciones'
              defaultMessage='Donaciones'
            /></a>
        </div>
        <div className="flex flex-col w-1/4">
          <h5 className="text-orange-200 font-bold mt-5">
          <FormattedMessage
              id='footer.contacto'
              defaultMessage='Contacto'
            /></h5>
          <div className="flex mt-2">
            <img className="w-4 h-4 mr-2" aria-hidden="true" src={envelopeIcon} alt="Envelope Icon" />
            <h5>
            <FormattedMessage
              id='footer.correo'
              defaultMessage='Correo'
            /></h5>
          </div>
          <h5 className='mb-2 italic'>info@xulsolar.org.ar</h5>
          <div className="flex mt-2">
            <img className="w-4 h-4 mr-2" aria-hidden="true" src={phoneIcon} alt="Phone Icon" />
            <h5 >
            <FormattedMessage
              id='footer.telefono'
              defaultMessage='Telefono'
            /></h5>
          </div>
          <h5 className='mb-2 italic'>(011) 4824-3302/4821-5378</h5>

          <h5 className="text-orange-200 mb-2 font-bold mt-2">
          <FormattedMessage
              id='footer.redesosciales'
              defaultMessage='Redes Sociales'
            /></h5>

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
        <div className="flex flex-col w-1/4">
          <h5 className="text-orange-200 font-bold mt-5">
          <FormattedMessage
              id='footer.teayudo'
              defaultMessage='Te ayudo'
            /></h5>
          <a href="/Faqs">FAQ</a>
          <h5 className="text-orange-200 font-bold mt-2">
          <FormattedMessage
              id='footer.direccion'
              defaultMessage='Direccion'
            /></h5>
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
      </div>

      <div className="h-1/3 flex flex-row items-center justify-center mt-1">

        <img src={logofooter} alt="Xul Solar" className="h-4/5 w-1/8 ml-12" />
        <p className="text-center mr-5 text-xs px-10">
        <FormattedMessage
              id='footer.derechos'
            /></p>
      </div>

    </footer>

  )
}

export default Footer;
