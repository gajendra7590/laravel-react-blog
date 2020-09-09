import { AUTHOR_LIST,AUTHOR_CREATE,AUTHOR_EDIT,AUTHOR_UPDATE,AUTHOR_DELETE } from "../types";
import { USER_LIST,USER_CREATE,USER_EDIT,USER_UPDATE,USER_DELETE } from "../types";

const intiUserState = { 
    author_loading : false,
    author_error : '',
    author_list : [],
    author_edit : {},

    user_loading : false,
    user_error : '',
    user_list : [],
    user_edit : {},
}



export const userReducer = (state = intiUserState, action) => {
    switch(action.type){ 
        //All For Authors
        case AUTHOR_LIST : return {
            ...state,
            author_list : action.payload
        } 
        case AUTHOR_EDIT : return {
            ...state,
            author_edit : action.payload
        } 
        case AUTHOR_LIST : return state 
        case AUTHOR_CREATE : return state  
        case AUTHOR_UPDATE : return state 
        case AUTHOR_DELETE : return state 

        //All For users
        case USER_LIST : return {
            ...state,
            user_list : action.payload
        } 
        case USER_EDIT : return {
            ...state,
            user_edit : action.payload
        } 
        case USER_LIST : return state 
        case USER_CREATE : return state  
        case USER_UPDATE : return state 
        case USER_DELETE : return state  
        
        //default case
        default : return state
    }
} 