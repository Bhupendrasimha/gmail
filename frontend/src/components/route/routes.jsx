import React from "react";
import Header from "../pages/header";
import "../../App.css";
import Sidebar from "../pages/sideBar";
import Mail from "../pages/mail";
import EmailList from "../pages/emailList";
import SendMail from "../pages/sendMail";
import Starred from "../pages/starred";
import EmailRow from "../pages/emailRow";
import Snoozed from "../pages/snoozed";
import Important from "../pages/important";
import Sent from "../pages/sent";
import Draft from "../pages/draft";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function MainRoute() {
  const sendMessageIsOpen = useSelector((state) => state.sendMessageIsOpen);

  return (
    <Router>
      <div className="app">
        <Header />

        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route exact path="/" component={EmailRow} />
            <Route exact path="/mail" component={Mail} />
            <Route exact path="/mail/starred" component={Starred} />
            <Route exact path="/mail/snoozed" component={Snoozed} />
            <Route exact path="/mail/important" component={Important} />
            <Route exact path="/mail/drafts" component={Draft} />
            <Route exact path="/mail/sent" component={Sent} />
          </Switch>
        </div>

        {sendMessageIsOpen && <SendMail />}
      </div>
    </Router>
  );
}

export default MainRoute;
