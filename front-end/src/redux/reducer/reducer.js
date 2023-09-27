import {
    GET_ALL_ACTIVITIES, CREATE_ACTIVITY, DELETE_ACTIVITY, GET_ACTIVITY_DETAIL, LOG_IN, LOG_OUT,
    UPDATE_ACTIVITIES_FILTER, CREATE_REVIEW, GET_ALL_COMMENTS, SEND_SUBS_INFO
} from '../actions/actions';


const initialState = {

    activities: [],
    activityDetail: {},
    active: false,
    comments: [],
    subs: [],
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
            return {
                ...state, active: action.payload
            }
        case LOG_OUT:
            return {
                ...state, active: action.payload
            }

        case UPDATE_ACTIVITIES_FILTER:
            return {
                ...state, activities: action.payload
            }

        case CREATE_REVIEW:

            return {
                ...state,
                comments: [...state.comments, action.payload]
            }

        case GET_ALL_COMMENTS:
            return {
                ...state,
                comments: action.payload
            }

            case SEND_SUBS_INFO: 

            return{
                ...state,
                subs: [...state.subs, action.payload]
            }

        default:
            return {
                ...state
            }
    }

};

export default reducer;