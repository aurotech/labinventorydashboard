import React, { Component } from "react";
import { Line } from "react-chartjs";
import { getRandomInt } from "./util";

class LineChart extends Component {
  constructor() {
    super();

    this.state = {
      data: {
        labels: ["10", "20", "30", "40", "50", "60", "70"],
        datasets: [
          {
            label: "Singal",
            fillColor: "#FEC02C",
            strokeColor: "#FEC02C",
            pointColor: "#FEC02C",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#ff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [10, 55, 69, 45, 87, 68, 74]
          },
          {
            label: "Batch",
            fillColor: "#116EA7",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [10, 55, 49, 45, 57, 68, 94]
          }
        ]
      }
    };
  }

  componentDidMount() {
    this.state.data.datasets[0].data.shift();
    this.state.data.datasets[0].data.push(getRandomInt(0, 90));

    this.state.data.datasets[1].data.shift();
    this.state.data.datasets[1].data.push(getRandomInt(0, 90));
    this.setState({
      data: this.state.data
    });
  }

  render() {
    return (
      <div>
        <Line
          data={this.state.data}
          options={{ responsive: true, animationSteps: 100 }}
          height="210"
          width="800"
        />
      </div>
    );
  }
}

export default LineChart;
