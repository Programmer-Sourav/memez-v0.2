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
        console.log(1111, action.payload)
        return {...state, bookmarked: action.payload}

        case ACTION_TYPES.REMOVE_BOOKMARK: 
        
        return {...state, bookmarked: action.payload}

        case ACTION_TYPES.DOWNLOADED_BOOKMARK: 

        return {...state, bookmarks: action.payload}

        case ACTION_TYPES.USERS: 

        return {...state, users: action.payload}

        case ACTION_TYPES.FOLLOW_USER: 

        return {...state, following: action.payload}

        case ACTION_TYPES.UPDATE_AUTHENTICATED_USER: 
         console.log(6666, action.payload)
        return {...state, updatedUser: action.payload}
         
        case ACTION_TYPES.SEARCH_ACTION: 
        return {}

        default:
            return state
    }
}