import React, { Component } from "react";

class SelectData extends Component {
  render() {
    return (
      <React.Fragment>
        <label>
          Pick type of data
          <select
            value={this.props.selectedData}
            onChange={e => this.props.onDataChange(e)}
          >
            <option value="GasFuel">Gas Fuel</option>
            <option value="LiquidFuel">Liquid Fuel</option>
            <option value="SolidFuel">Solid Fuel</option>
            <option value="Cement">Cement Fuel</option>
            <option value="GasFlaring">Gas Flaring</option>
          </select>
        </label>
      </React.Fragment>
    );
  }
}

export default SelectData;
