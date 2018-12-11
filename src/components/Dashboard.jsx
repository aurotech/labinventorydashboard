import React, { Component } from "react";
import "./dashboard.css";
// Componnents
import Assets from "./assets";
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
        <div className="row top-block-raised">
          <div className="col-9">
            <div className="row-itmes-flex">
              <div className="col-8 data-block">
                <p className="box-heading">Total Items</p>
                <h3>{this.state.assets.length}</h3>
                <hr />
                <DoughnutChart />
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
          <div className="col-3 row-itmes-flex">
            <div className="inventory-update">
              <h6 style={{ textAlign: "left" }} className="box-heading">
                Low Inventory Items: {this.state.assets.length}
              </h6>
              <ul className="list-group">
                <li className="list-group-item">1</li>
                <li className="list-group-item">2</li>
                <li className="list-group-item">3</li>
              </ul>
            </div>
            <div className="inventory-transactions">
              <h6 style={{ textAlign: "left" }} className="box-heading">
                Latest Transactions: {this.state.assets.length}
              </h6>
              <ul className="list-group">
                <li className="list-group-item">1</li>
                <li className="list-group-item">2</li>
                <li className="list-group-item">3</li>
                <li className="list-group-item">3</li>
                <li className="list-group-item">3</li>
                <li className="list-group-item">3</li>
                <li className="list-group-item">3</li>
                <li className="list-group-item">3</li>
                <li className="list-group-item">3</li>
                <li className="list-group-item">3</li>
                <li className="list-group-item">3</li>
                <li className="list-group-item">3</li>
                <li className="list-group-item">3</li>
                <li className="list-group-item">3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      // <div>
      //   {/* <h3>DASHBOARD</h3> */}
      //   <div className="row box-shadow top-block-raised">
      //     <div className="col-9 border-gray p-left-30">
      //       <p className="box-heading">Total Items</p>
      //       <h3>34</h3>
      //       <hr />

      //       <BarChart />
      //     </div>
      //     <div className="col-3 border-gray">
      //       <div className="row">
      //         <div className="col data-block border-bottom">
      //           <p>Total Assets</p>
      //           <h3>34</h3>
      //         </div>
      //       </div>
      //       <div className="row">
      //         <div className="col data-block border-bottom">
      //           <p>Total Batches</p>
      //           <h3>34</h3>
      //         </div>
      //       </div>
      //       <div className="row">
      //         <div className="col data-block">
      //           <p>Total Items</p>
      //           <h3>34</h3>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      //   <br />
      //   <div className="row box-shadow">
      //     <div className="col-9 border-gray p-left-30">
      //       <p className="box-heading">Total Items</p>
      //       <div className="pull-right">
      //         <Link
      //           className="btn btn-secondary btn-sm"
      //           style={{ float: "right" }}
      //           to="/assets"
      //         >
      //           Show More
      //         </Link>
      //       </div>
      //       <h3>{this.state.assets.length}</h3>
      //       <Assets
      //         tableClasses="table-scroll"
      //         onMouse={this.onMouseEvent}
      //         assets={this.state.assets}
      //       />
      //     </div>
      //     <div className="col-3 border-gray">
      //       <div className="row">
      //         <div className="col data-block">
      //           <p className="box-heading">Total Items</p>
      //           <h3>{this.state.assets.length}</h3>
      //           <hr />
      //           <DoughnutChart />
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default App;
