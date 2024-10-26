
// Aceste stiluri vor fi aplicate elementelor din componenta StatisticsPage.
import styles from "./StatisticsPage.module.css";

// Importă hook-urile useEffect și useState din React.
// useState este utilizat pentru a defini și a gestiona starea locală în componentă.
// useEffect este folosit pentru a efectua efecte secundare, cum ar fi setarea unui timer.
import { useEffect, useState } from "react";

// Aceasta componentă afișează o secțiune de dashboard cu informații despre statistici.
import StatisticsDashboard from "../../constants/StatisticsDashboard/StatisticsDashboard";

// Aceasta componentă afișează un tabel cu date statistice.
import StatisticsTable from "../../constants/StatisticsTable/StatisticsTable";

// Aceasta componentă afișează un grafic care vizualizează datele statistice.
import StatisticsChart from "../../constants/StatisticsChart/StatisticsChart";

// Aceasta componentă afișează un spiner de încărcare în timpul unui timp de așteptare, simulând o stare de încărcare.
import LoadingSpinner from "../../constants/LoadingSpinner/LoadingSpinner";

// Definim componenta funcțională StatisticsPage.
// Aceasta este componenta principală care afișează pagina cu informații statistice.
const StatisticsPage = () => {

  // Definim o stare locală numită forcedLoading și funcția de actualizare a acesteia, setForcedLoading.
  // Starea forcedLoading este inițializată cu valoarea true, indicând că pagina se încarcă.
  const [forcedLoading, setForcedLoading] = useState(true);

  // Folosim hook-ul useEffect pentru a simula o întârziere de încărcare de 1.5 secunde.
  // După 1.5 secunde, setăm forcedLoading la false, indicând că încărcarea s-a terminat.
  useEffect(() => {
    setTimeout(() => setForcedLoading(false), 1500);
  }, [forcedLoading]);

  // Verificăm dacă pagina este încă în stare de încărcare (dacă forcedLoading este true).
  if (forcedLoading) {
    // Dacă pagina este încă în stare de încărcare, returnăm componenta LoadingSpinner
    
    return < LoadingSpinner />;
  }

  // Dacă pagina nu mai este în stare de încărcare, returnăm conținutul principal al paginii.
  // Acesta este structurat în două secțiuni: titleAndChart și dashboardAndTable.
  return (
    <div className={styles.statisticsPage}>
      
      {/* Secțiunea titleAndChart conține un titlu și un grafic cu date statistice. */}
      <div className={styles.titleAndChart}>
        <h1 className={styles.title}>Statistics</h1>
        <StatisticsChart />
      </div>

      {/* Secțiunea dashboardAndTable conține dashboard-ul și tabelul cu date statistice. */}
      <div className={styles.dashboardAndTable}>
        <StatisticsDashboard />
        <StatisticsTable />
      </div>
    </div>
  );
};

// Exportă componenta StatisticsPage.
// Aceasta poate fi utilizată în alte părți ale aplicației pentru a afișa pagina de statistici.
export default StatisticsPage;
