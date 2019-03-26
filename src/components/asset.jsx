import React, { Component } from "react";
import LineChart from "./widgets/LineChart";
import "./asset.css";
import * as qs from "query-string";
import FormDialog from "./widgets/Dialog";
import Chip from "@material-ui/core/Chip";
import { Icon, Fab } from "@material-ui/core";
import LoadingOverlay from "react-loading-overlay";
import { toast } from "react-toastify";
import { Transactions } from "./transactions";
import Button from "@material-ui/core/Button";

import {
  getAsset,
  getAssetHistory,
  updateAsset,
  editLabelsTransaction
} from "../services/data";

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
    forLabels: false,
    active: true,
    temp: {},
    tempLabel: "",
    anchorEl: null
  };

  componentWillMount() {
    this.getAssetsData();
  }

  async getAssetsData() {
    try {
      const assetHistory = await getAssetHistory(this.props.match.params.id);
      const asset = await getAsset(this.props.match.params.id);
      this.setState({
        assetHistory,
        asset,
        active: false
      });
    } catch (ex) {
      toast.error("Server unavailable. Please try againn later.");
    }
  }

  handleClickOpen = e => {
    this.setState({ open: !this.state.open });
  };

  handleClose = () => {
    this.setState({ open: false, forLabels: false });
  };

  openFormDialog() {
    this.setState({ forLabels: !this.state.forLabels });
  }

  handleDelete(val) {
    console.log(val);
  }

  handleChange = (name, event) => {
    const { temp } = this.state;
    temp[name] = event.target.value;
    this.setState({ temp });
  };

  handleSubmit = async () => {
    if (Object.keys(this.state.temp).length > 0) {
      this.setState({ active: true, open: false });

      try {
        const result = await updateAsset(
          this.state.asset.assetId,
          this.state.temp,
          this.state.asset.quantity
        );
        if (result) {
          this.getAssetsData();
          this.setState({ temp: {} });
        }
      } catch (ex) {
        this.setState({ active: false });
      }
    } else {
      this.setState({ open: false });
    }
  };

  async editLabels(asset, mode) {
    // console.clear();
    let { labels, assetId } = asset;
    let tempLabel = this.state.temp.label;
    let oldAsset = JSON.parse(JSON.stringify(asset));
    const tempObj = { asset: assetId };

    if (mode === "delete") {
      labels.splice(labels.indexOf(tempLabel), 1);
      tempObj["newLabels"] = JSON.stringify(labels);
      asset.labels = labels;
      this.setState({ asset });

      try {
        const result = await editLabelsTransaction(tempObj);
        if (result) {
          toast.warning(
            `${tempLabel} was removed sucessfully from asset's labels`
          );
          this.getAssetsData();
        }
      } catch (ex) {
        this.setState({ asset: oldAsset });
        toast.error("Something went wrong. Please try again later.");
      }
    } else {
      if (this.state.temp.label) {
        tempObj["newLabels"] = JSON.stringify([
          ...labels,
          this.state.temp.label
        ]);
        asset.labels.push(tempLabel);
        this.setState({ forLabels: !this.state.forLabels, asset });
        try {
          const result = await editLabelsTransaction(tempObj);
          if (result)
            toast.success("Label: " + tempLabel + " was added successfully");
          this.getAssetsData();
        } catch (ex) {
          toast.error("Something went wrong. Please try again later.");
        }
      }
    }
  }

  generateFields(arr) {
    return arr.map(label => {
      return {
        type: label === "quantity" || label === "threshold" ? "number" : "text",
        label: label[0].toUpperCase() + label.slice(1),
        value: this.state.asset[label],
        onChange: this.handleChange
      };
    });
  }

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
          {
            <div
              className={
                "row mt-25 " +
                (this.assetType === "Batch" ? "sec-batch-scroll" : "sec-scroll")
              }
            >
              <div className="col-8">
                <div className="d-flex">
                  <h3>
                    <Button
                      variant="contained"
                      color="primary"
                      className="mr-15"
                      onClick={() => this.props.history.goBack()}
                    >
                      {<Icon>keyboard_backspace</Icon>}
                    </Button>
                    Asset {this.props.match.params.id}
                  </h3>
                  <br />
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
                      // ASSET DETTAILS EDIT DIALOG
                      open={this.state.open}
                      onClick={() => this.handleClickOpen()}
                      button={
                        <Fab
                          color="primary"
                          size="small"
                          onClick={() => this.handleClickOpen()}
                        >
                          <Icon>edit_icon</Icon>
                        </Fab>
                      }
                      asset={this.state.asset}
                      onChange={this.handleChange}
                      onSubmit={this.handleSubmit}
                      assetType={this.state.asset.assetType}
                      title={"You can change the details here"}
                      fields={this.generateFields([
                        "description",
                        "status",
                        "comment",
                        "quantity",
                        "threshold"
                      ])}
                    />
                  </span>
                  <hr />
                  {this.state.asset.description && (
                    <div>
                      <h5>
                        Description:
                        <span className="details">
                          {" " + this.state.asset.description}
                        </span>
                      </h5>
                      <h5>
                        Status:
                        <span className="details">
                          {" " + this.state.asset.status}
                        </span>
                      </h5>
                    </div>
                  )}
                  {this.state.asset.labels &&
                    this.state.asset.labels.map(val => (
                      <Chip
                        key={val}
                        deleteIcon={<Icon>cancel</Icon>}
                        label={val}
                        onDelete={() =>
                          this.editLabels(this.state.asset, "delete")
                        }
                      />
                    ))}
                  <FormDialog
                    // FORM LABELS EDIT DIALOG
                    styles={{ display: "inline" }}
                    open={this.state.forLabels}
                    onClick={() => this.openFormDialog()}
                    button={
                      <Chip
                        label={<Icon color="action">add_circle</Icon>}
                        onClick={() => this.openFormDialog()}
                      />
                    }
                    asset={this.state.asset}
                    onChange={this.handleChange}
                    submitButtonTitle={"Add"}
                    onSubmit={() => this.editLabels(this.state.asset)}
                    assetType={this.state.asset.assetType}
                    title={"Add another label"}
                    fields={[
                      {
                        type: "text",
                        label: "Label",
                        onChange: this.handleChange
                      }
                    ]}
                  />
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

              <Transactions
                data={this.state.assetHistory}
                assetId={this.state.asset.assetId}
              />
            </div>
          }
        </div>
      </LoadingOverlay>
    );
  }
}

export default Asset;
