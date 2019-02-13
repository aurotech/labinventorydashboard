import React, { Component } from "react";
import "./dashboard.css";
// Componnents
import Assets from "./assets";
import DoughnutChart from "./widgets/DoughnutChart";
import { getAssets, recentTransactions } from "../services/data";
import { Link } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay";

class App extends Component {
  state = {
    assets: [],
    lowInventory: [],
    recents: [],
    batchAssets: [],
    active: true
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
    this.setState({ assets, recents, batchAssets: batches, active: false });
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
            <span className="field-blue">Labels were updated</span> on
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
            <span className="field-green">{asset.transactionType}</span>
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
            <span className="field-warning">{asset.transactionType}</span>
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
    } else if (asset["transactionClass"] === "AssetCreateTransaction") {
      return (
        <React.Fragment key={i}>
          <p>
            <span className="field-green">A new Asset was created</span> on{" "}
            {" " + date}
          </p>
          <p>
            Asset Type:
            {asset.assetType}
          </p>
          <p>
            Asset Description:
            {asset.description}
          </p>
        </React.Fragment>
      );
    } else if (asset["transactionClass"] === "AssetEditThresholdTransaction") {
      return (
        <React.Fragment key={i}>
          <p>
            <span className="field-blue">{asset.transactionType}</span>
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
    } else if (
      asset["transactionClass"] === "AssetEditDescriptionTransaction"
    ) {
      return (
        <React.Fragment key={i}>
          <p>
            <span className="field-warning">
              Asset's Description was updated
            </span>{" "}
            on {" " + date} by {" " + asset.user}
          </p>
          <p>
            Old Description:
            {asset.oldDescription}
          </p>
          <p>
            New Description:
            {asset.newDescription}
          </p>
        </React.Fragment>
      );
    } else if (asset["transactionClass"] === "AssetMoveTransaction") {
      return (
        <React.Fragment key={i}>
          <p>
            <span className="field-blue">Asset's Location was updated</span> on{" "}
            {" " + date} by {" " + asset.user}
          </p>
          <p>
            Old Location:
            {asset.oldLocation}
          </p>
          <p>
            New Location:
            {asset.newLocation}
          </p>
        </React.Fragment>
      );
    } else if (asset["transactionClass"] === "AssetUndoRemoveTransaction") {
      return (
        <React.Fragment key={i}>
          <p>
            <span className="field-blue"> Updated on asset</span> on{" "}
            {" " + date} by {" " + asset.user}
          </p>
          <p>
            Old Location:
            {asset.oldLocation}
          </p>
          <p>
            New Location:
            {asset.newLocation}
          </p>
        </React.Fragment>
      );
    } else if (asset["transactionClass"] === "AssetAssignTransaction") {
      return (
        <React.Fragment key={i}>
          <p>
            <span className="field-green"> Asset was assigned</span> to{" "}
            {" " + asset.assignee} on
            {" " + date}
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
              <div className="inventory-transactions">
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
                      {this.displayTransactions(a, i)}
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
