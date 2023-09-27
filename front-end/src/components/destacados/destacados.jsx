
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
import serpienteXulVerti from '../../imagenes/destacados/serpienteXulVerti.png';
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


const Destacados = () =>{
    return(

        <div class=" w-full xl:h-[1400px]  " >

             <div className="w-full h-full grid  bg-gray-200  p-2  xl: grid grid-cols-2 gap-0">


                <div class="  flex flex-cols border-2 border-gray-500 bg-gray-200 ">

                    <div class="  w-2/3  w-full h-[600px]">

                        <div class="flex flex-cols mb-[50px] mt-[50px]">

                            <div class="w-1/4  h-[200px]   bg-gray-200 mt-[10px] ml-[20px] mr-[20px] shadow-2xl">
                                <figure class="shrink-0  w-full h-full   ">
                                            <img src={firma6Xul} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div>
                            <div class=" w-3/4 h-5/6 flex flex-cols-2 justify-end bg-gray-200 shadow-2xl">
                                <figure class=" shrink-0  w-2/6 h-[198px]  mt-[15px] mr-[10px] border-gray-500 bg-gray-300 transform rotate-[-4deg] shadow-2xl">
                                     <img src={imagen1} alt="Descripción de la imagen" className=" w-full h-full transform rotate-[0deg] " />
                                </figure>

                                <figure class=" shrink-0  w-3/5 h-[230px]   mr-[10px] transform rotate-[-4deg] shadow-2xl">
                                    <a href="https://www.xulsolar.org.ar/bibliografia.html" className="relative group">
                                        <img src={bibliografiaXul} alt="Descripción de la imagen" className="  w-full h-full   object-cover transition-transform transform group-hover:scale-105   " />
                                        <p className="absolute bottom-0 w-full  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">BIBLIOGRAFÍA</p>
                                    </a>
                                </figure>
                            </div>

                        </div>


                        <div class="flex flex-cols mt-[100px] ">
                            <div class=" w-1/4 h-[430px] mt-[-90px] ml-[20px] bg-gray-300 shadow-2xl">
                                <figure class=" shrink-0  w-full h-full ">
                                    <img src={imagen2} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div>


                            <div class=" w-3/4 h-[350px] mt-[-50px] ml-[30px] flex flex-cols-2 justify-end shadow-2xl ">
                                
                                <figure class="shrink-0  w-3/5 h-[340px] mt-[10px] mr-[8px] rotate-[-5deg] shadow-2xl">
                                    <a href="https://www.xulsolar.org.ar/coleccion.html" className="relative group">
                                            <img src={coleccionPermanente} alt="Descripción de la imagen"   className="w-full h-full  object-cover transition-transform transform group-hover:scale-105"/>
                                        <p className="absolute bottom-0 w-full  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">COLECCIÓN PERMANENTE</p>
                                    </a>
                                </figure>

                                <figure class=" shrink-0  w-2/6 h-[350px] mt-[-8px]  rotate-[-5deg] bg-gray-300 shadow-2xl">
                                            <img src={imagen3} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div>   

                        </div>

                    </div> 

                    <div class="flex w-1/5 h-6/6 justify-center items-center ml-[20px] mr-[20px]  ">
                        <figure class=" w-full h-full bg-gray-200">
                          <img src={serpienteXulVerti} alt="Descripción de la imagen" className="w-full h-full  transform rotate-[165deg] " />
                        </figure>
                    </div>


                </div>






                <div class="  flex flex-col divide-y divide-gray border-2 border-gray-500 bg-gray-200 ">

                    <div class="flex w-[750px] h-[150px] ml-[20px] mt-[20px] justify-center items-center   ">
                        <figure class=" w-full h-full bg-gray-200">
                            <img src={serpienteXulHoriz} alt="Descripción de la imagen" className="w-full h-full  transform rotate-[-7deg] " />
                        </figure>
                    </div>


                    <div class="  w-2/3  w-full h-[600px]">


                        <div class="w- flex flex-cols ">
                
                            <div class=" w-2/5 h-[400px] mt-[0px] ml-[30px] mr-[30px] flex flex-col divide-y divide-gray justify-end shadow-2xl ">
                                
                                <figure class="shrink-0  w-5/5 h-[230px] mt-[0px] mr-[20px] mb-[10px] shadow-2xl">
                                    <a href="https://www.xulsolar.org.ar/catalogo.html" className="relative group">
                                        <img src={catalogoRazonado} alt="Descripción de la imagen"  className="w-full h-full  transform rotate-[2deg] object-cover transition-transform transform group-hover:scale-105" />
                                        <p className="absolute w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100  mt-[-35px]">CATÁLOGO RAZONADO</p>
                                    </a>
                                </figure>

                                <figure class=" shrink-0  w-6/6 h-[150px] mt-[0px] ml-[0px]  bg-gray-300  transform rotate-[2deg] shadow-2xl">
                                            <img src={imagen4} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div> 

                            <div class=" w-3/4 h-5/6 flex flex-cols-2 justify-end shadow-2xl">
                                <figure class=" shrink-0  w-2/6 h-[290px]  mt-[15px] mr-[10px] border-gray-500 bg-gray-200 transform rotate-[-4deg] shadow-2xl">
                                    <img src={imagen5} alt="Descripción de la imagen" className=" w-full h-full transform rotate-[0deg] " />
                                </figure>

                                <figure class=" shrink-0  w-3/5 h-[300px]   mr-[20px] transform rotate-[-4deg] shadow-2xl">
                                    <a href="https://www.xulsolar.org.ar/biografia.html" className="relative group">
                                        <img src={biografiaXul} alt="Descripción de la imagen" className=" relative w-full h-full  object-cover transition-transform transform group-hover:scale-105"/>
                                        <p className="absolute w-full bottom-0 left-0 right-0 px-2 py-1 w-[200px]  text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100 text-center">BIBLIOGRAFÍA XUL SOLAR</p>
                                    </a>
                                </figure>
                            </div>

                            
                        </div>

                        <div class="flex flex-cols  mt-[-50px]">

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
                

        
        

                <div class="  flex flex-col divide-y divide-gray border-2 border-gray-500 bg-gray-200  ">


                    <div class="  w-2/3  w-full h-[600px]">

                        <div class="flex flex-cols mb-[50px] mt-[30px]">

                            <div class=" w-2/5 h-[400px] mt-[0px] ml-[20px] mr-[30px] flex flex-col divide-y divide-gray justify-end shadow-2xl ">
                                
                                <figure class="shrink-0  w-5/5 h-[230px] mt-[0px] mr-[20px] mb-[10px] transform rotate-[-2deg] shadow-2xl">
                                    <a href="https://www.xulsolar.org.ar/exposiciones.html" className="relative group">
                                        <img src={exposiciones} alt="Descripción de la imagen"   className="w-full h-full  object-cover transition-transform transform group-hover:scale-105"/>
                                        <p className="absolute w-full bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">EXPOSICIONES</p>
                                    </a>
                                </figure>

                                <figure class=" shrink-0  w-6/6 h-[150px] mt-[0px] ml-[5px]  bg-gray-300  transform rotate-[-2deg] shadow-2xl">
                                            <img src={imagen8} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div> 
                            <div class="w-2/6  h-[110px]   bg-gray-200 mt-[-5px] ml-[40px] mr-[20px] shadow-2xl">
                                <figure class="shrink-0  w-full h-full transform rotate-[20deg]  ">
                                            <img src={firma11Xul} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div>

                        </div>


                        <div class="flex flex-cols ">

                            <div class=" w-1/4 h-[80px] mt-[-30px] ml-[130px] bg-gray-200 shadow-2xl">
                                <figure class=" shrink-0  w-full h-full rotate-[15deg]  ">
                                    <img src={firma10Xul} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div> 

                            <div class=" w-3/5 h-[300px] mt-[-320px] ml-[50px] mr-[15px] flex flex-cols-2 justify-end shadow-2xl ">
                                
                                <figure class="shrink-0  w-3/5 h-[300px] mt-[10px] mr-[8px] transform  rotate-[-5deg] shadow-2xl">
                                    <a href="https://www.xulsolar.org.ar/educacion.html" className="relative group">
                                        <img src={educacion} alt="Descripción de la imagen"  className=" w-full h-full   object-cover transition-transform transform group-hover:scale-105" />
                                    <p className="absolute w-full bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100 ">EDUCACIÓN</p>
                                    </a>
                                </figure>

                                <figure class=" shrink-0  w-2/6 h-[300px] mt-[-8px]  rotate-[-5deg] bg-gray-200 shadow-2xl">
                                            <img src={imagen7} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div>  

                        </div>

                    </div> 

                    <div class="flex w-[750px] h-[150px] ml-[20px] mt-[-60px] justify-center items-center   ">
                            <figure class=" w-full h-full bg-gray-200 ">
                                <img src={serpienteXulHoriz} alt="Descripción de la imagen" className="w-full h-full  transform rotate-[3deg] " />
                            </figure>
                    </div>

                </div> 




                <div class="  flex flex-cols border-2 border-gray-500 bg-gray-200 ">

                    <div class="flex w-1/5 h-6/6 justify-center items-center ml-[20px] mr-[20px]  ">
                        <figure class=" w-full h-full bg-gray-200">
                         <img src={serpienteXulVerti} alt="Descripción de la imagen" className="w-full h-full  transform rotate-[-15deg] " />
                        </figure>
                    </div>

                    <div class="  w-2/3  w-full h-[600px]">

                        <div class="flex flex-cols  mt-[30px] mr-[30px]">

                            <div class=" w-3/4 h-5/6 flex flex-cols-2 justify-end bg-gray-200 shadow-2xl">
                                <figure class=" shrink-0  w-2/6 h-[198px]  mt-[15px] mr-[10px] border-gray-500 bg-gray-300 transform rotate-[-4deg] shadow-2xl">
                                    <img src={imagen11} alt="Descripción de la imagen" className=" w-full h-full transform rotate-[0deg] " />
                                </figure>

                                <figure class=" shrink-0  w-3/5 h-[230px]   mr-[10px] transform rotate-[-4deg] shadow-2xl">
                                    <a href="https://www.xulsolar.org.ar/museo.html" className="relative group">
                                        <img src={elMuseo} alt="Descripción de la imagen"   className="w-full h-full  object-cover transition-transform transform group-hover:scale-105"/>
                                        <p className="absolute w-full bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">EL MUSEO</p>
                                    </a>
                                </figure>
                            </div>

                            <div class="w-1/4  h-[150px]   bg-gray-200  ml-[20px] mr-[20px] mt-[20px] shadow-2xl">
                                <figure class="shrink-0  w-full h-full  transform rotate-[14deg] ">
                                            <img src={firma8Xul} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div>

                        </div>

 
                        <div class="flex flex-cols mt-[100px] ml-[10px]  ">

                            <div class=" w-4/6 h-[350px] mt-[-50px] ml-[20px] flex flex-cols-2 justify-end shadow-2xl ">
                                
                                <figure class="shrink-0  w-3/6 h-[340px] mt-[10px] mr-[10px]  transform rotate-[-5deg] shadow-2xl">
                                    <a href="https://www.xulsolar.org.ar/testimonios.html" className="relative group">
                                        <img src={testimonio} alt="Descripción de la imagen"   className="w-full h-full  object-cover transition-transform transform group-hover:scale-105"/>
                                        <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">TESTIMONIO</p>
                                    </a> 
                                </figure>

                                <figure class=" shrink-0  w-2/6 h-[350px] mt-[-8px] mr-[35px] transform rotate-[-5deg] bg-gray-300 shadow-2xl">
                                            <img src={imagen10} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div>   

                            <div class=" w-1/4 h-[430px] mt-[-120px] ml-[10px] bg-gray-200 shadow-2xl">
                                <figure class=" shrink-0  w-full h-full transform rotate-[3deg]">
                                    <img src={imagen9} alt="Descripción de la imagen" className=" w-full h-full " />
                                </figure>
                            </div>

                        </div>

                    </div> 


                </div>






                
                {/* <div class="grid grid-cols-3 mb-[100px]  mt-[-40px] gap-10 border-2 border-gray-500 bg-gray-300 shrink-0 xl:h-[700px]">

                        <figure class="w-[100px] h-[100px] mt-[20px]">
                                <img src={serpienteXul} alt="Descripción de la imagen" className="w-full h-full hidden xl:block   " />
                        </figure>

                    <figure class=" w-[100px] h-[100px] mt-[20px]">
                            <a href="https://www.xulsolar.org.ar/museo.html" className="relative group">
                                <img src={elMuseo} alt="Descripción de la imagen"   className="w-full h-full  object-cover transition-transform transform group-hover:scale-105"/>
                                <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">EL MUSEO</p>
                            </a>
                    </figure>

                        <figure class="w-[100px] h-[100px] mt-[20px]">
                            <img src={serpienteXul} alt="Descripción de la imagen" className="w-full h-full hidden xl:block   " />
                        </figure>

                        <figure class="w-[100px] h-[100px] mt-[20px]">
                             <img src={serpienteXul} alt="Descripción de la imagen" className="w-full h-full hidden xl:block   " />
                        </figure>

                
            
                    <figure class="w-[100px] h-[100px] mt-[20px]" >
                            <a href="https://www.xulsolar.org.ar/testimonios.html" className="relative group">
                                <img src={testimonio} alt="Descripción de la imagen"   className="w-full h-full  rounded-[10px] object-cover transition-transform transform group-hover:scale-105"/>
                                <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">TESTIMONIO</p>
                            </a>    
                    </figure>


                        <figure  class="w-[100px] h-[100px] mt-[20px]">
                            <img src={escafandraXul} alt="Descripción de la imagen" className="w-full h-full hidden xl:block  " />
                        </figure>

                        <figure class="w-[100px] h-[100px] mt-[20px]">
                             <img src={serpienteXul} alt="Descripción de la imagen" className="w-full h-full hidden xl:block   " />
                        </figure>
                 
                </div> */}
                
               
            </div> 
            
        </div>    
          

       
    )

};

export default Destacados;







//antiguo


// const Destacados = () =>{
//     return(

//         <div class=" w-full xl:grid  xl:grid-cols-12  xl:border-2 border-gray-200 xl:bg-gray-200 xl:h-[600px] w-full xl:mt-0 xl:mb-0
//                     " >
//              <div className="sm:grid grid-cols-1 gap-10  border-2  bg-gray-200 
//                             md:grid grid-cols-2 gap-10  border-2  bg-gray-200
//                             xl:inline-block xl:h-[600px] w-full xl:bg-gray-200 xl:col-start-2 xl:col-span-10
//                              ">
                
                    

//                 <figure class=" hidden sm:hidden
//                             xl:flex xl:w-[70px] xl:h-[50px] xl:relative 
//                             ">
//                         <img src={firma6Xul} alt="Descripción de la imagen" className=" w-full h-full " />
//                 </figure>


//                 <figure class=" 
//                                     xl:relative xl:inline-block xl:transition-transform xl:transform scale-100 xl:hover:z-10 xl:hover:scale-110 xl:z-1 xl:left-[20px] xl:top-[20px] xl:w-[250px] xl:h-[300px]">
//                         <a href="https://www.xulsolar.org.ar/bibliografia.html" className="relative group">
//                             <img src={bibliografiaXul} alt="Descripción de la imagen" className="  w-full h-full   object-cover transition-transform transform group-hover:scale-105   " />
//                             <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">BIBLIOGRAFÍA</p>
//                         </a>
//                 </figure>

                
//                 <figure class="
//                                     xl:relative xl:inline-block xl:transition-transform xl:transform scale-100 xl:hover:z-10 xl:hover:scale-110 xl:z-1 xl:left-[280px] xl:bottom-[135px] xl:w-[300px] xl:h-[200px]">
//                     <a href="https://www.xulsolar.org.ar/coleccion.html" className="relative group">
//                             <img src={coleccionPermanente} alt="Descripción de la imagen"   className="w-full h-full  rounded-[50px] object-cover transition-transform transform group-hover:scale-105"/>
//                         <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">COLECCIÓN PERMANENTE</p>
//                     </a>
//                 </figure>


                
//                 <figure class="
//                                 xl:relative xl:inline-block xl:transition-transform xl:transform scale-100 xl:hover:z-10 xl:hover:scale-110 xl:z-1 xl:right-[400px] xl:top-[230px] xl:w-[250px] xl:h-[230px]">
//                         <a href="https://www.xulsolar.org.ar/catalogo.html" className="relative group">
//                             <img src={catalogoRazonado} alt="Descripción de la imagen"  className="w-full h-full   object-cover transition-transform transform group-hover:scale-105" />
//                             <p className="absolute  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100  mt-[-35px]">CATÁLOGO RAZONADO</p>
//                         </a>
//                 </figure>

            
//                     <figure class="hidden sm:hidden
//                                 xl:flex xl:w-[100px] xl:h-[100px] xl:top-[70px] xl:left-[10px] xl:relative">
//                         <img src={carasXul} alt="Descripción de la imagen" className="w-full h-full hidden sm:flex " />
//                     </figure>

                
//                 <figure class="
//                                     xl:relative xl:inline-block xl:transition-transform xl:transform scale-100 xl:hover:z-10 xl:hover:scale-110 xl:z-1 xl:left-[150px] xl:bottom-[480px] xl:w-[200px] xl:h-[250px]">
//                         <a href="https://www.xulsolar.org.ar/biografia.html" className="relative group">
//                             <img src={biografiaXul} alt="Descripción de la imagen" className=" relative w-full h-full rounded-[80px] object-cover transition-transform transform group-hover:scale-105"/>
//                             <p className="absolute bottom-0 left-0 right-0 px-2 py-1 w-[200px]  text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100 text-center">BIBLIOGRAFÍA XUL SOLAR</p>
//                         </a>
//                 </figure>

                
//                 <figure class="
//                                     xl:relative xl:inline-block xl:transition-transform xl:transform scale-100 xl:hover:z-10 xl:hover:scale-110 xl:z-1 xl:left-[120px] xl:bottom-[420px] xl:w-[250px] xl:h-[400px]">
//                         <a href="https://www.xulsolar.org.ar/exposiciones.html" className="relative group">
//                             <img src={exposiciones} alt="Descripción de la imagen"   className="w-full h-full rounded-[30px] object-cover transition-transform transform group-hover:scale-105"/>
//                             <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">EXPOSICIONES</p>
//                         </a>
//                 </figure>

                
            
//                 <figure class=" 
//                                 xl:relative xl:inline-block xl:transition-transform xl:transform scale-100 xl:hover:z-10 xl:hover:scale-110 xl:z-1 xl:right-[80px] xl:bottom-[360px] xl:w-[600px] xl:h-[150px]">
//                         <a href="https://www.xulsolar.org.ar/educacion.html" className="relative group">
//                             <img src={educacion} alt="Descripción de la imagen"  className=" w-full h-full   object-cover transition-transform transform group-hover:scale-105" />
//                             <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100 ">EDUCACIÓN</p>
//                         </a>
//                 </figure>

                
//                 <figure class=" 
//                             xl:relative xl:inline-block xl:transition-transform xl:transform scale-100 xl:hover:z-10 xl:hover:scale-110 xl:z-1 xl:left-[770px] xl:bottom-[820px] xl:w-[300px] xl:h-[500px]">
//                         <a href="https://www.xulsolar.org.ar/museo.html" className="relative group">
//                             <img src={elMuseo} alt="Descripción de la imagen"   className="w-full h-full  object-cover transition-transform transform group-hover:scale-105"/>
//                             <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">EL MUSEO</p>
//                         </a>
//                 </figure>

                
                
//                 <figure class="hidden sm:hidden
//                             xl:flex xl:w-[150px] xl:h-[80px] xl:bottom-[850px] xl:left-[450px] xl:relative">
//                         <img src={serpienteXul} alt="Descripción de la imagen" className="w-full h-full hidden xl:block   " />
//                 </figure>

            
//                 <figure class="
//                                 xl:relative xl:inline-block xl:transition-transform xl:transform scale-100 xl:hover:z-10 xl:hover:scale-110 xl:z-1 xl:left-[930px] xl:bottom-[1380px] xl:w-[300px] xl:h-[250px]" >
//                         <a href="https://www.xulsolar.org.ar/testimonios.html" className="relative group">
//                             <img src={testimonio} alt="Descripción de la imagen"   className="w-full h-full  rounded-[10px] object-cover transition-transform transform group-hover:scale-105"/>
//                             <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">TESTIMONIO</p>
//                         </a>    
//                 </figure>


    
//                 <figure  class="hidden sm:hidden
//                                 xl:flex xl:w-[90px] xl:h-[50px] xl:bottom-[1450px] xl:left-[620px] xl:relative
//                                ">
//                     <img src={firma8Xul} alt="Descripción de la imagen" className="w-full h-full hidden xl:block  " />
//                 </figure>

//                 <figure  class="hidden sm:hidden
//                                 xl:flex xl:w-[150px] xl:h-[200px] xl:bottom-[1380px] xl:left-[1100px] xl:relative
//                                ">
//                         <img src={escafandraXul} alt="Descripción de la imagen" className="w-full h-full hidden xl:block  " />
//                 </figure>
                
//             </div> 
            
//         </div>    
          

       
//     )

// };

// export default Destacados;





//actual


// const Destacados = () =>{
//     return(

//         <div class=" w-full xl:h-[1200px]  " >

//              <div className="w-full h-full grid  bg-gray-200   xl:grid-cols-2 gap-0">
                
//                  <div class="w-full h-full grid grid-cols-3 gap-10 border-2 border-gray-500 bg-gray-400 shrink-0  xl:h-[700px] ">

//                         <figure class=" w-3/4  h-full mt-[20px] border-4 border-gray-500 bg-gray-300 ">
//                                 <img src={firma6Xul} alt="Descripción de la imagen" className=" w-full h-full " />
//                         </figure>

//                         <figure class=" w-3/4  h-2/3 mt-[20px] border-gray-500 bg-gray-300">
//                                 <img src={firma6Xul} alt="Descripción de la imagen" className=" w-full h-full " />
//                         </figure>

//                     <figure class=" w-[100px] h-[100px]  mt-[20px]">
//                         <a href="https://www.xulsolar.org.ar/bibliografia.html" className="relative group">
//                             <img src={bibliografiaXul} alt="Descripción de la imagen" className="  w-full h-full   object-cover transition-transform transform group-hover:scale-105   " />
//                             <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">BIBLIOGRAFÍA</p>
//                         </a>
//                     </figure>

//                         <figure class=" w-[100px] h-[100px] mt-[20px]">
//                                 <img src={firma6Xul} alt="Descripción de la imagen" className=" w-full h-full " />
//                         </figure>

                    
//                     <figure class="w-[100px] h-[100px] mt-[20px] transform rotate-[80deg]">
//                         <a href="https://www.xulsolar.org.ar/coleccion.html" className="relative group">
//                                 <img src={coleccionPermanente} alt="Descripción de la imagen"   className="w-full h-full  object-cover transition-transform transform group-hover:scale-105"/>
//                             <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">COLECCIÓN PERMANENTE</p>
//                         </a>
//                     </figure>

//                         <figure class=" w-[100px] h-[100px] mt-[20px]">
//                                 <img src={firma6Xul} alt="Descripción de la imagen" className=" w-full h-full " />
//                         </figure>

//                         <figure class="w-[100px] h-[100px] mt-[20px]">
//                             <img src={serpienteXul} alt="Descripción de la imagen" className="w-full h-full hidden xl:block   " />
//                         </figure>

//                 </div>   

               
//                 <div class=" w-full h-full  grid grid-cols-3 gap-10 border-2 border-gray-500 bg-gray-300">
//                         <figure class="w-[100px] h-[100px] mt-[20px]">
//                             <img src={carasXul} alt="Descripción de la imagen" className="w-full h-full hidden sm:flex " />
//                         </figure>

//                         <figure class="w-[100px] h-[100px] mt-[20px]">
//                              <img src={carasXul} alt="Descripción de la imagen" className="w-full h-full hidden sm:flex " />
//                         </figure>

//                     <figure class="w-[100px] h-[100px] mt-[20px]">
//                             <a href="https://www.xulsolar.org.ar/catalogo.html" className="relative group">
//                                 <img src={catalogoRazonado} alt="Descripción de la imagen"  className="w-full h-full   object-cover transition-transform transform group-hover:scale-105" />
//                                 <p className="absolute  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100  mt-[-35px]">CATÁLOGO RAZONADO</p>
//                             </a>
//                     </figure>

                
//                         <figure class="w-[100px] h-[100px] mt-[20px]">
//                             <img src={carasXul} alt="Descripción de la imagen" className="w-full h-full hidden sm:flex " />
//                         </figure>

//                         <figure class="w-[100px] h-[100px] mt-[20px]">
//                             <img src={carasXul} alt="Descripción de la imagen" className="w-full h-full hidden sm:flex " />
//                         </figure>

                    
//                     <figure class="w-[100px] h-[100px] mt-[20px]">
//                             <a href="https://www.xulsolar.org.ar/biografia.html" className="relative group">
//                                 <img src={biografiaXul} alt="Descripción de la imagen" className=" relative w-full h-full rounded-[80px] object-cover transition-transform transform group-hover:scale-105"/>
//                                 <p className="absolute bottom-0 left-0 right-0 px-2 py-1 w-[200px]  text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100 text-center">BIBLIOGRAFÍA XUL SOLAR</p>
//                             </a>
//                     </figure>

//                         <figure class="w-[100px] h-[100px] mt-[20px]">
//                             <img src={serpienteXul} alt="Descripción de la imagen" className="w-full h-full hidden xl:block   " />
//                         </figure>
//                 </div>

                
//                 <div class="grid grid-cols-3 gap-10 border-2 border-gray-500 bg-gray-300 shrink-0 xl:mb-[100px]">

//                         <figure  class="w-[100px] h-[100px] mt-[20px]">
//                             <img src={firma8Xul} alt="Descripción de la imagen" className="w-full h-full hidden xl:block  " />
//                         </figure>


//                         <figure  class="w-[100px] h-[100px] mt-[20px]">
//                             <img src={firma8Xul} alt="Descripción de la imagen" className="w-full h-full hidden xl:block  " />
//                         </figure>

//                     <figure class=" w-[100px] h-[100px] mt-[10px]">
//                             <a href="https://www.xulsolar.org.ar/exposiciones.html" className="relative group">
//                                 <img src={exposiciones} alt="Descripción de la imagen"   className="w-full h-full rounded-[30px] object-cover transition-transform transform group-hover:scale-105"/>
//                                 <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">EXPOSICIONES</p>
//                             </a>
//                     </figure>

//                         <figure  class="w-[100px] h-[100px] mt-[20px]">
//                             <img src={firma8Xul} alt="Descripción de la imagen" className="w-full h-full hidden xl:block  " />
//                         </figure>

//                         <figure  class="w-[100px] h-[100px] mt-[20px]">
//                             <img src={firma8Xul} alt="Descripción de la imagen" className="w-full h-full hidden xl:block  " />
//                         </figure>

                
//                     <figure class=" w-[100px] h-[100px] mt-[20px]">
//                             <a href="https://www.xulsolar.org.ar/educacion.html" className="relative group">
//                                 <img src={educacion} alt="Descripción de la imagen"  className=" w-full h-full   object-cover transition-transform transform group-hover:scale-105" />
//                                 <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100 ">EDUCACIÓN</p>
//                             </a>
//                     </figure>

//                         <figure class="w-[100px] h-[100px] mt-[20px]">
//                             <img src={serpienteXul} alt="Descripción de la imagen" className="w-full h-full hidden xl:block   " />
//                         </figure>


//                 </div>
                
                
//                 <div class="grid grid-cols-3 mb-[100px]  mt-[-40px] gap-10 border-2 border-gray-500 bg-gray-300 shrink-0 xl:h-[700px]">

//                         <figure class="w-[100px] h-[100px] mt-[20px]">
//                                 <img src={serpienteXul} alt="Descripción de la imagen" className="w-full h-full hidden xl:block   " />
//                         </figure>

//                     <figure class=" w-[100px] h-[100px] mt-[20px]">
//                             <a href="https://www.xulsolar.org.ar/museo.html" className="relative group">
//                                 <img src={elMuseo} alt="Descripción de la imagen"   className="w-full h-full  object-cover transition-transform transform group-hover:scale-105"/>
//                                 <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">EL MUSEO</p>
//                             </a>
//                     </figure>

//                         <figure class="w-[100px] h-[100px] mt-[20px]">
//                             <img src={serpienteXul} alt="Descripción de la imagen" className="w-full h-full hidden xl:block   " />
//                         </figure>

//                         <figure class="w-[100px] h-[100px] mt-[20px]">
//                              <img src={serpienteXul} alt="Descripción de la imagen" className="w-full h-full hidden xl:block   " />
//                         </figure>

                
            
//                     <figure class="w-[100px] h-[100px] mt-[20px]" >
//                             <a href="https://www.xulsolar.org.ar/testimonios.html" className="relative group">
//                                 <img src={testimonio} alt="Descripción de la imagen"   className="w-full h-full  rounded-[10px] object-cover transition-transform transform group-hover:scale-105"/>
//                                 <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">TESTIMONIO</p>
//                             </a>    
//                     </figure>


//                         <figure  class="w-[100px] h-[100px] mt-[20px]">
//                             <img src={escafandraXul} alt="Descripción de la imagen" className="w-full h-full hidden xl:block  " />
//                         </figure>

//                         <figure class="w-[100px] h-[100px] mt-[20px]">
//                              <img src={serpienteXul} alt="Descripción de la imagen" className="w-full h-full hidden xl:block   " />
//                         </figure>
                 
//                 </div>
                
               
//             </div> 
            
//         </div>    