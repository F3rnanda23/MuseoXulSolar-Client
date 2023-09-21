import { GET_ALL_ACTIVITIES, CREATE_ACTIVITY, DELETE_ACTIVITY, GET_ACTIVITY_DETAIL, LOG_IN,LOG_OUT,UPDATE_ACTIVITIES_FILTER  } from '../actions/actions';


const initialState = {

    activities: [],
    activityDetail: {},
    active: false
 };



const reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_ACTIVITIES:

            return {
                ...state,
                activities: action.payload,
            };

        case CREATE_ACTIVITY:
            return {
                ...state,
                activities: [...state.activities, action.payload],
            };

        case DELETE_ACTIVITY:
            return {
                ...state,
                activities: action.payload,
            };

        case GET_ACTIVITY_DETAIL:
            return {
                ...state,
                activityDetail: action.payload
            };
        
        case LOG_IN:
        return{
            ...state, active: action.payload
        }
        case LOG_OUT:
        return{
            ...state, active: action.payload
        }

        case UPDATE_ACTIVITIES_FILTER:
            return{
                ...state, activities: action.payload
            }
        
    
        default:
            return {
                ...state
            }
    }

};

export default reducer;