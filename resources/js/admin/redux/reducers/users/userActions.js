import { AUTHOR_LIST,AUTHOR_CREATE,AUTHOR_EDIT,AUTHOR_UPDATE,AUTHOR_DELETE } from "../types";
import { USER_LIST,USER_CREATE,USER_EDIT,USER_UPDATE,USER_DELETE } from "../types";

//API Common
import axiosReq from '../../../api-axios/Common';


//Non Import Actions
const setAuthor = ( payload = null ) => {
    return {
        type : AUTHOR_LIST,
        payload : payload
    } 
}


const setEditAuthor = ( payload = null ) => {
    return {
        type : AUTHOR_EDIT,
        payload : payload
    } 
}

export const getAuthor = ( payload = null ) => {
    return (dispatch) => { 
        axiosReq.GET('admin/getAuthors')
        .then( response => {  
            dispatch(setAuthor(response))
        })
        .catch( error => {
            //const errorMsg = error.message;
            //dispatch(fetchingArtError(errorMsg))
        });
    }
};  

export const editAuthor = ( payload = null ) => {
    return (dispatch) => { 
        axiosReq.GET('admin/editAuthors/'+payload.id)
        .then( response => {  
            dispatch(setEditAuthor(response))
        })
        .catch( error => {
            //const errorMsg = error.message;
            //dispatch(fetchingArtError(errorMsg))
        });
    }  
}

export const createAuthor = ( payload = null ) => {
    return (dispatch) => { 
        axiosReq.POST('admin/createAuthors',payload)
        .then( response => {  
            dispatch(setEditAuthor(response))
        })
        .catch( error => {
            //const errorMsg = error.message;
            //dispatch(fetchingArtError(errorMsg))
        });
    }    
}

export const updateAuthor = ( payload = null ) => {
    return (dispatch) => { 
        axiosReq.POST('admin/updateAuthors/'+payload.id,payload)
        .then( response => {  
            dispatch(setEditAuthor(response))
        })
        .catch( error => {
            //const errorMsg = error.message;
            //dispatch(fetchingArtError(errorMsg))
        });
    }      
}

export const deleteAuthor = ( payload = null ) => {
    return (dispatch) => { 
        axiosReq.GET('admin/editAuthors/'+payload.id)
        .then( response => {  
            dispatch(setEditAuthor(response))
        })
        .catch( error => {
            //const errorMsg = error.message;
            //dispatch(fetchingArtError(errorMsg))
        });
    }      
}