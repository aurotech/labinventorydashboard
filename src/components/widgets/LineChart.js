import React, { Component } from "react";
import { Line } from "react-chartjs";

class LineChart extends Component {
  constructor() {
    super();

    this.state = {
      data: {
        labels: ["10", "20", "30", "40", "50", "60", "70"],
        datasets: [
          {
            label: "Batch",
            fillColor: "rgba(220,220,220,0)",
            strokeColor: "#116EA5",
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

  componentDidMount() {}

  render() {
    return (
      <div>
        <Line
          data={this.state.data}
          options={{
            responsive: true,
            animationSteps: 100,
            bezierCurve: false
          }}
          height="210"
          width="800"
        />
      </div>
    );
  }
}

export default LineChart;
