import * as React from "react";
import * as ReactDOM from "react-dom";
import Dashboard from "./components/Dashboard";
import Assets from "./components/assets";
import Asset from "./components/asset";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Container from "./components/Container";
// Using bootstrap, PrimeReact the UI libraries
import "bootstrap/dist/css/bootstrap.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
// Our styles
import "./styles/custom.css";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Navbar />
      <Container>
        <Switch>
          <Route path="/asset/:id" component={Asset} />
          <Route path="/assets" component={Assets} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </Container>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
