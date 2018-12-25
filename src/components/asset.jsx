import React, { Component } from "react";
import LineChart from "./widgets/LineChart";
import "./asset.css";
import { getAssetHistory } from "../services/data";
import * as qs from "query-string";

class Asset extends Component {
  assetType;
  constructor(props) {
    super(props);
    this.assetType = qs.parse(props.location.search).type;
  }
  state = {
    assetHistory: [],
    asset: {}
  };

  async componentWillMount() {
    const assetHistory = await getAssetHistory(this.props.match.params.id);

    this.setState({ assetHistory, asset: this.props.location.state });
  }

  displayTransactions(asset, i) {
    const date = (
      new Date(asset.timestamp).getDate() +
      "/" +
      (new Date(asset.timestamp).getMonth() + 1) +
      "/" +
      new Date(asset.timestamp).getFullYear()
    ).toString();

    if (asset["transactionType"] === "Increase in Inventory") {
      return (
        <React.Fragment key={i}>
          <p>
            Invenntory added on
            {" " + date}
          </p>
          <p>Old Amount: {asset.oldAmount}</p>
          <p>New Amount: {asset.quantity}</p>
          <hr />
        </React.Fragment>
      );
    } else if (asset["transactionType"] === "Asset Assignment") {
      return (
        <React.Fragment key={i}>
          <p>
            Invenntory added on
            {" " + date}
          </p>
          <p>Old Amount: {asset.oldAmount}</p>
          <p>New Amount: {asset.quantity}</p>
          <hr />
        </React.Fragment>
      );
    } else if (asset["transactionType"] === "Update Comment") {
      return (
        <React.Fragment key={i}>
          <p>
            Invenntory added on
            {" " + date}
          </p>
          <p>Old Amount: {asset.oldAmount}</p>
          <p>New Amount: {asset.quantity}</p>
          <hr />
        </React.Fragment>
      );
    } else if (asset["transactionType"] === "Update Location") {
      return (
        <React.Fragment key={i}>
          <p>
            Invenntory added on
            {" " + date}
          </p>
          <p>Old Amount: {asset.oldAmount}</p>
          <p>New Amount: {asset.quantity}</p>
          <hr />
        </React.Fragment>
      );
    } else if (asset["transactionType"] === "Asset Removal") {
      return (
        <React.Fragment key={i}>
          <p>
            Invenntory added on
            {" " + date}
          </p>
          <p>Old Amount: {asset.oldAmount}</p>
          <p>New Amount: {asset.quantity}</p>
          <hr />
        </React.Fragment>
      );
    } else if (asset["transactionType"] === "Asset Return") {
      return (
        <React.Fragment key={i}>
          <p>
            Inventory added on
            {" " + date}
          </p>
          <p>Old Amount: {asset.oldAmount}</p>
          <p>New Amount: {asset.quantity}</p>
          <hr />
        </React.Fragment>
      );
    } else if (asset["transactionType"] === "Decrease in Inventory") {
      return (
        <React.Fragment key={i}>
          <p>
            Inventory added on
            {" " + date}
          </p>
          <p>Old Amount: {asset.oldAmount}</p>
          <p>New Amount: {asset.quantity}</p>
          <hr />
        </React.Fragment>
      );
    } else if (asset["transactionType"] === "Update Description") {
      return (
        <React.Fragment key={i}>
          <p>
            Description was on
            {" " + date} from {asset.newDescription} to {asset.oldDescription}
          </p>

          <hr />
        </React.Fragment>
      );
    } else if (asset["transactionType"] === "Asset Creation") {
      return (
        <React.Fragment key={i}>
          <p>
            Asset was created on
            {" " + date}
          </p>
          <hr />
        </React.Fragment>
      );
    } else if (
      asset["transactionType"] ===
      "Asset Recreation, Restoration to Backup Point"
    ) {
      return (
        <React.Fragment key={i}>
          <p>
            Asset was re-created / restored on
            {" " + date}
          </p>

          <hr />
        </React.Fragment>
      );
    }
    // return <p>{JSON.stringify(asset)}</p>;
  }

  render() {
    return (
      <div>
        <div className="asset-header b-raised my-card">
          <h3>Asset {this.props.match.params.id}</h3>
          <div className="row mt-25">
            <div className="col-8">
              {this.assetType === "Single" ? (
                <div className="my-card box-shadow">
                  <h3>Details:</h3>
                  <hr />
                  <h5>Description: {this.state.asset.description}</h5>
                  <h5>Status: {this.state.asset.status}</h5>
                </div>
              ) : (
                <div>
                  <div className="my-card box-shadow">
                    <h3>Details:</h3>
                    <hr />
                    <h5>Description: {this.state.asset.description}</h5>
                    <h5>Status: {this.state.asset.status}</h5>
                  </div>
                  <br />
                  <div className=" my-card box-shadow">
                    <p className="box-heading">Inventory OverTime</p>
                    <hr />
                    {/* <BarChart /> */}
                    <LineChart />
                  </div>
                </div>
              )}
              <div className="box-shadow mt-25">
                <div className="border-gray p-left-30 p-10">
                  <p className="box-heading">Add Labels Here</p>
                  <hr />
                  LABELS
                  <br />
                  DESCRIPTION
                  <br />
                  COMMENTS
                  <br />
                  ETC
                  <br />
                  SET THRESHOLD
                </div>
              </div>
            </div>
            <div
              className={
                "col-4 my-card " +
                (this.assetType !== "Single" && "scroller-section")
              }
            >
              <p className="box-heading">Transaction History</p>
              <hr />
              <div className="p-left-30 p-10">
                {this.state.assetHistory.map((obj, i) =>
                  this.displayTransactions(obj, i)
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Asset;
