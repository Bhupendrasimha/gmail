import {GET_MAIL_REQ,GET_MAIL_SUCCESS,GET_MAIL_FAILURE,POST_MAIL_REQ,POST_MAIL_SUCEESS,POST_MAIL_FAILURE,
OPEN_SEND,CLOSE_SEND} from "./actionType"

import axios from "axios"

const getMailReq=()=>({
    type:GET_MAIL_REQ   
})

const getMailSuccess=(payload)=>({
    type:GET_MAIL_SUCCESS,
    payload
})
const getMailFailure=(payload)=>({
    type:GET_MAIL_FAILURE,
    payload
})

export const getAllMails=()=>(dispatch)=>{
    dispatch(getMailReq)
    axios({
        method:"GET",
        url:"http://localhost:5000/admin/mails"
    })
    .then((res)=>dispatch(getMailSuccess(res.data)))
    .catch((err)=>dispatch(getMailFailure(err)))

}
export const openSend=()=>({
    type:OPEN_SEND
})
export const closeSend=()=>({
    type:CLOSE_SEND
})