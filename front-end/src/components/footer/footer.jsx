import logofooter from '../../imagenes/footer/logosfooter.png';

const Footer = () => {
    return (

        <footer className="bg-gray-100 h-1/2  mt-20">
            <div className="h-1/3 flex flex-row items-center justify-center">

                <img src={logofooter} alt="Xul Solar" className="h-full w-1/8 mx-2" />
                <p className="text-s text-center mr-10 ml-5 bg-slate-300 font-extralight">Fundación Pan Klub - Museo Xul Solar
                    Como única titular de los derechos de propiedad intelectual (Ley 11.723)
                    sobre toda la obra de Alejandro Xul Solar (Oscar Agustín Alejandro Schulz Solari),
                    advierte que es la única que puede autorizar su reproducción por cualquier medio o
                    soporte y otorgar certificados de autenticidad sobre la misma.Para informes, dirigirse a:
                    Laprida 1212, CABA (011) 4824-3302/4821-5378</p>

            </div>


            <div className="flex flex-row ml-20 mt-7">

  <div className="flex flex-col w-1/4">
    <h5 className="text-orange-200">El Museo</h5>
    <a href="#">Biografía</a>
    <a href="#">Visión y Misión</a>
    <a href="#">Tienda</a>

    <h5 className="text-orange-200">Redes Sociales</h5>
  </div>

  <div className="flex flex-col w-1/4">
    <h5 className="text-orange-200">Secciones</h5>
    <a href="#">Horarios y Visitas</a>
    <a href="#" >Actividades</a>
    <a href="#" >Eventos</a>
    <a href="#" >Patrocinios</a>
   </div>
  <div className="flex flex-col w-1/4">
    <h5 className="text-orange-200">Contacto</h5>
    <h5 >Correo</h5>

    <h5 >Telefono</h5>
  </div>
  <div className="flex flex-col w-1/4">
    <h5 className="text-orange-200">Te ayudo</h5>
    <a href="#">Preguntas Frecuentes</a>
    <h5 className="text-orange-200">Direccion</h5>
    <h5>Laprida 1212, C1425EKF CABA, Argentina</h5>
    
  </div>
</div>
            
        </footer>
        
    )
}

export default Footer;