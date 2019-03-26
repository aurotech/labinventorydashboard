import { randomColor } from "randomcolor";
import React from "react";
import { Link } from "react-router-dom";

export function dateCreator(timestamp) {
  let tempDate = new Date(timestamp);

  return (
    ("0" + (tempDate.getMonth() + 1)).slice(-2) +
    "/" +
    ("0" + tempDate.getDate()).slice(-2) +
    "/" +
    tempDate.getFullYear()
  );
}

export function getColor(count, hue) {
  const shade = [
    "#3366CC",
    "#3366FF",
    "#0066FF",
    "#0066CC",
    "#667099",
    "#660066",
    "#660033",
    "#663300",
    "#663333",
    "#339900",
    "#CC9900",
    "#FFCC33",
    "#FFC300"
  ];
  // const hue = shade[Math.floor(Math.random() * shade.length)];
  // console.log(hue);
  // 009900;

  return randomColor({
    count,
    seed: "#0066CC",
    luminosity: "bright"
  })[0];
}

export function generateColors(num) {
  let colors = [];
  let i = 0;
  let color = null;

  while (colors.length < num) {
    color = generateColor(colors.length, "orange");
    if (colors.length === 0) colors.push(color);
    if (colors.indexOf(color) < 0) {
      if (shadeChecker(colors[i], color)) {
        colors.push(color);
        i++;
      }
    }
  }
  colors.splice(1, 1, "#1040B8");
  colors.splice(colors.length - 1, 1, "#007f0e");
  return colors;
}

function generateColor(num, hue = "random") {
  return randomColor({
    seed: num + Math.random,
    luminosity: "bright"
  });
}

function shadeChecker(clr1, clr2) {
  if (clr1.slice(0, 3) !== clr2.slice(0, 3)) return true;
}

export function getUsername() {
  const user = localStorage.getItem("username");

  if (user) {
    return user.slice(0, 1).toUpperCase() + user.slice(1);
  }
  return null;
}

export function displayTransactions(asset, i, assetId = "null") {
  const date = dateCreator(asset.timestamp);

  if (asset["transactionClass"] === "AssetEditLabelsTransaction") {
    return (
      <React.Fragment key={i}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "10px",
            background: "linearGradient(to right, red, yellow)"
          }}
        >
          Asset {" -  "}
          <Link
            to={{
              pathname: `/asset/${asset.assetId ? asset.assetId : assetId}`,
              search: `?type=${asset.assetType}`,
              state: asset
            }}
            className="field-purple"
          >
            {asset.assetId ? asset.assetId : assetId}
          </Link>
          <hr />
        </div>

        <span className="m-5 ">
          <span className="field-blue">Labels were updated</span> on
          {" " + date} by{" "}
          <span className="field-blue mb-10">{" " + asset.user}</span>
        </span>
        <span />
        {/* <span className="d-block">
          {asset.oldLabels.length > 0 && "Old Labels: "}
          {asset.oldLabels.length > 0 &&
            asset.oldLabels.map((label, index) => (
              <span key={index}>{" " + label + ", "}</span>
            ))}
        </span> */}
        <span className="d-block">
          {asset.newLabels.length > 0 && "New Labels:"}
          {asset.newLabels.length > 0 &&
            asset.newLabels.map((label, index) =>
              index !== asset.newLabels.length - 1 ? (
                <span key={index}>{" " + label + ", "}</span>
              ) : (
                <span key={index}>{" " + label}</span>
              )
            )}
        </span>
      </React.Fragment>
    );
  } else if (asset["transactionClass"] === "AssetAdditionTransaction") {
    return (
      <React.Fragment key={i}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "10px",
            background: "linearGradient(to right, red, yellow)"
          }}
        >
          Asset {" -  "}
          <Link
            to={{
              pathname: `/asset/${asset.assetId ? asset.assetId : assetId}`,
              search: `?type=${asset.assetType}`,
              state: asset
            }}
            className="field-purple"
          >
            {asset.assetId ? asset.assetId : assetId}
          </Link>
          <hr />
        </div>

        <span className="m-5 ">
          <span className="field-green">{asset.transactionType} on</span>
          {" " + date} by{" "}
          <span className="field-blue mb-10">{" " + asset.user}</span>
        </span>
        <span />
        <span className="d-block">
          Old Amount:
          {" " + asset.oldAmount}
        </span>
        <span className="d-block">
          New Amount:
          {" " + asset.amount}
        </span>
      </React.Fragment>
    );
  } else if (asset["transactionClass"] === "AssetSubtractionTransaction") {
    return (
      <React.Fragment key={i}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "10px",
            background: "linearGradient(to right, red, yellow)"
          }}
        >
          Asset {" -  "}
          <Link
            to={{
              pathname: `/asset/${asset.assetId ? asset.assetId : assetId}`,
              search: `?type=${asset.assetType}`,
              state: asset
            }}
            className="field-purple"
          >
            {asset.assetId ? asset.assetId : assetId}
          </Link>
          <hr />
        </div>

        <span className="m-5 ">
          <span className="field-warning">{asset.transactionType} on</span>
          {" " + date} by{" "}
          <span className="field-blue mb-10">{" " + asset.user}</span>
        </span>
        <span />
        <span className="d-block">
          Old Amount:
          {" " + asset.oldAmount}
        </span>
        <span className="d-block">
          New Amount:
          {" " + asset.amount}
        </span>
      </React.Fragment>
    );
  } else if (asset["transactionClass"] === "AssetCreateTransaction") {
    return (
      <React.Fragment key={i}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "10px",
            background: "linearGradient(to right, red, yellow)"
          }}
        >
          Asset {" -  "}
          <Link
            to={{
              pathname: `/asset/${asset.assetId ? asset.assetId : assetId}`,
              search: `?type=${asset.assetType}`,
              state: asset
            }}
            className="field-purple"
          >
            {asset.assetId ? asset.assetId : assetId}
          </Link>
          <hr />
        </div>

        <span className="m-5 ">
          <span className="field-green">A new Asset was created</span> on{" "}
          {" " + date} by{" "}
          <span className="field-blue mb-10">{" " + asset.user}</span>
        </span>
        <span />
        <span className="d-block">
          Asset Type:
          {" " + asset.assetType}
        </span>
        <span className="d-block">
          Asset Description:
          {" " + asset.description}
        </span>
      </React.Fragment>
    );
  } else if (asset["transactionClass"] === "AssetEditThresholdTransaction") {
    return (
      <React.Fragment key={i}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "10px",
            background: "linearGradient(to right, red, yellow)"
          }}
        >
          Asset {" -  "}
          <Link
            to={{
              pathname: `/asset/${asset.assetId ? asset.assetId : assetId}`,
              search: `?type=${asset.assetType}`,
              state: asset
            }}
            className="field-purple"
          >
            {asset.assetId ? asset.assetId : assetId}
          </Link>
          <hr />
        </div>

        <span className="m-5 ">
          <span className="field-red">Low inventory update</span>
          {" " + date} by{" "}
          <span className="field-blue mb-10">{" " + asset.user}</span>
        </span>
        <span />
        <span className="d-block">
          Threshold:
          {" " + asset.newThreshold}
        </span>
        <span className="d-block">
          Actual Amount:
          {" " + asset.oldThreshold}
        </span>
      </React.Fragment>
    );
  } else if (asset["transactionClass"] === "AssetEditDescriptionTransaction") {
    return (
      <React.Fragment key={i}>
        <span>
          <div
            style={{
              textAlign: "center",
              marginBottom: "10px",
              background: "linearGradient(to right, red, yellow)"
            }}
          >
            Asset {" -  "}
            <Link
              to={{
                pathname: `/asset/${asset.assetId ? asset.assetId : assetId}`,
                search: `?type=${asset.assetType}`,
                state: asset
              }}
              className="field-purple"
            >
              {asset.assetId ? asset.assetId : assetId}
            </Link>
            <hr />
          </div>
          <span className="field-warning">Asset's Description was updated</span>{" "}
          on {" " + date} by{" "}
          <span className="field-blue mb-10">{" " + asset.user}</span>
        </span>
        <span />

        <span className="d-block">
          Old Description:
          {" " + asset.oldDescription}
        </span>
        <span className="d-block">
          New Description:
          {" " + asset.newDescription}
        </span>
      </React.Fragment>
    );
  } else if (asset["transactionClass"] === "AssetMoveTransaction") {
    return (
      <React.Fragment key={i}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "10px",
            background: "linearGradient(to right, red, yellow)"
          }}
        >
          Asset {" -  "}
          <Link
            to={{
              pathname: `/asset/${asset.assetId ? asset.assetId : assetId}`,
              search: `?type=${asset.assetType}`,
              state: asset
            }}
            className="field-purple"
          >
            {asset.assetId ? asset.assetId : assetId}
          </Link>
          <hr />
        </div>

        <span className="m-5 ">
          <span className="field-blue">Asset's Location was updated</span> on{" "}
          {" " + date} by{" "}
          <span className="field-blue mb-10">{" " + asset.user}</span>
        </span>
        <span />
        <span className="d-block">
          Old Location:
          {" " + asset.oldLocation}
        </span>
        <span className="d-block">
          New Location:
          {" " + asset.newLocation}
        </span>
      </React.Fragment>
    );
  } else if (asset["transactionClass"] === "AssetUndoRemoveTransaction") {
    return (
      <React.Fragment key={i}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "10px",
            background: "linearGradient(to right, red, yellow)"
          }}
        >
          Asset {" -  "}
          <Link
            to={{
              pathname: `/asset/${asset.assetId ? asset.assetId : assetId}`,
              search: `?type=${asset.assetType}`,
              state: asset
            }}
            className="field-purple"
          >
            {asset.assetId ? asset.assetId : assetId}
          </Link>
          <hr />
        </div>

        <span className="m-5 ">
          <span className="field-blue"> Updated on asset</span> on {" " + date}{" "}
          by <span className="field-blue mb-10">{" " + asset.user}</span>
        </span>
        <span />
        <span className="d-block">
          Old Location:
          {asset.oldLocation}
        </span>
        <span className="d-block">
          New Location:
          {asset.newLocation}
        </span>
      </React.Fragment>
    );
  } else if (asset["transactionClass"] === "AssetAssignTransaction") {
    return (
      <React.Fragment key={i}>
        <span
          style={{
            textAlign: "center",
            marginBottom:
              "10px, background: 'linearGradient(to right, red, yellow)'"
          }}
        >
          <div>
            Asset {" -  "}
            <Link
              to={{
                pathname: `/asset/${asset.assetId ? asset.assetId : assetId}`,
                search: `?type=${asset.assetType}`,
                state: asset
              }}
              className="field-purple"
            >
              {asset.assetId ? asset.assetId : assetId}
            </Link>
          </div>
          <hr />
        </span>
        <span className="m-5 ">
          <span className="field-green"> Asset was assigned</span> to{" "}
          {" " + asset.assignee} on
          {" " + date} by{" "}
          <span className="field-blue mb-10">{" " + asset.user}</span>
        </span>
      </React.Fragment>
    );
  } else if (asset["transactionClass"] === "AssetEditCommentTransaction") {
    return (
      <React.Fragment key={i}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "10px",
            background: "linearGradient(to right, red, yellow)"
          }}
        >
          Asset {" -  "}
          <Link
            to={{
              pathname: `/asset/${asset.assetId ? asset.assetId : assetId}`,
              search: `?type=${asset.assetType}`,
              state: asset
            }}
            className="field-purple"
          >
            {asset.assetId ? asset.assetId : assetId}
          </Link>
          <hr />
        </div>

        <span className="m-5 ">
          <span className="field-warning">
            {" "}
            Comments were updated on {" " + date} by{" "}
            <span className="field-blue mb-10">{" " + asset.user}</span>
          </span>
        </span>
        <span className="d-block">Old Comment: {" " + asset.oldComment}</span>
        <span className="d-block">New Comment: {" " + asset.newComment}</span>
      </React.Fragment>
    );
  }
  // return <p>{JSON.stringify(asset)}</p>;
}
