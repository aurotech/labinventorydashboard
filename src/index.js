import * as React from "react";
import * as ReactDOM from "react-dom";
import Dashboard from "./components/Dashboard";
import Assets from "./components/assets";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Container from "./components/Container";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Navbar />
      <Container>
        <Switch>
          <Route path="/assets" component={Assets} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </Container>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
