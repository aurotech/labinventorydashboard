import React from "react";
import { displayTransactions } from "./widgets/util";

export const Transactions = props => {
  return (
    <div
      className="col-4"
      style={{
        maxHeight: "inherit",
        overflowY: "scroll",
        position: "relative",
        marginTop: "60px"
      }}
    >
      <div
        style={{
          position: "fixed",
          top: "157px",
          width: "27%",
          zIndex: "2000"
        }}
      >
        <h6 className="card-filled">Transaction History</h6>
        <hr />
      </div>

      <div style={{ position: "absolute", top: "5px" }}>
        {props.data.reverse().map((a, i) => (
          <ul className="list-group" key={i}>
            <li className="list-group-item">
              {displayTransactions(a, i, props.assetId)}
            </li>
            <br />
          </ul>
        ))}
      </div>
    </div>
  );
};
