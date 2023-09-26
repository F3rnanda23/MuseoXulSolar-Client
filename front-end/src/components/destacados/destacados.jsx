
import  bibliografiaXul from '../../imagenes/destacados/bibliografiaXul.jpg';
import  biografiaXul from '../../imagenes/destacados/biografiaXul.jpg';
import  catalogoRazonado from '../../imagenes/destacados/catalogoRazonado.jpg';
import  coleccionPermanente from '../../imagenes/destacados/coleccionPermanente.jpg';
import  educacion from '../../imagenes/destacados/educacion.jpg';
import  elMuseo from '../../imagenes/destacados/elMuseo.jpg';
import  exposiciones from '../../imagenes/destacados/exposiciones.jpg';
import  testimonio from '../../imagenes/destacados/testimonio.jpg';
import  firma6Xul from '../../imagenes/destacados/firma6Xul.png';
import  firma8Xul from '../../imagenes/destacados/firma8Xul.png';
import  carasXul from '../../imagenes/destacados/carasXul.png';
import  serpienteXul from '../../imagenes/destacados/serpienteXul.png';
import  escafandraXul from '../../imagenes/destacados/escafandraXul.png';


const Destacados = () =>{
    return(

        <div class=" w-full xl:grid  xl:grid-cols-12  xl:border-2 border-gray-200 xl:bg-gray-200 xl:h-[600px] w-full xl:mt-0 xl:mb-0
                     2xl:grid-cols-12  2xl:border-2 border-gray-200 2xl:bg-gray-200 2xl:h-[600px] w-full  2xl:mt-0 2xl:mb-0
                     3xl:grid-cols-12  3xl:border-2 border-gray-200 3xl:bg-gray-200 3xl:h-[600px] w-full  3xl:mt-0 3xl:mb-0
                   
                    " >
             <div className="w-full sm:grid grid-cols-1 gap-10  border-2  bg-gray-200 
                            md:grid grid-cols-2 gap-10  border-2  bg-gray-200
                            xl:inline-block xl:h-[600px] w-full xl:bg-gray-200 xl:col-start-2 xl:col-span-10
                            2xl:inline-block 2xl:h-[600px] w-full 2xl:bg-gray-200 2xl:col-start-2 2xl:col-span-8
                            3xl:inline-block 3xl:h-[600px] w-full 3xl:bg-gray-200 3xl:col-start-2 3xl:col-span-10
                            
                             ">
                
                    

                <figure class=" hidden sm:hidden
                            xl:flex xl:w-[70px] xl:h-[50px] xl:relative 
                            ">
                        <img src={firma6Xul} alt="Descripción de la imagen" className=" w-full h-full " />
                </figure>


                <figure class="  xl:relative xl:inline-block xl:transition-transform xl:transform scale-100 xl:hover:z-10 xl:hover:scale-110 xl:z-1 xl:left-[20px] xl:top-[20px] xl:w-[250px] xl:h-[300px]">
                        <a href="https://www.xulsolar.org.ar/bibliografia.html" className="relative group">
                            <img src={bibliografiaXul} alt="Descripción de la imagen" className="  w-full h-full   object-cover transition-transform transform group-hover:scale-105   " />
                            <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">BIBLIOGRAFÍA</p>
                        </a>
                </figure>

                
                <figure class="xl:relative xl:inline-block xl:transition-transform xl:transform scale-100 xl:hover:z-10 xl:hover:scale-110 xl:z-1 xl:left-[280px] xl:bottom-[135px] xl:w-[300px] xl:h-[200px]">
                    <a href="https://www.xulsolar.org.ar/coleccion.html" className="relative group">
                            <img src={coleccionPermanente} alt="Descripción de la imagen"   className="w-full h-full  rounded-[50px] object-cover transition-transform transform group-hover:scale-105"/>
                        <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">COLECCIÓN PERMANENTE</p>
                    </a>
                </figure>


                
                <figure class="xl:relative xl:inline-block xl:transition-transform xl:transform scale-100 xl:hover:z-10 xl:hover:scale-110 xl:z-1 xl:right-[400px] xl:top-[230px] xl:w-[250px] xl:h-[230px]">
                        <a href="https://www.xulsolar.org.ar/catalogo.html" className="relative group">
                            <img src={catalogoRazonado} alt="Descripción de la imagen"  className="w-full h-full   object-cover transition-transform transform group-hover:scale-105" />
                            <p className="absolute  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100  mt-[-35px]">CATÁLOGO RAZONADO</p>
                        </a>
                </figure>

            
                    <figure class="hidden sm:hidden
                                xl:flex xl:w-[100px] xl:h-[100px] xl:top-[70px] xl:left-[10px] xl:relative">
                        <img src={carasXul} alt="Descripción de la imagen" className="w-full h-full hidden sm:flex " />
                    </figure>

                
                <figure class="xl:relative xl:inline-block xl:transition-transform xl:transform scale-100 xl:hover:z-10 xl:hover:scale-110 xl:z-1 xl:left-[150px] xl:bottom-[480px] xl:w-[200px] xl:h-[250px]">
                        <a href="https://www.xulsolar.org.ar/biografia.html" className="relative group">
                            <img src={biografiaXul} alt="Descripción de la imagen" className=" relative w-full h-full rounded-[80px] object-cover transition-transform transform group-hover:scale-105"/>
                            <p className="absolute bottom-0 left-0 right-0 px-2 py-1 w-[200px]  text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100 text-center">BIBLIOGRAFÍA XUL SOLAR</p>
                        </a>
                </figure>

                
                <figure class=" xl:relative xl:inline-block xl:transition-transform xl:transform scale-100 xl:hover:z-10 xl:hover:scale-110 xl:z-1 xl:left-[120px] xl:bottom-[420px] xl:w-[250px] xl:h-[400px]">
                        <a href="https://www.xulsolar.org.ar/exposiciones.html" className="relative group">
                            <img src={exposiciones} alt="Descripción de la imagen"   className="w-full h-full rounded-[30px] object-cover transition-transform transform group-hover:scale-105"/>
                            <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">EXPOSICIONES</p>
                        </a>
                </figure>

                
            
                <figure class=" xl:relative xl:inline-block xl:transition-transform xl:transform scale-100 xl:hover:z-10 xl:hover:scale-110 xl:z-1 xl:right-[80px] xl:bottom-[360px] xl:w-[600px] xl:h-[150px]">
                        <a href="https://www.xulsolar.org.ar/educacion.html" className="relative group">
                            <img src={educacion} alt="Descripción de la imagen"  className=" w-full h-full   object-cover transition-transform transform group-hover:scale-105" />
                            <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100 ">EDUCACIÓN</p>
                        </a>
                </figure>

                
                <figure class=" xl:relative xl:inline-block xl:transition-transform xl:transform scale-100 xl:hover:z-10 xl:hover:scale-110 xl:z-1 xl:left-[770px] xl:bottom-[820px] xl:w-[300px] xl:h-[500px]
                                2xl:w-[330px]
                                ">
                        <a href="https://www.xulsolar.org.ar/museo.html" className="relative group">
                            <img src={elMuseo} alt="Descripción de la imagen"   className="w-full h-full  object-cover transition-transform transform group-hover:scale-105"/>
                            <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">EL MUSEO</p>
                        </a>
                </figure>

                
                
                <figure class="hidden sm:hidden
                            xl:flex xl:w-[150px] xl:h-[80px] xl:bottom-[850px] xl:left-[450px] xl:relative">
                        <img src={serpienteXul} alt="Descripción de la imagen" className="w-full h-full hidden xl:block   " />
                </figure>

            
                <figure class="xl:relative xl:inline-block xl:transition-transform xl:transform scale-100 xl:hover:z-10 xl:hover:scale-110 xl:z-1 xl:left-[930px] xl:bottom-[1380px] xl:w-[300px] xl:h-[250px]
                                " >
                        <a href="https://www.xulsolar.org.ar/testimonios.html" className="relative group">
                            <img src={testimonio} alt="Descripción de la imagen"   className="w-full h-full  rounded-[10px] object-cover transition-transform transform group-hover:scale-105"/>
                            <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">TESTIMONIO</p>
                        </a>    
                </figure>


    
                <figure  class="hidden sm:hidden
                                xl:flex xl:w-[90px] xl:h-[50px] xl:bottom-[1450px] xl:left-[620px] xl:relative
                               ">
                    <img src={firma8Xul} alt="Descripción de la imagen" className="w-full h-full hidden xl:block  " />
                </figure>

                <figure  class="hidden sm:hidden
                                xl:flex xl:w-[150px] xl:h-[200px] xl:bottom-[1380px] xl:left-[1100px] xl:relative
                               ">
                        <img src={escafandraXul} alt="Descripción de la imagen" className="w-full h-full hidden xl:block  " />
                </figure>
                
            </div> 
            
        </div>    
          

       
    )

};

export default Destacados;







// import  bibliografiaXul from '../../imagenes/destacados/bibliografiaXul.jpg';
// import  biografiaXul from '../../imagenes/destacados/biografiaXul.jpg';
// import  catalogoRazonado from '../../imagenes/destacados/catalogoRazonado.jpg';
// import  coleccionPermanente from '../../imagenes/destacados/coleccionPermanente.jpg';
// import  educacion from '../../imagenes/destacados/educacion.jpg';
// import  elMuseo from '../../imagenes/destacados/elMuseo.jpg';
// import  exposiciones from '../../imagenes/destacados/exposiciones.jpg';
// import  testimonio from '../../imagenes/destacados/testimonio.jpg';
// import  firma6Xul from '../../imagenes/destacados/firma6Xul.png';
// import  firma8Xul from '../../imagenes/destacados/firma8Xul.png';
// import  carasXul from '../../imagenes/destacados/carasXul.png';
// import  serpienteXul from '../../imagenes/destacados/serpienteXul.png';
// import  escafandraXul from '../../imagenes/destacados/escafandraXul.png';


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








// <div class="xl:grid  xl:grid-cols-12 gap-4 xl:border-2 border-gray-500 xl:bg-gray-200">
// <div className="sm:grid grid-cols-1 gap-10  border-2  bg-gray-500 
//                md:grid grid-cols-2 gap-10  border-2  bg-gray-400 
//                 xl:inline-block xl:mt-0 xl:h-full  xl:bg-gray-200 xl:col-start-2 xl:col-span-10
//                 ">
   
       

//    <figure class=" hidden sm:hidden
//                xl:flex xl:w-[70px] xl:h-[50px] xl:relative  ">
//            <img src={firma6Xul} alt="Descripción de la imagen" className=" w-full h-full " />
//    </figure>





// import  bibliografiaXul from '../../imagenes/destacados/bibliografiaXul.jpg';
// import  biografiaXul from '../../imagenes/destacados/biografiaXul.jpg';
// import  catalogoRazonado from '../../imagenes/destacados/catalogoRazonado.jpg';
// import  coleccionPermanente from '../../imagenes/destacados/coleccionPermanente.jpg';
// import  educacion from '../../imagenes/destacados/educacion.jpg';
// import  elMuseo from '../../imagenes/destacados/elMuseo.jpg';
// import  exposiciones from '../../imagenes/destacados/exposiciones.jpg';
// import  testimonio from '../../imagenes/destacados/testimonio.jpg';
// import  firma6Xul from '../../imagenes/destacados/firma6Xul.png';
// import  firma8Xul from '../../imagenes/destacados/firma8Xul.png';
// import  carasXul from '../../imagenes/destacados/carasXul.png';
// import  serpienteXul from '../../imagenes/destacados/serpienteXul.png';
// import  escafandraXul from '../../imagenes/destacados/escafandraXul.png';


// const Destacados = () =>{
//     return(
//         <div class="
//                     xl:h-[600px] xl:w-full  xl:mt-[0px] xl:mb-[0px]" >

//             {/* <span className="flex items-center justify-center mt-[20px]"></span> */}
          
//              <div className="  
//                              xl:inline-block xl:mt-0 xl:h-[600px] xl:w-full xl:border-2 border-gray-300 xl:bg-gray-300 xl:relative">
                
                  
//                     <figure class=" xl:w-[70px] xl:h-[50px] xl:relative ">
//                         <img src={firma6Xul} alt="Descripción de la imagen" className=" w-full h-full hidden xl:block" />
//                     </figure>

//                     <figure class=" 
//                                     xl:relative xl:inline-block xl:transition-transform xl:transform scale-100 xl:hover:z-10 xl:hover:scale-110 xl:z-1 xl:left-[20px] xl:top-[20px] xl:w-[250px] xl:h-[300px]">
//                         <a href="https://www.xulsolar.org.ar/bibliografia.html" className="relative group">
//                             <img src={bibliografiaXul} alt="Descripción de la imagen" className="  w-full h-full   object-cover transition-transform transform group-hover:scale-105   " />
//                             <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">BIBLIOGRAFÍA</p>
//                         </a>
//                     </figure>
                    
//                     <figure class="
//                                     xl:relative xl:inline-block xl:transition-transform xl:transform scale-100 xl:hover:z-10 xl:hover:scale-110 xl:z-1 xl:left-[280px] xl:bottom-[135px] xl:w-[300px] xl:h-[200px]">
//                         <a href="https://www.xulsolar.org.ar/coleccion.html" className="relative group">
//                             <img src={coleccionPermanente} alt="Descripción de la imagen"   className="w-full h-full  rounded-[50px] object-cover transition-transform transform group-hover:scale-105"/>
//                             <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">COLECCIÓN PERMANENTE</p>
//                         </a>
//                     </figure>


                    
//                     <figure class="
//                                     xl:relative xl:inline-block xl:transition-transform xl:transform scale-100 xl:hover:z-10 xl:hover:scale-110 xl:z-1 xl:right-[400px] xl:top-[230px] xl:w-[250px] xl:h-[230px]">
//                         <a href="https://www.xulsolar.org.ar/catalogo.html" className="relative group">
//                             <img src={catalogoRazonado} alt="Descripción de la imagen"  className="w-full h-full   object-cover transition-transform transform group-hover:scale-105" />
//                             <p className="absolute  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100  mt-[-35px]">CATÁLOGO RAZONADO</p>
//                         </a>
//                     </figure>

                
//                      <figure class="xl:w-[100px] xl:h-[100px] xl:top-[70px] xl:left-[10px] xl:relative">
//                         <img src={carasXul} alt="Descripción de la imagen" className="w-full h-full hidden xl:block " />
//                     </figure>

                    
//                     <figure class="
//                                     xl:relative xl:inline-block xl:transition-transform xl:transform scale-100 xl:hover:z-10 xl:hover:scale-110 xl:z-1 xl:left-[150px] xl:bottom-[480px] xl:w-[200px] xl:h-[250px]">
//                         <a href="https://www.xulsolar.org.ar/biografia.html" className="relative group">
//                             <img src={biografiaXul} alt="Descripción de la imagen" className=" relative w-full h-full rounded-[80px] object-cover transition-transform transform group-hover:scale-105"/>
//                             <p className="absolute bottom-0 left-0 right-0 px-2 py-1 w-[200px]  text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100 text-center">BIBLIOGRAFÍA XUL SOLAR</p>
//                         </a>
//                     </figure>
                   
//                     <figure class="
//                                     xl:relative xl:inline-block xl:transition-transform xl:transform scale-100 xl:hover:z-10 xl:hover:scale-110 xl:z-1 xl:left-[120px] xl:bottom-[420px] xl:w-[250px] xl:h-[400px]">
//                         <a href="https://www.xulsolar.org.ar/exposiciones.html" className="relative group">
//                             <img src={exposiciones} alt="Descripción de la imagen"   className="w-full h-full rounded-[30px] object-cover transition-transform transform group-hover:scale-105"/>
//                             <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">EXPOSICIONES</p>
//                         </a>
//                     </figure>

                   
                
//                     <figure class="
//                                     xl:relative xl:inline-block xl:transition-transform xl:transform scale-100 xl:hover:z-10 xl:hover:scale-110 xl:z-1 xl:right-[80px] xl:bottom-[360px] xl:w-[700px] xl:h-[150px]">
//                         <a href="https://www.xulsolar.org.ar/educacion.html" className="relative group">
//                             <img src={educacion} alt="Descripción de la imagen"  className=" w-full h-full   object-cover transition-transform transform group-hover:scale-105" />
//                             <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100 ">EDUCACIÓN</p>
//                         </a>
//                     </figure>

                    
//                     <figure class="
//                                     xl:relative xl:inline-block xl:transition-transform xl:transform scale-100 xl:hover:z-10 xl:hover:scale-110 xl:z-1 xl:left-[770px] xl:bottom-[820px] xl:w-[300px] xl:h-[500px]">
//                         <a href="https://www.xulsolar.org.ar/museo.html" className="relative group">
//                             <img src={elMuseo} alt="Descripción de la imagen"   className="w-full h-full  object-cover transition-transform transform group-hover:scale-105"/>
//                             <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">EL MUSEO</p>
//                         </a>
//                     </figure>

                    
                    
//                     <figure class="xl:w-[150px] xl:h-[80px] xl:bottom-[850px] xl:left-[450px] xl:relative">
//                         <img src={serpienteXul} alt="Descripción de la imagen" className="w-full h-full hidden xl:block   " />
//                     </figure>

                
//                     <figure class="
//                                     xl:relative xl:inline-block xl:transition-transform xl:transform scale-100 xl:hover:z-10 xl:hover:scale-110 xl:z-1 xl:left-[930px] xl:bottom-[1380px] xl:w-[300px] xl:h-[250px]" >
//                         <a href="https://www.xulsolar.org.ar/testimonios.html" className="relative group">
//                             <img src={testimonio} alt="Descripción de la imagen"   className="w-full h-full  rounded-[10px] object-cover transition-transform transform group-hover:scale-105"/>
//                             <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">TESTIMONIO</p>
//                         </a>    
//                     </figure>


        
//                     <figure  class="xl:w-[90px] xl:h-[50px] xl:bottom-[1450px] xl:left-[620px] xl:relative">
//                         <img src={firma8Xul} alt="Descripción de la imagen" className="w-full h-full hidden xl:block  " />
//                     </figure>

//                     <figure  class="xl:w-[150px] xl:h-[200px] xl:bottom-[1380px] xl:left-[1100px] xl:relative">
//                         <img src={escafandraXul} alt="Descripción de la imagen" className="w-full h-full hidden xl:block  " />
//                     </figure>

                

                
//             </div> 

//         </div>
       
//     )

// };

// export default Destacados;






// import  bibliografiaXul from '../../imagenes/destacados/bibliografiaXul.jpg';
// import  biografiaXul from '../../imagenes/destacados/biografiaXul.jpg';
// import  catalogoRazonado from '../../imagenes/destacados/catalogoRazonado.jpg';
// import  coleccionPermanente from '../../imagenes/destacados/coleccionPermanente.jpg';
// import  educacion from '../../imagenes/destacados/educacion.jpg';
// import  elMuseo from '../../imagenes/destacados/elMuseo.jpg';
// import  exposiciones from '../../imagenes/destacados/exposiciones.jpg';
// import  testimonio from '../../imagenes/destacados/testimonio.jpg';
// import  firma6Xul from '../../imagenes/destacados/firma6Xul.png';
// import  firma8Xul from '../../imagenes/destacados/firma8Xul.png';
// import  carasXul from '../../imagenes/destacados/carasXul.png';
// import  serpienteXul from '../../imagenes/destacados/serpienteXul.png';
// import  escafandraXul from '../../imagenes/destacados/escafandraXul.png';


// const Destacados = () =>{
//     return(
//         <div class="h-[550px] w-[100%] mt-[0px] mb-[0px]" >

//             {/* <span className="flex items-center justify-center mt-[20px]"></span> */}
          
//              <div className="inline-block mt-0 h-[600px] w-full border-2 border-gray-300 bg-gray-300 relative">
                
                  
//                     <figure class="w-[90px] h-[50px] relative">
//                         <img src={firma6Xul} alt="Descripción de la imagen" className=" w-[70px] h-[50px]    " />
//                     </figure>

//                     <figure class="relative inline-block transition-transform transform scale-100 hover:z-10 hover:scale-110 z-1 left-[20px] top-[20px] w-[250px] h-[300px]">
//                         <a href="https://www.xulsolar.org.ar/bibliografia.html" className="relative group">
//                             <img src={bibliografiaXul} alt="Descripción de la imagen" className="  w-[250px] h-[300px]   object-cover transition-transform transform group-hover:scale-105   " />
//                             <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">BIBLIOGRAFÍA</p>
//                         </a>
//                     </figure>
                    
//                     <figure class="relative inline-block transition-transform transform scale-100 hover:z-10 hover:scale-110 z-1 left-[280px] bottom-[135px] w-[300px] h-[200px]">
//                         <a href="https://www.xulsolar.org.ar/coleccion.html" className="relative group">
//                             <img src={coleccionPermanente} alt="Descripción de la imagen"   className="w-[300px] h-[200px]  rounded-[50px] object-cover transition-transform transform group-hover:scale-105"/>
//                             <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">COLECCIÓN PERMANENTE</p>
//                         </a>
//                     </figure>


                    
//                     <figure class="relative inline-block transition-transform transform scale-100 hover:z-10 hover:scale-110 z-1 right-[400px] top-[230px] w-[250px] h-[230px]">
//                         <a href="https://www.xulsolar.org.ar/catalogo.html" className="relative group">
//                             <img src={catalogoRazonado} alt="Descripción de la imagen"  className="w-[250px] h-[230px]   object-cover transition-transform transform group-hover:scale-105" />
//                             <p className="absolute  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100  mt-[-35px]">CATÁLOGO RAZONADO</p>
//                         </a>
//                     </figure>

                
//                      <figure class="w-[100px] h-[100px] top-[70px] left-[10px] relative">
//                         <img src={carasXul} alt="Descripción de la imagen" className="w-[100px] h-[100px] " />
//                     </figure>

                    
//                     <figure class="relative inline-block transition-transform transform scale-100 hover:z-10 hover:scale-110 z-1 left-[150px] bottom-[480px] w-[200px] h-[250px]">
//                         <a href="https://www.xulsolar.org.ar/biografia.html" className="relative group">
//                             <img src={biografiaXul} alt="Descripción de la imagen" className=" relative w-[200px] h-[250px] rounded-[80px] object-cover transition-transform transform group-hover:scale-105"/>
//                             <p className="absolute bottom-0 left-0 right-0 px-2 py-1 w-[200px]  text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100 text-center">BIBLIOGRAFÍA XUL SOLAR</p>
//                         </a>
//                     </figure>
                   
//                     <figure class="relative inline-block transition-transform transform scale-100 hover:z-10 hover:scale-110 z-1 left-[120px] bottom-[420px] w-[250px] h-[400px]">
//                         <a href="https://www.xulsolar.org.ar/exposiciones.html" className="relative group">
//                             <img src={exposiciones} alt="Descripción de la imagen"   className="w-[300px] h-[400px] rounded-[30px] object-cover transition-transform transform group-hover:scale-105"/>
//                             <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">EXPOSICIONES</p>
//                         </a>
//                     </figure>

                   
                
//                     <figure class="relative inline-block transition-transform transform scale-100 hover:z-10 hover:scale-110 z-1 right-[80px] bottom-[360px] w-[700px] h-[150px]">
//                         <a href="https://www.xulsolar.org.ar/educacion.html" className="relative group">
//                             <img src={educacion} alt="Descripción de la imagen"  className=" w-[700px] h-[150px]   object-cover transition-transform transform group-hover:scale-105" />
//                             <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100 ">EDUCACIÓN</p>
//                         </a>
//                     </figure>

                    
//                     <figure class="relative inline-block transition-transform transform scale-100 hover:z-10 hover:scale-110 z-1 left-[770px] bottom-[820px] w-[300px] h-[500px]">
//                         <a href="https://www.xulsolar.org.ar/museo.html" className="relative group">
//                             <img src={elMuseo} alt="Descripción de la imagen"   className="w-[300px] h-[500px]  object-cover transition-transform transform group-hover:scale-105"/>
//                             <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">EL MUSEO</p>
//                         </a>
//                     </figure>

                    
                    
//                     <figure class="w-[150px] h-[80px] bottom-[850px] left-[450px] relative">
//                         <img src={serpienteXul} alt="Descripción de la imagen" className="w-[150px] h-[80px]  " />
//                     </figure>

                
//                     <figure class="relative inline-block transition-transform transform scale-100 hover:z-10 hover:scale-110 z-1 left-[930px] bottom-[1380px] w-[300px] h-[250px]" >
//                         <a href="https://www.xulsolar.org.ar/testimonios.html" className="relative group">
//                             <img src={testimonio} alt="Descripción de la imagen"   className="w-[300px] h-[250px]  rounded-[10px] object-cover transition-transform transform group-hover:scale-105"/>
//                             <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">TESTIMONIO</p>
//                         </a>    
//                     </figure>


        
//                     <figure  class="w-[90px] h-[50px] bottom-[1450px] left-[620px] relative">
//                         <img src={firma8Xul} alt="Descripción de la imagen" className="w-[90px] h-[50px] " />
//                     </figure>

//                     <figure  class="w-[150px] h-[200px] bottom-[1380px] left-[1100px] relative">
//                         <img src={escafandraXul} alt="Descripción de la imagen" className="w-[150px] h-[200px] " />
//                     </figure>

                

                
//             </div> 

//         </div>
       
//     )

// };

// export default Destacados;




