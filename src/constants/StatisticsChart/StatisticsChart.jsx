// Importă componenta Doughnut din biblioteca react-chartjs-2 pentru a crea grafice
import { Doughnut } from "react-chartjs-2";
// Importă automat toate funcționalitățile din biblioteca Chart.js
import "chart.js/auto";
// Importă useSelector din react-redux pentru a accesa starea globală
import { useSelector } from "react-redux";
// Importă stilurile din fișierul StatisticsChart.module.css
import styles from "./StatisticsChart.module.css";
// Importă selectori din fișierul de selectors al reducer-ului de tranzacții
import {
  selectFilteredCategories,
  selectIsLoading,
  selectTransactionsSummary,
} from "../../redux/TransactionSelectors";
// Importă o funcție pentru a obține culoarea categoriei de tranzacție
import { getTrasactionCategoryColor } from "../../constants/TransactionConstants";
// Importă un loader comun pentru a fi utilizat în timpul încărcării datelor
import LoadingSpinner from "../../constants/LoadingSpinner/LoadingSpinner";
// Importă o funcție pentru a formata numerele cu spații
import { formatNumberWithSpaces } from "../formatNumberWithSpaces";

import "animate.css";






// Definirea componentului funcțional StatisticsChart
const StatisticsChart = () => {
  // Folosește useSelector pentru a obține informația despre starea de încărcare din Redux
  const isLoading = useSelector(selectIsLoading);

  // Obține suma totală a tranzacțiilor pentru o anumită perioadă din Redux
  const balanceForSpecificPeriod = useSelector(
    selectTransactionsSummary
  )?.periodTotal;

  // Obține categoriile filtrate din Redux
  const filteredCategories = useSelector(selectFilteredCategories);

  // Definește etichetele pentru grafic (numele categoriilor)
  const chartLabels =
    filteredCategories?.length > 0
      ? filteredCategories?.map((item) => item.name)
      : ["There is no data for selected date"]; // Mesaj alternativ în cazul în care nu sunt date

  // Definește valorile pentru grafic (sumele tranzacțiilor)
  const chartValues =
    filteredCategories?.length > 0
      ? filteredCategories?.map((item) => item.total * -1) // Sumele sunt inversate pentru a reflecta cheltuielile
      : [100]; // Valoare implicită în cazul în care nu sunt date

  // Definește culorile de fundal pentru secțiunile graficului
  const chartBackgroundColors =
    filteredCategories?.length > 0
      ? filteredCategories?.map((item) => getTrasactionCategoryColor(item.name))
      : ["rgba(255, 255, 255, 0.6"]; // Culoare implicită în cazul în care nu sunt date

  // Creează un obiect de date pentru grafic
  const chartData = {
    labels: chartLabels, // Etichetele pentru grafic
    datasets: [
      {
        data: chartValues, // Valorile pentru grafic
        backgroundColor: chartBackgroundColors, // Culorile de fundal
        borderWidth: 0, // Lățimea marginii
        hoverOffset: 5, // Offset-ul la hover
       
      },
    ],
  };

  // Opțiuni pentru personalizarea graficului
  const chartOptions = {
    cutout: "70%", // Definirea unui cerc gol în centru
    plugins: {
      legend: {
        display: false, // Nu afișa legenda
      },
      tooltip: {
        // enabled: false, // De comentat dacă dorim să dezactivăm tooltip-urile
      },
    },
    elements: {
      arc: {
        hoverOffset: 4, // Offset-ul pentru elementele de arc la hover
      },
    },
  };

  // Clasele CSS pentru animația textului
  const textAnimatioClasses =
    "animate__animated  animate__zoomIn animate__slow";

  // Returnează JSX pentru componentă
  return (
    <div className={styles.chartContainer}>
      {isLoading ? (
        // Dacă se încarcă, afișează loader-ul
        <LoadingSpinner />
      ) : (
        <>
          {/* Afișează graficul Doughnut cu datele și opțiunile definite */}
          <Doughnut data={chartData} options={chartOptions} />
          {/* Afișează suma totală pentru perioada specificată */}
          <div
            className={`${styles.balance} ${textAnimatioClasses}`}
          >{`₴ ${formatNumberWithSpaces(balanceForSpecificPeriod)}`}</div>
        </>
      )}
      
    </div>
  );
};

// Exportă componenta StatisticsChart pentru a fi utilizată în alte părți ale aplicației
export default StatisticsChart;
