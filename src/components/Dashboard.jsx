import React, { Component } from "react";
// Using bootstrap, PrimeReact the UI libraries
import "bootstrap/dist/css/bootstrap.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
// Our styles
import "../styles/custom.css";

// Componnents
import Assets from "./assets";
import BarChart from "./widgets/BarChart";
import DoughnutChart from "./widgets/DoughnutChart";
import { getAssets } from "../services/data";
import { Link } from "react-router-dom";

class App extends Component {
  state = {
    assets: []
  };

  async componentWillMount() {
    const assets = await getAssets();

    this.setState({ assets });
  }

  onMouseEvent = id => {
    console.log("id ", id);
  };

  render() {
    return (
      <div>
        {/* <h3>DASHBOARD</h3> */}
        <div className="row box-shadow top-block-raised">
          <div className="col-9 border-gray p-left-30">
            <p className="box-heading">Total Items</p>
            <h3>34</h3>
            <hr />

            <BarChart />
          </div>
          <div className="col-3 border-gray">
            <div className="row">
              <div className="col data-block border-bottom">
                <p>Total Assets</p>
                <h3>34</h3>
              </div>
            </div>
            <div className="row">
              <div className="col data-block border-bottom">
                <p>Total Batches</p>
                <h3>34</h3>
              </div>
            </div>
            <div className="row">
              <div className="col data-block">
                <p>Total Items</p>
                <h3>34</h3>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row box-shadow">
          <div className="col-9 border-gray p-left-30">
            <p className="box-heading">Total Items</p>
            <div className="pull-right">
              <Link
                className="btn btn-secondary btn-sm"
                style={{ float: "right" }}
                to="/assets"
              >
                Show More
              </Link>
            </div>
            <h3>{this.state.assets.length}</h3>
            <Assets
              tableClasses="table-scroll"
              onMouse={this.onMouseEvent}
              assets={this.state.assets}
            />
          </div>
          <div className="col-3 border-gray">
            <div className="row">
              <div className="col data-block">
                <p className="box-heading">Total Items</p>
                <h3>{this.state.assets.length}</h3>
                <hr />
                <DoughnutChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
