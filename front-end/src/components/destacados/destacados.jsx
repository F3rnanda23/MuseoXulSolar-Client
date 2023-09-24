

import  bibliografiaXul from '../../imagenes/destacados/bibliografiaXul.jpg';
import  biografiaXul from '../../imagenes/destacados/biografiaXul.jpg';
import  catalogoRazonado from '../../imagenes/destacados/catalogoRazonado.jpg';
import  coleccionPermanente from '../../imagenes/destacados/coleccionPermanente.jpg';
import  educacion from '../../imagenes/destacados/educacion.jpg';
import  elMuseo from '../../imagenes/destacados/elMuseo.jpg';
import  exposiciones from '../../imagenes/destacados/exposiciones.jpg';
import  testimonio from '../../imagenes/destacados/testimonio.jpg';
import  firma6Xul from '../../imagenes/destacados/firma6Xul.png';
import  personasXul from '../../imagenes/destacados/personasXul.png';
import  firma8Xul from '../../imagenes/destacados/firma8Xul.png';
import  carasXul from '../../imagenes/destacados/carasXul.png';
import  serpienteXul from '../../imagenes/destacados/serpienteXul.png';
import  escafandraXul from '../../imagenes/destacados/escafandraXul.png';
import style from './destacados.module.css'

const Destacados = () =>{
    return(
        <div class="h-[550px] w-[100%] mt-[0px] mb-[0px]" >

            {/* <span className="flex items-center justify-center mt-[20px]"></span> */}
          
             <div className="inline-block mt-0 h-[600px] w-full border-2 border-gray-300 bg-gray-300 relative">
                
                  
                    <figure class="w-[90px] h-[50px] relative">
                        <img src={firma6Xul} alt="Descripción de la imagen" className=" w-[70px] h-[50px]    " />
                    </figure>

                    <figure class="relative inline-block transition-transform transform scale-100 hover:z-10 hover:scale-110 z-1 left-[20px] top-[20px] w-[250px] h-[300px]">
                        <a href="https://www.xulsolar.org.ar/bibliografia.html" className="relative group">
                            <img src={bibliografiaXul} alt="Descripción de la imagen" className="  w-[250px] h-[300px]   object-cover transition-transform transform group-hover:scale-105   " />
                            <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">BIBLIOGRAFÍA</p>
                        </a>
                    </figure>
                    
                    <figure class="relative inline-block transition-transform transform scale-100 hover:z-10 hover:scale-110 z-1 left-[280px] bottom-[135px] w-[300px] h-[200px]">
                        <a href="https://www.xulsolar.org.ar/coleccion.html" className="relative group">
                            <img src={coleccionPermanente} alt="Descripción de la imagen"   className="w-[300px] h-[200px]  rounded-[50px] object-cover transition-transform transform group-hover:scale-105"/>
                            <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">COLECCIÓN PERMANENTE</p>
                        </a>
                    </figure>


                    
                    <figure class="relative inline-block transition-transform transform scale-100 hover:z-10 hover:scale-110 z-1 right-[400px] top-[230px] w-[250px] h-[230px]">
                        <a href="https://www.xulsolar.org.ar/catalogo.html" className="relative group">
                            <img src={catalogoRazonado} alt="Descripción de la imagen"  className="w-[250px] h-[230px]   object-cover transition-transform transform group-hover:scale-105" />
                            <p className="absolute  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100  mt-[-35px]">CATÁLOGO RAZONADO</p>
                        </a>
                    </figure>

                
                     <figure class="w-[100px] h-[100px] top-[70px] left-[10px] relative">
                        <img src={carasXul} alt="Descripción de la imagen" className="w-[100px] h-[100px] " />
                    </figure>

                    
                    <figure class="relative inline-block transition-transform transform scale-100 hover:z-10 hover:scale-110 z-1 left-[150px] bottom-[480px] w-[200px] h-[250px]">
                        <a href="https://www.xulsolar.org.ar/biografia.html" className="relative group">
                            <img src={biografiaXul} alt="Descripción de la imagen" className=" relative w-[200px] h-[250px] rounded-[80px] object-cover transition-transform transform group-hover:scale-105"/>
                            <p className="absolute bottom-0 left-0 right-0 px-2 py-1 w-[200px]  text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100 text-center">BIBLIOGRAFÍA XUL SOLAR</p>
                        </a>
                    </figure>
                   
                    <figure class="relative inline-block transition-transform transform scale-100 hover:z-10 hover:scale-110 z-1 left-[120px] bottom-[420px] w-[250px] h-[400px]">
                        <a href="https://www.xulsolar.org.ar/exposiciones.html" className="relative group">
                            <img src={exposiciones} alt="Descripción de la imagen"   className="w-[300px] h-[400px] rounded-[30px] object-cover transition-transform transform group-hover:scale-105"/>
                            <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">EXPOSICIONES</p>
                        </a>
                    </figure>

                   
                
                    <figure class="relative inline-block transition-transform transform scale-100 hover:z-10 hover:scale-110 z-1 right-[80px] bottom-[360px] w-[700px] h-[150px]">
                        <a href="https://www.xulsolar.org.ar/educacion.html" className="relative group">
                            <img src={educacion} alt="Descripción de la imagen"  className=" w-[700px] h-[150px]   object-cover transition-transform transform group-hover:scale-105" />
                            <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100 ">EDUCACIÓN</p>
                        </a>
                    </figure>

                    
                    <figure class="relative inline-block transition-transform transform scale-100 hover:z-10 hover:scale-110 z-1 left-[770px] bottom-[820px] w-[300px] h-[500px]">
                        <a href="https://www.xulsolar.org.ar/museo.html" className="relative group">
                            <img src={elMuseo} alt="Descripción de la imagen"   className="w-[300px] h-[500px]  object-cover transition-transform transform group-hover:scale-105"/>
                            <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">EL MUSEO</p>
                        </a>
                    </figure>

                    
                    
                    <figure class="w-[150px] h-[80px] bottom-[850px] left-[450px] relative">
                        <img src={serpienteXul} alt="Descripción de la imagen" className="w-[150px] h-[80px]  " />
                    </figure>

                
                    <figure class="relative inline-block transition-transform transform scale-100 hover:z-10 hover:scale-110 z-1 left-[930px] bottom-[1380px] w-[300px] h-[250px]" >
                        <a href="https://www.xulsolar.org.ar/testimonios.html" className="relative group">
                            <img src={testimonio} alt="Descripción de la imagen"   className="w-[300px] h-[250px]  rounded-[10px] object-cover transition-transform transform group-hover:scale-105"/>
                            <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">TESTIMONIO</p>
                        </a>    
                    </figure>


        
                    <figure  class="w-[90px] h-[50px] bottom-[1450px] left-[620px] relative">
                        <img src={firma8Xul} alt="Descripción de la imagen" className="w-[90px] h-[50px] " />
                    </figure>

                    <figure  class="w-[150px] h-[200px] bottom-[1380px] left-[1100px] relative">
                        <img src={escafandraXul} alt="Descripción de la imagen" className="w-[150px] h-[200px] " />
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
// import  personasXul from '../../imagenes/destacados/personasXul.png';
// import  firma8Xul from '../../imagenes/destacados/firma8Xul.png';
// import  carasXul from '../../imagenes/destacados/carasXul.png';
// import  serpienteXul from '../../imagenes/destacados/serpienteXUl.png';
// import  escafandraXul from '../../imagenes/destacados/escafandraXul.png';
// import style from './destacados.module.css'

// const Destacados = () =>{
//     return(
//         <div className={style.containerPrincipal} >

//             {/* <span className="flex items-center justify-center mt-[20px]"></span> */}
          
//              <div className={style.containerDestadado}>
                
                  
//                     <figure className={style.firma6Xul} >
//                         <img src={firma6Xul} alt="Descripción de la imagen" className=" w-[70px] h-[50px]    " />
//                     </figure>

//                     <figure className={`${style.containerImagen} ${style.bibliografia}`}>
//                         <a href="https://www.xulsolar.org.ar/bibliografia.html" className="relative group">
//                             <img src={bibliografiaXul} alt="Descripción de la imagen" className="  w-[250px] h-[300px]   object-cover transition-transform transform group-hover:scale-105   " />
//                             <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">BIBLIOGRAFÍA</p>
//                         </a>
//                     </figure>
                    
//                     <figure className={`${style.containerImagen} ${style.coleccion}`}>
//                         <a href="https://www.xulsolar.org.ar/coleccion.html" className="relative group">
//                             <img src={coleccionPermanente} alt="Descripción de la imagen"   className="w-[0px] h-[50px]  rounded-[50px] object-cover transition-transform transform group-hover:scale-105"/>
//                             <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">COLECCIÓN PERMANENTE</p>
//                         </a>
//                     </figure>


                    
//                     <figure className={`${style.containerImagen} ${style.catalogo}`}>
//                         <a href="https://www.xulsolar.org.ar/catalogo.html" className="relative group">
//                             <img src={catalogoRazonado} alt="Descripción de la imagen"  className="w-[250px] h-[230px]   object-cover transition-transform transform group-hover:scale-105" />
//                             <p className="absolute  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100  mt-[-35px]">CATÁLOGO RAZONADO</p>
//                         </a>
//                     </figure>

                
//                      <figure className={style.carasXul}>
//                         <img src={carasXul} alt="Descripción de la imagen" className="w-[100px] h-[100px] " />
//                     </figure>

                    
//                     <figure className={`${style.containerImagen} ${style.biografiaXul}`}>
//                         <a href="https://www.xulsolar.org.ar/biografia.html" className="relative group">
//                             <img src={biografiaXul} alt="Descripción de la imagen" className=" relative w-[200px] h-[250px] rounded-[80px] object-cover transition-transform transform group-hover:scale-105"/>
//                             <p className="absolute bottom-0 left-0 right-0 px-2 py-1 w-[200px]  text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100 text-center">BIBLIOGRAFÍA XUL SOLAR</p>
//                         </a>
//                     </figure>
                   
//                     <figure className={`${style.containerImagen} ${style.exposiciones}`}>
//                         <a href="https://www.xulsolar.org.ar/exposiciones.html" className="relative group">
//                             <img src={exposiciones} alt="Descripción de la imagen"   className="w-[300px] h-[400px] rounded-[30px] object-cover transition-transform transform group-hover:scale-105"/>
//                             <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">EXPOSICIONES</p>
//                         </a>
//                     </figure>

                   
                
//                     <figure className={`${style.containerImagen} ${style.educacion}`}>
//                         <a href="https://www.xulsolar.org.ar/educacion.html" className="relative group">
//                             <img src={educacion} alt="Descripción de la imagen"  className=" w-[700px] h-[150px]   object-cover transition-transform transform group-hover:scale-105" />
//                             <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100 ">EDUCACIÓN</p>
//                         </a>
//                     </figure>

                    
//                     <figure className={`${style.containerImagen} ${style.elMuseo}`}>
//                         <a href="https://www.xulsolar.org.ar/museo.html" className="relative group">
//                             <img src={elMuseo} alt="Descripción de la imagen"   className="w-[300px] h-[500px]  object-cover transition-transform transform group-hover:scale-105"/>
//                             <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">EL MUSEO</p>
//                         </a>
//                     </figure>

                    
                    
//                     <figure className={style.serpienteXul}>
//                         <img src={serpienteXul} alt="Descripción de la imagen" className="w-[150px] h-[80px]  " />
//                     </figure>

                
//                     <figure className={`${style.containerImagen} ${style.testimonio}`} >
//                         <a href="https://www.xulsolar.org.ar/testimonios.html" className="relative group">
//                             <img src={testimonio} alt="Descripción de la imagen"   className="w-[300px] h-[250px]  rounded-[10px] object-cover transition-transform transform group-hover:scale-105"/>
//                             <p className="absolute bottom-0 left-0  px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">TESTIMONIO</p>
//                         </a>    
//                     </figure>


        
//                     <figure  className={style.firma8Xul}>
//                         <img src={firma8Xul} alt="Descripción de la imagen" className="w-[90px] h-[50px] " />
//                     </figure>

//                     <figure  className={style.escafandraXul}>
//                         <img src={escafandraXul} alt="Descripción de la imagen" className="w-[150px] h-[200px] " />
//                     </figure>

                

                
//             </div> 

//         </div>
       
//     )

// };

// export default Destacados;




