import instaLogo from "../../imagenes/footer/instagram.png";
import FaceLogo from "../../imagenes/footer/facebook.png";
import phoneIcon from "../../imagenes/footer/llamada-telefonica.png";
import twitterLogo from "../../imagenes/footer/twitter.png";
import envelopeIcon from "../../imagenes/footer/sobre.png";
import imagenbg from "../../imagenes/background/bg1.png";
import { FormattedMessage } from 'react-intl';
const Events = () => {
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
            />
            <FormattedMessage
              id="eventos.texto2"
            />
            <br></br>
            <br></br>
            <h1 className="bg-gray-300  rounded flex justify-center items-center text-2xl font-bold mb-4">
            <FormattedMessage
              id="eventos.info"
            />
            </h1>
            <div className="flex justify-evenly">
              <a
                href="https://www.facebook.com/MuseoXulSolar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-12 h-12" src={FaceLogo}></img>
              </a>
              <a href="" className="flex flex-col items-center">
                <img className="w-12 h-12 flex justify-center items-center" src={phoneIcon}></img>
                <span className="">(54 11) 4824-3302</span>
              </a>
              <a
                href="https://www.instagram.com/museo.xul.solar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-12 h-12" src={instaLogo}></img>
              </a>
              <a className="flex flex-col items-center">
                <img className="w-12 h-12 flex justify-center items-center" src={envelopeIcon}></img>
                <span className="">info@xulsolar.org.ar</span>
              </a>
              <a
                href="https://twitter.com/xul_solar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-12 h-12" src={twitterLogo}></img>
              </a>
            </div>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Events;
