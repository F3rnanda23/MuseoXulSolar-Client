import elmuseo from "../../imagenes/destacados/elMuseo.jpg";

const Museum = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center">
          <h1 className="flex justify-center items-center">El Museo</h1>
          <br />
          <img src={elmuseo} className="w-60 h-60"></img>
          <p className="text-center">
            La Fundación Pan Klub Museo Xul Solar es una institución dedicada a
            preservar y difundir la obra del artista argentino Alejandro Xul
            Solar y tiene como objetivo desarrollar y promocionar la cultura en
            sus diversos aspectos. Fue creada en 1986 por Micaela (Lita)
            Cadenas, su esposa, y por Natalio J. Povarché, marchand de Xul
            Solar, quienes deciden fundarla respetando los planes originales del
            creador, a manera como éste había concebido el Pan Klub a fines de
            los años 1930.
          </p>
          <img src={elmuseo} className="w-60 h-60"></img>
          <br />
          <p className="text-center">
            Se inauguró el 13 de abril de 1993 con las obras seleccionadas por
            el mismo Xul Solar y que son además, las que componen la muestra
            permanente del Museo, junto con objetos, esculturas y documentos que
            pertenecen a su archivo personal. Este mismo espacio funciona como
            centro cultural donde se realizan eventos culturales y exposiciones
            temporales dedicadas al artista. Asimismo, la Fundación conserva la
            vivienda personal del artista que guarda su biblioteca de
            aproximadamente 3.500 volúmenes.
          </p>
          <img src={elmuseo} className="w-60 h-60"></img>
          <br />
          <p className="text-center">
            El proyecto de la remodelación de la casa de Xul, transformada en el
            actual museo recibió varios premios. Entre ellos en el año 1998
            salió calificado semifinalista en el Premio Mies van der Rohe para
            América Latina, cuyo fin es premiar a la arquitectura
            Latinoamericana contemporánea y en 2003, obtuvo el Premio Década
            2003, otorgado por la Universidad de Palermo y que contó como jurado
            al Arq. Oscar Tusquets Blanca.
          </p>
            <img src={elmuseo} className="w-60 h-60"></img>
          <br />
          <p className="text-center">
            En la actualidad, la presidente de la Fundación Pan Klub, Elena
            Montero Lacasa de Povarché, sigue fortaleciendo el proyecto con el
            fin de establecer y continuar el pensamiento original de la
            Fundación, como así también seguir el pensamiento de Xul Solar:
            “querer que este mundo sea mejor para constituir una sociedad en
            armonía”.
          </p>
          <img src={elmuseo} className=" w-60 h-60"></img>
        </div>
      </div>
    </div>
  );
};

export default Museum;
