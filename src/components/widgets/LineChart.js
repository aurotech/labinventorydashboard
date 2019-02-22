import React, { Component } from "react";
import { Line } from "react-chartjs";
import { getbatchAssetHistory } from "../../services/data";

class LineChart extends Component {
  constructor() {
    super();

    this.state = {
      data: {
        labels: [],
        datasets: [
          {
            label: "Batch",
            fillColor: "rgba(220,220,220,0)",
            strokeColor: "#116EA5",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: []
          }
        ]
      }
    };
  }

  async componentWillReceiveProps() {
    const batchHistory = await getbatchAssetHistory(this.props.id);
    this.getBatchData(batchHistory);
  }

  getBatchData(arr) {
    const labelsAndData = {
      labels: [],
      data: []
    };
    arr.map(obj => {
      labelsAndData.data.push(obj.quantity);
      labelsAndData.labels.push(
        new Date(obj.timestamp).toLocaleString("en-us", { month: "long" })
      );
    });

    this.setState({
      data: {
        labels: labelsAndData.labels,
        datasets: [
          {
            label: "Batch",
            fillColor: "rgba(220,220,220,0)",
            strokeColor: "#116EA5",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: labelsAndData.data
          }
        ]
      }
    });
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log("Next Props:", nextProps);
  // }

  render() {
    return (
      <div>
        <Line
          data={this.state.data}
          options={{
            responsive: true,
            animationSteps: 100,
            bezierCurve: false,
            steppedLine: "after",
            scaleShowGridLines: true,
            scaleShowVerticalLines: true
          }}
          height="210"
          width="800"
        />
      </div>
    );
  }
}

export default LineChart;
