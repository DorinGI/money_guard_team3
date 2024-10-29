import React, { useState, useEffect } from 'react';
import getExchangeRate from '../service/CurencyRateService';
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
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    // Funcția asincronă pentru a obține cursul valutar
    async function fetchExchangeRate() {
      const data = await getExchangeRate();
      setExchangeRate(data);
    }

    fetchExchangeRate();
  }, []); // Dependențele goale [] asigură că efectul rulează doar la montare

  if (!exchangeRate) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.curencyContainer}>
      {/* <table className={styles.table}>
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
      </table> */}
      <div className={styles.tableContainer}>
        <div className={styles.tableHead}>
          <ul>
            <li>Currency</li>
            <li>Purchase</li>
            <li>Sale</li>
          </ul>
        </div>
        <div className={styles.tableBody}>
          {data.map((item, index) => (
            <ul key={index}>
              <li>{item.currency}</li>
              <li>{item.purchase}</li>
              <li>{item.sale}</li>
            </ul>
          ))}
        </div>
      </div>
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
