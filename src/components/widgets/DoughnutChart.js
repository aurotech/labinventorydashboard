import React from "react";
import { Doughnut } from "react-chartjs";

class DoughnutChart extends React.Component {
  slice = {};
  state = {
    data: []
  };

  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentWillUpdate(nextProps) {
    if (this.props.assets === nextProps.assets) {
      this.props.assets.map(asset => {
        asset.labels.map(lable => {
          lable in this.slice
            ? (this.slice[lable] += 1)
            : (this.slice[lable] = 1);
        });
      });
    }
    let arr = [];
    for (let key in this.slice) {
      const color = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
      const s = {
        color,
        highlight: color,
        value: this.slice[key],
        lable: key
      };
      arr.push(s);
    }
    if (arr.length > 0) {
      if (!this.state.data.length) {
        this.setState({ data: arr });
      }
    }
  }

  render() {
    return (
      <div>
        <Doughnut
          data={this.state.data}
          options={{
            animationEasing: "easeInSine",
            showTooltips: true,
            responsive: true,
            tooltips: {
              callbacks: {
                title: function(tooltipItem, data) {
                  console.log("object");
                  return data["labels"][tooltipItem[0]["index"]];
                },
                label: function(tooltipItem, data) {
                  return data["datasets"][0]["data"][tooltipItem["index"]];
                },
                afterLabel: function(tooltipItem, data) {
                  var dataset = data["datasets"][0];
                  var percent = Math.round(
                    (dataset["data"][tooltipItem["index"]] /
                      dataset["_meta"][0]["total"]) *
                      100
                  );
                  return "(" + percent + "%)";
                }
              }
            },
            title: {
              display: true,
              text: "Chart.js Line Chart"
            }
          }}
          height="120"
          width="320"
        />
      </div>
    );
  }
}

export default DoughnutChart;
