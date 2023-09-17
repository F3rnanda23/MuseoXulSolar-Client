import { GET_ALL_ACTIVITIES, CREATE_ACTIVITY, DELETE_ACTIVITY, LOG_IN,LOG_OUT  } from '../actions/actions';


const initialState = {

    activities: [],
    active: false
 };

const reducer = (state = initialState, action)=>{
    switch (action.type) {

        case GET_ALL_ACTIVITIES :
            console.log('cualquier cosa', action.payload)
            return {
                ...state,
                activities: action.payload,
            };

        case CREATE_ACTIVITY :
        return {
            ...state,
            activities:[ ...state.activities,action.payload],
        };

        case DELETE_ACTIVITY :
        return {
            ...state,
            activities: action.payload,
        };
        case LOG_IN:
        return{
            ...state, active: action.payload
        }
        case LOG_OUT:
        return{
            ...state, active: action.payload
        }
    
        default:
            return {...state}
     }

};

export default reducer;