import React from "react";
import {
  CheckCircle,
  LabelImportant,
  MoveToInbox,
  UnfoldMore,
} from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import "../css/mail.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteMailById } from "../redux/actionCreator";

function Mail() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const mail = location.state.data;
  //console.log(mail);

  console.log(location)
  const handleDelete = () => {
    dispatch(deleteMailById(mail._id));
  };
  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={() => history.push("/")}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        <div className="mail__toolsRight">
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>

      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>{mail.sender}</h2>
          <LabelImportantIcon className="mail__important" />
          <p>{mail.title}</p>
          <p className="mail__time">{mail.date}</p>
        </div>
        <div className="mail__message">
          <p>{mail.content} </p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
