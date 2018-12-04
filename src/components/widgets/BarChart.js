import React from "react";
import { Bar } from "react-chartjs";

class BarChart extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "Bar Chart First dataset",
            fillColor: "#FEC02C",
            strokeColor: "#FEC02C",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: "My Second dataset",
            fillColor: "#0094D6",
            strokeColor: "#0094D6",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
          }
        ]
      }
    };
  }

  render() {
    return (
      <Bar
        data={this.state.data}
        options={{
          responsive: true,
          animationSteps: 100,
          maintainAspectRatio: true
        }}
        height="120"
        width="430"
      />
    );
  }
}

export default BarChart;
