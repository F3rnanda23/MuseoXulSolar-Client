
import  bibliografia from '../../imagenes/destacados/bibliografia.png';
import  biografiaXulSolar from '../../imagenes/destacados/biografiaXulSolar.png';
import  catalogoRazonado from '../../imagenes/destacados/catalogoRazonado.png';
import  coleccionPermanente from '../../imagenes/destacados/coleccionPermanente.png';
import  educacion from '../../imagenes/destacados/educacion.png';
import  elMuseo from '../../imagenes/destacados/elMuseo.png';
import  exposiciones from '../../imagenes/destacados/exposiciones.png';
import  testimonio from '../../imagenes/destacados/testimonio.png';

const Destacados = () =>{
    return(
        <div className="overflow-x-hidden" >

            <span className="flex items-center justify-center mt-[20px]">DESTACADO</span>

            
            <div className="ml-[30px] mr-[50px] mt-[10px] border-solid border-2 border-white-500 bg-gray-100">
                <div className="grid grid-cols-4 gap-4 grid-rows-auto mr-[30px] ml-[30px] mt-[20px] mb-[20px] " >
                    
                    <div>
                        <a href="https://www.xulsolar.org.ar/bibliografia.html" className="relative group">
                            <img src={bibliografia} alt="Descripción de la imagen" className="w-full h-[400px] mt-[65px] object-cover transition-transform transform group-hover:scale-105" />
                            <p className="absolute bottom-0 left-0 w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">BIBLIOGRAFÍA</p>
                        </a>
                    </div>
                    
                    <div>
                        <a href="https://www.xulsolar.org.ar/biografia.html" className="relative group">
                            <img src={biografiaXulSolar} alt="Descripción de la imagen" className="w-full h-60 object-cover transition-transform transform group-hover:scale-105"/>
                            <p className="absolute bottom-0 left-0 right-0 px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100 text-center">BIBLIOGRAFÍA XUL SOLAR</p>
                        </a>
                    </div>
                    
                    <div>
                        <a href="https://www.xulsolar.org.ar/catalogo.html" className="relative group">
                            <img src={catalogoRazonado} alt="Descripción de la imagen"  className="w-full h-[150px] mt-[100px] object-cover transition-transform transform group-hover:scale-105" />
                            <p className="absolute bottom-0 left-0 w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">CATÁLOGO RAZONADO</p>
                        </a>
                    </div>
                

                    <div>
                        <a href="https://www.xulsolar.org.ar/coleccion.html" className="relative group">
                            <img src={coleccionPermanente} alt="Descripción de la imagen"   className="w-full h-[400px] mt-[50px] object-cover transition-transform transform group-hover:scale-105"/>
                            <p className="absolute bottom-0 left-0 w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">COLECCIÓN PERMANENTE</p>
                        </a>
                    </div>
                

                    <div>
                        <a href="https://www.xulsolar.org.ar/educacion.html" className="relative group">
                            <img src={educacion} alt="Descripción de la imagen"  className="w-full h-[280px] mt-[-1px] object-cover transition-transform transform group-hover:scale-105" />
                            <p className="absolute bottom-0 left-0 w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">EDUCACIÓN</p>
                        </a>
                    </div>
                

                    <div>
                        <a href="https://www.xulsolar.org.ar/museo.html" className="relative group">
                            <img src={elMuseo} alt="Descripción de la imagen"   className="w-full h-[400px] mt-[-228px] object-cover transition-transform transform group-hover:scale-105"/>
                            <p className="absolute bottom-0 left-0 w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">EL MUSEO</p>
                        </a>
                    </div>
                    
                    <div>
                        <a href="https://www.xulsolar.org.ar/exposiciones.html" className="relative group">
                            <img src={exposiciones} alt="Descripción de la imagen"   className="w-full h-[500px] mt-[-215px] object-cover transition-transform transform group-hover:scale-105"/>
                            <p className="absolute bottom-0 left-0 w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">EXPOSICIONES</p>
                        </a>
                    </div>
                
                    <div>
                        <a href="https://www.xulsolar.org.ar/testimonios.html" className="relative group">
                            <img src={testimonio} alt="Descripción de la imagen"   className="w-full h-60 mt-[-18px] object-cover transition-transform transform group-hover:scale-105"/>
                            <p className="absolute bottom-0 left-0 w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">TESTIMONIO</p>
                        </a>    
                    </div>
                

                </div>
            </div>

        </div>
       
    )

};

export default Destacados;




// import  bibliografia from '../../imagenes/destacados/bibliografia.png';
// import  biografiaXulSolar from '../../imagenes/destacados/biografiaXulSolar.png';
// import  catalogoRazonado from '../../imagenes/destacados/catalogoRazonado.png';
// import  coleccionPermanente from '../../imagenes/destacados/coleccionPermanente.png';
// import  educacion from '../../imagenes/destacados/educacion.png';
// import  elMuseo from '../../imagenes/destacados/elMuseo.png';
// import  exposiciones from '../../imagenes/destacados/exposiciones.png';
// import  testimonio from '../../imagenes/destacados/testimonio.png';

// const Destacados = () =>{
//     return(
//         <div className="grid grid-cols-4 gap-4" >

//             <a  href="https://www.xulsolar.org.ar/bibliografia.html" >
//                 <img src={bibliografia} alt="Descripción de la imagen" className="h-96" />
//                 <p>BIBLIOGRAFÍA</p>
//             </a>

//             <a href="https://www.xulsolar.org.ar/biografia.html" >
//                 <img src={biografiaXulSolar} alt="Descripción de la imagen"/>
//                 <p>BIOGRAFÍA XUL SOLAR</p>
//             </a>


//             <a href="https://www.xulsolar.org.ar/catalogo.html">
//                 <img src={catalogoRazonado} alt="Descripción de la imagen" className="h-60" />
//                 <p>CATÁLOGO RAZONADO</p>
//             </a>


//             <a href="https://www.xulsolar.org.ar/coleccion.html">
//                 <img src={coleccionPermanente} alt="Descripción de la imagen"/>
//                 <p>COLECCIÓN PERMANENTE</p>
//             </a>


//             <a href="https://www.xulsolar.org.ar/educacion.html">
//                 <img src={educacion} alt="Descripción de la imagen" className="h-72" />
//                 <p>EDUCACIÓN</p>
//             </a>


//             <a href="https://www.xulsolar.org.ar/museo.html">
//                 <img src={elMuseo} alt="Descripción de la imagen"/>
//                 <p>EL MUSEO</p>
//             </a>

//             <a href="https://www.xulsolar.org.ar/exposiciones.html">
//                 <img src={exposiciones} alt="Descripción de la imagen"/>
//                 <p>EXPOSICIONES</p>
//             </a>

//             <a href="https://www.xulsolar.org.ar/testimonios.html">
//                 <img src={testimonio} alt="Descripción de la imagen"/>
//                 <p>TESTIMONIO</p>
//             </a>


//         </div>
//     )

// };

// export default Destacados;