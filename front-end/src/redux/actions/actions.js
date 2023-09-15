

import axios from 'axios';


export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";

export const getAllActivities = () => {
    return async function(dispatch){
        const response = await axios('http://localhost:3001/actividades')    
          return dispatch({type: GET_ALL_ACTIVITIES, payload: response.data})
     }
};

export const createActivities = (activitiesData) => {
    return async function(dispatch){
        const response = await axios.post('http://localhost:3001/actividades', activitiesData)    
          return dispatch({type: CREATE_ACTIVITY, payload: response.data})
     }
};

