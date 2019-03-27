import React, { Component } from "react";
import "./dashboard.css";
// Componnents
import Assets from "./assets";
import DoughnutChart from "./widgets/DoughnutChart";
import { getAssets, recentTransactions } from "../services/data";
import { Link } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay";
import { displayTransactions } from "./widgets/util";
// REACT TOASTIFY

class App extends Component {
  state = {
    assets: [],
    lowInventory: [],
    recents: [],
    singleAssets: [],
    batchAssets: [],
    active: true
  };

  async componentWillMount() {
    try {
      const assets = await getAssets();
      const recents = await recentTransactions();
      let batches = [];
      let singles = [];
      assets.filter(a => {
        a.assetType === "Batch" ? batches.push(a) : singles.push(a);
      });
      if (recents && assets) {
        recents.map(recent => {
          assets.forEach(a => {
            if (a.assetId === recent.assetId) {
              recent["assetType"] = a.assetType;
            }
          });
        });
      }
      this.setState({
        assets,
        recents,
        singleAssets: singles,
        batchAssets: batches,
        active: false
      });
      this.checkLowInvenntory();
    } catch (ex) {
      this.setState({
        active: false
      });
    }
  }

  checkLowInvenntory() {
    const lowInventory = [];
    this.state.assets.map(a => {
      if (a["quantity"] < a["threshold"]) {
        lowInventory.push(a);
        this.setState({ lowInventory });
      }
      return;
    });
  }

  render() {
    return (
      <div>
        <LoadingOverlay
          active={this.state.active}
          className="_loading_overlay_overlay"
          spinner
          styles={{
            spinner: base => ({
              ...base,
              width: "100px",
              height: "100px",
              top: "-150px",
              "& svg circle": {
                stroke: "#0F6FA6"
              }
            })
          }}
        >
          <div className="row b-raised sec-batch-scroll">
            <div className="col-9 my-card">
              <div className="row">
                <div className="col-6 data-block my-card">
                  <p className="box-heading">Total Single Assets</p>
                  <h3>
                    {this.state.assets.length - this.state.batchAssets.length}
                  </h3>

                  {this.state.assets && (
                    <DoughnutChart assets={this.state.singleAssets} />
                  )}
                </div>
                <div className="col-6 data-block my-card">
                  <p className="box-heading">Total Batch Assets</p>
                  {this.state.batchAssets && (
                    <h3>{this.state.batchAssets.length}</h3>
                  )}
                  <DoughnutChart assets={this.state.batchAssets} batch={true} />
                </div>

                <div className="data-block col-12">
                  <div className="pull-right">
                    <Link
                      className="btn btn-warning btn-sm"
                      style={{ float: "right" }}
                      to="/assets"
                    >
                      Show More
                    </Link>
                  </div>
                  <h4 style={{ textAlign: "left" }}>
                    Total Items: {this.state.assets.length}
                  </h4>
                  <Assets
                    tableClasses="table-scroll"
                    assets={this.state.assets}
                  />
                </div>
              </div>
            </div>
            <div className="col-3 row-itmes-flex my-card no-left-border scroll-card">
              <div className="inventory-update">
                <h6
                  style={{ textAlign: "left" }}
                  className="label-fixed mt-0 card-filled"
                >
                  Low Inventory Items:{" "}
                  <span className="badge badge-dark">
                    {this.state.lowInventory.length}
                  </span>
                </h6>

                <ul className="list-group">
                  {this.state.lowInventory.map((a, i) => (
                    <li className="list-group-item" key={i}>
                      <span className="field-red">{a.assetId}</span> is low on
                      inventory. Only {a.quantity} left.
                    </li>
                  ))}
                </ul>
              </div>
              <div className="inventory-transactions ">
                <br />
                <h6 style={{ textAlign: "left" }} className="card-filled">
                  Latest Transactions:{" "}
                  <span className="badge badge-dark">
                    {this.state.recents.length}
                  </span>
                </h6>
                {this.state.recents.map((a, i) => (
                  <ul className="list-group" key={i}>
                    <li className="list-group-item">
                      {displayTransactions(a, i)}
                    </li>
                    <br />
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </LoadingOverlay>
      </div>
    );
  }
}

export default App;
