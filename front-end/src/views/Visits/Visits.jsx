import imagenbg from "../../imagenes/background/bg1.png";

const Visits = () => {
  const backgroundStyle = {
    backgroundImage: `url(${imagenbg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={backgroundStyle} className=" w-screen grid grid-cols-1  place-items-center ">
      <div>
      <h1 className=" rounded  text-2xl font-bold mb-4 pt-10 text-center">Visitar el museo</h1>
      </div>
      <div className="bg-gray-100 rounded-lg p-10 w-[800px]">
        <h2 className="bg-gray-300 rounded-full text-center text-lg font-semibold py-2">
          Horarios del Museo
        </h2>
        <p className="text-center ">
          <br />
          Martes a Viernes de 12:00 a 20:00 hs.
          <br />
          Sábados de 12:00 a 19:00 hs.
          <br />
          Domingos, Lunes y Feriados: Cerrado
        </p>
        <br></br>
        <h2 className="bg-gray-300 rounded-full text-center text-lg font-semibold py-2">
          Costo de las entradas
        </h2>
        <p className="text-center">
          <br />
          General: $ 1200.
          <br />
          Jubilados, docentes y estudiantes con acreditación: $ 600.
          <br />
          Menores de 5 años: sin cargo
        </p>
        <br></br>
        <h2 className="bg-gray-300 rounded-full text-center text-lg font-semibold py-2">
          Visitas guiadas colección permanente
        </h2>
        <br></br>
        <p className="text-center">Miércoles y Sábados 16:00 hs</p>
        <br></br>
        <h2 className="bg-gray-300 rounded-full text-center text-lg font-semibold py-2">
          Grupos
        </h2>
        <br></br>
        <p className="text-center">
          Para reservas mandar mail a info@xulsolar.org.ar o telefónicamente al
          (011) 4824-3302/4821-5378
          <br />
          Para visitas guiadas instituciones educativas: jardín, primaria y
          secundaria.
          <a href="https://drive.google.com/file/d/1VxgpNBKtLp-SrpQIm3_Dg_G6rZjWvVn3/view"
          target="_blank"
          rel="noopener noreferrer">👉🏫</a>
        </p>
        <br></br>
        <h2 className="bg-gray-300 rounded-full text-center text-lg font-semibold py-2">
          Tienda
        </h2>
        <p className="text-center">
          <br></br>
          Ubicada en el interior del museo, se encuentra abierta durante los
          mismos horarios
        </p>
        <br></br>
        <h2 className="bg-gray-300 rounded-full text-center text-lg font-semibold py-2">
          Informacion Util
        </h2>
        <br></br>
        <p className="text-center">
          Fotografías: está permitido tomar fotografías sin flash, de uso
          personal exclusivamente.
          <br />
          Comidas y bebidas: no se podrá ingresar al museo ni con bebidas ni con
          comidas.
          <br />
          Orientación: el equipo del museo podrá asistirte y responder a tus
          consultas.
          <br></br>
        </p>
        <br></br>
        <h2 className="bg-gray-300 rounded-full text-center text-lg font-semibold py-2">
          ¡Te esperamos!
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
