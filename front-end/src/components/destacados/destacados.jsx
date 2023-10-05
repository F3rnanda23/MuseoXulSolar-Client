
const bibliografiaXul = 'https://res.cloudinary.com/dtsmy1ksn/image/upload/v1695950029/galeria/vncsttx6j1g3v14wrac8.jpg';
const biografiaXul = 'https://res.cloudinary.com/dtsmy1ksn/image/upload/v1695949852/galeria/bgavtii8pe6iheqeewrj.jpg';
const catalogoRazonado = 'https://res.cloudinary.com/dtsmy1ksn/image/upload/v1696206650/galeria/rvolp9usdkzoj0w3dlnp.jpg';
const coleccionPermanente = 'https://res.cloudinary.com/dtsmy1ksn/image/upload/v1696206554/galeria/io8tq3i5s1bojbosb3xy.jpg';
const educacion = 'https://res.cloudinary.com/dtsmy1ksn/image/upload/v1696209720/galeria/emagi5rjgdhux9rypmva.jpg';
const elMuseo = 'https://res.cloudinary.com/dtsmy1ksn/image/upload/v1696210268/galeria/y3rmuduygzqat9ej47uj.jpg';
const exposiciones = 'https://res.cloudinary.com/dtsmy1ksn/image/upload/v1696125897/galeria/zrgy3mlbpbv0txylobfq.jpg';
const testimonio = 'https://res.cloudinary.com/dtsmy1ksn/image/upload/v1696209779/galeria/mdait6ssmotnlvhk3ifo.png';
const firma6Xul = 'https://res.cloudinary.com/dtsmy1ksn/image/upload/v1696361321/galeria/firma6Xul_mmiu6y.png';
const firma10Xul = 'https://res.cloudinary.com/dtsmy1ksn/image/upload/v1696361412/galeria/firma10Xul_yazcya.png';
const firma9Xul = 'https://res.cloudinary.com/dtsmy1ksn/image/upload/v1696361468/galeria/firma9Xul_lzfgdg.png';
const firma8Xul = 'https://res.cloudinary.com/dtsmy1ksn/image/upload/v1696361534/galeria/firma8Xul_giue7i.png';
const firma11Xul = 'https://res.cloudinary.com/dtsmy1ksn/image/upload/v1696125879/galeria/ilsex3cczfevvfsvfupi.png';
const sillaXul = 'https://res.cloudinary.com/dtsmy1ksn/image/upload/v1696280072/galeria/bemkgbgfnai3qibjkma5.png';
const serpienteXulHoriz = 'https://res.cloudinary.com/dtsmy1ksn/image/upload/v1696361574/galeria/serpienteXulHoriz_robqqa.png';
const imagen1 = 'https://res.cloudinary.com/dtsmy1ksn/image/upload/v1696361670/galeria/imagen1_tjwyos.jpg';
const imagen3 = 'https://res.cloudinary.com/dtsmy1ksn/image/upload/v1696361709/galeria/imagen3_i0nj5g.jpg';
const imagen2 = 'https://res.cloudinary.com/dtsmy1ksn/image/upload/v1695652783/galeria/flfudmdr2qjpuhzfbccf.jpg';
const imagen4 = 'https://res.cloudinary.com/dtsmy1ksn/image/upload/v1696209742/galeria/inxwdmkkn9of7flv6xrx.jpg';
const imagen5 = 'https://res.cloudinary.com/dtsmy1ksn/image/upload/v1696260822/galeria/ubswxtscv0vcxuctxzmk.jpg';
const imagen6 = 'https://res.cloudinary.com/dtsmy1ksn/image/upload/v1695648203/galeria/uiwxgpezaohcvfg7xuog.jpg';
const imagen7 = 'https://res.cloudinary.com/dtsmy1ksn/image/upload/v1696279633/galeria/jnx999ene4ucerrhcxqz.jpg';
const imagen8 = 'https://res.cloudinary.com/dtsmy1ksn/image/upload/v1696210311/galeria/rfapx4km7gnvecoqabf7.jpg';
const imagen9 = 'https://res.cloudinary.com/dtsmy1ksn/image/upload/v1696210292/galeria/xkwlu8rogegac89jbwac.jpg';
const imagen10 = 'https://res.cloudinary.com/dtsmy1ksn/image/upload/v1696091464/galeria/wvet1kxscuusszu7pwvj.jpg';
const imagen11 = 'https://res.cloudinary.com/dtsmy1ksn/image/upload/v1695606546/galeria/jnv2v78iuccecbhqfcrr.png';
const firmasXul4 = 'https://res.cloudinary.com/dtsmy1ksn/image/upload/v1696362028/galeria/firmasXul4_b9nkyy.png';
import { FormattedMessage } from 'react-intl';

import { Link, useNavigate } from 'react-router-dom';




const Destacados = () => {

    const navigate = useNavigate();

    return (

        <div className=" w-full s:h-[3500px]  xl:h-[1700px]  " >

            <div className="grid bg-gray-200 s:grid-cols-1 mb-[1px]   xl:grid-cols-2 gap-0 xl:mb-[0px] mb-[-40px] ">

                <div className=" w-2/2 h-4/5 ">
                    <img src={firmasXul4} alt="Descripción de la imagen" className="w-full h-full" />
                </div>

                <div className=" w-2/2 h-4/5 hidden s:block xl:block">
                    <img src={firmasXul4} alt="Descripción de la imagen" className="w-full h-full" />
                </div>

            </div>




            <div className="w-full h-full grid  bg-gray-200  p-2  sm:grid-cols-1 xl:grid-cols-2 gap-0">

                <div className="  flex flex-cols  bg-gray-200  border-2 border-gray-200  shadow-2xl">

                    <div className="  w-2/3  w-full xl:h-[600px]">

                        <div className="sm:flex grid-cols-1  xl:flex grid-cols-2 gap-0  mb-[50px] mt-[50px] ">

                            <div className="sm:w-1/2 sm:h-2/2  xl:w-1/5  h-[150px]      xl:bg-gray-200 mt-[10px] ml-[20px] mr-[20px] shadow-2xl  ">
                                <figure className="shrink-0  w-full h-full  ">
                                    <img src={firma6Xul} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div>
                            <div className=" sm:w-2/2 sm:h-1/2 xl:w-3/4 h-[300px] flex flex-cols-2 justify-end bg-gray-200 shadow-2xl">
                                <figure className=" shrink-0  w-2/6 h-[250px]  mt-[15px] mr-[10px] border-gray-500 bg-gray-300 transform rotate-[-4deg] shadow-2xl">
                                    <img src={imagen1} alt="Descripción de la imagen" className=" w-full h-full transform rotate-[0deg] " />
                                </figure>

                                <figure className=" shrink-0  w-3/5 h-[300px]   mr-[10px] transform rotate-[-4deg] shadow-2xl">
                                    <Link to={'/Bibliografia'}>
                                        <a href="https://www.xulsolar.org.ar/bibliografia.html" className="relative group">
                                            <img src={bibliografiaXul} alt="Descripción de la imagen" className="  w-full h-full   object-cover transition-transform transform group-hover:scale-105   " />
                                            <p className="absolute bottom-0 w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-100 xl:opacity-0 group-hover:opacity-100">
                                                <FormattedMessage
                                                    id='destac.bibliografia'
                                                    defaultMessage='BIBLIOGRAFÍA' />
                                            </p>
                                        </a>
                                    </Link>
                                </figure>
                            </div>

                        </div>


                        <div className="sm:flex  grid-cols-1  xl:flex grid-cols-2  mt-[100px] ">
                            <div className=" w-3/4   xl:w-1/4 h-[430px] mt-[-90px] ml-[20px] bg-gray-300 shadow-2xl">
                                <figure className=" shrink-0  w-full h-full transform rotate-[3deg] ">
                                    <img src={imagen2} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div>


                            <div className="  sm:mt-[0px] xl:w-3/4 h-[370px] mt-[-50px] ml-[40px] flex flex-cols-2 justify-end shadow-2xl  ">

                                <figure className="shrink-0  w-4/6 h-[360px] mt-[10px] mr-[8px] rotate-[-5deg] shadow-2xl">
                                    <Link to={'/Collection'}>
                                        <a href='' className="relative group">
                                            <img src={coleccionPermanente} alt="Descripción de la imagen" className="w-full h-full  object-cover transition-transform transform group-hover:scale-105" />
                                            <p className="absolute bottom-0 w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-100 xl:opacity-0 group-hover:opacity-100">
                                                <FormattedMessage
                                                    id='destac.coleccion'
                                                    defaultMessage='COLECCIÓN PERMANENTE' />
                                            </p>
                                        </a>

                                    </Link>
                                </figure>

                                <figure className=" shrink-0  w-2/6 h-[350px] mt-[-8px] transform rotate-[-5deg] bg-gray-300 shadow-2xl">
                                    <img src={imagen3} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div>

                        </div>

                    </div>

                    <div className="flex hidden md:block    xl:w-1/5 h-6/6 justify-center items-center ml-[20px] mr-[20px]  ">
                        <figure className=" w-full h-full bg-gray-200">
                            <img src={sillaXul} alt="Descripción de la imagen" className="w-full h-full  transform rotate-[5deg] " />
                        </figure>
                    </div>


                </div>





                <div className="  flex flex-col divide-y divide-gray  bg-gray-200  border-2 border-gray-200  shadow-2xl">

                    <div className="flex w-4/4 h-[220px] mr-[20px] mt-[20px] justify-center items-center ">
                        <figure className=" w-full h-full bg-gray-200">
                            <img src={serpienteXulHoriz} alt="Descripción de la imagen" className="w-full h-full  transform rotate-[-7deg] " />
                        </figure>
                    </div>


                    <div className="  w-2/3  w-full xl:h-[600px]">


                        <div className="sm:flex grid-cols-1  xl:flex grid-cols-2 gap-0 ">

                            <div className="sm:w-1/2 sm:h-2/2  xl:w-2/5 h-[400px] mt-[0px] ml-[30px] mr-[30px] flex flex-col divide-y divide-gray justify-end shadow-2xl ">
                                <figure className="shrink-0  w-5/5 h-[230px] mt-[0px] mr-[20px] mb-[10px] shadow-2xl">
                                    <Link to='/catalogoRazonado'>
                                        <a href="" className="relative group">
                                            <img src={catalogoRazonado} alt="Descripción de la imagen" className="w-full h-full  transform rotate-[2deg] object-cover transition-transform transform group-hover:scale-105" />
                                            <p className="absolute bottom-0 w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-100 xl:opacity-0 group-hover:opacity-100">
                                                <FormattedMessage
                                                    id='destac.catalogo'
                                                    defaultMessage='CATÁLOGO RAZONADO' /></p>
                                        </a>
                                    </Link>
                                </figure>

                                <figure className=" shrink-0  w-6/6 h-[150px] mt-[0px] ml-[0px]  bg-gray-300  transform rotate-[2deg] shadow-2xl">
                                    <img src={imagen4} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div>

                            <div className="sm:w-1/2 sm:h-2/2  xl:w-3/4 h-5/6 flex flex-cols-2 justify-end shadow-2xl">
                                <figure className=" shrink-0  w-2/6 h-[290px]  mt-[15px] mr-[10px] border-gray-500 bg-gray-200 transform rotate-[-4deg] shadow-2xl">
                                    <img src={imagen5} alt="Descripción de la imagen" className=" w-full h-full transform rotate-[0deg] " />
                                </figure>

                                <figure className=" shrink-0  w-3/5 h-[300px]   mr-[20px] transform rotate-[-4deg] shadow-2xl">
                                    <Link to={'/Biography'}>
                                        <a href="https://client-xul-solar.vercel.app/Biography" className="relative group">
                                            <img src={biografiaXul} alt="Descripción de la imagen" className=" relative w-full h-full  object-cover transition-transform transform group-hover:scale-105" />
                                            <p className="absolute bottom-0 w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-100 xl:opacity-0 group-hover:opacity-100">
                                                <FormattedMessage
                                                    id='destac.biografiaxul'
                                                    defaultMessage='BIOGRAFÍA XUL SOLAR' /></p>
                                        </a>
                                    </Link>
                                </figure>
                            </div>


                        </div>

                        <div className="sm:flex  grid-cols-1  xl:flex grid-cols-2   mt-[-50px]">

                            <div className="w-1/4  h-[110px]   bg-gray-200 mt-[80px] ml-[50px] mr-[20px] shadow-2xl">
                                <figure className="shrink-0  w-full h-full   ">
                                    <img src={firma9Xul} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div>

                            <div className=" w-3/6 h-[200px] mt-[-15px] ml-[100px] bg-gray-200  shadow-2xl">
                                <figure className=" shrink-0  w-full h-full transform rotate-[4deg] ">
                                    <img src={imagen6} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div>
                        </div>


                    </div>

                </div>





                <div className="  flex flex-col divide-y divide-gray  bg-gray-200 border-2 border-gray-200  shadow-2xl ">


                    <div className="  w-2/3  w-full xl:h-[600px] ">

                        <div className="sm:flex grid-cols-1  xl:flex grid-cols-2 gap-0  mb-[50px] mt-[30px]">

                            <div className=" sm:flex grid-cols-1 sm:w-2/2  xl:w-2/5 xl:h-[500px] mt-[0px] ml-[20px] mr-[30px] xl:flex xl:flex-col xl:divide-y divide-gray justify-end shadow-2xl ">

                                <figure className="  shrink-0 sm:w-2/4 md:w-3/6 h-[300px] xl:w-5/6 xl:h-[300px] mt-[0px] mr-[10px]  mb-[10px] transform rotate-[2deg] shadow-2xl">
                                    <Link to={'/Esposiciones'}>
                                        <a href="https://client-xul-solar.vercel.app/Esposiciones" className="relative group">
                                            <img src={exposiciones} alt="Descripción de la imagen" className="w-full h-full  object-cover transition-transform transform group-hover:scale-105" />
                                            <p className="absolute bottom-0 w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-100 xl:opacity-0 group-hover:opacity-100">
                                                <FormattedMessage
                                                    id='destac.exposiciones'
                                                    defaultMessage='EXPOSICIONES' /></p>
                                        </a>
                                    </Link>
                                </figure>

                                <figure className="shrink-0 sm:w-2/5 md:w-2/5 xl:w-5/6 xl:h-[150px] mt-[0px] ml-[2px]  bg-gray-300  transform rotate-[2deg] shadow-2xl">
                                    <img src={imagen8} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div>
                            <div className="flex w-1/3 h-2/3  xl:w-2/6  sm:mb-[100px] xl:h-[110px]   xl:bg-gray-200 xl:mt-[-5px] ml-[40px] mr-[20px] shadow-2xl">
                                <figure className="shrink-0  w-full h-full transform rotate-[20deg]  ">
                                    <img src={firma11Xul} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div>

                        </div>


                        <div className="sm:flex  grid-cols-1  xl:flex grid-cols-2 ">

                            <div className=" w-1/4 h-[80px] mt-[-30px] ml-[130px] bg-gray-200 shadow-2xl">
                                <figure className=" shrink-0  w-full h-full rotate-[15deg]  ">
                                    <img src={firma10Xul} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div>

                            <div className="w-3/3 h-1/5 sm:mt-[0px]  xl:w-3/5 xl:h-[370px] xl:mt-[-380px] ml-[70px] mr-[15px] flex flex-cols-2 justify-end shadow-2xl ">

                                <figure className="shrink-0 w-4/5 h-[300px]  xl:w-3/5 xl:h-[350px] mt-[10px] mr-[8px] transform  rotate-[-5deg] shadow-2xl">
                                    <Link to={'/Education'}>
                                        <a href="https://client-xul-solar.vercel.app/Education" className="relative group">
                                            <img src={educacion} alt="Descripción de la imagen" className=" w-full h-full   object-cover transition-transform transform group-hover:scale-105" />
                                            <p className="absolute bottom-0 w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-100 xl:opacity-0 group-hover:opacity-100 ">
                                                <FormattedMessage
                                                    id='destac.educacion'
                                                    defaultMessage='EDUCACIÓN' /></p>
                                        </a>
                                    </Link>
                                </figure>

                                <figure className=" shrink-0  w-2/6 h-[350px] mt-[-8px]  rotate-[-5deg] bg-gray-200 shadow-2xl">
                                    <img src={imagen7} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div>

                        </div>

                    </div>

                    <div className="flex w-4/4 h-[220px] ml-[10px] mt-[20px] justify-center items-center  ">
                        <figure className=" w-full h-full bg-gray-200 ">
                            <img src={serpienteXulHoriz} alt="Descripción de la imagen" className="w-full h-full  transform rotate-[3deg] " />
                        </figure>
                    </div>

                </div>




                <div className="  flex flex-cols bg-gray-200 border-2 border-gray-200  shadow-2xl">

                    <div className="flex hidden md:block xl:w-1/5 h-6/6 justify-center items-center ml-[20px] mr-[20px]  ">
                        <figure className=" w-full h-full bg-gray-200">
                            <img src={sillaXul} alt="Descripción de la imagen" className="w-full h-full  transform rotate-[-5deg] " />
                        </figure>
                    </div>

                    <div className="  w-2/3  w-full xl:h-[600px]">

                        <div className="sm:flex grid-cols-1  xl:flex grid-cols-2 gap-0  mt-[30px] mr-[30px]">

                            <div className=" w-3/3 xl:w-3/4 h-5/6 flex flex-cols-2 justify-end bg-gray-200 shadow-2xl">
                                <figure className=" shrink-0  w-2/6 h-[250px]  mt-[15px] mr-[10px] border-gray-500 bg-gray-300 transform rotate-[1deg] shadow-2xl">
                                    <img src={imagen11} alt="Descripción de la imagen" className=" w-full h-full transform rotate-[4deg] " />
                                </figure>

                                <figure className=" shrink-0  w-3/5 h-[300px]   mr-[10px] transform rotate-[4deg] shadow-2xl">
                                    <Link to={'/Museum'}>

                                        <a href="https://client-xul-solar.vercel.app/Museum" className="relative group">
                                            <img src={elMuseo} alt="Descripción de la imagen" className="w-full h-full  object-cover transition-transform transform group-hover:scale-105" />
                                            <p className="absolute bottom-0 w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-100 xl:opacity-0 group-hover:opacity-100">
                                                <FormattedMessage
                                                    id='destac.elmuseo'
                                                    defaultMessage='EL MUSEO' /></p>
                                        </a>
                                    </Link>
                                </figure>
                            </div>

                            <div className="w-3/3 xl:w-1/4  h-[150px]   bg-gray-200  ml-[20px] mr-[20px] mt-[20px] shadow-2xl">
                                <figure className="shrink-0  w-full h-full  transform rotate-[14deg] ">
                                    <img src={firma8Xul} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div>

                        </div>


                        <div className="sm:flex grid-cols-1  xl:flex grid-cols-2 gap-0 mt-[100px] ml-[10px]  ">

                            <div className="w-3/3 xl:w-4/6 h-[400px] mt-[-40px] ml-[30px] flex flex-cols-2 justify-end shadow-2xl ">

                                <figure className="shrink-0  w-3/5 h-[390px] mt-[10px] ml-[40px] mr-[10px]  transform rotate-[-5deg] shadow-2xl">

                                    <Link to={'/Testimonios'}>
                                        <a href="https://client-xul-solar.vercel.app/testimonios" className="relative group">
                                            <img src={testimonio} alt="Descripción de la imagen" className="w-full h-full  object-cover transition-transform transform group-hover:scale-105" />
                                            <p className="absolute bottom-0 w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-100 xl:opacity-0 group-hover:opacity-100">
                                                <FormattedMessage
                                                    id='destac.testimonio'
                                                    defaultMessage='TESTIMONIO' /></p>
                                        </a>
                                    </Link>
                                </figure>

                                <figure className=" shrink-0  w-2/6 h-[350px] mt-[-8px] mr-[35px] transform rotate-[-5deg] bg-gray-300 shadow-2xl">
                                    <img src={imagen10} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div>

                            <div className="w-2/3 h-1/4 xl:w-1/4 xl:h-[430px] xl:mt-[-100px] ml-[10px] bg-gray-200 shadow-2xl">
                                <figure className=" shrink-0  w-full h-full transform rotate-[1deg]">
                                    <img src={imagen9} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div>

                        </div>

                    </div>

                </div>

            </div>



            <div className="grid bg-gray-200 mt-[-10px] sm:grid-cols-1 xl:grid-cols-2 gap-0  bg-gray-200 ">

                <div className=" w-6/6 h-4/5  ">
                    <img src={firmasXul4} alt="Descripción de la imagen" className="w-full h-full" />
                </div>

                <div className=" w-6/6 h-4/5  hidden s:block xl:block">
                    <img src={firmasXul4} alt="Descripción de la imagen" className="w-full h-full" />
                </div>

            </div>



        </div>


    )

};

export default Destacados;



