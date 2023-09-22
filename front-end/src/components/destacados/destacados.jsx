
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

const Destacados = () =>{
    return(
        <div className=" h-[700px] bg-gray-200" >

            {/* <span className="flex items-center justify-center mt-[20px]"></span> */}
          
             <div className=" mt-[-40px] ml-[30px] mr-[50px] h-[800px] border-solid border-2 border-gray-200 bg-gray-200 ">
                <div className="grid grid-cols-4 grid-rows-4 gap-4 mr-[30px] ml-[30px] mt-[20px] mb-[20px]" >
                  
                    <div className="bg-gray-200" >
                        <img src={firma6Xul} alt="Descripción de la imagen" className=" w-[100px] h-[60px] mt-[10px] ml-[50px]  " />
                    </div>

                    <div className="relative  h-[300px] mt-[65px]  ">
                        <a href="https://www.xulsolar.org.ar/bibliografia.html" className="relative group">
                            <img src={bibliografiaXul} alt="Descripción de la imagen" className="  w-full h-[300px] mt-[0px]  object-cover transition-transform transform group-hover:scale-105   " />
                            <p className="absolute bottom-0 left-0 w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">BIBLIOGRAFÍA</p>
                        </a>
                    </div>
                    
                    <div className="relative h-[200px] mt-[-15px]">
                        <a href="https://www.xulsolar.org.ar/biografia.html" className="relative group">
                            <img src={biografiaXul} alt="Descripción de la imagen" className="w-full h-[250px]  object-cover transition-transform transform group-hover:scale-105"/>
                            <p className="absolute bottom-0 left-0 right-0 px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100 text-center">BIBLIOGRAFÍA XUL SOLAR</p>
                        </a>
                    </div>

                    <div className="mt-[20px]  ml-[60px]">
                        <img src={personasXul} alt="Descripción de la imagen" className=" w-[180px] h-[100px] mt-[0px] ml-[30px]" />
                    </div>
                    
                    <div className="relative h-[150px] mt-[-270px]">
                        <a href="https://www.xulsolar.org.ar/catalogo.html" className="relative group">
                            <img src={catalogoRazonado} alt="Descripción de la imagen"  className="w-full h-[250px] mt-[0px] object-cover transition-transform transform group-hover:scale-105" />
                            <p className="absolute  w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100  mt-[-35px]">CATÁLOGO RAZONADO</p>
                        </a>
                    </div>
                
                     <div className="mt-[5px] ml-[60px]">
                        <img src={carasXul} alt="Descripción de la imagen" className="w-[120px] h-[80px] mt-[0px]" />
                    </div>
                    

                    <div className="relative h-[200px] mt-[-135px] ">
                        <a href="https://www.xulsolar.org.ar/coleccion.html" className="relative group">
                            <img src={coleccionPermanente} alt="Descripción de la imagen"   className="w-full h-[200px] mt-[0px] object-cover transition-transform transform group-hover:scale-105"/>
                            <p className="absolute bottom-0 left-0 w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">COLECCIÓN PERMANENTE</p>
                        </a>
                    </div>

                    <div className="relative   h-[300px] mt-[-205px]">
                        <a href="https://www.xulsolar.org.ar/exposiciones.html" className="relative group">
                            <img src={exposiciones} alt="Descripción de la imagen"   className="w-full h-[300px] mt-[0px] object-cover transition-transform transform group-hover:scale-105"/>
                            <p className="absolute bottom-0 left-0 w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">EXPOSICIONES</p>
                        </a>
                    </div>

                   
                
                    <div className="relative  h-[180px]  mt-[-470px]">
                        <a href="https://www.xulsolar.org.ar/educacion.html" className="relative group">
                            <img src={educacion} alt="Descripción de la imagen"  className="w-full h-[180px] mt-[85px] object-cover transition-transform transform group-hover:scale-105" />
                            <p className="absolute bottom-0 left-0 w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100 ">EDUCACIÓN</p>
                        </a>
                    </div>

                    
                    <div className="relative  h-[300px] mt-[-270px] ">
                        <a href="https://www.xulsolar.org.ar/museo.html" className="relative group">
                            <img src={elMuseo} alt="Descripción de la imagen"   className="w-full h-[250px] mt-[0px] object-cover transition-transform transform group-hover:scale-105"/>
                            <p className="absolute bottom-0 left-0 w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">EL MUSEO</p>
                        </a>
                    </div>

                    
                    
                    <div className="relative  h-[100px] mt-[-270px] ml-[90px]">
                        <img src={serpienteXul} alt="Descripción de la imagen" className="w-[150px] h-[70px] mt-[0px]" />
                    </div>

                
                    <div className="relative h-[200px] mt-[-270px]" >
                        <a href="https://www.xulsolar.org.ar/testimonios.html" className="relative group">
                            <img src={testimonio} alt="Descripción de la imagen"   className="w-full h-[200px] mt-[0px] object-cover transition-transform transform group-hover:scale-105"/>
                            <p className="absolute bottom-0 left-0 w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">TESTIMONIO</p>
                        </a>    
                    </div>

                    <div className="relative  h-[80px] mt-[-550px] ml-[-30px]">
                        <img src={escafandraXul} alt="Descripción de la imagen" className="w-[100px] h-[150px] mt-[0px] ml-[45px]" />
                    </div>

                    <div >
                        {/* div vacio solo se necesita para ocupar este espacio */}
                    </div>


                    <div className="relative  h-[100px] mt-[-550px]">
                        <img src={firma8Xul} alt="Descripción de la imagen" className="w-[110px] h-[70px] mt-[0px]" />
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
//         <div classNameName="grid grid-cols-4 gap-4" >

//             <a  href="https://www.xulsolar.org.ar/bibliografia.html" >
//                 <img src={bibliografia} alt="Descripción de la imagen" classNameName="h-96" />
//                 <p>BIBLIOGRAFÍA</p>
//             </a>

//             <a href="https://www.xulsolar.org.ar/biografia.html" >
//                 <img src={biografiaXulSolar} alt="Descripción de la imagen"/>
//                 <p>BIOGRAFÍA XUL SOLAR</p>
//             </a>


//             <a href="https://www.xulsolar.org.ar/catalogo.html">
//                 <img src={catalogoRazonado} alt="Descripción de la imagen" classNameName="h-60" />
//                 <p>CATÁLOGO RAZONADO</p>
//             </a>


//             <a href="https://www.xulsolar.org.ar/coleccion.html">
//                 <img src={coleccionPermanente} alt="Descripción de la imagen"/>
//                 <p>COLECCIÓN PERMANENTE</p>
//             </a>


//             <a href="https://www.xulsolar.org.ar/educacion.html">
//                 <img src={educacion} alt="Descripción de la imagen" classNameName="h-72" />
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