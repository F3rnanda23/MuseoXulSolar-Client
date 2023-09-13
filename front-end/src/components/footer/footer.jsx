import logofooter from '../../imagenes/footer/logofooter.png';

const Footer = () => {
    return (

        <div className="bg-gray-100 h-1/2 w-screen mt-20">
            <div className="h-1/3 flex flex-row items-center justify-center">
                <img src={logofooter} alt="Xul Solar" className="h-full w-1/8 mx-2"/>
        <p className="text-xs text-center mr-10 ml-5 bg-slate-300">Fundación Pan Klub - Museo Xul Solar
Como única titular de los derechos de propiedad intelectual (Ley 11.723)
 sobre toda la obra de Alejandro Xul Solar (Oscar Agustín Alejandro Schulz Solari),
  advierte que es la única que puede autorizar su reproducción por cualquier medio o 
  soporte y otorgar certificados de autenticidad sobre la misma.Para informes, dirigirse a: 
  Laprida 1212, CABA (011) 4824-3302/4821-5378</p>
            </div>
        </div>
    )
}

export default Footer;