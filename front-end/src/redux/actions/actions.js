import axios from 'axios';

export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const DELETE_ACTIVITY = "DELETE_ACTIVITY";
export const DELETE_ACTIVITY_USER = "DELETE_ACTIVITY_USER";
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
export const FILTER_USER_BY_EMAIL = 'FILTER_USER_BY_EMAIL';
export const GET_USER_DETAIL = 'GET_USER_DETAIL';
export const CLEAR_USER_DETAIL = 'CLEAR_USER_DETAIL';
export const BAN_USER = 'BAN_USER';
export const RESTORE_USER = 'RESTORE_USER';
export const POST_ACTIVITIES_USER = 'POST_ACTIVITIES_USER';
export const GET_ALL_ACTIVITIES_USER = 'GET_ALL_ACTIVITIES_USER';
export const GET_ALL_ACTIVITIES_ADMIN = 'GET_ALL_ACTIVITIES_ADMIN';
export const CLEAR_ACTIVITY_DETAIL = 'CLEAR_ACTIVITY_DETAIL';



export const getAllActivities = () => {
  return async function (dispatch) {
    const response = await axios('https://server-xul-solar-ag97.vercel.app/actividades')
    return dispatch({ type: GET_ALL_ACTIVITIES, payload: response.data })
  }
};

export const createActivities = (activitiesData) => {
  return async function (dispatch) {
    const response = await axios.post('https://server-xul-solar-ag97.vercel.app/actividades/create', activitiesData)
    return dispatch({ type: CREATE_ACTIVITY, payload: response.data })
  }
};


export const deteleActivities = (actividadesId) => {
  return async function (dispatch) {
    const response = await axios.delete(`https://server-xul-solar-ag97.vercel.app/actividades/delete/${actividadesId}`)
    return dispatch(getAllActivities());
  }
};

export const deteleActivitiesUser = (usuarioId, actividadId) => {
  return async function (dispatch) {
    console.log(actividadId, usuarioId,'aqui delete')
    const response = await axios.delete(`https://server-xul-solar-ag97.vercel.app/actividades/eliminarReserva/${usuarioId}/${actividadId}`)
    return dispatch(getAllActivitiesUser(usuarioId));
  }
};

export const getActivityDetail = (actividadesId) => {
  return async function (dispatch) {
    try {
      const response = await axios(`https://server-xul-solar-ag97.vercel.app/actividades/${actividadesId}`)
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

  // const endpoint = "https://server-xul-solar-ag97.vercel.app/comentarios/crear";
  const endpoint = 'http://localhost:3001/comments/create'

  return async function (dispatch) {
    try {
    
      const { data } = await axios.post(endpoint, comment);
      console.log('action data', data);

      return dispatch({
        type: CREATE_REVIEW,
        payload: data,
      });
    } catch (error) {
      throw new Error('Algo salió mal: ', error.message);
    }
  };
};


export const getAllComments = () => {
  const endpoint = "https://server-xul-solar-ag97.vercel.app/comentarios"
  
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

  const endpoint = 'https://server-xul-solar-ag97.vercel.app/suscripcion/crear'

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
  const endpoint = 'https://server-xul-solar-ag97.vercel.app/usuario';
  
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

export function getUserDetail(id) {
  const endpoint = `https://server-xul-solar-ag97.vercel.app/usuario/id/${id}`
  
  return async function (dispatch) {
    try {
      const { data } = await axios(endpoint);
      return dispatch({
        type: 'GET_USER_DETAIL',
        payload: data,
      })

    } catch (error) {
      throw new Error('Error al obtener la información del usuario: ', error.message)
    }
  }
}

export function clearUserDetail() {
  return {
      type: CLEAR_USER_DETAIL,
  }
}

export function banUser(id, email) {

  const endpoint = `https://server-xul-solar-ag97.vercel.app/usuario/${id}`

  return async function (dispatch) {
    try {

      await axios.delete(endpoint);

      return dispatch({
        type: 'BAN_USER',
        payload: { id, email }
      });
    } catch (error) {
      throw new Error('Error al bloquear el usuario: ' + error.message);
    }
  };
}


export function restoreUser(id) {
  console.log('actions', id);
  const endpoint = `https://server-xul-solar-ag97.vercel.app/usuario/restaurar/${id}`
 
  return async function (dispatch) {
    try {
    await axios.put(endpoint);
     
      return dispatch({
        type: 'RESTORE_USER',
        payload: id,
      })

    } catch (error) {
      throw new Error('Error al desbloquear el usuario: ', error.message)
    }
  }
} 


// traer actividades al perfil del usuario

export const getAllActivitiesUser = (id) => {
  return async function (dispatch) {
    const response = await axios(`https://server-xul-solar-ag97.vercel.app/usuario/id/${id}`)
    
    return dispatch({ type: GET_ALL_ACTIVITIES_USER, payload: response.data.Actividades })
  }
};


//post de reserva actividades
export const postAllActivitiesUser = (usuarioId,actividadId ) => {
  return async function (dispatch) {
    const response = await axios.post( 'https://server-xul-solar-ag97.vercel.app/actividades/reservar',{usuarioId, actividadId})
    return dispatch()
  }
};



//get para reservas administrador
export const getAllActivitiesAdmin = () => {
  return async function (dispatch) {
    const response = await axios( 'https://server-xul-solar-ag97.vercel.app/actividades/usuario')
    return  dispatch({ type: GET_ALL_ACTIVITIES_ADMIN, payload: response.data })
  }
};

export function clearActivityDetail() {
  return {
      type: CLEAR_ACTIVITY_DETAIL,
  }
}





 


