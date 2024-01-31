import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "To Do", value: 40, color: "#0088FE" },
  { name: "Done", value: 30, color: "#00C49F" },
  { name: "In Progress", value: 30, color: "#FFBB28" },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default class PieChartComponent extends PureComponent {
  render() {
    return (
      <div className="flex flex-row items-center justify-center">
        <div>
          <PieChart width={250} height={250}>
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "5px",
              }}
            />
            <Pie
              data={data}
              cx={120}
              cy={120}
              innerRadius={60}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>

        <div className="flex flex-col justify-center p-5">
          {data.map((item) => (
            <div className="flex" key={item.name}>
              <div className="flex flex-row mt-2">
                <div
                  className="w-5 h-5 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <div className="ml-2">{item.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
