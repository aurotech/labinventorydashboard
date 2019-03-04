import React, { Component } from "react";
import LineChart from "./widgets/LineChart";
import "./asset.css";
import { getAsset, getAssetHistory, updateAsset } from "../services/data";
import * as qs from "query-string";
import FormDialog from "./widgets/Dialog";
import Chip from "@material-ui/core/Chip";
import { Icon } from "@material-ui/core";
import LoadingOverlay from "react-loading-overlay";

class Asset extends Component {
  assetType;

  constructor(props) {
    super(props);
    this.assetType = qs.parse(props.location.search).type;
  }
  state = {
    assetHistory: [],
    asset: {},
    showDialog: false,
    open: false,
    active: true,
    temp: {}
  };

  componentWillMount() {
    this.getAssetsData();
  }

  async getAssetsData() {
    const assetHistory = await getAssetHistory(this.props.match.params.id);
    const asset = await getAsset(this.props.match.params.id);

    this.setState({
      assetHistory,
      asset,
      active: false
    });
  }

  displayTransactions(asset, i) {
    const date = (
      new Date(asset.timestamp).getMonth() +
      1 +
      "/" +
      new Date(asset.timestamp).getDate() +
      "/" +
      new Date(asset.timestamp).getFullYear()
    ).toString();

    if (asset["transactionType"] === "Increase in Inventory") {
      return (
        <React.Fragment key={i}>
          <p>
            <span className="field-success">
              Invenntory added on
              {" " + date}
            </span>
          </p>
          <p>
            {" "}
            Old Amount: <span className="field-warning">
              {asset.oldAmount}
            </span>{" "}
          </p>
          <p>
            New Amount: <span className="field-red">{asset.amount}</span>{" "}
          </p>
          <hr />
        </React.Fragment>
      );
    } else if (asset["transactionType"] === "Asset Assignment") {
      return (
        <React.Fragment key={i}>
          <p>
            <span className="field-blue">
              Asset assignment changed on
              {" " + date}
            </span>
          </p>
          <hr />
        </React.Fragment>
      );
    } else if (asset["transactionType"] === "Update Comment") {
      return (
        <React.Fragment key={i}>
          <p>
            <span className="field-red">
              Comment updated on
              {" " + date}
            </span>
          </p>
          <hr />
        </React.Fragment>
      );
    } else if (asset["transactionType"] === "Update Location") {
      return (
        <React.Fragment key={i}>
          <p>
            <span className="field-warning">
              Location updated on
              {" " + date}
            </span>
          </p>
          <hr />
        </React.Fragment>
      );
    } else if (asset["transactionType"] === "Asset Removal") {
      return (
        <React.Fragment key={i}>
          <p>
            <span className="field-danger">
              Asset Removed on
              {" " + date}
            </span>
          </p>
          <hr />
        </React.Fragment>
      );
    } else if (asset["transactionType"] === "Asset Return") {
      return (
        <React.Fragment key={i}>
          <p>
            <span className="field-blue">
              Asset Returned on
              {" " + date}
            </span>
          </p>
          <hr />
        </React.Fragment>
      );
    } else if (asset["transactionType"] === "Decrease in Inventory") {
      return (
        <React.Fragment key={i}>
          <p>
            <span className="field-danger">
              Inventory decreased on
              {" " + date}
            </span>
          </p>
          <p>
            {" "}
            Old Amount: <span className="field-warning">
              {asset.oldAmount}
            </span>{" "}
          </p>
          <p>
            New Amount: <span className="field-red">{asset.amount}</span>{" "}
          </p>
          <hr />
        </React.Fragment>
      );
    } else if (asset["transactionType"] === "Update Description") {
      return (
        <React.Fragment key={i}>
          <p>
            Description updated on
            {" " + date + " "} from
            <br />
            <span className="field-warning">{asset.newDescription}</span>
            <span className="field-blue">
              <br /> to {asset.oldDescription}
            </span>
          </p>

          <hr />
        </React.Fragment>
      );
    } else if (asset["transactionType"] === "Asset Creation") {
      return (
        <React.Fragment key={i}>
          <p>
            <span className="field-green">
              Asset was created on
              {" " + date}
            </span>
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
            <span className="field-warning">
              Asset was re-created / restored on
              {" " + date}
            </span>
          </p>

          <hr />
        </React.Fragment>
      );
    }
  }

  handleClickOpen = e => {
    this.setState({ open: !this.state.open });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleDelete = val => {};

  handleChange = (name, event) => {
    this.setState({
      temp: { ...this.state.temp, [name]: event.target.value }
    });
  };

  handleSubmit = async () => {
    this.setState({ active: true, open: false });
    try {
      const result = await updateAsset(
        this.state.asset.assetId,
        this.state.temp,
        this.state.asset.quantity
      );
      if (result) {
        this.getAssetsData();
      }
    } catch (ex) {
      console.log("catch block");
      this.setState({ active: false });
    }
  };

  render() {
    return (
      <LoadingOverlay
        active={this.state.active}
        // className="_loading_overlay_overlay"
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
        <div className="asset-header b-raised my-card">
          <div className="row mt-25">
            <div className="col-8">
              <div className="d-flex">
                <h3>Asset {this.props.match.params.id}</h3>
                {this.assetType !== "Single" ? (
                  <div className="d-flex">
                    <div className="p-2 m-5 bg-success text-white">
                      <span className="m-5"> Threshold</span>
                      <span className="badge badge-dark">
                        {this.state.asset.threshold}
                      </span>
                    </div>
                    <div className="p-2 m-5 bg-warning text-white">
                      <span className="m-5"> Quantity</span>
                      <span className="badge badge-dark">
                        {this.state.asset.quantity}
                      </span>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="my-card box-shadow">
                <span
                  style={{
                    display: "flex",
                    justifyContent: "space-between"
                  }}
                >
                  <h3>Details:</h3>
                  <FormDialog
                    open={this.state.open}
                    onClick={this.handleClickOpen}
                    buttonType={"fab"}
                    asset={this.state.asset}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    assetType={this.state.asset.assetType}
                    fields={[
                      {
                        type: "text",
                        label: "Description",
                        value: this.state.asset.description,
                        onChange: this.handleChange
                      },
                      {
                        type: "text",
                        label: "Status",
                        value: this.state.asset.status,
                        onChange: this.handleChange
                      },
                      {
                        type: "text",
                        label: "Comment",
                        value: this.state.asset.comment,
                        onChange: this.handleChange
                      },
                      {
                        type: "number",
                        label: "Quantity",
                        value: this.state.asset.quantity,
                        onChange: this.handleChange
                      },
                      {
                        type: "number",
                        label: "Threshold",
                        value: this.state.asset.threshold,
                        onChange: this.handleChange
                      }
                    ]}
                  />
                </span>
                <hr />
                <h5>
                  Description:
                  <span className="details">
                    {this.state.asset.description}
                  </span>
                </h5>
                <h5>
                  Status:
                  <span className="details">{this.state.asset.status}</span>
                </h5>
                {this.state.asset.labels &&
                  this.state.asset.labels.map(val => (
                    <Chip
                      key={val}
                      deleteIcon={<Icon>cancel</Icon>}
                      label={val}
                      onDelete={this.handleDelete(val)}
                    />
                  ))}
              </div>
              <br />
              {this.assetType !== "Single" ? (
                <div className=" my-card box-shadow">
                  <p className="box-heading">Inventory OverTime</p>
                  <hr />
                  {/* <BarChart /> */}
                  <LineChart id={this.props.match.params.id} />
                </div>
              ) : null}
            </div>
            <div
              className={
                "col-4 my-card scroller-section" +
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
      </LoadingOverlay>
    );
  }
}

export default Asset;
