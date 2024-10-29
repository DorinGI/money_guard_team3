import styles from "./StatisticsPage.module.css"; 
import { useEffect, useState } from "react";

import StatisticsDashboard from "../pages/common/components/StatisticsDashboard/StatisticsDashboard";
import StatisticsTable from "../pages/common/components/StatisticsTable/StatisticsTable";
import StatisticsChart from "../pages/common/components/StatisticsChart/StatisticsChart";
import LoadingSpinner from "../pages/common/components/LoadingSpinner/LoadingSpinner";

const StatisticsPage = () => {
  const [forcedLoading, setForcedLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setForcedLoading(false), 1500);
  }, [forcedLoading]);

  if (forcedLoading) {
    return (
      <div className={styles.spinnerContainer}>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className={styles.statisticsPage}>
      <div className={styles.titleAndChart}>
        <h1 className={styles.title}>Statistics</h1>
        <StatisticsChart />
      </div>

      <div className={styles.dashboardAndTable}>
        <StatisticsDashboard />
        <StatisticsTable />
      </div>
    </div>
  );
};

export default StatisticsPage;
