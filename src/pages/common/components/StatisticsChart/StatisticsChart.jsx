import "animate.css";

import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

import { useSelector } from "react-redux";
import styles from "./StatisticsChart.module.css";
import {
  selectFilteredCategories,
  selectTransactionsSummary,
} from "../../../../redux/transactions/selectors";
import { getTrasactionCategoryColor } from "../TransactionConstants";
import { formatNumberWithSpaces } from "../formatNumberWithSpaces";

const StatisticsChart = () => {
  const balanceForSpecificPeriod = useSelector(
    selectTransactionsSummary
  )?.periodTotal;

  const filteredCategories = useSelector(selectFilteredCategories);

  const chartLabels =
    filteredCategories?.length > 0
      ? filteredCategories?.map((item) => item.name)
      : ["There is no data for selected date"];

  const chartValues =
    filteredCategories?.length > 0
      ? filteredCategories?.map((item) => item.total * -1)
      : [100];

  const chartBackgroundColors =
    filteredCategories?.length > 0
      ? filteredCategories?.map((item) => getTrasactionCategoryColor(item.name))
      : ["rgba(255, 255, 255, 0.6"];

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        data: chartValues,
        backgroundColor: chartBackgroundColors,
        borderWidth: 0,
        hoverOffset: 5,
      },
    ],
  };

  const chartOptions = {
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {},
    },
    elements: {
      arc: {
        hoverOffset: 4,
      },
    },
  };

  const textAnimationClasses =
    "animate__animated  animate__zoomIn animate__slow";

  return (
    <div className={styles.chartContainer}>
      <Doughnut data={chartData} options={chartOptions} />
      <div
        className={`${styles.balance} ${textAnimationClasses}`}
      >{`₴ ${formatNumberWithSpaces(balanceForSpecificPeriod)}`}</div>
    </div>
  );
};

export default StatisticsChart;
