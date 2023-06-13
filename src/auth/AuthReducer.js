import { AUTH_ACTION_TYPE } from "./ActionType";

export const AuthReducer = ( state, action ) =>{

    switch(action.type){
        case AUTH_ACTION_TYPE.ACTION_SIGN_IN: 
       
        return {...state, token: action.payload.token, isLoggedIn: action.payload.isLoggedIn}

        case AUTH_ACTION_TYPE.ACTION_SIGN_UP:
        return {...state, token: action.payload.token, isLoggedIn: action.payload.isLoggedIn}

        case AUTH_ACTION_TYPE.FAILED_ATTEMPT: 
        return {...state, isLoggedIn: false}

        default: 
        return state

    }
}