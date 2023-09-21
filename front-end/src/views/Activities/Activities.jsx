
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllActivities, deteleActivities, filtrarActividades } from '../../redux/actions/actions';
import Calendar from 'react-calendar';
import { FaBeer } from 'react-icons/fa';



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
    const onClick = (event) => {
        const fechaGMT = new Date(event.target.getAttribute('name'));
        const fechaUTC = new Date(fechaGMT.toISOString())
        const añoFecha2 = fechaUTC.getUTCFullYear();
        const mesFecha2 = fechaUTC.getUTCMonth() + 1;
        const diaFecha2 = fechaUTC.getUTCDate();
       

        const activitiesFilter = activities.filter((activity) => {
          
            const fechaActivity = new Date(activity.date);
            const añoFecha1 = fechaActivity.getUTCFullYear();
            const mesFecha1 = fechaActivity.getUTCMonth() + 1; // Los meses en JavaScript comienzan en 0
            const diaFecha1 = fechaActivity.getUTCDate();
            return añoFecha1 === añoFecha2 && mesFecha1 === mesFecha2 && diaFecha1 === diaFecha2;

        });
       
        dispatch(filtrarActividades(activitiesFilter));

    }
    return (

        <div className="bg-gray-200 h-screen"  >
            <h1 className='font-bold text-2xl flex justify-center pt-4 mb-4'>{currentMonthName + ' en el Museo Xul Solar'}</h1>
            <div>
                <h1>calendario</h1>
                <Calendar 
                    onChange={onChange} 
                    value={value} 
                    tileContent={({ date }) => {
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
                            return (<h3 id={activity.id} name={date} onClick={onClick}>Evento</h3>)
                        }

                    }

                    }
                />

            </div>
            <div className='bg-gray-300 w-2/3' >

                <div className="bg-gray-200 grid grid-cols-1 gap-4">

                    {activities && activities.map(activity => (
                        <div key={activity.name} className=" ml-5 relative flex h-[220px] max-w-3xl items-start gap-2 overflow-hidden rounded-lg shadow-lg bg-orange-100">
                            <img src={activity.image} className="h-full w-[300px] object-cover transition-all duration-300 group-hover:opacity-90" />
                            <div className="flex flex-col items-start justify-center gap-4 p-4">
                                <h2 className="text-2xl font-semibold">{activity.name}</h2>
                                <h2 className='font-semibold'>{formatDate(activity.date)}</h2>
                                <h2 className='font-semibold'>{activity.hora} hrs.</h2>
                                <div>
                                    <button onClick={() => navigate(`/detail/${activity.id}`)} className="rounded mr-2 bg-orange-200 px-3 py-1 text-gray-200 shadow-xl transition-all duration-300 hover:scale-105">Conocer Más</button>
                                    <button onClick={() => handleDelete(activity.id)} className="rounded  bg-orange-200 px-3 py-1 text-gray-200 shadow-xl transition-all duration-300 hover:scale-105">Eliminar</button>
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

