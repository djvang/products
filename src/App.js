import React, { useEffect, useState } from "react";

import { Switch, Route } from "react-router-dom";

import "antd/dist/antd.css";
import "./styles.css";

import Login from "./pages/Login";
import NewProduct from "./pages/NewProduct";
import EditProduct from "./pages/EditProduct";
import Products from "./pages/Products";
import PrivateRoute from "./components/PrivateRoute";
import useUser from "./hooks/useUser";

export default function App() {
  const { user } = useUser();

  console.log(user);
  return (
    <Switch>
      <PrivateRoute exact path="/">
        <Products />
      </PrivateRoute>
      <PrivateRoute exact path="/new">
        <NewProduct />
      </PrivateRoute>
      <PrivateRoute exact path="/products/:id">
        <EditProduct />
      </PrivateRoute>
      <Route exact path="/login">
        <Login />
      </Route>
    </Switch>
  );

  return;
}
