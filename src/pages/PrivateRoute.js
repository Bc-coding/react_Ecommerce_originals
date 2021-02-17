import React from "react";

import { Route, Redirect } from "react-router-dom";
import { useUserContext } from "../context/user_context";
import { withAuthenticationRequired } from "@auth0/auth0-react";

import About from "./About";

const PrivateRoute = ({ children, ...rest }) => {
  const { myUser } = useUserContext();

  return (
    <Route
      {...rest}
      render={() => {
        return myUser ? children : <Redirect to="/"></Redirect>;
      }}
    >
      {children}
    </Route>
  );
};

export default withAuthenticationRequired(PrivateRoute, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
