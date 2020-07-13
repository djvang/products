import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

import useUser from "../hooks/useUser";

function PrivateRoute({ children, ...rest }) {
  const { loaded, isAuthenticated } = useUser();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !loaded && isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
