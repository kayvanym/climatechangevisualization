import React from "react";
import {
  AreaChart,
  /*LineChart,*/ Area,
  /*Line,*/ XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

import { Range } from "rc-slider";

//Functional Component
const Rebecca = props => {
  let data = [];
  console.log(props.data);
  props.data.map(seaLevel => {
    //map ≈ for each. Each object iterated in the data array is called a "seaLevel"
    let concStr = parseInt(seaLevel.Time.substring(0, 4)); // sets year to 1990 format instead of 1990-03-15 and converts to number (from string)
    if (
      concStr + 1 > props.min &&
      concStr - 1 < props.max &&
      concStr < 2015 &&
      concStr > 1939
    ) {
      //calculates min and max value based on information sent from slider (from App.js)
      const neg = Math.round(seaLevel.GMSL - seaLevel["GMSL uncertainty"]); //sets negativ uncertainty from GMSL value - uncertainty
      const pos = Math.round(seaLevel.GMSL + seaLevel["GMSL uncertainty"]); //sets positive uncertainty from GMSL value + uncertainty
      console.log(concStr);
      console.log(seaLevel.GMSL);
      console.log(neg);
      console.log(pos);

      // also the genious who came up with the idea of including a "space" in their api is to be commended!
      {
        data.push({
          //pushes the selected data into the const data declared at line 10
          year: concStr,
          GMSL: Math.round(seaLevel.GMSL),
          GMSLUncertain: seaLevel["GMSL uncertainty"],
          GMSLPos: pos,
          GMSLNeg: neg
        });
      }
    }
    //return data; // unsure if this does anything but react got sad at one point where I did'nt include a return...
  });

  return (
    <div className="graph">
      <h5 className="card-title-graph">Waterlevels now and then</h5>
      <p className="chartP">
        The graph shows the water levels throughout the years. Slide the
        applicator to see how the levels changes from 1945-2014.
      </p>
      <p className="descriptionCentimeter">Centimeter</p>
      <p className="descriptionYear">Year</p>
      <AreaChart //LineChart uses Lines || AreaChart uses Area
        width={800}
        height={600}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="GMSL"
          stroke="#000"
          fill="#000"
          activeDot={{ r: 8 }}
          opacity={0.5}
        />
        <Area
          type="monotone"
          dataKey="GMSLPos"
          stroke="#b4e2f0"
          fill="#b4e2f0"
        />
        <Area
          type="monotone"
          dataKey="GMSLNeg"
          stroke="#b4e2f0"
          fill="#b4e2f0"
        />
      </AreaChart>

      <div id="slider">
        <Range
          min={1940}
          max={2014}
          onChange={props.onValueChange}
          defaultValue={[1990, 2000]}
        />
        <p className="slider-text">Try It!</p>
      </div>
    </div>
  ); // The Line || Area above must match the chart ie. either LineChart for Line or AreaChart for Area
};

export default Rebecca;
