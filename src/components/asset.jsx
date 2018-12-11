import React, { Component } from "react";
import "./asset.css";
import BarChart from "./widgets/BarChart";

class Asset extends Component {
  state = {};
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
                <BarChart />
              </div>
            </div>
            <div className="box-shadow mt-25">
              <div className="border-gray p-left-30 p-10">
                <p className="box-heading">Add Labels Here</p>
                <hr />
                LABELS
                <br />
                DISCRIPTION
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
            <div className="p-left-30 p-10">Data</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Asset;
