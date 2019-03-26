import React from "react";
import { Doughnut } from "react-chartjs";
import { getColor, generateColors } from "./util";

class DoughnutChart extends React.Component {
  chartPieces = {};
  state = {
    data: []
  };

  componentDidUpdate(nextProps) {
    if (this.props.assets) {
      this.chartPieces["other"] = 0;

      this.props.assets.map(asset => {
        if (asset.labels.length) {
          if (asset.labels[0] in this.chartPieces) {
            this.chartPieces[asset.labels[0]] += 1;
          } else {
            this.chartPieces[asset.labels[0]] = 1;
          }
        } else {
          this.chartPieces["other"] += 1;
        }
      });
    }
    let arr = [];
    let i = 0;
    let colors = generateColors(Object.keys(this.chartPieces).length);
    colors.splice(0, 1, "#fab917");

    for (let key in this.chartPieces) {
      const s = {
        color: colors[i],
        highlight: colors[i],
        value: this.chartPieces[key],
        label: key
      };
      i++;

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
        {this.state.data.length > 0 && (
          <Doughnut
            data={this.state.data}
            options={{
              title: {
                display: true,
                text: "Single Asset Division"
              },
              legend: {
                display: true,
                position: "top"
              },
              animationEasing: "easeInSine",
              showTooltips: true,
              responsive: true,
              tooltipTitleFontColor: "#000",
              percentageInnerCutout: 40,
              maintainAspectRatio: false
            }}
            height="220"
            width="120"
          />
        )}
      </div>
    );
  }
}

export default DoughnutChart;
