
import { FormattedMessage } from 'react-intl';

const Visits = () => {
  
  return (
    <div className=" w-screen grid grid-cols-1  place-items-center ">
      <div>
        <h1 className=" rounded  text-2xl font-bold mb-4 pt-10 text-center">
          <FormattedMessage
            id='visitas.titulo'
            defaultMessage='Visitá el museo'
          /></h1>
      </div>
      <div className="bg-gray-100 rounded-lg p-10 w-[800px]">
        <h2 className="bg-gray-300 rounded-full text-center text-lg font-semibold py-2">
          <FormattedMessage
            id='visitas.horarios'
            defaultMessage='Horarios del Museo'
          />
        </h2>
        <p className="text-center ">
          <br />
          <FormattedMessage
            id='visitas.semana'
            defaultMessage='Martes a Viernes de 12:00 a 20:00 hs.'
          />
          <br />
          <FormattedMessage
            id='visitas.sabado'
            defaultMessage='Sábados de 12:00 a 19:00 hs.'
          />
          <br />
          <FormattedMessage
            id='visitas.cerrado'
            defaultMessage='Domingos, Lunes y Feriados: Cerrado'
          />
        </p>
        <br></br>
        <h2 className="bg-gray-300 rounded-full text-center text-lg font-semibold py-2">
          <FormattedMessage
            id='visitas.entradas'
            defaultMessage='Entradas'
          />
        </h2>
        <p className="text-center">
          <br />

          General: $ 1200.
          <br />
          <FormattedMessage
            id='visitas.jubilados'
            defaultMessage='Jubilados, docentes y estudiantes con acreditación: $ 600.'
          />
          <br />
          <FormattedMessage
            id='visitas.sincargo'
            defaultMessage='Menores de 5 años: sin cargo'
          />
        </p>
        <br></br>
        <h2 className="bg-gray-300 rounded-full text-center text-lg font-semibold py-2">
          <FormattedMessage
            id='visitas.guiadas'
            defaultMessage='Visitas guiadas colección permanente'
          />
        </h2>
        <br></br>
        <p className="text-center">
        <FormattedMessage
            id='visitas.guiadasdias'
            defaultMessage='Miércoles y Sábados 16:00 hs'
          /></p>
        <br></br>
        <h2 className="bg-gray-300 rounded-full text-center text-lg font-semibold py-2">
        <FormattedMessage
            id='visitas.grupos'
            defaultMessage='Grupos'
          />
        </h2>
        <br></br>
        <p className="text-center">
        <FormattedMessage
            id='visitas.reserva'
            defaultMessage='Para reservas mandar mail a info@xulsolar.org.ar o telefónicamente al
            (011) 4824-3302/4821-5378'
          />
          <br />
          <FormattedMessage
            id='visitas.educativas'
            defaultMessage='Para visitas guiadas instituciones educativas: jardín, primaria y secundaria.'
          />
          
          <a href="https://drive.google.com/file/d/1VxgpNBKtLp-SrpQIm3_Dg_G6rZjWvVn3/view"
            target="_blank"
            rel="noopener noreferrer">👉🏫</a>
        </p>
        <br></br>
        <h2 className="bg-gray-300 rounded-full text-center text-lg font-semibold py-2">
        <FormattedMessage
            id='visitas.tienda'
            defaultMessage='Tienda'
          />
        </h2>
        <p className="text-center">
          <br></br>
          <FormattedMessage
            id='visitas.tiendaubicacion'
            defaultMessage='Ubicada en el interior del museo, se encuentra abierta durante los
            mismos horarios'
          />
        </p>
        <br></br>
        <h2 className="bg-gray-300 rounded-full text-center text-lg font-semibold py-2">
        <FormattedMessage
            id='visitas.informacion'
            defaultMessage='Informacion Util'
          />
        </h2>
        <br></br>
        <p className="text-center">
        <FormattedMessage
            id='visitas.fotografias'
            defaultMessage='Fotografías: está permitido tomar fotografías sin flash, de uso personal exclusivamente.'
          />
          <br />
          <FormattedMessage
            id='visitas.comidas'
            defaultMessage='Comidas y bebidas: no se podrá ingresar al museo ni con bebidas ni con comidas.'
          />
          <br />
          <FormattedMessage
            id='visitas.orientacion'
            defaultMessage='Orientación: el equipo del museo podrá asistirte y responder a tus consultas.'
          />
          <br></br>
        </p>
        <br></br>
        <h2 className="bg-gray-300 rounded-full text-center text-lg font-semibold py-2">
        <FormattedMessage
            id='visitas.esperamos'
            defaultMessage='¡Te esperamos!'
          />
        </h2>
        <br></br>
        <a
          href="https://goo.gl/maps/PLd1b1vyyPnVHq5W9"
          target="_blank"
          rel="noopener noreferrer"
          className=" flex justify-center items-center"
        >
          <img src="https://tiles3.usig.buenosaires.gob.ar/tilecache/mapabsas_informacion_basica?LAYERS=mapabsas_informacion_basica&FORMAT=image%2Fpng&TRANSPARENT=TRUE&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A221951&BBOX=104260,104010,106180,105930&WIDTH=256&HEIGHT=256"></img>
        </a>
        <br></br>
        <p>
          Fundación Pan Klub Laprida 1212, Recoleta, CABA C1425EKF Teléfono:
          (011) 4824-3302/4821-5378
        </p>
      </div>
    </div>
  );
};

export default Visits;
