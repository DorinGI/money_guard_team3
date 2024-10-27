import React from 'react';
import styles from './Home.module.css';

const Home = ({ data }) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Category</th>
            <th>Comment</th>
            <th>Sum</th>
          </tr>
        </thead>
        {/* <tbody>
          {data.map((item, index) => {
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.type}</td>
              <td>{entry.category}</td>
              <td>{entry.comment}</td>
              <td>{entry.sum}</td>
            </tr>;
          })}
        </tbody>*/}
      </table>
      <button className={styles.addButton}>+</button>
    </div>
  );
};

export default Home;
