import { useEffect, useState } from "react";
import styles from "./StatisticsDashboard.module.css";
import { useDispatch } from "react-redux";
import { Months_OPTIONS, YEARS_OPTIONS } from "../TransactionConstants";
import { fetchTransactionsSummary } from "../../../../redux/transactions/operations";

const StatisticsDashboard = () => {
  const dispatch = useDispatch();
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Efect pentru a aduce datele când luna sau anul se schimbă
  useEffect(() => {
    dispatch(
      fetchTransactionsSummary({
        month: currentMonth,
        year: currentYear,
      })
    );
  }, [currentMonth, currentYear, dispatch]);

  return (
    <div className={styles.dropdownsWrapper}>
      <select
        value={currentMonth}
        onChange={(e) => setCurrentMonth(parseInt(e.target.value))}
      >
        {Months_OPTIONS.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <select
        value={currentYear}
        onChange={(e) => setCurrentYear(parseInt(e.target.value))}
      >
        {YEARS_OPTIONS.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StatisticsDashboard;
