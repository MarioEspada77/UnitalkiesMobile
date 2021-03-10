import React from "react";
import { Redirect, Route } from "react-router-dom";
import { withAuth } from "../Context/AuthContext";

function AnonRoute({ component: Comp, isLoggedin, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        !isLoggedin ? (
          <Comp {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/home",
            }}
          />
        )
      }
    />
  );
}

export default withAuth(AnonRoute);
