import { GET_ALL_ACTIVITIES, CREATE_ACTIVITY } from '../actions/actions';


const initialState = {

    activities: []
    
 };

const reducer = (state = initialState, action)=>{
    switch (action.type) {

        case GET_ALL_ACTIVITIES :
            return {
                ...state,
                activities: action.payload,
            };

        case CREATE_ACTIVITY :
        return {
            ...state,
            activities:[ ...state.activities,action.payload],
        };
       
    
        default:
            return {...state}
     }

};

export default reducer;