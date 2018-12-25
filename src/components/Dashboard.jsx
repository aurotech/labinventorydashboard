import React, { Component } from "react";
import "./dashboard.css";
// Componnents
import Assets from "./assets";
import DoughnutChart from "./widgets/DoughnutChart";
import { getAssets, recentTransactions } from "../services/data";
import { Link } from "react-router-dom";

class App extends Component {
  state = {
    assets: [],
    lowInventory: [],
    recents: [],
    batchAssets: []
  };

  async componentWillMount() {
    const assets = await getAssets();
    const recents = await recentTransactions();
    const batches = [];
    assets.filter(a => {
      if (a.assetType === "Batch") {
        batches.push(a);
      }
    });
    this.setState({ assets, recents, batchAssets: batches });
    this.checkLowInvenntory();
  }

  displayTransactions(asset, i) {
    const date = (
      new Date(asset.timestamp).getDate() +
      "/" +
      (new Date(asset.timestamp).getMonth() + 1) +
      "/" +
      new Date(asset.timestamp).getFullYear()
    ).toString();

    if (asset["transactionClass"] === "AssetEditLabelsTransaction") {
      return (
        <React.Fragment key={i}>
          <p>
            Labels are updated on
            {" " + date}
          </p>
          <p>
            {asset.oldLabels.length > 0 && "Old Labels:"}
            {asset.oldLabels.length > 0 &&
              asset.oldLabels.map((l, i) => (
                <span key={i}>{" " + l + ", "}</span>
              ))}
          </p>
          <p>
            {asset.newLabels.length > 0 && "New Labels:"}
            {asset.newLabels.length > 0 &&
              asset.newLabels.map((l, i) => (
                <span key={i}>{" " + l + " "}</span>
              ))}
          </p>
        </React.Fragment>
      );
    } else if (asset["transactionClass"] === "AssetAdditionTransaction") {
      return (
        <React.Fragment key={i}>
          <p>
            {asset.transactionType}
            {" " + date}
          </p>
          <p>
            Old Amount:
            {asset.oldAmount}
          </p>
          <p>
            New Amount:
            {asset.amount}
          </p>
        </React.Fragment>
      );
    } else if (asset["transactionClass"] === "AssetSubtractionTransaction") {
      return (
        <React.Fragment key={i}>
          <p>
            {asset.transactionType}
            {" " + date}
          </p>
          <p>
            Old Amount:
            {asset.oldAmount}
          </p>
          <p>
            New Amount:
            {asset.amount}
          </p>
        </React.Fragment>
      );
    } else if (asset["transactionClass"] === "AssetEditThresholdTransaction") {
      return (
        <React.Fragment key={i}>
          <p>
            {asset.transactionType}
            {" " + date}
          </p>
          <p>
            Threshold:
            {asset.newThreshold}
          </p>
          <p>
            Actual Amount:
            {asset.oldThreshold}
          </p>
        </React.Fragment>
      );
    }
    // return <p>{JSON.stringify(asset)}</p>;
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
        <div className="row top-block-raised">
          <div className="col-9 my-card">
            <div className="row">
              <div className="col-6 data-block my-card">
                <p className="box-heading">Total Single Assets</p>
                <h3>{this.state.assets.length}</h3>

                <DoughnutChart assets={this.state.assets} />
              </div>
              <div className="col-6 data-block my-card">
                <p className="box-heading">Total Batch Assets</p>
                <h3>{this.state.batchAssets.length}</h3>

                <DoughnutChart assets={this.state.batchAssets} />
              </div>

              <div className="data-block">
                <div className="pull-right">
                  <Link
                    className="btn btn-secondary btn-sm"
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
                  onMouse={this.onMouseEvent}
                  assets={this.state.assets}
                />
              </div>
            </div>
          </div>
          <div className="col-3 row-itmes-flex my-card no-left-border">
            <div className="inventory-update">
              <h6
                style={{ textAlign: "left" }}
                className="box-heading label-fixed mt-0"
              >
                Low Inventory Items: {this.state.lowInventory.length}
              </h6>

              <ul className="list-group">
                {this.state.lowInventory.map((a, i) => (
                  <li className="list-group-item" key={i}>
                    <span className="field">{a.assetId}</span> is low on
                    inventory. Only {a.quantity} left.
                  </li>
                ))}
              </ul>
            </div>
            <div className="inventory-transactions">
              <h6 style={{ textAlign: "left" }} className="box-heading">
                Latest Transactions: {this.state.recents.length}
              </h6>
              {this.state.recents.map((a, i) => (
                <ul className="list-group" key={i}>
                  <li className="list-group-item">
                    {this.displayTransactions(a, i)}
                  </li>
                  <br />
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
