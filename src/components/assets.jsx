import React, { Component } from "react";
import { getAssets, getAssetHistory } from "../services/data";
import { OverlayPanel } from "primereact/overlaypanel";

class Assets extends Component {
  state = {
    assets: [],
    assetHistory: []
  };

  trigger = { display: "none" };
  // op = React.createRef();

  async componentWillMount() {
    try {
      const assets = await getAssets();
      this.setState({ assets });
    } catch (ex) {
      console.log(ex);
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

  onLeave = el => {
    el.hide();
    this.setState({ assetHistory: [] });
  };

  render() {
    return (
      <div className={this.props.tableClasses}>
        <table
          className={
            "table table-striped" +
            (!this.props.tableClasses ? " top-block-raised" : "")
          }
        >
          <thead>
            <tr>
              <th scope="col">Asset ID</th>
              <th scope="col">Asset Type</th>
              <th scope="col">Description</th>
              <th scope="col">Quantity</th>
              <th scope="col">Location</th>
              <th scope="col">Time Last Scanned</th>
              <th scope="col">Time Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {this.state.assets.map((a, i) => (
              <tr key={a.assetId}>
                <td>{a.assetId}</td>
                <td>{a.assetType}</td>
                <td
                  onMouseEnter={e =>
                    this.getHistory(e, this[`asset${i}`], a.assetId)
                  }
                  onMouseLeave={() => this.onLeave(this[`asset${i}`])}
                >
                  {a.description}
                  <div className="content-section implementation">
                    <OverlayPanel
                      appendTo={document.body}
                      ref={el => (this[`asset${i}`] = el)}
                    >
                      {this.state.assetHistory.map((h, i) => (
                        <p key={i}>
                          Status:<span className="field-type">{h.status}</span>{" "}
                          | Last Update:
                          <span className="field-type">{h.timestamp}</span>
                        </p>
                      ))}
                    </OverlayPanel>
                  </div>
                </td>
                <td>{a.quantity || 1}</td>
                <td>{a.status}</td>
                <td>{a.timeLastUpdated}</td>
                <td>{a.timeLastUpdated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Assets;
