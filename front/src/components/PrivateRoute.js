import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux'

const PrivateRoute = ({ userid, component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            userid ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/",
                        state: { from: props.location },
                    }}
                />
            )
        }
    />
);

function mapStateToProps(state) {
    return {
        userid: state.userid
    };
  };
  
  export default connect(mapStateToProps)(PrivateRoute)