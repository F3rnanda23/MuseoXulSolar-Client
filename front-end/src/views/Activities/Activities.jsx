
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllActivities, deteleActivities, filtrarActividades } from '../../redux/actions/actions';
import Calendar from 'react-calendar';
import  firma6Xul from '../../imagenes/destacados/firma6Xul.png';
import  style from './activities.module.css';
import { BsSun } from 'react-icons/bs';





const Activities = () => {

    const activities = useSelector(state => state.activities);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [value, onChange] = useState(new Date());
    const ValuePiece = Date | null;

    const Value = ValuePiece | [ValuePiece, ValuePiece];


    useEffect(() => {
        dispatch(getAllActivities());

    }, [dispatch]);

    const handleDelete = (activityId) => {
    dispatch(deteleActivities(activityId));
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toISOString().split('T')[0];
    };
    
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();

    const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    const currentMonthName = months[currentMonth];
    const onClick = (date) => {
        const fecha = new Date(date);
        const añoFecha2 = fecha.getUTCFullYear();
        const mesFecha2 = fecha.getUTCMonth() + 1;
        const diaFecha2 = fecha.getUTCDate();
       

        const activitiesFilter = activities.filter((activity) => {
          
            const fechaActivity = new Date(activity.date);
            const añoFecha1 = fechaActivity.getUTCFullYear();
            const mesFecha1 = fechaActivity.getUTCMonth() + 1; // Los meses en JavaScript comienzan en 0
            const diaFecha1 = fechaActivity.getUTCDate();
            return añoFecha1 === añoFecha2 && mesFecha1 === mesFecha2 && diaFecha1 === diaFecha2;

        });
       
        dispatch(filtrarActividades(activitiesFilter));

    };

    const handleRefresh = () => {
        window.location.reload(); 
    };

    return (

        <div className={style.activitiesContainer}>  
            
            <h1 className='font-bold text-2xl flex justify-center pt-4 mb-4'>{currentMonthName + ' en el Museo Xul Solar'}</h1>

            <div className="flex justify-end items-end mr-[180px] mt-[30px] ">
                    <button onClick={handleRefresh} className=" flex justify-end  rounded  bg-orange-200  h-[35px] px-3 py-1 text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-500 hover:text-white"> Mostrar todas la actividades</button>
            </div>

            <div className="grid sm:grid-cols-1 xl:grid-cols-2">
               

                <div className="grid  order-2 mt-[250px] mr-[20px] xl:order-1 xl:mt-[50px] ">

                    <div className='relative   w-6/6  h-6/6 ' >

                        <div className=" grid grid-cols-1 gap-4  w-full h-full">  

                            {activities && activities.map(activity => (
                            
                                <div key={activity.name} className="relative flex flex-col w-4/6 sm:flex-row sm:w-full sm:w-6/6 mt-5 ml-5 gap-2 rounded-lg shadow-2xl bg-transparent mb-30">
                                    <img src={activity.image} className=" w-2/3 mt-[20px] ml-[5px] sm:w-2/5 sm:h-4/5 rounded-full sm:ml-10 sm:mt-auto mb-auto object-cover transition-all duration-300 group-hover:opacity-90" />
                                    <div className="flex flex-col items-center justify-center gap-4 p-4 w-full sm:w-3/5 ml-0 sm:ml-10 mt-auto mb-auto">
                                        <h2 className="text-2xl font-semibold w-full xl:text-3xl">{activity.name}</h2>
                                        <h2 className='font-semibold w-full xl:text-2xl'>{formatDate(activity.date)}</h2>
                                        <h2 className='font-semibold w-full xl:text-2xl'>{activity.hora} hrs.</h2>
                                        <div className="mr-[100px] sm:mr-[30px] sm:grid-cols-2  xl:mr-[30px]">
                                            <div className=" grid mt-[20px]  ">
                                                <button onClick={() => navigate(`/detail/${activity.id}`)} className="rounded mr-2 bg-orange-400 bg-opacity-50 px-3 py-1 text-gray-600 shadow-xl transition-all duration-300 hover:scale-105 2xl:px-5 py-2">Conocer más</button>
                                                <button onClick={() => handleDelete(activity.id)} className="rounded mt-[5px] bg-orange-400 bg-opacity-50 px-3 py-1 text-gray-600 shadow-xl transition-all duration-300 hover:scale-105 2xl:px-5 py-2">Eliminar</button>
                                            </div>
                                            <div className="mt-[10px] sm:mr-[5px] ">
                                                <button className="rounded bg-orange-400 bg-opacity-50 px-3 py-1 text-gray-600 shadow-xl transition-all duration-300 hover:scale-105 mt-[10px] mr-[10px] sm:mb-[5px] md:px-2 2xl:px-5 py-2">Reservar entrada</button>
                                                <button className="rounded bg-orange-400 bg-opacity-50 px-3 py-1 text-gray-600 shadow-xl transition-all duration-300 hover:scale-105 md:px-2 py-1 2xl:px-5 py-2">Comprar entrada</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            ))}
                        </div>

                    </div>

                </div>  



                <div class="grid w-5/6 justify-center  sm:order-1 xl:order-2  xl:justify-end">

                    <div className= " relative   sm:w-[400px] sm:h-[300px] bg-gray-200 ml-auto mr-[80px] mt-[50px] rounded-lg ">
                        <h1 className="text-2xl font-bold  text-center font-sans text-gray-700 "><BsSun  class="mb-[-20px]" /> Calendario <BsSun  class="ml-[370px] mt-[-20px]"/></h1>
                        <div className=" bg-gray-300 border-2  p-4 rounded-lg shadow-2xl bg-cover  w-[400px] h-[460px] " >
                            
                            <Calendar 
                                onChange={onChange} 
                                value={value} 
                                onClickDay={onClick}
                                tileContent={({ date, view }) => {
                                    const activity = activities.find((activity) => {
                                        const fechaGMT = new Date(date);
                                        const fechaUTC = new Date(fechaGMT.toISOString())
                                        const añoFecha2 = fechaUTC.getUTCFullYear();
                                        const mesFecha2 = fechaUTC.getUTCMonth() + 1;
                                        const diaFecha2 = fechaUTC.getUTCDate();

                                        const fechaActivity = new Date(activity.date);
                                        const añoFecha1 = fechaActivity.getUTCFullYear();
                                        const mesFecha1 = fechaActivity.getUTCMonth() + 1; // Los meses en JavaScript comienzan en 0
                                        const diaFecha1 = fechaActivity.getUTCDate();

                                        return añoFecha1 === añoFecha2 && mesFecha1 === mesFecha2 && diaFecha1 === diaFecha2;

                                    });
                                
                                    
                                    if (activity) {
                                        
                                        return (<span id={activity.id} name={date} className=" hover:bg-red-500" onClick={onClick}> <img src={firma6Xul}   className="ml-[10px] w-8 o h-5 bg-rgba(253, 124, 4, 0.623) rounded-[10px]  " /></span>)
                                    }

                                }

                                }
                            />
                        </div>

                    </div>
                </div>
                

            </div>

        </div>

    )
};

export default Activities;









// import { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { getAllActivities, deteleActivities, filtrarActividades } from '../../redux/actions/actions';
// import Calendar from 'react-calendar';
// import  firma6Xul from '../../imagenes/destacados/firma6Xul.png';
// import  style from './activities.module.css';
// import { BsSun } from 'react-icons/bs';





// const Activities = () => {

//     const activities = useSelector(state => state.activities);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const [value, onChange] = useState(new Date());
//     const ValuePiece = Date | null;

//     const Value = ValuePiece | [ValuePiece, ValuePiece];


//     useEffect(() => {
//         dispatch(getAllActivities());

//     }, [dispatch]);

//     const handleDelete = (activityId) => {
//     dispatch(deteleActivities(activityId));
//     };

//     const formatDate = (dateString) => {
//         const date = new Date(dateString);
//         return date.toISOString().split('T')[0];
//     };
    
//     const currentDate = new Date();
//     const currentMonth = currentDate.getMonth();

//     const months = [
//         'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
//         'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
//     ];

//     const currentMonthName = months[currentMonth];
//     const onClick = (date) => {
//         const fecha = new Date(date);
//         const añoFecha2 = fecha.getUTCFullYear();
//         const mesFecha2 = fecha.getUTCMonth() + 1;
//         const diaFecha2 = fecha.getUTCDate();
       

//         const activitiesFilter = activities.filter((activity) => {
          
//             const fechaActivity = new Date(activity.date);
//             const añoFecha1 = fechaActivity.getUTCFullYear();
//             const mesFecha1 = fechaActivity.getUTCMonth() + 1; // Los meses en JavaScript comienzan en 0
//             const diaFecha1 = fechaActivity.getUTCDate();
//             return añoFecha1 === añoFecha2 && mesFecha1 === mesFecha2 && diaFecha1 === diaFecha2;

//         });
       
//         dispatch(filtrarActividades(activitiesFilter));

//     };

//     const handleRefresh = () => {
//         window.location.reload(); 
//     };

//     return (

//         <div className={style.activitiesContainer}>  
            
//             <h1 className='font-bold text-2xl flex justify-center pt-4 mb-4'>{currentMonthName + ' en el Museo Xul Solar'}</h1>

//             <div className="flex justify-end items-end mr-[180px] mt-[30px] ">
//                     <button onClick={handleRefresh} className=" flex justify-end  rounded  bg-orange-200  h-[35px] px-3 py-1 text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-500 hover:text-white"> Mostrar todas la actividades</button>
//             </div>

//             <div class="grid sm:grid-cols-1 xl:grid-cols-2 ">
               
                

//                 <div class="grid  order-2 mt-[250px] mr-[20px] xl:order-1 xl:mt-[50px] ">

//                     <div className='relative   w-6/6  h-6/6 ' >

//                         <div className=" grid grid-cols-1 gap-4  w-full h-full">  

//                             {activities && activities.map(activity => (
                            
//                                 <div key={activity.name} class="relative flex flex-col w-4/6 sm:flex-row sm:w-full sm:w-6/6 mt-5 ml-5 gap-2 rounded-lg shadow-2xl bg-transparent mb-30">
//                                     <img src={activity.image} className=" w-2/3 mt-[20px] ml-[5px] sm:w-2/5 sm:h-4/5 rounded-full sm:ml-10 sm:mt-auto mb-auto object-cover transition-all duration-300 group-hover:opacity-90" />
//                                     <div className="flex flex-col items-center justify-center gap-4 p-4 w-full sm:w-3/5 ml-0 sm:ml-10 mt-auto mb-auto">
//                                         <h2 className="text-2xl font-semibold w-full xl:text-3xl">{activity.name}</h2>
//                                         <h2 className='font-semibold w-full xl:text-2xl'>{formatDate(activity.date)}</h2>
//                                         <h2 className='font-semibold w-full xl:text-2xl'>{activity.hora} hrs.</h2>
//                                         <div class="mr-[100px] sm:mr-[30px] sm:grid-cols-2  xl:mr-[30px]">
//                                             <div class=" grid mt-[20px]  ">
//                                                 <button onClick={() => navigate(`/detail/${activity.id}`)} className="rounded mr-2 bg-orange-400 bg-opacity-50 px-3 py-1 text-gray-600 shadow-xl transition-all duration-300 hover:scale-105 2xl:px-5 py-2">Conocer más</button>
//                                                 <button onClick={() => handleDelete(activity.id)} className="rounded mt-[5px] bg-orange-400 bg-opacity-50 px-3 py-1 text-gray-600 shadow-xl transition-all duration-300 hover:scale-105 2xl:px-5 py-2">Eliminar</button>
//                                             </div>
//                                             <div class="mt-[10px] sm:mr-[5px] ">
//                                                 <button className="rounded bg-orange-400 bg-opacity-50 px-3 py-1 text-gray-600 shadow-xl transition-all duration-300 hover:scale-105 mt-[10px] mr-[10px] sm:mb-[5px] md:px-2 2xl:px-5 py-2">Reservar entrada</button>
//                                                 <button className="rounded bg-orange-400 bg-opacity-50 px-3 py-1 text-gray-600 shadow-xl transition-all duration-300 hover:scale-105 md:px-2 py-1 2xl:px-5 py-2">Comprar entrada</button>
//                                             </div>
//                                         </div>

//                                     </div>
//                                 </div>

//                             ))}
//                         </div>

//                     </div>

//                 </div>  



//                 <div class="grid w-5/6 justify-center  sm:order-1 xl:order-2  xl:justify-end">

//                     <div className= " relative   sm:w-[400px] sm:h-[300px] bg-gray-200 ml-auto mr-[80px] mt-[50px] rounded-lg ">
//                         <h1 className="text-2xl font-bold  text-center font-sans text-gray-700 "><BsSun  class="mb-[-20px]" /> Calendario <BsSun  class="ml-[370px] mt-[-20px]"/></h1>
//                         <div className=" bg-gray-300 border-2  p-4 rounded-lg shadow-2xl bg-cover  w-[400px] h-[460px] " >
                            
//                             <Calendar 
//                                 onChange={onChange} 
//                                 value={value} 
//                                 onClickDay={onClick}
//                                 tileContent={({ date, view }) => {
//                                     const activity = activities.find((activity) => {
//                                         const fechaGMT = new Date(date);
//                                         const fechaUTC = new Date(fechaGMT.toISOString())
//                                         const añoFecha2 = fechaUTC.getUTCFullYear();
//                                         const mesFecha2 = fechaUTC.getUTCMonth() + 1;
//                                         const diaFecha2 = fechaUTC.getUTCDate();

//                                         const fechaActivity = new Date(activity.date);
//                                         const añoFecha1 = fechaActivity.getUTCFullYear();
//                                         const mesFecha1 = fechaActivity.getUTCMonth() + 1; // Los meses en JavaScript comienzan en 0
//                                         const diaFecha1 = fechaActivity.getUTCDate();

//                                         return añoFecha1 === añoFecha2 && mesFecha1 === mesFecha2 && diaFecha1 === diaFecha2;

//                                     });
                                
                                    
//                                     if (activity) {
                                        
//                                         return (<span id={activity.id} name={date} className=" hover:bg-red-500" onClick={onClick}> <img src={firma6Xul}   className="ml-[10px] w-8 o h-5 bg-rgba(253, 124, 4, 0.623) rounded-[10px]  " /></span>)
//                                     }

//                                 }

//                                 }
//                             />
//                         </div>

//                     </div>
//                 </div>
                

//             </div>

//         </div>

//     )
// };

// export default Activities;





















// const Activities = () => {

//     const activities = useSelector(state => state.activities);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const [value, onChange] = useState(new Date());
//     const ValuePiece = Date | null;

//     const Value = ValuePiece | [ValuePiece, ValuePiece];


//     useEffect(() => {
//         dispatch(getAllActivities());

//     }, [dispatch]);

//     const handleDelete = (activityId) => {
//     dispatch(deteleActivities(activityId));
//     };

//     const formatDate = (dateString) => {
//         const date = new Date(dateString);
//         return date.toISOString().split('T')[0];
//     };
    
//     const currentDate = new Date();
//     const currentMonth = currentDate.getMonth();

//     const months = [
//         'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
//         'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
//     ];

//     const currentMonthName = months[currentMonth];
//     const onClick = (date) => {
//         const fecha = new Date(date);
//         const añoFecha2 = fecha.getUTCFullYear();
//         const mesFecha2 = fecha.getUTCMonth() + 1;
//         const diaFecha2 = fecha.getUTCDate();
       

//         const activitiesFilter = activities.filter((activity) => {
          
//             const fechaActivity = new Date(activity.date);
//             const añoFecha1 = fechaActivity.getUTCFullYear();
//             const mesFecha1 = fechaActivity.getUTCMonth() + 1; // Los meses en JavaScript comienzan en 0
//             const diaFecha1 = fechaActivity.getUTCDate();
//             return añoFecha1 === añoFecha2 && mesFecha1 === mesFecha2 && diaFecha1 === diaFecha2;

//         });
       
//         dispatch(filtrarActividades(activitiesFilter));

//     };

//     const handleRefresh = () => {
//         window.location.reload(); 
//     };

//     return (

//         <div className={style.activitiesContainer}>  
            
//             <h1 className='font-bold text-2xl flex justify-center pt-4 mb-4'>{currentMonthName + ' en el Museo Xul Solar'}</h1>

//             <div className="flex justify-end items-end mr-[180px] mt-[30px] ">
//                 <button onClick={handleRefresh} className=" flex justify-end  rounded  bg-orange-200  h-[35px] px-3 py-1 text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-500 hover:text-white"> Mostrar todas la actividades</button>
//             </div>
            
//             <div className= " relative w-[400px] h-[300px] bg-gray-200 ml-auto mr-[80px] mt-[50px] rounded-lg">
//                 <h1 className="text-2xl font-bold  text-center font-sans text-gray-700 "><BsSun  class="mb-[-20px]" /> Calendario <BsSun  class="ml-[370px] mt-[-20px]"/></h1>
//                 <div className=" bg-gray-300 border-2  p-4 rounded-lg shadow-2xl bg-cover  w-[400px] h-[460px] " >
                    
//                     <Calendar 
//                         onChange={onChange} 
//                         value={value} 
//                         onClickDay={onClick}
//                         tileContent={({ date, view }) => {
//                             const activity = activities.find((activity) => {
//                                 const fechaGMT = new Date(date);
//                                 const fechaUTC = new Date(fechaGMT.toISOString())
//                                 const añoFecha2 = fechaUTC.getUTCFullYear();
//                                 const mesFecha2 = fechaUTC.getUTCMonth() + 1;
//                                 const diaFecha2 = fechaUTC.getUTCDate();

//                                 const fechaActivity = new Date(activity.date);
//                                 const añoFecha1 = fechaActivity.getUTCFullYear();
//                                 const mesFecha1 = fechaActivity.getUTCMonth() + 1; // Los meses en JavaScript comienzan en 0
//                                 const diaFecha1 = fechaActivity.getUTCDate();

//                                 return añoFecha1 === añoFecha2 && mesFecha1 === mesFecha2 && diaFecha1 === diaFecha2;

//                             });
                        
                            
//                             if (activity) {
                                
//                                 return (<span id={activity.id} name={date} className=" hover:bg-red-500" onClick={onClick}> <img src={firma6Xul}   className="ml-[10px] w-8 o h-5 bg-rgba(253, 124, 4, 0.623) rounded-[10px]  " /></span>)
//                             }

//                         }

//                         }
//                     />
//                 </div>

//             </div>

//             <div className='relative   w-[600px] mt-[-300px] mb-[30px]' >

//                 <div className=" grid grid-cols-1 gap-4  w-[600px]">  

//                     {activities && activities.map(activity => (
//                         <div key={activity.name} className={style.contenedorCard}>
//                             <img src={activity.image} className=" object-cover transition-all duration-300 group-hover:opacity-90" />
//                             <div className="flex flex-col items-start justify-center gap-4 p-4 ml-[10px]">
//                                 <h2 className="text-2xl font-semibold">{activity.name}</h2>
//                                 <h2 className='font-semibold'>{formatDate(activity.date)}</h2>
//                                 <h2 className='font-semibold'>{activity.hora} hrs.</h2>
//                                 <div>
//                                     <button onClick={() => navigate(`/detail/${activity.id}`)} className="rounded mr-2 bg-orange-400 bg-opacity-50  px-3 py-1 text-gray-600 shadow-xl transition-all duration-300 hover:scale-105">Conocer más</button>
//                                     <button onClick={() => handleDelete(activity.id)} className="rounded  bg-orange-400 bg-opacity-50  px-3 py-1 text-gray-600 shadow-xl transition-all duration-300 hover:scale-105">Eliminar</button>
//                                     <button  className="rounded  bg-orange-400 bg-opacity-50  px-3 py-1 text-gray-600 shadow-xl transition-all duration-300 hover:scale-105 mt-[10px] mr-[10px]">Reservar entrada</button>
//                                     <button  className="rounded  bg-orange-400 bg-opacity-50  px-3 py-1 text-gray-600 shadow-xl transition-all duration-300 hover:scale-105">Comprar entrada</button>
//                                 </div>

//                             </div>
//                         </div>

//                     ))}
//                 </div>

//             </div>
           

//         </div>

//     )
// };

// export default Activities;

