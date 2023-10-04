import imagenbg from "../../imagenes/background/bg1.png";

const Biography = () => {
  const backgroundStyle = {
    backgroundImage: `url(${imagenbg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="flex justify-center items-center  min-h-screen " style={backgroundStyle}>
      <main >
        <div className="bg-gray-100 w-[700px] rounded-xl mt-5 mb-5 flex flex-col items-center">
          <h1 className="rounded  text-2xl font-bold mb-4 ">Biografía</h1>
          <div className="flex justify-center">
            <img
              src="https://www.cultura.gob.ar/media/uploads/xulmalba.jpg"
              className="rounded-md w-60 h-60"
            ></img>
          </div>
          <br />
          <div className="bg-gray- 1flex flex-col text-center">
            <br></br>
            <p className="text-justify w-[500px]">
              Xul Solar (Oscar Agustín Alejandro Sch ulz Solari, 1887-1963), es
              uno de los representantes más singulares de la vanguardia en
              América Latina. En 1912 partió rumbo a Europa, donde permaneció
              hasta 1924, residiendo en Italia y en Alemania y realizando
              frecuentes viajes a Londres y París. A su regreso, participo
              activamente de la renovación estética propuesta por el grupo
              editor del periódico Martin Fierro (1924-1927). Amigo de Jorge
              Luis Borges, ilustro varios de sus libros y colaboro en varios de
              sus emprendimientos editoriales como la Revista Multicolor de los
              Sábados y Destiempo.
            </p>
            <br />
            <p className="text-justify w-[500px]">
              De una vasta cultura, sus intereses lo llevaron al estudio de la
              astrología, la Cábala, el I Ching, la filosofía, las religiones y
              creencias del Antiguo Oriente, de la India y del mundo
              precolombino, además de la teosofía y antroposofía, entre muchas
              ramas del saber.
            </p>
            <br />
            <p className="text-justify w-[500px]">
              Se ocupó también de la creación de dos lenguajes artificiales -el
              neocriollo y la panlengua- y del panajedrez; propuso la
              modificación de la notación musical y del teclado de piano e ideó
              un teatro de títeres para adultos, entre muchas otras cosas.
            </p>
            <br></br>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Biography;
