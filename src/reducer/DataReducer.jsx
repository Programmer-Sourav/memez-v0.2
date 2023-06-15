import { ACTION_TYPES } from "./ActionType"




export const DataReducer = (state, action) =>{
    switch(action.type){

        case ACTION_TYPES.INITIALIZE: 
        
        return {...state, currentPosts: action.payload}

        case ACTION_TYPES.CREATE_A_POST : 
        //console.log(445566, {...state, currentPosts: [...state.currentPosts, action.payload]})
        console.log(4455667, action.payload)
        return {...state, currentPosts: action.payload}
         
        case ACTION_TYPES.SEARCH_ACTION: 
        return {}

        default:
            return state
    }
}