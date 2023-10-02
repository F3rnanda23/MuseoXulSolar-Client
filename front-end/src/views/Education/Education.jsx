import backgroundImage from '../../imagenes/background/bg1.png'


const Education = () => {

    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <div className="flex flex-col min-h-screen" style={backgroundStyle}>
            <div className='flex flex-col items-center'>

                <h1 className='font-bold text-2xl mt-10 mb-4'>Archivo</h1>
                <div className='w-3/4 bg-gray-200 p-6 rounded-lg shadow-lg'>

                    <p className='text-justify text-lg text-gray-700'>La Fundación Pan Klub (FPK) - Museo Xul Solar fue creada en 1987 con el objetivo de preservar, estudiar y propiciar el conocimiento de la obra del artista argentino Alejandro Xul Solar (Oscar Agustín Alejandro Schulz Solari, 1887-1963).
                        Además del acervo de obras del artista, la FPK cuenta con el Archivo que proporciona documentación histórica de referencia.
                        Este Archivo no solo conserva el fondo producido por Xul Solar sino también aquellos producidos por su viuda, Micaela "Lita" Cadenas, por sus padres, Agustina Solari y Emilio Schulz Riga, por su tía, Clorinda Solari, y el fondo institucional de la FPK desde su creación.
                        A partir de 1998, por decisión de Elena Montero Lacasa de Povarché como presidenta de la Fundación, se procedió a la "apertura" del acervo documental y se dio comienzo a su organización bajo el cuidado de la Dra. Patricia Artundo.
                        Desde entonces, el Archivo se ha dedicado a la sistematización de sus fondos; a la realización de proyectos de investigación y a la difusión y activación de sus documentos a través de distintos programas e iniciativas. El proyecto Xul Solar. Catálogo razonado: obra completa es una muestra de ello.
                        Como parte de su misión de gestionar y conservar adecuadamente sus fondos y colecciones, a partir de 2019 se comenzó a trabajar en el proyecto Xul Solar: archivo documental, con el apoyo de Mecenazgo Cultural de la Ciudad de Buenos Aires con el objetivo de catalogar, digitalizar, y dar acceso a los documentos del fondo producido por Xul Solar entre 1887-1963, bajo normas archivísticas.
                        Así, se diseñó esta plataforma que pone a disposición del público la consulta online del fondo documental del artista, en vista a promover el estudio y conocimiento del artista y su obra en confluencia con la historia del arte local e internacional.
                    </p>
                    <br />
                    <a href="#" className='underline text-blue-700 font-bold'>Accede al archivo</a>
                </div>
            </div>

            {/* <div className={`fixed inset-0 flex items-center justify-center z-50 ${mostrarModal ? '' : 'hidden'}`}> */}
        <div className="fixed inset-0 bg-black opacity-50"></div> {/* Fondo semitransparente */}
        <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
          {/* Contenido del modal */}
          <div className="modal-content py-4 text-left px-6">
            {/* Título del modal */}
            <div className="flex justify-between items-center pb-3">
              <p className="text-2xl font-bold">Título del Modal</p>
              <button
                className="modal-close text-3xl"
                // onClick={toggleModal}
              >
                ×
              </button>
            </div>

            {/* Contenido del modal */}
            <p>Contenido del modal...</p>
          </div>
        </div>
      </div>

      
    )
};

export default Education;