import { AUTH_ACTION_TYPE } from "./ActionType";

export const AuthReducer = ( state, action ) =>{

    switch(action.type){
        case AUTH_ACTION_TYPE.ACTION_SIGN_IN: 

        return {}

        case AUTH_ACTION_TYPE.ACTION_SIGN_UP:

        return {}

        default: 
        return state

    }
}