import * as React from "react";
import * as ReactDOM from "react-dom";
import Dashboard from "./components/Dashboard";
import Assets from "./components/assets";
import Asset from "./components/asset";
import { Switch, Route, HashRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Container from "./components/Container";
import Login from "./components/login";
import ProtectedRoute from "./components/protectedRoute";

// Using bootstrap, PrimeReact the UI libraries
import "bootstrap/dist/css/bootstrap.css";
// import "primereact/resources/themes/nova-light/theme.css";
// import "primereact/resources/primereact.min.css";
// import "primeicons/primeicons.css";
// Our styles
import "./styles/custom.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <HashRouter>
    <React.Fragment>
      <ToastContainer />

      <Navbar />
      <Container>
        <Switch>
          <ProtectedRoute path="/asset/:id" component={Asset} />
          <ProtectedRoute path="/assets" component={Assets} />
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/" component={Dashboard} />
        </Switch>
      </Container>
    </React.Fragment>
  </HashRouter>,
  document.getElementById("root")
);
