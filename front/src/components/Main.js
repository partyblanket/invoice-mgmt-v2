import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { connect } from "react-redux";
import Header from "./Header";
import Welcome from "./Welcome";
import Sidebar from "./Sidebar";

import "./Main.css";
import List from "./List";
import Sale from "./Sale";

// import { getData } from "../utils/actions";

function Main({ dispatch }) {
  // if JWT then set email first so private route can be accessed.
  const token = localStorage.getItem("jwtoken");
  if (token) {
    const { email } = JSON.parse(window.atob(token.split(".")[1]));
    dispatch({ type: "JWT_LOGIN", email });
    // dispatch(getData());
  }
  if(!token) return <Welcome />
  return (
    <BrowserRouter>
      <>
        <Header />
        <div className="flex-wrapper">
          <Sidebar />
          <Route
            exact
            path="/"
            render={props => <List {...props} listType="sale" />}
          />
          <Route path="/sale" component={Sale} />
          {/* <PrivateRoute exact path='/list' component={List} />
        <PrivateRoute exact path='/settings' component={Settings} />
        <PrivateRoute exact path='/templates' component={Templates} /> */}
        </div>
      </>
    </BrowserRouter>
  );
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Main);
