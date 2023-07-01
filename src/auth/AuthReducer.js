import { AUTH_ACTION_TYPE } from "./ActionType";

export const AuthReducer = ( state, action ) =>{

    switch(action.type){
        case AUTH_ACTION_TYPE.ACTION_SIGN_IN: 
        
        return {...state, token: action.payload.token, isLoggedIn: action.payload.isLoggedIn, authenticatedUser: action.payload.authenticatedUser}

        case AUTH_ACTION_TYPE.ACTION_SIGN_UP:
            console.log("AUS ", {...state, token: action.payload.token, isLoggedIn: action.payload.isLoggedIn, authenticatedUser: action.payload.authenticatedUser})
        return {...state, token: action.payload.token, isLoggedIn: action.payload.isLoggedIn, authenticatedUser: action.payload.authenticatedUser}

        case AUTH_ACTION_TYPE.FAILED_ATTEMPT: 
        return {...state, isLoggedIn: false}

        default: 
        return state

    }
}