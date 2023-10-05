const elMuseo =
  "https://res.cloudinary.com/dtsmy1ksn/image/upload/v1696210268/galeria/y3rmuduygzqat9ej47uj.jpg";

import imagenbg from "../../imagenes/background/bg1.png";
import { FormattedMessage } from 'react-intl';
//aaasad
const Museum = () => {
  const backgroundStyle = {
    backgroundImage: `url(${imagenbg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div>
      <div className="flex flex-col" >
        <div className=" flex flex-col justify-center items-center mb-5">
          <div className="rounded-full bg-gray-200 w-[800px] mt-8">
            <h1 className="flex justify-center items-center text-2xl font-semibold">
              <FormattedMessage
                id='footer.museo'
                defaultMessage='El Museo'
              />
            </h1>
          </div>
          <br />
          <div className="bg-gray-100 rounded-md">
            <div className=" w-[800px] flex flex-row items-center ">
              <p className="text-justify flex-grow mx-4">
                <FormattedMessage
                  id='fundacion.texto'
                  defaultMessage='La Fundación Pan Klub Museo Xul Solar es una institución dedicada a preservar y difundir la obra del artista argentino Alejandro Xul Solar y tiene como objetivo desarrollar y promocionar la cultura en sus diversos aspectos. Fue creada en 1986 por Micaela (Lita) Cadenas, su esposa, y por Natalio J. Povarché, marchand de Xul Solar, quienes deciden fundarla respetando los planes originales del creador, a manera como éste había concebido el Pan Klub a fines de los años 1930.'
                />
              </p>
              <img
                src={elMuseo}
                className="w-60 h-60 ml-4 mt-4 mr-4"
                alt="Imagen 1"
              ></img>
            </div>
            <br />
            <div className="w-[800px] flex flex-row items-center">
              <p className="text-justify  flex-grow mx-4">
                <FormattedMessage
                  id='arquitectura.texto1'
                  defaultMessage='El museo se inauguró el 13 de abril de 1993 con las obras seleccionadas por el mismo Xul Solar y que son además, las que componen la muestra permanente del Museo, junto con objetos, esculturas y documentos que pertenecen a su archivo personal.'
                />
                <FormattedMessage
                  id='arquitectura.texto2'
                  defaultMessage='Este mismo espacio conserva su vivienda personal con la biblioteca de aproximadamente 3.500 volúmenes; y funciona como centro cultural donde se realizan diversos eventos y exposiciones temporales dedicadas a difundir su obra.'
                />
              </p>
            </div>
            <br />
            <div className="w-[800px] flex flex-row items-center">
              <p className="text-justify flex-grow mx-4">
              <FormattedMessage
                  id='arquitectura.texto3'
                  defaultMessage='Asimismo, la Fundación conserva la casa que el artista compró en Tigre en 1954; a la que denominó “Li-Tao”, una conjunción entre el apodo de su compañera, Lita, y la palabra china Tao. Allí proyecto los ambientes, fabricó los muebles, diseñó los espacios exteriores, creando, alrededor de su casa, un bosque de Taxodium, Ciruelos y Casuarias'
                />
              </p>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Museum;
