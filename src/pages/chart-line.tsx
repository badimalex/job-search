import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
];
const sectors = [
  { cx: 250, cy: 250, startAngle: 0, endAngle: 60, innerRadius: 100, outerRadius: 200 },
  { cx: 250, cy: 250, startAngle: 60, endAngle: 120, innerRadius: 100, outerRadius: 200 },
  { cx: 250, cy: 250, startAngle: 120, endAngle: 180, innerRadius: 100, outerRadius: 200 },
  { cx: 250, cy: 250, startAngle: 180, endAngle: 240, innerRadius: 100, outerRadius: 200 },
  { cx: 250, cy: 250, startAngle: 240, endAngle: 300, innerRadius: 100, outerRadius: 200 },
  { cx: 250, cy: 250, startAngle: 300, endAngle: 360, innerRadius: 100, outerRadius: 200 },
];

class LineRechartComponent extends React.Component {

    data = [
        {
            "name": "Jan 2019",
            "Product A": 3432,
            "Procuct B": 2342
        },
        {
            "name": "Feb 2019",
            "Product A": 2342,
            "Procuct B": 3246
        },
        {
            "name": "Mar 2019",
            "Product A": 4565,
            "Procuct B": 4556
        },
        {
            "name": "Apr 2019",
            "Product A": 6654,
            "Procuct B": 4465
        },
        {
            "name": "May 2019",
            "Product A": 8765,
            "Procuct B": 4553
        }
    ]

    render() {
        return (
        <PieChart width={400} height={400}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
        )
    };
}

export default LineRechartComponent;
