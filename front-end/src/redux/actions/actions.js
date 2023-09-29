import axios from 'axios';

export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const DELETE_ACTIVITY = "DELETE_ACTIVITY";
export const GET_ACTIVITY_DETAIL = "GET_ACTIVITY_DETAIL";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const UPDATE_ACTIVITIES_FILTER = "UPDATE_ACTIVITIES_FILTER";
export const CREATE_REVIEW = 'CREATE_REVIEW';
export const GET_ALL_COMMENTS = 'GET_ALL_COMMENTS';
export const SEND_SUBS_INFO = 'SEND_SUBS_INFO';
export const FILTER_RATING = 'FILTER_RATING';
export const RESET_COMMENTS = 'RESET_COMMENTS';
export const GET_USERS = 'GET_USERS'
export const FILTER_USER_BY_EMAIL = 'FILTER_USER_BY_EMAIL'

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
};

export const logIn = (sesion) => {
  return {
    type: LOG_IN,
    payload: sesion
  }
};

export const logOut = (sesion) => {
  return {
    type: LOG_OUT,
    payload: sesion
  }
};

export const filtrarActividades = (activities) => {
  return {
    type: UPDATE_ACTIVITIES_FILTER,
    payload: activities
  }
};

export const createReview = (comment) => {
  const endpoint = 'https://server-xul-solar.vercel.app/comentarios/crear'
  // const endpoint = 'http://localhost:3001/comentarios/crear'

  return async function (dispatch) {
    try {
      const { data } = await axios.post(endpoint, comment)
      return dispatch({
        type: CREATE_REVIEW,
        payload: data,

      })
    } catch (error) {
      throw new Error('Algo salió mal: ', error.message)
    }
  }
};

export const getAllComments = () => {
  const endpoint = "https://server-xul-solar.vercel.app/comentarios"
  // const endpoint = `http://localhost:3001/comentarios`
  return async function (dispatch) {
    try {
      const { data } = await axios(endpoint)
      return dispatch({
        type: GET_ALL_COMMENTS,
        payload: data
      })
    } catch (error) {
      throw new Error('Algo salió mal: ', error.message)
    }
  }
};

export const sendSubsInfo = (subscriptionInfo) => {

  // const endpoint = 'https://server-xul-solar.vercel.app/suscripcion'
  const endpoint = 'http://localhost:3001/suscripcion'

  return async function (dispatch) {
    try {
      const { data } = await axios.post(endpoint, subscriptionInfo)
      return dispatch({
        type: SEND_SUBS_INFO,
        payload: data,
      })
    } catch (error) {
      throw new Error(error.message);
    }
  }
};

export function filterCommentsbYRating(rating) {
  return {
    type: FILTER_RATING,
    payload: rating,
  }
}

export function resetComments() {
  return {
    type: RESET_COMMENTS,
  }
}

export function getAllUsers() {
  const endpoint = 'https://server-xul-solar.vercel.app/usuario';
  // const endpoint =  'http://localhost:3001/usuario'
  return async function (dispatch) {
    try {
      const { data } = await axios(endpoint)
      return dispatch({
        type: 'GET_USERS',
        payload: data
      })
    } catch (error) {
      throw new Error('Error al obtener los usuarios')
    }
  }
}

export function filterUserByEmail(email) {
  return {
    type: FILTER_USER_BY_EMAIL,
    payload: email,
  }
}
// export function filterUserByEmail(email) {
//   const endpoint = `https://server-xul-solar.vercel.app/usuario/${email}`
//   //   const endpoint ='http://localhost:3001/usuario/' + id;
//   return async function (dispatch) {
//     try {
//       const { data } = await axios(endpoint);
//       return dispatch({
//         type: 'FILTER_USER_BY_EMAIL',
//         payload: data,
//       })

//     } catch (error) {
//       throw new Error('Error al filtrar usuarios: ', error.message)
//     }
//   }
// }







