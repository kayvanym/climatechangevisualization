import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

class GlacierSizeSeaLevel extends Component {
  render() {
    let galciersizedata = this.props.Glacierdata.filter(
      x => x.Year > 1945 && x.Year <= 2010
    );
    let sealeveldata = this.props.SeaLeveldata.filter(
      x => parseInt(x.Time) > 1945 && parseInt(x.Time) <= 2010
    );
    let series = [
      {
        name: "Sea Level Data",
        data: [],
        color: "blue"
      },
      {
        name: "Glacier Data",
        data: [],
        color: "orange"
      }
    ];

    galciersizedata.map(data =>
      series[1].data.push({
        Year: parseInt(data.Year),
        value: data["Mean cumulative mass balance"]
      })
    );

    sealeveldata.map(data =>
      series[0].data.push({
        Year: parseInt(data.Time),
        value: data.GMSL
      })
    );

    console.log(series);

    return (
      <React.Fragment>
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>
          Glaciers Size vs. Sea Level
        </p>

        <LineChart
          width={1400}
          height={500}
          margin={{
            top: 10,
            right: 30,
            left: 50,
            bottom: 50
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="Year"
            category="Year"
            allowDuplicatedCategory={false}
          />
          <YAxis dataKey="value" />
          <Tooltip cursor={{ stroke: "green", strokeWidth: 3 }} />
          <Legend />
          {series.map(s => (
            <Line
              dataKey="value"
              data={s.data}
              name={s.name}
              key={s.name}
              stroke={s.color}
            />
          ))}
        </LineChart>
      </React.Fragment>
    );
  }
}

export default GlacierSizeSeaLevel;
