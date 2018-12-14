import React, { Component } from "react";
import LineChart from "./widgets/LineChart";
import "./asset.css";
import { getAssetHistory } from "../services/data";

class Asset extends Component {
  state = {
    assetHistory: []
  };

  async componentWillMount() {
    const assetHistory = await getAssetHistory(this.props.match.params.id);
    this.setState({ assetHistory });
    console.log(Object.keys(assetHistory));
  }

  render() {
    return (
      <div>
        <div className="asset-header b-raised">
          <h3>Asset {this.props.match.params.id}</h3>
        </div>
        <div className="row mt-25">
          <div className="col-8">
            <div className="box-shadow">
              <div className="border-gray p-left-30 p-10">
                <p className="box-heading">Inventory OverTime</p>
                <hr />
                {/* <BarChart /> */}
                <LineChart />
              </div>
            </div>
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
          <div className="col-4 box-shadow">
            <p className="box-heading">Transaction History</p>
            <div className="p-left-30 p-10">
              {this.state.assetHistory.map((obj, i) => (
                <React.Fragment key={i}>
                  <p>
                    <span>
                      {Object.keys(obj).map((key, i) => (
                        <span className="d-block" key={i}>
                          {key !== "assetId" &&
                          key !== "assetType" &&
                          key !== "timestamp" &&
                          key !== "time" &&
                          key !== "status" ? (
                            <span>
                              {key[0].toUpperCase() + key.slice(1, key.length)}{" "}
                              was updated on{" "}
                              <span>
                                {(
                                  new Date(obj.timestamp).getDate() +
                                  "/" +
                                  (new Date(obj.timestamp).getMonth() + 1) +
                                  "/" +
                                  new Date(obj.timestamp).getFullYear()
                                ).toString()}
                              </span>
                            </span>
                          ) : null}
                        </span>
                      ))}{" "}
                    </span>
                  </p>
                  <hr />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Asset;
