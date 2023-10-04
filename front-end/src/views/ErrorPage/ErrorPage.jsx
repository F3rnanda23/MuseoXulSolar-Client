import img from '../../imagenes/actividades/error.png'
import backgroundImage from '../../imagenes/background/bg1.png'

const ErrorPage = () => {

    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      
      };

      

    return ( 
        <div className="flex flex-col items-center justify-center h-screen" style={backgroundStyle}>
           <h3 className='font-semibold text-xl mb-5'>Esta pagina no existe, por favor vuelve a la página de inicio</h3>
           <img src={img} alt="Error" />
        </div>
     );
}
 
export default ErrorPage;