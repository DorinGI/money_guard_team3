import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import styles from './CurencyChart.module.css';

const data = [
  {
    currency: 'EUR',
    purchase: parseFloat('44,95'.replace(',', '.')),
    sale: parseFloat('46,49'.replace(',', '.')),
  },
  {
    currency: 'USD',
    purchase: parseFloat('38,95'.replace(',', '.')),
    sale: parseFloat('41,49'.replace(',', '.')),
  },
];

function CurrencyChart() {
  return (
    <div className={styles.chartContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Purchase</th>
            <th>Sale</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.currency}</td>
              <td>{item.purchase}</td>
              <td>{item.sale}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="purchase" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="purchase" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CurrencyChart;
