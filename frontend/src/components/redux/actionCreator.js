import {
  GET_MAIL_REQ,
  GET_MAIL_SUCCESS,
  GET_MAIL_FAILURE,
  POST_MAIL_REQ,
  POST_MAIL_SUCCESS,
  POST_MAIL_FAILURE,
  OPEN_SEND,
  CLOSE_SEND,
  DELETE_MAIL,
SENT_MAIL_COUNT
} from "./actionType";

import axios from "axios";

const getMailReq = () => ({
  type: GET_MAIL_REQ,
});

const getMailSuccess = (payload) => ({
  type: GET_MAIL_SUCCESS,
  payload,
});
const getMailFailure = (payload) => ({
  type: GET_MAIL_FAILURE,
  payload,
});

export const getAllMails = () => (dispatch) => {
  dispatch(getMailReq);
  axios({
    method: "GET",
    url: "http://localhost:5000/admin/mails",
  })
    .then((res) => dispatch(getMailSuccess(res.data)))
    .catch((err) => dispatch(getMailFailure(err)));
};
export const openSend = () => ({
  type: OPEN_SEND,
});
export const closeSend = () => ({
  type: CLOSE_SEND,
});

const postMailReq = () => ({
  type: POST_MAIL_REQ,
});

const postMailSuccess = (payload) => ({
  type: POST_MAIL_SUCCESS,
  payload,
});
const postMailFailure = (payload) => ({
  type: POST_MAIL_FAILURE,
  payload,
});

export const postAllMails = (payload) => (dispatch) => {
  dispatch(postMailReq);
  axios({
    method: "POST",
    url: "http://localhost:5000/admin/sendMail",
    data: payload,
  })
    .then((res) => dispatch(postMailSuccess(res.data)))
    .catch((err) => dispatch(postMailFailure(err)));
};

const deleteMail = (payload) => ({
  type: DELETE_MAIL,
  payload,
});

export const deleteMailById = (payload) => (dispatch) => {
  axios({
    method: "DELETE",
    url: `http://localhost:5000/admin/mail/${payload}`,
  })
    .then((res) => dispatch(deleteMail(res)))
    .catch((err) => console.log(err));
};

export const sentCount=(payload)=>({
  type:SENT_MAIL_COUNT,
  payload
})