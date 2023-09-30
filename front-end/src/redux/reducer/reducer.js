import {
    GET_ALL_ACTIVITIES, CREATE_ACTIVITY, DELETE_ACTIVITY, GET_ACTIVITY_DETAIL, LOG_IN, LOG_OUT,
    UPDATE_ACTIVITIES_FILTER, CREATE_REVIEW, GET_ALL_COMMENTS, SEND_SUBS_INFO, FILTER_RATING,
    RESET_COMMENTS, GET_USERS, FILTER_USER_BY_EMAIL, GET_ALL_ACTIVITIES_USER, GET_USER_DETAIL
} from '../actions/actions';


const initialState = {

    activities: [],
    activitiesUser: [],
    activityDetail: {},
    active: false,
    comments: [],
    commentsBackUp: [],
    subs: [],
    users: [],
    filteredUsers: [],
    userDetail: {},
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
                comments: action.payload,
                commentsBackUp: action.payload
            }

        case SEND_SUBS_INFO:

            return {
                ...state,
                subs: [...state.subs, action.payload]
            }

        case FILTER_RATING:
            const filteredComments = state.commentsBackUp.filter(comment => comment.rating === action.payload);

            return {
                ...state,
                comments: filteredComments,
            }

        case RESET_COMMENTS:

            return {
                ...state,
                comments: state.commentsBackUp,
            }

        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                userTofilter: action.payload
            }
        case FILTER_USER_BY_EMAIL:
            const filteredUsers = state.users.filter(user => user.email === action.payload);

            return {
                ...state,
                filteredUsers: filteredUsers,
            }

        case GET_USER_DETAIL:
            return {
                ...state,
                userDetail: action.payload,
            }
        case GET_ALL_ACTIVITIES_USER:
            return {
                ...state,
                activitiesUser: action.payload,
        };
            

        default:
            return {
                ...state
            }
    }

};

export default reducer;

