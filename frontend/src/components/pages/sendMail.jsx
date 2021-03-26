import React from "react";
import "../css/sendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSend } from "../redux/actionCreator";
import { postAllMails } from "../redux/actionCreator";
function SendMail() {
  const { register, handleSubmit, watch, errors } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    dispatch(postAllMails(formData));
   // console.log(formData);
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon
          onClick={() => dispatch(closeSend())}
          className="sendMail__close"
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="email"
          placeholder="To"
          type="email"
          ref={register({ required: true })}
        />
        {errors.to && <p className="sendMail__error">To is required !!</p>}

        <input
          name="title"
          placeholder="Subject"
          type="text"
          className="sendMail__subject"
          ref={register({ required: true })}
        />

        {errors.subject && (
          <p className="sendMail__error">Subject is required !!</p>
        )}
        <textarea
          name="content"
          placeholder="Message"
          type="text"
          className="sendMail__message"
        
          ref={register({ required: true })}
        />
        {errors.message && (
          <p className="sendMail__error">Message is required !!</p>
        )}
        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
