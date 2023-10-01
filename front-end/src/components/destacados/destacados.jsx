
import  bibliografiaXul from '../../imagenes/destacados/bibliografiaXul.jpg';
import  biografiaXul from '../../imagenes/destacados/biografiaXul.jpg';
import  catalogoRazonado from '../../imagenes/destacados/catalogoRazonado.jpg';
import  coleccionPermanente from '../../imagenes/destacados/coleccionPermanente.jpg';
import  educacion from '../../imagenes/destacados/educacion.jpg';
import  elMuseo from '../../imagenes/destacados/elMuseo.jpg';
import  exposiciones from '../../imagenes/destacados/exposiciones.jpg';
import  testimonio from '../../imagenes/destacados/testimonio.jpg';
import  firma6Xul from '../../imagenes/destacados/firma6Xul.png';
import  firma10Xul from '../../imagenes/destacados/firma10Xul.png';
import  firma9Xul from '../../imagenes/destacados/firma9Xul.png';
import  firma8Xul from '../../imagenes/destacados/firma8Xul.png';
import  firma11Xul from '../../imagenes/destacados/firma11Xul.png';
import sillaXul from '../../imagenes/destacados/sillaXul.png';
import serpienteXulHoriz from '../../imagenes/destacados/serpienteXulHoriz.png';
import imagen1 from '../../imagenes/destacados/imagen1.jpg';
import imagen3 from '../../imagenes/destacados/imagen3.jpg';
import imagen2 from '../../imagenes/destacados/imagen2.jpg';
import imagen4 from '../../imagenes/destacados/imagen4.jpg';
import imagen5 from '../../imagenes/destacados/imagen5.jpg';
import imagen6 from '../../imagenes/destacados/imagen6.jpg';
import imagen7 from '../../imagenes/destacados/imagen7.jpg';
import imagen8 from '../../imagenes/destacados/imagen8.jpg';
import imagen9 from '../../imagenes/destacados/imagen9.jpg';
import imagen10 from '../../imagenes/destacados/imagen10.jpg';
import imagen11 from '../../imagenes/destacados/imagen11.png';
import firmasXul4 from '../../imagenes/destacados/firmasXul4.png';
import { FormattedMessage } from 'react-intl';




const Destacados = () =>{
    return(

        <div class=" w-full s:h-[3500px]  xl:h-[1700px]  " >

             <div class="grid bg-gray-200 s:grid-cols-1 mb-[1px]   xl:grid-cols-2 gap-0 xl:mb-[0px] mb-[-40px] ">

                <div class=" w-2/2 h-4/5 ">
                    <img src={firmasXul4} alt="Descripción de la imagen" className="w-full h-full" />
                </div>
                
                <div class=" w-2/2 h-4/5 hidden s:block xl:block">
                    <img src={firmasXul4} alt="Descripción de la imagen" className="w-full h-full" />
                </div>
                
             </div>




             <div className="w-full h-full grid  bg-gray-200  p-2  sm:grid-cols-1 xl:grid-cols-2 gap-0">
              
                <div class="  flex flex-cols  bg-gray-200  border-2 border-gray-200  shadow-2xl">

                    <div class="  w-2/3  w-full xl:h-[600px]">

                        <div class="sm:flex grid-cols-1  xl:flex grid-cols-2 gap-0  mb-[50px] mt-[50px] ">

                            <div class="sm:w-1/2 sm:h-2/2  xl:w-1/5  h-[150px]      xl:bg-gray-200 mt-[10px] ml-[20px] mr-[20px] shadow-2xl  ">
                                <figure class="shrink-0  w-full h-full  ">
                                            <img src={firma6Xul} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div>
                            <div class=" sm:w-2/2 sm:h-1/2 xl:w-3/4 h-[300px] flex flex-cols-2 justify-end bg-gray-200 shadow-2xl">
                                <figure class=" shrink-0  w-2/6 h-[250px]  mt-[15px] mr-[10px] border-gray-500 bg-gray-300 transform rotate-[-4deg] shadow-2xl">
                                     <img src={imagen1} alt="Descripción de la imagen" className=" w-full h-full transform rotate-[0deg] " />
                                </figure>

                                <figure class=" shrink-0  w-3/5 h-[300px]   mr-[10px] transform rotate-[-4deg] shadow-2xl">
                                    <a href="https://www.xulsolar.org.ar/bibliografia.html" className="relative group">
                                        <img src={bibliografiaXul} alt="Descripción de la imagen" className="  w-full h-full   object-cover transition-transform transform group-hover:scale-105   " />
                                        <p className="absolute bottom-0 w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-100 xl:opacity-0 group-hover:opacity-100">
                                            <FormattedMessage
                                            id='destac.bibliografia'
                                            defaultMessage='BIBLIOGRAFÍA'/>
                                            </p>
                                    </a>
                                </figure>
                            </div>

                        </div>


                        <div class="sm:flex  grid-cols-1  xl:flex grid-cols-2  mt-[100px] ">
                            <div class=" w-3/4   xl:w-1/4 h-[430px] mt-[-90px] ml-[20px] bg-gray-300 shadow-2xl">
                                <figure class=" shrink-0  w-full h-full transform rotate-[3deg] ">
                                    <img src={imagen2} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div>


                            <div class="  sm:mt-[0px] xl:w-3/4 h-[370px] mt-[-50px] ml-[40px] flex flex-cols-2 justify-end shadow-2xl  ">
                                
                                <figure class="shrink-0  w-4/6 h-[360px] mt-[10px] mr-[8px] rotate-[-5deg] shadow-2xl">
                                    <a href="https://www.xulsolar.org.ar/coleccion.html" className="relative group">
                                            <img src={coleccionPermanente} alt="Descripción de la imagen"   className="w-full h-full  object-cover transition-transform transform group-hover:scale-105"/>
                                        <p className="absolute bottom-0 w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-100 xl:opacity-0 group-hover:opacity-100">
                                        <FormattedMessage
                                            id='destac.coleccion'
                                            defaultMessage='COLECCIÓN PERMANENTE'/>
                                            </p>
                                    </a>
                                </figure>

                                <figure class=" shrink-0  w-2/6 h-[350px] mt-[-8px] transform rotate-[-5deg] bg-gray-300 shadow-2xl">
                                            <img src={imagen3} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div>   

                        </div>

                    </div> 

                    <div class="flex hidden md:block    xl:w-1/5 h-6/6 justify-center items-center ml-[20px] mr-[20px]  ">
                        <figure class=" w-full h-full bg-gray-200">
                          <img src={sillaXul} alt="Descripción de la imagen" className="w-full h-full  transform rotate-[5deg] " />
                        </figure>
                    </div>


                </div>





                <div class="  flex flex-col divide-y divide-gray  bg-gray-200  border-2 border-gray-200  shadow-2xl">

                    <div class="flex w-4/4 h-[220px] mr-[20px] mt-[20px] justify-center items-center ">
                        <figure class=" w-full h-full bg-gray-200">
                            <img src={serpienteXulHoriz} alt="Descripción de la imagen" className="w-full h-full  transform rotate-[-7deg] " />
                        </figure>
                    </div>


                    <div class="  w-2/3  w-full xl:h-[600px]">


                        <div class="sm:flex grid-cols-1  xl:flex grid-cols-2 gap-0 ">
                
                            <div class="sm:w-1/2 sm:h-2/2  xl:w-2/5 h-[400px] mt-[0px] ml-[30px] mr-[30px] flex flex-col divide-y divide-gray justify-end shadow-2xl ">
                                <figure class="shrink-0  w-5/5 h-[230px] mt-[0px] mr-[20px] mb-[10px] shadow-2xl">
                                    <a href="https://www.xulsolar.org.ar/catalogo.html" className="relative group">
                                        <img src={catalogoRazonado} alt="Descripción de la imagen"  className="w-full h-full  transform rotate-[2deg] object-cover transition-transform transform group-hover:scale-105" />
                                        <p className="absolute bottom-0 w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-100 xl:opacity-0 group-hover:opacity-100">
                                        <FormattedMessage
                                            id='destac.catalogo'
                                            defaultMessage='CATÁLOGO RAZONADO'/></p>
                                    </a>
                                </figure>

                                <figure class=" shrink-0  w-6/6 h-[150px] mt-[0px] ml-[0px]  bg-gray-300  transform rotate-[2deg] shadow-2xl">
                                            <img src={imagen4} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div> 

                            <div class="sm:w-1/2 sm:h-2/2  xl:w-3/4 h-5/6 flex flex-cols-2 justify-end shadow-2xl">
                                <figure class=" shrink-0  w-2/6 h-[290px]  mt-[15px] mr-[10px] border-gray-500 bg-gray-200 transform rotate-[-4deg] shadow-2xl">
                                    <img src={imagen5} alt="Descripción de la imagen" className=" w-full h-full transform rotate-[0deg] " />
                                </figure>

                                <figure class=" shrink-0  w-3/5 h-[300px]   mr-[20px] transform rotate-[-4deg] shadow-2xl">
                                    <a href="https://www.xulsolar.org.ar/biografia.html" className="relative group">
                                        <img src={biografiaXul} alt="Descripción de la imagen" className=" relative w-full h-full  object-cover transition-transform transform group-hover:scale-105"/>
                                        <p className="absolute bottom-0 w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-100 xl:opacity-0 group-hover:opacity-100">
                                        <FormattedMessage
                                            id='destac.biografiaxul'
                                            defaultMessage='BIOGRAFÍA XUL SOLAR'/></p>
                                    </a>
                                </figure>
                            </div>

                            
                        </div>

                        <div class="sm:flex  grid-cols-1  xl:flex grid-cols-2   mt-[-50px]">

                            <div class="w-1/4  h-[110px]   bg-gray-200 mt-[80px] ml-[50px] mr-[20px] shadow-2xl">
                                <figure class="shrink-0  w-full h-full   ">
                                            <img src={firma9Xul} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div>

                            <div class=" w-3/6 h-[200px] mt-[-15px] ml-[100px] bg-gray-200  shadow-2xl">
                                <figure class=" shrink-0  w-full h-full transform rotate-[4deg] ">
                                    <img src={imagen6} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div>  
                        </div>


                    </div> 

                </div>
                

        
        

                <div class="  flex flex-col divide-y divide-gray  bg-gray-200 border-2 border-gray-200  shadow-2xl ">


                    <div class="  w-2/3  w-full xl:h-[600px] ">

                        <div class="sm:flex grid-cols-1  xl:flex grid-cols-2 gap-0  mb-[50px] mt-[30px]">

                            <div class=" sm:flex grid-cols-1 sm:w-2/2  xl:w-2/5 xl:h-[500px] mt-[0px] ml-[20px] mr-[30px] xl:flex xl:flex-col xl:divide-y divide-gray justify-end shadow-2xl ">
                                
                                <figure class="  shrink-0 sm:w-2/4 md:w-3/6 h-[300px] xl:w-5/6 xl:h-[300px] mt-[0px] mr-[10px]  mb-[10px] transform rotate-[2deg] shadow-2xl">
                                    <a href="https://www.xulsolar.org.ar/exposiciones.html" className="relative group">
                                        <img src={exposiciones} alt="Descripción de la imagen"   className="w-full h-full  object-cover transition-transform transform group-hover:scale-105"/>
                                        <p className="absolute bottom-0 w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-100 xl:opacity-0 group-hover:opacity-100">
                                        <FormattedMessage
                                            id='destac.exposiciones'
                                            defaultMessage='EXPOSICIONES'/></p>
                                    </a>
                                </figure>

                                <figure class="shrink-0 sm:w-2/5 md:w-2/5 xl:w-5/6 xl:h-[150px] mt-[0px] ml-[2px]  bg-gray-300  transform rotate-[2deg] shadow-2xl">
                                            <img src={imagen8} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div> 
                            <div class="flex w-1/3 h-2/3  xl:w-2/6  sm:mb-[100px] xl:h-[110px]   xl:bg-gray-200 xl:mt-[-5px] ml-[40px] mr-[20px] shadow-2xl">
                                <figure class="shrink-0  w-full h-full transform rotate-[20deg]  ">
                                            <img src={firma11Xul} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div>

                        </div>


                        <div class="sm:flex  grid-cols-1  xl:flex grid-cols-2 ">

                            <div class=" w-1/4 h-[80px] mt-[-30px] ml-[130px] bg-gray-200 shadow-2xl">
                                <figure class=" shrink-0  w-full h-full rotate-[15deg]  ">
                                    <img src={firma10Xul} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div> 

                            <div class="w-3/3 h-1/5 sm:mt-[0px]  xl:w-3/5 xl:h-[370px] xl:mt-[-380px] ml-[70px] mr-[15px] flex flex-cols-2 justify-end shadow-2xl ">
                                
                                <figure class="shrink-0 w-4/5 h-[300px]  xl:w-3/5 xl:h-[350px] mt-[10px] mr-[8px] transform  rotate-[-5deg] shadow-2xl">
                                    <a href="https://www.xulsolar.org.ar/educacion.html" className="relative group">
                                        <img src={educacion} alt="Descripción de la imagen"  className=" w-full h-full   object-cover transition-transform transform group-hover:scale-105" />
                                    <p className="absolute bottom-0 w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-100 xl:opacity-0 group-hover:opacity-100 ">
                                    <FormattedMessage
                                            id='destac.educacion'
                                            defaultMessage='EDUCACIÓN'/></p>
                                    </a>
                                </figure>

                                <figure class=" shrink-0  w-2/6 h-[350px] mt-[-8px]  rotate-[-5deg] bg-gray-200 shadow-2xl">
                                            <img src={imagen7} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div>  

                        </div>

                    </div> 

                    <div class="flex w-4/4 h-[220px] ml-[10px] mt-[20px] justify-center items-center  ">
                            <figure class=" w-full h-full bg-gray-200 ">
                                <img src={serpienteXulHoriz} alt="Descripción de la imagen" className="w-full h-full  transform rotate-[3deg] " />
                            </figure>
                    </div>

                </div> 




                <div class="  flex flex-cols bg-gray-200 border-2 border-gray-200  shadow-2xl">

                    <div class="flex hidden md:block xl:w-1/5 h-6/6 justify-center items-center ml-[20px] mr-[20px]  ">
                        <figure class=" w-full h-full bg-gray-200">
                         <img src={sillaXul} alt="Descripción de la imagen" className="w-full h-full  transform rotate-[-5deg] " />
                        </figure>
                    </div>

                    <div class="  w-2/3  w-full xl:h-[600px]">

                        <div class="sm:flex grid-cols-1  xl:flex grid-cols-2 gap-0  mt-[30px] mr-[30px]">

                            <div class=" w-3/3 xl:w-3/4 h-5/6 flex flex-cols-2 justify-end bg-gray-200 shadow-2xl">
                                <figure class=" shrink-0  w-2/6 h-[250px]  mt-[15px] mr-[10px] border-gray-500 bg-gray-300 transform rotate-[1deg] shadow-2xl">
                                    <img src={imagen11} alt="Descripción de la imagen" className=" w-full h-full transform rotate-[4deg] " />
                                </figure>

                                <figure class=" shrink-0  w-3/5 h-[300px]   mr-[10px] transform rotate-[4deg] shadow-2xl">
                                    <a href="https://www.xulsolar.org.ar/museo.html" className="relative group">
                                        <img src={elMuseo} alt="Descripción de la imagen"   className="w-full h-full  object-cover transition-transform transform group-hover:scale-105"/>
                                        <p className="absolute bottom-0 w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-100 xl:opacity-0 group-hover:opacity-100">
                                        <FormattedMessage
                                            id='destac.elmuseo'
                                            defaultMessage='EL MUSEO'/></p>
                                    </a>
                                </figure>
                            </div>

                            <div class="w-3/3 xl:w-1/4  h-[150px]   bg-gray-200  ml-[20px] mr-[20px] mt-[20px] shadow-2xl">
                                <figure class="shrink-0  w-full h-full  transform rotate-[14deg] ">
                                            <img src={firma8Xul} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div>

                        </div>

 
                        <div class="sm:flex grid-cols-1  xl:flex grid-cols-2 gap-0 mt-[100px] ml-[10px]  ">

                            <div class="w-3/3 xl:w-4/6 h-[400px] mt-[-40px] ml-[30px] flex flex-cols-2 justify-end shadow-2xl ">
                                
                                <figure class="shrink-0  w-3/5 h-[390px] mt-[10px] ml-[40px] mr-[10px]  transform rotate-[-5deg] shadow-2xl">
                                    <a href="https://www.xulsolar.org.ar/testimonios.html" className="relative group">
                                        <img src={testimonio} alt="Descripción de la imagen"   className="w-full h-full  object-cover transition-transform transform group-hover:scale-105"/>
                                        <p className="absolute bottom-0 w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-100 xl:opacity-0 group-hover:opacity-100">
                                        <FormattedMessage
                                            id='destac.testimonio'
                                            defaultMessage='TESTIMONIO'/></p>
                                    </a> 
                                </figure>

                                <figure class=" shrink-0  w-2/6 h-[350px] mt-[-8px] mr-[35px] transform rotate-[-5deg] bg-gray-300 shadow-2xl">
                                            <img src={imagen10} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div>   

                            <div class="w-2/3 h-1/4 xl:w-1/4 xl:h-[430px] xl:mt-[-100px] ml-[10px] bg-gray-200 shadow-2xl">
                                <figure class=" shrink-0  w-full h-full transform rotate-[1deg]">
                                    <img src={imagen9} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div>

                        </div>

                    </div> 

                </div>
                 
            </div> 
           
         

            <div class="grid bg-gray-200 mt-[-10px] sm:grid-cols-1 xl:grid-cols-2 gap-0  bg-gray-200 ">

                <div class=" w-6/6 h-4/5  ">
                    <img src={firmasXul4} alt="Descripción de la imagen" className="w-full h-full" />
                </div>

                <div class=" w-6/6 h-4/5  hidden s:block xl:block">
                    <img src={firmasXul4} alt="Descripción de la imagen" className="w-full h-full" />
                </div>

            </div>

            
            
        </div>  
          
       
    )

};

export default Destacados;








// const Destacados = () =>{
//     return(

//         <div class=" w-full sm:h-[3500px]  xl:h-[1700px]  " >

//              <div class="grid mb-[-40px] bg-gray-200 sm:grid-cols-1 xl:grid-cols-2 gap-0  bg-gray-200 ">

//                 <div class=" w-2/2 h-4/5 ">
//                     <img src={firmasXul4} alt="Descripción de la imagen" className="w-full h-full" />
//                 </div>
                
//                 <div class=" w-2/2 h-4/5 ">
//                     <img src={firmasXul4} alt="Descripción de la imagen" className="w-full h-full" />
//                 </div>
                
//              </div>


//              <div className="w-full h-full grid  bg-gray-200  p-2  sm:grid-cols-1 xl:grid-cols-2 gap-0">
              
//                 <div class="  flex flex-cols  bg-gray-200  border-2 border-gray-200  shadow-2xl">

//                     <div class="  w-2/3  w-full xl:h-[600px]">

//                         <div class="flex flex-cols mb-[50px] mt-[50px]">

//                             <div class="w-1/5  h-[150px]   bg-gray-200 mt-[10px] ml-[20px] mr-[20px] shadow-2xl">
//                                 <figure class="shrink-0  w-full h-full   ">
//                                             <img src={firma6Xul} alt="Descripción de la imagen" className=" w-full h-full " />
//                                 </figure>
//                             </div>
//                             <div class=" w-3/4 h-[300px] flex flex-cols-2 justify-end bg-gray-200 shadow-2xl">
//                                 <figure class=" shrink-0  w-2/6 h-[250px]  mt-[15px] mr-[10px] border-gray-500 bg-gray-300 transform rotate-[-4deg] shadow-2xl">
//                                      <img src={imagen1} alt="Descripción de la imagen" className=" w-full h-full transform rotate-[0deg] " />
//                                 </figure>

//                                 <figure class=" shrink-0  w-3/5 h-[300px]   mr-[10px] transform rotate-[-4deg] shadow-2xl">
//                                     <a href="https://www.xulsolar.org.ar/bibliografia.html" className="relative group">
//                                         <img src={bibliografiaXul} alt="Descripción de la imagen" className="  w-full h-full   object-cover transition-transform transform group-hover:scale-105   " />
//                                         <p className="absolute bottom-0 w-full  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">BIBLIOGRAFÍA</p>
//                                     </a>
//                                 </figure>
//                             </div>

//                         </div>


//                         <div class="flex flex-cols mt-[100px] ">
//                             <div class=" w-1/4 h-[430px] mt-[-90px] ml-[20px] bg-gray-300 shadow-2xl">
//                                 <figure class=" shrink-0  w-full h-full transform rotate-[3deg] ">
//                                     <img src={imagen2} alt="Descripción de la imagen" className=" w-full h-full " />
//                                 </figure>
//                             </div>


//                             <div class=" w-3/4 h-[370px] mt-[-50px] ml-[40px] flex flex-cols-2 justify-end shadow-2xl ">
                                
//                                 <figure class="shrink-0  w-4/6 h-[360px] mt-[10px] mr-[8px] rotate-[-5deg] shadow-2xl">
//                                     <a href="https://www.xulsolar.org.ar/coleccion.html" className="relative group">
//                                             <img src={coleccionPermanente} alt="Descripción de la imagen"   className="w-full h-full  object-cover transition-transform transform group-hover:scale-105"/>
//                                         <p className="absolute bottom-0 w-full  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">COLECCIÓN PERMANENTE</p>
//                                     </a>
//                                 </figure>

//                                 <figure class=" shrink-0  w-2/6 h-[350px] mt-[-8px] transform rotate-[-5deg] bg-gray-300 shadow-2xl">
//                                             <img src={imagen3} alt="Descripción de la imagen" className=" w-full h-full " />
//                                 </figure>
//                             </div>   

//                         </div>

//                     </div> 

//                     <div class="flex w-1/5 h-6/6 justify-center items-center ml-[20px] mr-[20px]  ">
//                         <figure class=" w-full h-full bg-gray-200">
//                           <img src={sillaXul} alt="Descripción de la imagen" className="w-full h-full  transform rotate-[5deg] " />
//                         </figure>
//                     </div>


//                 </div>






//                 <div class="  flex flex-col divide-y divide-gray  bg-gray-200  border-2 border-gray-200  shadow-2xl">

//                     <div class="flex w-4/4 h-[220px] mr-[20px] mt-[20px] justify-center items-center ">
//                         <figure class=" w-full h-full bg-gray-200">
//                             <img src={serpienteXulHoriz} alt="Descripción de la imagen" className="w-full h-full  transform rotate-[-7deg] " />
//                         </figure>
//                     </div>


//                     <div class="  w-2/3  w-full xl:h-[600px]">


//                         <div class="w- flex flex-cols ">
                
//                             <div class=" w-2/5 h-[400px] mt-[0px] ml-[30px] mr-[30px] flex flex-col divide-y divide-gray justify-end shadow-2xl ">
                                
//                                 <figure class="shrink-0  w-5/5 h-[230px] mt-[0px] mr-[20px] mb-[10px] shadow-2xl">
//                                     <a href="https://www.xulsolar.org.ar/catalogo.html" className="relative group">
//                                         <img src={catalogoRazonado} alt="Descripción de la imagen"  className="w-full h-full  transform rotate-[2deg] object-cover transition-transform transform group-hover:scale-105" />
//                                         <p className="absolute w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100  mt-[-35px]">CATÁLOGO RAZONADO</p>
//                                     </a>
//                                 </figure>

//                                 <figure class=" shrink-0  w-6/6 h-[150px] mt-[0px] ml-[0px]  bg-gray-300  transform rotate-[2deg] shadow-2xl">
//                                             <img src={imagen4} alt="Descripción de la imagen" className=" w-full h-full " />
//                                 </figure>
//                             </div> 

//                             <div class=" w-3/4 h-5/6 flex flex-cols-2 justify-end shadow-2xl">
//                                 <figure class=" shrink-0  w-2/6 h-[290px]  mt-[15px] mr-[10px] border-gray-500 bg-gray-200 transform rotate-[-4deg] shadow-2xl">
//                                     <img src={imagen5} alt="Descripción de la imagen" className=" w-full h-full transform rotate-[0deg] " />
//                                 </figure>

//                                 <figure class=" shrink-0  w-3/5 h-[300px]   mr-[20px] transform rotate-[-4deg] shadow-2xl">
//                                     <a href="https://www.xulsolar.org.ar/biografia.html" className="relative group">
//                                         <img src={biografiaXul} alt="Descripción de la imagen" className=" relative w-full h-full  object-cover transition-transform transform group-hover:scale-105"/>
//                                         <p className="absolute w-full bottom-0 left-0 right-0 px-2 py-1 w-[200px]  text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100 text-center">BIBLIOGRAFÍA XUL SOLAR</p>
//                                     </a>
//                                 </figure>
//                             </div>

                            
//                         </div>

//                         <div class="flex flex-cols  mt-[-50px]">

//                             <div class="w-1/4  h-[110px]   bg-gray-200 mt-[80px] ml-[50px] mr-[20px] shadow-2xl">
//                                 <figure class="shrink-0  w-full h-full   ">
//                                             <img src={firma9Xul} alt="Descripción de la imagen" className=" w-full h-full " />
//                                 </figure>
//                             </div>

//                             <div class=" w-3/6 h-[200px] mt-[-15px] ml-[100px] bg-gray-200  shadow-2xl">
//                                 <figure class=" shrink-0  w-full h-full transform rotate-[4deg] ">
//                                     <img src={imagen6} alt="Descripción de la imagen" className=" w-full h-full " />
//                                 </figure>
//                             </div>  
//                         </div>


//                     </div> 

//                 </div>
                

        
        

//                 <div class="  flex flex-col divide-y divide-gray  bg-gray-200 border-2 border-gray-200  shadow-2xl ">


//                     <div class="  w-2/3  w-full xl:h-[600px] ">

//                         <div class="flex flex-cols mb-[50px] mt-[30px]">

//                             <div class=" w-2/5 h-[500px] mt-[0px] ml-[20px] mr-[30px] flex flex-col divide-y divide-gray justify-end shadow-2xl ">
                                
//                                 <figure class="shrink-0  w-5/5 h-[300px] mt-[0px] mr-[10px]  mb-[10px] transform rotate-[2deg] shadow-2xl">
//                                     <a href="https://www.xulsolar.org.ar/exposiciones.html" className="relative group">
//                                         <img src={exposiciones} alt="Descripción de la imagen"   className="w-full h-full  object-cover transition-transform transform group-hover:scale-105"/>
//                                         <p className="absolute w-full bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">EXPOSICIONES</p>
//                                     </a>
//                                 </figure>

//                                 <figure class=" shrink-0  w-6/6 h-[150px] mt-[0px] ml-[2px]  bg-gray-300  transform rotate-[2deg] shadow-2xl">
//                                             <img src={imagen8} alt="Descripción de la imagen" className=" w-full h-full " />
//                                 </figure>
//                             </div> 
//                             <div class="w-2/6  h-[110px]   bg-gray-200 mt-[-5px] ml-[40px] mr-[20px] shadow-2xl">
//                                 <figure class="shrink-0  w-full h-full transform rotate-[20deg]  ">
//                                             <img src={firma11Xul} alt="Descripción de la imagen" className=" w-full h-full " />
//                                 </figure>
//                             </div>

//                         </div>


//                         <div class="flex flex-cols ">

//                             <div class=" w-1/4 h-[80px] mt-[-30px] ml-[130px] bg-gray-200 shadow-2xl">
//                                 <figure class=" shrink-0  w-full h-full rotate-[15deg]  ">
//                                     <img src={firma10Xul} alt="Descripción de la imagen" className=" w-full h-full " />
//                                 </figure>
//                             </div> 

//                             <div class=" w-3/5 h-[370px] mt-[-380px] ml-[70px] mr-[15px] flex flex-cols-2 justify-end shadow-2xl ">
                                
//                                 <figure class="shrink-0  w-3/5 h-[350px] mt-[10px] mr-[8px] transform  rotate-[-5deg] shadow-2xl">
//                                     <a href="https://www.xulsolar.org.ar/educacion.html" className="relative group">
//                                         <img src={educacion} alt="Descripción de la imagen"  className=" w-full h-full   object-cover transition-transform transform group-hover:scale-105" />
//                                     <p className="absolute w-full bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100 ">EDUCACIÓN</p>
//                                     </a>
//                                 </figure>

//                                 <figure class=" shrink-0  w-2/6 h-[350px] mt-[-8px]  rotate-[-5deg] bg-gray-200 shadow-2xl">
//                                             <img src={imagen7} alt="Descripción de la imagen" className=" w-full h-full " />
//                                 </figure>
//                             </div>  

//                         </div>

//                     </div> 

//                     <div class="flex w-4/4 h-[220px] ml-[10px] mt-[20px] justify-center items-center  ">
//                             <figure class=" w-full h-full bg-gray-200 ">
//                                 <img src={serpienteXulHoriz} alt="Descripción de la imagen" className="w-full h-full  transform rotate-[3deg] " />
//                             </figure>
//                     </div>

//                 </div> 




//                 <div class="  flex flex-cols bg-gray-200 border-2 border-gray-200  shadow-2xl">

//                     <div class="flex w-1/5 h-6/6 justify-center items-center ml-[20px] mr-[20px]  ">
//                         <figure class=" w-full h-full bg-gray-200">
//                          <img src={sillaXul} alt="Descripción de la imagen" className="w-full h-full  transform rotate-[-5deg] " />
//                         </figure>
//                     </div>

//                     <div class="  w-2/3  w-full xl:h-[600px]">

//                         <div class="flex flex-cols  mt-[30px] mr-[30px]">

//                             <div class=" w-3/4 h-5/6 flex flex-cols-2 justify-end bg-gray-200 shadow-2xl">
//                                 <figure class=" shrink-0  w-2/6 h-[250px]  mt-[15px] mr-[10px] border-gray-500 bg-gray-300 transform rotate-[1deg] shadow-2xl">
//                                     <img src={imagen11} alt="Descripción de la imagen" className=" w-full h-full transform rotate-[4deg] " />
//                                 </figure>

//                                 <figure class=" shrink-0  w-3/5 h-[300px]   mr-[10px] transform rotate-[4deg] shadow-2xl">
//                                     <a href="https://www.xulsolar.org.ar/museo.html" className="relative group">
//                                         <img src={elMuseo} alt="Descripción de la imagen"   className="w-full h-full  object-cover transition-transform transform group-hover:scale-105"/>
//                                         <p className="absolute w-full bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">EL MUSEO</p>
//                                     </a>
//                                 </figure>
//                             </div>

//                             <div class="w-1/4  h-[150px]   bg-gray-200  ml-[20px] mr-[20px] mt-[20px] shadow-2xl">
//                                 <figure class="shrink-0  w-full h-full  transform rotate-[14deg] ">
//                                             <img src={firma8Xul} alt="Descripción de la imagen" className=" w-full h-full " />
//                                 </figure>
//                             </div>

//                         </div>

 
//                         <div class="flex flex-cols mt-[100px] ml-[10px]  ">

//                             <div class=" w-4/6 h-[400px] mt-[-40px] ml-[30px] flex flex-cols-2 justify-end shadow-2xl ">
                                
//                                 <figure class="shrink-0  w-3/5 h-[390px] mt-[10px] ml-[40px] mr-[10px]  transform rotate-[-5deg] shadow-2xl">
//                                     <a href="https://www.xulsolar.org.ar/testimonios.html" className="relative group">
//                                         <img src={testimonio} alt="Descripción de la imagen"   className="w-full h-full  object-cover transition-transform transform group-hover:scale-105"/>
//                                         <p className="absolute w-full bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">TESTIMONIO</p>
//                                     </a> 
//                                 </figure>

//                                 <figure class=" shrink-0  w-2/6 h-[350px] mt-[-8px] mr-[35px] transform rotate-[-5deg] bg-gray-300 shadow-2xl">
//                                             <img src={imagen10} alt="Descripción de la imagen" className=" w-full h-full " />
//                                 </figure>
//                             </div>   

//                             <div class=" w-1/4 h-[430px] mt-[-100px] ml-[10px] bg-gray-200 shadow-2xl">
//                                 <figure class=" shrink-0  w-full h-full transform rotate-[1deg]">
//                                     <img src={imagen9} alt="Descripción de la imagen" className=" w-full h-full " />
//                                 </figure>
//                             </div>

//                         </div>

//                     </div> 

//                 </div>
                 
//             </div> 
           
         

//             <div class="grid bg-gray-200 mt-[-10px] sm:grid-cols-1 xl:grid-cols-2 gap-0  bg-gray-200 ">

//                 <div class=" w-6/6 h-4/5  ">
//                     <img src={firmasXul4} alt="Descripción de la imagen" className="w-full h-full" />
//                 </div>

//                 <div class=" w-6/6 h-4/5  ">
//                     <img src={firmasXul4} alt="Descripción de la imagen" className="w-full h-full" />
//                 </div>

//             </div>

            
            
//         </div>  
          
       
//     )

// };

// export default Destacados;






