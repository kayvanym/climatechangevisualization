import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import CO2Emission from "./component/LineChart";
import SelectData from "./component/SelectData";
import AllCharts from "./component/AllCharts";

class App extends Component {
  state = {
    CO2Emission: [],
    CO2EmissionChart: [],
    selectedData: "GasFuel"
  };

  async componentDidMount() {
    /* 
    const url = "https://my.api.mockaroo.com/co2.json?key=8eb9e6f0";
    const response = await fetch(url);
    const data = await response.json();

    let co2data = [];
    data.map(data =>
      co2data.push({
        Year: data.Year,
        Total: data.Total,
        GasFuel: data["Gas Fuel"],
        LiquidFuel: data["Liquid Fuel"],
        SolidFuel: data["Solid Fuel"],
        Cement: data["Cement"],
        GasFlaring: data["Gas Flaring"]
      })
    );

    co2data = co2data.filter(x => x.Year > 1950);

    console.log(data);
    console.log(co2data);
    this.setState({
      CO2Emission: data,
      CO2EmissionChart: co2data
    });
    */
  }

  handleDataChange = event => {
    this.setState({ selectedData: event.target.value });
  };

  render() {
    return (
      /*
      <div className="App">
        <SelectData
          selectedData={this.state.selectedData}
          onDataChange={this.handleDataChange}
        />
        <CO2Emission
          chartdata={this.state.CO2EmissionChart}
          selectedData={this.state.selectedData}
        />
      </div>
      */
      <div className="App">
        <AllCharts />
      </div>
    );
  }
}

export default App;
