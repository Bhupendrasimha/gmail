import { Checkbox, IconButton } from "@material-ui/core";
import React, { useEffect } from "react";
import "../css/emailRow.css";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllMails } from "../redux/actionCreator";
import { ArrowDropDown, ChevronLeft } from "@material-ui/icons";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import RedoIcon from "@material-ui/icons/Redo";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import InboxIcon from "@material-ui/icons/Inbox";
import Section from "./section";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

function Snoozed() {
  const history = useHistory();
  const dispatch = useDispatch();
  const allMails = useSelector((state) => state.mailsData);

  //console.log("hi");
  useEffect(() => {
    dispatch(getAllMails());
  }, []);
  const data = allMails.filter((item) => item.type == "snoozed");
 // console.log(data);
  return (
    <>
      <div className="emailList">
        <div className="emailList__settings">
          <div className="emailList__settingsLeft">
            <Checkbox />

            <IconButton>
              <ArrowDropDown />
            </IconButton>
            <IconButton onClick={() => window.location.reload(false)}>
              <RedoIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>

          <div className="emailList__settingsRight">
            <IconButton>
              <ChevronLeftIcon />
            </IconButton>
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
            <IconButton>
              <KeyboardHideIcon />
            </IconButton>
            <IconButton>
              <SettingsIcon />
            </IconButton>
          </div>
        </div>

        <div className="emailList__sections">
          <Section Icon={InboxIcon} title="Primary" color="red" selected />
          <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
          <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
        </div>

        <div className="emailList__list">
          <div className="show">
            {data &&
              data.map((item) => (
                <div
                  onClick={() =>
                    history.push({ pathname: "/mail", state: { data: item } })
                  }
                  className="emailRow"
                  key={item.id}
                >
                  <div className="emailRow__options">
                    <Checkbox />
                    <IconButton>
                      <StarBorderOutlinedIcon />
                    </IconButton>
                    <IconButton>
                      <LabelImportantOutlinedIcon />
                    </IconButton>
                  </div>
                  <h3 className="emailRow__title">{item.title}</h3>
                  <div className="emailRow__message">
                    <h4>
                      {item.sender}
                      <span className="emailRow__description">
                        {item.content}
                      </span>
                    </h4>
                  </div>
                  <p className="emailRow_time">{item.date}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Snoozed;
