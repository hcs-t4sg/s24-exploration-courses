'use client';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data01 = [
  { name: '', value: 1 },
];
const data02 = [
  { name: 'CS50', value: 1 },
  { name: 'CS20', value: 1 },
  { name: 'CS120', value: 1 },
  { name: 'CS124', value: 1 },
  { name: 'CS105', value: 1 },
  { name: 'CS174', value: 1 },
  { name: 'CS51', value: 1 },
  { name: 'Math 1B', value: 1 },
  { name: 'Math 21B', value: 1 },
  { name: 'Stat 110', value: 1 },
  { name: 'CS61', value: 1 },
];

let renderLabel = function(entry) {
    return entry.name;
}

export default class MyPieChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-of-two-levels-gor24';

  render() {
    return (

        <PieChart width={400} height={400}>
          <Pie label={renderLabel} data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#ffbfbf" />
          <Pie label={renderLabel} data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#b30000" />
        </PieChart>
    );
  }
}