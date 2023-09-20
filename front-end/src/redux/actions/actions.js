import axios from 'axios';

export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const DELETE_ACTIVITY = "DELETE_ACTIVITY";
export const GET_ACTIVITY_DETAIL = "GET_ACTIVITY_DETAIL";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export const getAllActivities = () => {
  return async function (dispatch) {
    const response = await axios('http://localhost:3001/actividades')
    return dispatch({ type: GET_ALL_ACTIVITIES, payload: response.data })
  }
};

export const createActivities = (activitiesData) => {
  return async function (dispatch) {
    const response = await axios.post('http://localhost:3001/create', activitiesData)
    return dispatch({ type: CREATE_ACTIVITY, payload: response.data })
  }
};


export const deteleActivities = (actividadesId) => {
  return async function (dispatch) {
    const response = await axios.delete(`http://localhost:3001/actividades/delete/${actividadesId}`,)
    return dispatch(getAllActivities());
  }
};

export const getActivityDetail = (actividadesId) => {
  return async function (dispatch) {
    try {
      const response = await axios(`http://localhost:3001/actividades/${actividadesId}`)
    return dispatch({
      type: GET_ACTIVITY_DETAIL,
      payload: response.data
    })
       
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  }
}
    
export const logIn = (sesion) => {
  return{
    type: LOG_IN,
    payload: sesion
  }
}

export const logOut=(sesion) => { 
  return{
    type: LOG_OUT,
    payload: sesion
  }
}
