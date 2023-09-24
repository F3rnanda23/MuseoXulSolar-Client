import axios from 'axios';

export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const DELETE_ACTIVITY = "DELETE_ACTIVITY";
export const GET_ACTIVITY_DETAIL = "GET_ACTIVITY_DETAIL";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const UPDATE_ACTIVITIES_FILTER = "UPDATE_ACTIVITIES_FILTER";
export const GUARDAR_USER_INFO = "GUARDAR_USER_INFO"

export const getAllActivities = () => {
  return async function (dispatch) {
    const response = await axios('https://server-xul-solar.vercel.app/actividades')
    return dispatch({ type: GET_ALL_ACTIVITIES, payload: response.data })
  }
};

export const createActivities = (activitiesData) => {
  return async function (dispatch) {
    const response = await axios.post('https://server-xul-solar.vercel.app/actividades/create', activitiesData)
    return dispatch({ type: CREATE_ACTIVITY, payload: response.data })
  }
};


export const deteleActivities = (actividadesId) => {
  return async function (dispatch) {
    const response = await axios.delete(`https://server-xul-solar.vercel.app/actividades/delete/${actividadesId}`,)
    return dispatch(getAllActivities());
  }
};

export const getActivityDetail = (actividadesId) => {
  return async function (dispatch) {
    try {
      const response = await axios(`https://server-xul-solar.vercel.app/actividades/${actividadesId}`)
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

export const filtrarActividades = (activities) => {
  return{
    type: UPDATE_ACTIVITIES_FILTER,
    payload: activities
  }
}

export const guardarUserInfo = (info) => {
  try {
    return{
      type: GUARDAR_USER_INFO,
      payload : info, 
    }
    
  } catch (error) {
    console.log('error al obtener la información del usuario', error);
  }
  
}
