
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllActivities, deteleActivities } from '../../redux/actions/actions';



const Activities = () => {

    const activities = useSelector(state => state.activities);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(activities);

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

    return (

        <div className="bg-gray-200 h-screen"  >

            <h1 className='font-bold text-2xl flex justify-center pt-4 mb-4'>{currentMonthName + ' en el Museo Xul Solar'}</h1>

            <div className='bg-gray-300 w-2/3' >

                <div className="bg-gray-200 grid grid-cols-1 gap-4">

                    {activities && activities.map(activity => (
                        <div key={activity.name} className=" ml-5 relative flex h-[220px] max-w-3xl items-start gap-2 overflow-hidden rounded-lg shadow-lg bg-orange-100">
                            <img src={activity.image} className="h-full w-[300px] object-cover transition-all duration-300 group-hover:opacity-90" />
                            <div className="flex flex-col items-start justify-center gap-4 p-4">
                                <h2 className="text-2xl font-semibold">{activity.name}</h2>
                                <h2 className='font-semibold'>{formatDate(activity.date)}</h2>
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

