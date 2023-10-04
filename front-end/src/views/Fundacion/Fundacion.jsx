import imagenbg from "../../imagenes/background/bg1.png";

const Fundacion = () => {
  const backgroundStyle = {
    backgroundImage: `url(${imagenbg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="min-h-screen flex flex-col items-center" style={backgroundStyle}>
        <h1 className="text-center rounded-full  font-bold mb-4 mt-5 bg-gray-300 w-[850px]">Fundación Pan Klub</h1>
        <div className="rounded-lg p-6 w-[900px]">
          <p className="text-lg text-gray-700 text-center">
            Fundación Pan Klub Museo Xul Solar es una institución dedicada a
            preservar y difundir la obra del artista argentino Alejandro Xul
            Solar, y tiene como objetivo desarrollar y promocionar la cultura en
            sus diversos aspectos. Fue creada en 1986 por Micaela (Lita)
            Cadenas; su esposa y por Natalio J. Povarché; marchand de Xul Solar,
            quienes decidieron fundarla respetando los planes originales del
            creador, tal como este había concebido el Pan Klub a fines de los
            años 1930. En la actualidad, la Fundación Pan Klub sigue afianzando
            el proyecto de establecer y continuar el pensamiento de Xul Solar:
            querer que este mundo sea mejor para constituir una sociedad en
            armonía.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fundacion;
