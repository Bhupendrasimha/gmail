import {GET_MAIL_REQ,GET_MAIL_SUCCESS,GET_MAIL_FAILURE,POST_MAIL_REQ,POST_MAIL_SUCEESS,POST_MAIL_FAILURE,
    OPEN_SEND,CLOSE_SEND} from "./actionType"

const initState={
    sendMessageIsOpen:false,
    mailsData:[]
}

export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case OPEN_SEND:
            return{
                ...state,
                sendMessageIsOpen:true
            };
        case CLOSE_SEND:
            return{
                ...state,
                sendMessageIsOpen:false
            };
        case GET_MAIL_REQ:
            return{
                ...state
            };
        case GET_MAIL_SUCCESS:
            return{
                ...state,
                mailsData:payload
            };
        case GET_MAIL_FAILURE:
            return{
                ...state
            }
        
        default:
            return state;
        
    }
}