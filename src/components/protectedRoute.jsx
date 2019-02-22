import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoggedIn } from "../services/data";

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!isLoggedIn()) return <Redirect to="/login" />;
        return Component ? <Component {...props} /> : render;
      }}
    />
  );
};

export default ProtectedRoute;
