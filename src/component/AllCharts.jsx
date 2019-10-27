import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label
} from "recharts";

import { getCO2Emissionsdata } from "../data/CO2Emission";
import { getGlobalTempdata } from "../data/GlobalTemp";
import { getGlacierSizedata } from "../data/GlacierSize";
import { getSeaLeveldata } from "../data/SeaLevel";

export default class AllCharts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CO2Emission: [],
      GlobalTemp: [],
      GlacierSize: [],
      SeaLevel: []
    };
  }

  async componentDidMount() {
    /*
    const CO2url = "https://my.api.mockaroo.com/co2.json?key=8eb9e6f0";
    const CO2response = await fetch(CO2url);
    const CO2data = await CO2response.json();

    const GlobalTempurl = "https://my.api.mockaroo.com/temp.json?key=8eb9e6f0";
    const GlobalTempresponse = await fetch(GlobalTempurl);
    const GlobalTempdata = await GlobalTempresponse.json();
    GlobalTempdata.sort((a, b) =>
      a.Year > b.Year ? 1 : b.Year > a.Year ? -1 : 0
    );

    const GlacierSizeurl =
      "https://my.api.mockaroo.com/glaciersize.json?key=8eb9e6f0";
    const GlacierSizeresponse = await fetch(GlacierSizeurl);
    const GlacierSizedata = await GlacierSizeresponse.json();

    const SearLevelurl =
      "https://my.api.mockaroo.com/sealevel.json?key=8eb9e6f0";
    const SearLevelresponse = await fetch(SearLevelurl);
    const SearLeveldata = await SearLevelresponse.json();
*/
    this.setState({
      CO2Emission: getCO2Emissionsdata(),
      GlobalTemp: getGlobalTempdata().sort((a, b) =>
        a.Year > b.Year ? 1 : b.Year > a.Year ? -1 : 0
      ),
      GlacierSize: getGlacierSizedata(),
      SeaLevel: getSeaLeveldata()
    });

    console.log(this.state.CO2Emission);
  }

  render() {
    return (
      <React.Fragment>
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>
          CO2 Emission (million metric tons)
        </p>
        <LineChart
          width={1400}
          height={500}
          data={this.state.CO2Emission}
          margin={{
            top: 10,
            right: 30,
            left: 50,
            bottom: 50
          }}
        >
          <CartesianGrid strokeDasharray="3 3"></CartesianGrid>

          <XAxis dataKey="Year"></XAxis>
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" />
          <Line
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="Gas Fuel" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Liquid Fuel" stroke="orange" />
          <Line type="monotone" dataKey="Solid Fuel" stroke="blue" />
          <Line type="monotone" dataKey="Cement" stroke="black" />
          <Line type="monotone" dataKey="Gas Flaring" stroke="maroon" />
        </LineChart>

        <p style={{ fontSize: "24px", fontWeight: "bold" }}>
          Global Temprature
        </p>

        <LineChart
          width={1400}
          height={500}
          data={this.state.GlobalTemp}
          margin={{
            top: 10,
            right: 30,
            left: 50,
            bottom: 50
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Year" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" />
          <Line
            type="monotone"
            dataKey="Mean"
            stroke="#8884d8"
            activeDot={{ r: 12 }}
          />
        </LineChart>

        <p style={{ fontSize: "24px", fontWeight: "bold" }}>
          Glaciers Size (meters of water equivalent - Base Year 1945)
        </p>
        <LineChart
          width={1400}
          height={500}
          data={this.state.GlacierSize}
          margin={{
            top: 10,
            right: 30,
            left: 50,
            bottom: 50
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Year" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" />
          <Line
            type="monotone"
            dataKey="Mean cumulative mass balance"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>

        <p style={{ fontSize: "24px", fontWeight: "bold" }}>Sea Level(in mm)</p>
        <LineChart
          width={1400}
          height={500}
          data={this.state.SeaLevel}
          margin={{
            top: 10,
            right: 30,
            left: 50,
            bottom: 50
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Time" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" />
          <Line
            type="monotone"
            dataKey="GMSL"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </React.Fragment>
    );
  }
}
