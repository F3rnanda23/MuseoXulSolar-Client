import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllActivities, deteleActivities } from '../../redux/actions/actions';



const Activities = () => {

    const activities = useSelector(state => state.activities);
    const dispatch = useDispatch();


    useEffect(() => {
          dispatch(getAllActivities());
        
        }, []);

        const handleDelete = (activityId) => {
           
            dispatch(deteleActivities(activityId));
        };

    return(

        <form class=""  >

            <h2>Actividades </h2>

            <div class='' >
                
                <div class="grid grid-cols-3 gap-4">

                        {activities.map(activity => (
                            <div key={activity.id} class="border-double border-4 border-orange-500">

                                <div>
                                    <img src={activity.image} alt='imagen actividad' />
                                </div>

                                <h2>{activity.name}</h2>
                                <h3>{activity.date}</h3>
                                <p>{activity.description}</p>
                                <button onClick={() => handleDelete(activity.id)} class="border-solid border-2 border-gray-500">X</button>
                            </div>
                        ))}
                </div>
               
            </div>

        </form>
        
    )
};

export default Activities;