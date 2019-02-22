import React from "react";
import { Doughnut } from "react-chartjs";

class DoughnutChart extends React.Component {
  slice = {};
  state = {
    data: []
  };

  constructor() {
    super();
    this.state = { data: [] };
  }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.assets !== prevState.assets) {
  //     return { assets: nextProps.assets };
  //   }
  //   return null;
  // }

  componentDidUpdate(nextProps) {
    if (this.props.assets) {
      this.props.assets.map(asset => {
        asset.labels.forEach(label => {
          if (label in this.slice) {
            this.slice[label] += 1;
          } else {
            this.slice[label] = 1;
          }
        });
      });
    }
    let arr = [];
    for (let key in this.slice) {
      const color = "#" + ((Math.random() * 0xff0000) << 0).toString(16);
      const s = {
        color,
        highlight: color,
        value: this.slice[key],
        label: key
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
