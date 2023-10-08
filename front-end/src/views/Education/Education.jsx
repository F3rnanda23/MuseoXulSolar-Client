import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';


const Education = () => {

  const navigate = useNavigate();
  const [mostrarModal, setMostrarModal] = useState(false);

  const toggleModal = () => {
    setMostrarModal(!mostrarModal);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMostrarModal(true);
    }, 4500);

    return () => clearTimeout(timeout);
  }, [])



  return (
    <div className="flex flex-col min-h-screen">
      <div className='flex flex-col items-center'>

        <h1 className='font-bold text-2xl mt-10 mb-4'>
          <FormattedMessage
            id='archivo.titulo'
            defaultMessage='Archivo'
          /></h1>
        <div className='w-3/4 bg-gray-200 p-6 rounded-lg shadow-lg'>

          <p className='text-justify text-lg text-gray-700'>
            <FormattedMessage
              id='archivo.texto1'
              defaultMessage='La Fundación Pan Klub (FPK) - Museo Xul Solar fue creada en 1987 con el objetivo de preservar, estudiar y propiciar el conocimiento de la obra del artista argentino Alejandro Xul Solar (Oscar Agustín Alejandro Schulz Solari, 1887-1963). '
            />
            <FormattedMessage
              id='archivo.texto2'
              defaultMessage='Además del acervo de obras del artista, la FPK cuenta con el Archivo que proporciona documentación histórica de referencia.'
            />
            <FormattedMessage
              id='archivo.texto3'
              defaultMessage=' Este Archivo no solo conserva el fondo producido por Xul Solar sino también aquellos producidos por su viuda, Micaela "Lita" Cadenas, por sus padres, Agustina Solari y Emilio Schulz Riga, por su tía, Clorinda Solari, y el fondo institucional de la FPK desde su creación. '
            />
            <FormattedMessage
              id='archivo.texto4'
              defaultMessage=' A partir de 1998, por decisión de Elena Montero Lacasa de Povarché como presidenta de la Fundación, se procedió a la "apertura" del acervo documental y se dio comienzo a su organización bajo el cuidado de la Dra. Patricia Artundo.'
            />
            <FormattedMessage
              id='archivo.texto5'
              defaultMessage=' Desde entonces, el Archivo se ha dedicado a la sistematización de sus fondos; a la realización de proyectos de investigación y a la difusión y activación de sus documentos a través de distintos programas e iniciativas. El proyecto Xul Solar. Catálogo razonado: obra completa es una muestra de ello.'
            />
            <FormattedMessage
              id='archivo.texto6'
              defaultMessage=' Como parte de su misión de gestionar y conservar adecuadamente sus fondos y colecciones, a partir de 2019 se comenzó a trabajar en el proyecto Xul Solar: archivo documental, con el apoyo de Mecenazgo Cultural de la Ciudad de Buenos Aires con el objetivo de catalogar, digitalizar, y dar acceso a los documentos del fondo producido por Xul Solar entre 1887-1963, bajo normas archivísticas.'
            />
            <FormattedMessage
              id='archivo.texto7'
              defaultMessage=' Así, se diseñó esta plataforma que pone a disposición del público la consulta online del fondo documental del artista, en vista a promover el estudio y conocimiento del artista y su obra en confluencia con la historia del arte local e internacional.'
            />
          </p>
          <br />
          <a href="#" className='underline text-blue-700 font-bold'>
            <FormattedMessage
              id='archivo.link'
              defaultMessage='Link al archivo'
            /></a>
        </div>
      </div>

      <div className='flex flex-col items-center'>

        <h1 className='font-bold text-2xl mt-10 mb-4'>
          <FormattedMessage
            id='educacion.titulo'
            defaultMessage='Educación'
          /></h1>
        <div className='w-3/4 bg-gray-200 p-6 rounded-lg shadow-lg mb-5'>

          <p className='text-justify text-lg text-gray-700'>
            <FormattedMessage
              id='educacion.texto1'
              defaultMessage=' El interés que las instituciones educativas han mostrado por la obra de Xul, llevó a la Fundación Pan Klub- Museo Xul Solar a pensar un proyecto que sea el nexo entre las escuelas y el Museo.'
            />
            <FormattedMessage
              id='educacion.texto2'
              defaultMessage=' Esta propuesta nace precisamente de aquella inquietud. La Fundación, que tiene por misión difundir la obra de Xul y su pensamiento universalista, concibe al arte como una forma de construir valores estéticos, reflexivos e inclusivos que colaboren en la educación para la paz.'
            />
            <FormattedMessage
              id='educacion.texto3'
              defaultMessage=' Esta sección es, pues, una invitación pedagógica que puede ser utilizada como instrumento de aproximación e intercambio entre la Escuela y el Museo, dirigida tanto a docentes como a padres, con el fin de acercar a los alumnos a la obra del artista.'
            />
            <FormattedMessage
              id='educacion.texto4'
              defaultMessage=' La Fundación Pan Klub cree, al igual que lo hacía Xul, que el aprendizaje implica una construcción dialogada, capaz de estimular la curiosidad que lleva a la investigación y profundización del conocimiento. Este es el objetivo del área de educación: aumentar el interés y suscitar preguntas que lleven a la investigación, de cada docente, padre y niño que nos visiten. Esperamos que este espacio los ayude a descubrir a este maravilloso artista que es Xul Solar.'
            />
          </p>


          <h2 className='font-bold text-xl mt-10 mb-4'>
            <FormattedMessage
              id='educacion.maestros'
              defaultMessage='Introducción Para Maestros Y Docentes'
            /></h2>
          <a href="https://www.xulsolar.org.ar/img/educacion/Pan%20Klub-Museo%20Xul%20Solar-02-Introduccion%20para%20maestros%20y%20docentes.pdf" className='underline text-blue-700 font-bold'>
            <FormattedMessage
              id='archivo.link'
              defaultMessage='Link al archivo'
            /></a>

          <h2 className='font-bold text-xl mt-10 mb-4'>
            <FormattedMessage
              id='educacion.xul'
              defaultMessage='Xul Y Su Tiempo'
            /></h2>
          <a href="https://www.xulsolar.org.ar/img/educacion/Pan%20Klub-Museo%20Xul%20Solar-03-Xul%20y%20su%20tiempo%20-%20Biografia.pdf" className='underline text-blue-700 font-bold'>
            <FormattedMessage
              id='archivo.link'
              defaultMessage='Link al archivo'
            /></a>

          <h2 className='font-bold text-xl mt-10 mb-4'>
            <FormattedMessage
              id='educacion.intereses'
              defaultMessage='Xul Y Sus Diversos Intereses'
            /></h2>
          <a href="https://www.xulsolar.org.ar/img/educacion/Pan%20Klub-Museo%20Xul%20Solar-04-Xul%20y%20sus%20diversos%20intereses.pdf" className='underline text-blue-700 font-bold'>
            <FormattedMessage
              id='archivo.link'
              defaultMessage='Link al archivo'
            /></a>

          <h2 className='font-bold text-xl mt-10 mb-4'>
            <FormattedMessage
              id='educacion.comprender'
              defaultMessage='Para Comprender La Obra De Xul'
            /></h2>
          <a href="https://www.xulsolar.org.ar/img/educacion/Pan%20Klub-Museo%20Xul%20Solar-05-Para%20comprender%20la%20obra%20de%20Xul.pdf" className='underline text-blue-700 font-bold'><FormattedMessage
            id='archivo.link'
            defaultMessage='Link al archivo'
          /></a>

          <h2 className='font-bold text-xl mt-10 mb-4'>
            <FormattedMessage
              id='educacion.tecnicas'
              defaultMessage='Técnicas Pictóricas Y Soportes'
            /></h2>
          <a href="https://www.xulsolar.org.ar/img/educacion/Pan%20Klub-Museo%20Xul%20Solar-06-Tecnicas%20pictoricas%20y%20soportes%20en%20la%20obra%20de%20Xul.pdf" className='underline text-blue-700 font-bold'><FormattedMessage
            id='archivo.link'
            defaultMessage='Link al archivo'
          /></a>

          <h2 className='font-bold text-xl mt-10 mb-4'>
            <FormattedMessage
              id='educacion.material'
              defaultMessage='Material Para Educación Inicial'
            /></h2>
          <a href="https://www.xulsolar.org.ar/img/educacion/Pan%20Klub-Museo%20Xul%20Solar-07-Material%20para%20educacion%20inicial.pdf" className='underline text-blue-700 font-bold'>
            <FormattedMessage
              id='archivo.link'
              defaultMessage='Link al archivo'
            /></a>
        </div>
      </div>


      <div className={`fixed inset-0 flex items-center justify-center z-50 ${mostrarModal ? '' : 'hidden'}`}>
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">

          <div className="modal-content py-4 text-center px-6">

            <div className="flex justify-between items-center pb-3">
              <p className="text-2xl font-bold">
                <FormattedMessage
                  id='educacion.tag'
                  defaultMessage='¿Te gustaría apoyar al museo?'
                /></p>
              <button
                className="modal-close text-3xl"
                onClick={toggleModal}
              >
                ×
              </button>
            </div>

            <p>
              <FormattedMessage
                id='educacion.tagtext'
                defaultMessage='El archivo requiere de esfuerzo y tu aporte es muy importante para poder continuar manteniendolo.'
              />
            </p>
            <button className="inline-block w-24 mt-2 mb-2 md:mb-0 md:w-32 lg:w-36 h-10 md:h-11 text-gray-100 bg-orange-200 bg-opacity-80 rounded bg-primary-100 text-xs md:text-xs lg:text-sm font-bold uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border hover:border-orange-200 hover:scale-105  hover:bg-gray-100 hover:text-orange-200 hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
              onClick={() => navigate('/Donations')}
            >
              <FormattedMessage
                id='educacion.tagdona'
                defaultMessage='Hacé una donacion'
              /></button>
          </div>
        </div>
      </div>
    </div>

  )
};

export default Education;