import elmuseo from "../../imagenes/destacados/elMuseo.jpg";

import imagenbg from "../../imagenes/background/bg1.png";
//aa
const Museum = () => {
  const backgroundStyle = {
    backgroundImage: `url(${imagenbg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div>
      <div className="flex flex-col" style={backgroundStyle}>
        <div className=" flex flex-col justify-center items-center">
          <div className="rounded-full bg-gray-200 w-[800px] mt-8">
            <h1 className="flex justify-center items-center">El Museo</h1>
          </div>
          <br />
          <div className="bg-gray-100 rounded-md">
            <div className=" w-[800px] flex flex-row items-center">
              <p className="text-justify text-right flex-grow mx-4">
                La Fundación Pan Klub Museo Xul Solar es una institución
                dedicada a preservar y difundir la obra del artista argentino
                Alejandro Xul Solar y tiene como objetivo desarrollar y
                promocionar la cultura en sus diversos aspectos. Fue creada en
                1986 por Micaela (Lita) Cadenas, su esposa, y por Natalio J.
                Povarché, marchand de Xul Solar, quienes deciden fundarla
                respetando los planes originales del creador, a manera como éste
                había concebido el Pan Klub a fines de los años 1930.
              </p>
              <img
                src={elmuseo}
                className="w-60 h-60 ml-4 mt-4"
                alt="Imagen 1"
              ></img>
            </div>
            <br />
            <div className="w-[800px] flex flex-row items-center">
              <img
                src={elmuseo}
                className="w-60 h-60 mr-4 mt-4"
                alt="Imagen 2"
              ></img>
              <p className="text-justify text-left flex-grow mx-4">
                Se inauguró el 13 de abril de 1993 con las obras seleccionadas
                por el mismo Xul Solar y que son además, las que componen la
                muestra permanente del Museo, junto con objetos, esculturas y
                documentos que pertenecen a su archivo personal. Este mismo
                espacio funciona como centro cultural donde se realizan eventos
                culturales y exposiciones temporales dedicadas al artista.
                Asimismo, la Fundación conserva la vivienda personal del artista
                que guarda su biblioteca de aproximadamente 3.500 volúmenes.
              </p>
            </div>
            <br />
            <div className="w-[800px] flex flex-row items-center">
              <p className="text-justify text-right flex-grow mx-4">
                El proyecto de la remodelación de la casa de Xul, transformada
                en el actual museo recibió varios premios. Entre ellos en el año
                1998 salió calificado semifinalista en el Premio Mies van der
                Rohe para América Latina, cuyo fin es premiar a la arquitectura
                Latinoamericana contemporánea y en 2003, obtuvo el Premio Década
                2003, otorgado por la Universidad de Palermo y que contó como
                jurado al Arq. Oscar Tusquets Blanca.
              </p>
              <img
                src={elmuseo}
                className="w-60 h-60 ml-4 mt-4"
                alt="Imagen 3"
              ></img>
            </div>
            <br />
            <div className=" w-[800px] flex flex-row items-center">
              <img
                src={elmuseo}
                className="w-60 h-60 mr-4 mt-4"
                alt="Imagen 4"
              ></img>
              <p className="text-justify text-left flex-grow mx-4">
                En la actualidad, la presidente de la Fundación Pan Klub, Elena
                Montero Lacasa de Povarché, sigue fortaleciendo el proyecto con
                el fin de establecer y continuar el pensamiento original de la
                Fundación, como así también seguir el pensamiento de Xul Solar:
                “querer que este mundo sea mejor para constituir una sociedad en
                armonía”.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Museum;
