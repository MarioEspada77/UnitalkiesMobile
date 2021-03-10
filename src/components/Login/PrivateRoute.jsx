import React from "react";
import { Redirect, Route } from "react-router-dom";
import { withAuth } from "../Context/AuthContext";

function PrivateRoute({ component: Comp, isLoggedin, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedin ? (
          <Comp {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      }
    />
  );
}

export default withAuth(PrivateRoute);
