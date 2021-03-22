import React from "react";
import "../css/sidebar.css";
import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import SidebarOption from "./sidebarOption";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import { useDispatch } from "react-redux";
import { openSend } from "../redux/actionCreator";
import { useHistory } from "react-router-dom";
function Sidebar() {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
        onClick={() => dispatch(openSend())}
      >
        Compose
      </Button>

      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={1000}
        click={() => history.push("/")}
      />
      <SidebarOption
        Icon={StarIcon}
        title="Starred"
        type="button"
        number={22}
        click={() => history.push("/mail/starred")}
      />
      <SidebarOption
        Icon={AccessTimeIcon}
        title="Snoozed"
        number={0}
        click={() => history.push("/mail/snoozed")}
      />
      <SidebarOption
        Icon={LabelImportantIcon}
        title="Important"
        number={18}
        click={() => history.push("/mail/important")}
      />
      <SidebarOption
        Icon={NearMeIcon}
        title="Sent"
        number={0}
        click={() => history.push("/mail/sent")}
      />
      <SidebarOption
        Icon={NoteIcon}
        title="Drafts"
        number={19}
        click={() => history.push("/mail/drafts")}
      />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={11} />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
