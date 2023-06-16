import { ACTION_TYPES } from "./ActionType"




export const DataReducer = (state, action) =>{
    switch(action.type){

        case ACTION_TYPES.INITIALIZE: 
        return {...state, currentPosts: action.payload}

        case ACTION_TYPES.CREATE_A_POST : 
        return {...state, currentPosts: action.payload}

        case ACTION_TYPES.LIKE_A_POST:
        return {...state, currentPosts: action.payload}  
        
        case ACTION_TYPES.DISLIKE_A_POST: 
        return{ ...state, currentPosts: action.payload}

        case ACTION_TYPES.BOOKMARK: 
        
        return {...state, bookmarked: action.payload}

        case ACTION_TYPES.REMOVE_BOOKMARK: 

        return {...state, bookmarked: action.payload}

        case ACTION_TYPES.DOWNLOADED_BOOKMARK: 

        console.log(666, {...state, bookmarks: action.payload})
        return {...state, bookmarks: action.payload}
         
        case ACTION_TYPES.SEARCH_ACTION: 
        return {}

        default:
            return state
    }
}