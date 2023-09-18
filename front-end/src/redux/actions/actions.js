import axios from 'axios';

export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const DELETE_ACTIVITY = "DELETE_ACTIVITY";
export const GET_ACTIVITY_DETAIL = "GET_ACTIVITY_DETAIL";

export const getAllActivities = () => {
  return async function (dispatch) {
    const response = await axios('http://localhost:3001/actividades')
    return dispatch({ type: GET_ALL_ACTIVITIES, payload: response.data })
  }
};

export const createActivities = (activitiesData) => {
  return async function (dispatch) {
    const response = await axios.post('http://localhost:3001/actividades', activitiesData)
    return dispatch({ type: CREATE_ACTIVITY, payload: response.data })
  }
};


export const deteleActivities = (actividadesId) => {
  return async function (dispatch) {
    const response = await axios.delete(`http://localhost:3001/actividades/${actividadesId}`,)
    return dispatch(getAllActivities());
  }
};

export const getActivityDetail = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios(`http://localhost:3001/actividades/${id}`)
console.log('actions res', id);
    return dispatch({
      type: GET_ACTIVITY_DETAIL,
      payload: response.data
    })
       
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  }
}
    
