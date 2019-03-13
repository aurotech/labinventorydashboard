import React, { Component } from "react";
import { getAssets, getAssetHistory } from "../services/data";
import { Link } from "react-router-dom";

class Assets extends Component {
  state = {
    assets: [],
    assetHistory: []
  };

  async componentWillMount() {
    if (!this.props.assets) {
      const assets = await getAssets();
      // const assetHistory = await getAssetHistory(assetId);
      this.setState({ assets });
    }
  }
  getHistory = async (e, asset, assetId) => {
    e.persist();

    const assetHistory = await getAssetHistory(assetId);
    if (assetHistory && this.state.assetHistory.length <= 1) {
      this.setState({ assetHistory });
      asset.show(e, e.target);
    }
  };

  displayTableBody(assets) {
    return assets.map((a, i) => (
      <tr key={a.assetId}>
        <td>
          <Link
            to={{
              pathname: `/asset/${a.assetId}`,
              search: `?type=${a.assetType}`,
              state: a
            }}
            className="badge badge-secondary"
          >
            {a.assetId}
          </Link>
        </td>
        <td>{a.assetType}</td>
        <td>
          {/* {this.state.assetHistory.map((h, i) => (
            <p key={i}>{h.description}</p>
          ))} */}
          {a.description}
        </td>
        <td>{a.quantity || 1}</td>
        <td>{a.status}</td>
        <td>{a.timeLastUpdated.slice(0, 10)}</td>
      </tr>
    ));
  }

  render() {
    return (
      <div className={this.props.tableClasses}>
        <table
          className={
            "rounded table tableFixHead table-striped" +
            (!this.props.tableClasses ? " top-block-raised" : "")
          }
        >
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Type</th>
              <th scope="col">Description</th>
              <th scope="col">Quantity</th>
              <th scope="col">Location</th>
              <th scope="col">Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {this.props.assets
              ? this.displayTableBody(this.props.assets)
              : this.displayTableBody(this.state.assets)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Assets;
