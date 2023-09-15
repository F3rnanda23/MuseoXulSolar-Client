import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllActivities } from '../../redux/actions/actions';



const Activities = () => {

    const activities = useSelector(state => state.activities);
    const dispatch = useDispatch();


    useEffect(() => {
          dispatch(getAllActivities());
        
        }, []);




    return(

        <div>

            <h2>Activities</h2>

            <div class='' >
                
                <div>

                        {activities.map(activity => (
                            <div key={activity.id}>

                                <div>
                                    <img src={activity.image} alt='imagen actividad' />
                                </div>

                                <h2>{activity.name}</h2>
                                <h3>{activity.date}</h3>
                                <p>{activity.description}</p>
                            </div>
                        ))}
                </div>
               
            </div>

        </div>
        
    )
};

export default Activities;