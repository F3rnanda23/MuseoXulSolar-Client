
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
            
            <div className= " relative w-[400px] h-[300px] bg-gray-200 ml-auto mr-[80px] mt-[50px] rounded-lg">
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

            <div className='relative   w-[600px] mt-[-300px] mb-[30px]' >

                <div className=" grid grid-cols-1 gap-4  w-[600px]">  

                    {activities && activities.map(activity => (
                        <div key={activity.name} className={style.contenedorCard}>
                            <img src={activity.image} className=" object-cover transition-all duration-300 group-hover:opacity-90" />
                            <div className="flex flex-col items-start justify-center gap-4 p-4 ml-[10px]">
                                <h2 className="text-2xl font-semibold">{activity.name}</h2>
                                <h2 className='font-semibold'>{formatDate(activity.date)}</h2>
                                <h2 className='font-semibold'>{activity.hora} hrs.</h2>
                                <div>
                                    <button onClick={() => navigate(`/detail/${activity.id}`)} className="rounded mr-2 bg-orange-400 bg-opacity-50  px-3 py-1 text-gray-600 shadow-xl transition-all duration-300 hover:scale-105">Conocer más</button>
                                    <button onClick={() => handleDelete(activity.id)} className="rounded  bg-orange-400 bg-opacity-50  px-3 py-1 text-gray-600 shadow-xl transition-all duration-300 hover:scale-105">Eliminar</button>
                                    <button  className="rounded  bg-orange-400 bg-opacity-50  px-3 py-1 text-gray-600 shadow-xl transition-all duration-300 hover:scale-105 mt-[10px] mr-[10px]">Reservar entrada</button>
                                    <button  className="rounded  bg-orange-400 bg-opacity-50  px-3 py-1 text-gray-600 shadow-xl transition-all duration-300 hover:scale-105">Comprar entrada</button>
                                </div>

                            </div>
                        </div>

                    ))}
                </div>

            </div>
           

        </div>

    )
};

export default Activities;

