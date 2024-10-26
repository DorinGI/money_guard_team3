// Importă stilurile din fișierul CSS modular pentru a aplica stiluri personalizate.
import styles from "./StatisticsTable.module.css";

// Importă hook-ul useSelector din biblioteca react-redux pentru a accesa starea din magazinul Redux.
import { useSelector } from "react-redux";

// Importă selectoarele pentru a obține datele necesare din starea Redux.
import {
  selectTransactionsSummary, // Selectează sumarul tranzacțiilor.
  selectFilteredCategories,// Selectează categoriile filtrate.
  selectIsLoading,  
} from "../../redux/TransactionSelectors";

// Importă o funcție pentru a obține culoarea asociată cu o categorie de tranzacție.
import { getTrasactionCategoryColor } from "../../constants/TransactionConstants";

// Importă componenta care afișează un spinner de încărcare.
import LoadingSpinner from "../../constants/LoadingSpinner/LoadingSpinner";

// Importă o funcție pentru a formata numerele cu spații pentru o mai bună lizibilitate.
import { formatNumberWithSpaces } from "../../constants/formatNumberWithSpaces";

// Definește componenta StatisticsTable.
const StatisticsTable = () => {
  // Utilizează useSelector pentru a obține sumarul tranzacțiilor din starea Redux.
  const transactionsSummary = useSelector(selectTransactionsSummary);
  
  // Utilizează useSelector pentru a obține categoriile filtrate din starea Redux.
  const filteredCategories = useSelector(selectFilteredCategories);

  // Utilizează useSelector pentru a verifica dacă datele sunt în curs de încărcare.
  const isLoading = useSelector(selectIsLoading);

  // Funcție pentru a reda sumarul categoriilor filtrate.
  const renderCategorySummary = () => {
    return (
      // Element div care conține sumarul categoriilor.
      <div className={styles.categorySummary}>
        {/* Mapează fiecare categorie filtrată pentru a crea un rând în tabel. */}
        {filteredCategories.map((item) => (
          // Fiecare rând are o cheie unică bazată pe numele categoriei.
          <div key={item.name} className={styles.categoryRow}>
            <div className={styles.category}>
              {/* Rândul conține o divizie colorată pentru categorie. */}
              <div
                style={{
                  backgroundColor: getTrasactionCategoryColor(item.name), // Setează culoarea fundalului pe baza categoriei.
                }}
              ></div>
              {/* Afișează numele categoriei. */}
              <span>{item.name}</span>
            </div>
            {/* Afișează suma totală pentru categoria respectivă, formatată cu spații. */}
            <span className={styles.sum}>
              {formatNumberWithSpaces(item.total * -1)} {/* Multiplicăm cu -1 pentru a obține o valoare pozitivă. */}
            </span>
          </div>
        ))}

        {/* Secțiune pentru a afișa totalurile cheltuielilor și veniturilor. */}
        <div className={styles.total}>
          <div className={styles.totalExpenses}>
            <span>Expenses</span>
            <span>
              {formatNumberWithSpaces(transactionsSummary.expenseSummary * -1)} {/* Total cheltuieli. */}
            </span>
          </div>

          <div className={styles.totalIncome}>
            <span>Income</span>
            <span>
              {formatNumberWithSpaces(transactionsSummary.incomeSummary)} {/* Total venituri. */}
            </span>
          </div>
        </div>
      </div>
    );
  };

  // Funcție pentru a reda un mesaj atunci când nu există date disponibile.
  const renderMisingDataMessage = () => {
    return <p className={styles.noData}>There is no data for selected date</p>; // Mesaj de lipsă a datelor.
  };

  // Returnează JSX-ul componentei.
  return (
    <div className={styles.statisticsTable}>
      {/* Antetul tabelului cu titlurile coloanelor. */}
      <div className={styles.tableHead}>
        <span>Category</span>
        <span>Sum</span>
      </div>

      {/* Verifică starea de încărcare și redă conținutul corespunzător. */}
      {isLoading ? (
        <LoadingSpinner /> // Dacă este în curs de încărcare, afișează un spinner.
      ) : filteredCategories?.length > 0 ? (
        renderCategorySummary() // Dacă există categorii filtrate, afișează sumarul acestora.
      ) : (
        renderMisingDataMessage() // Dacă nu există date, afișează mesajul de lipsă a datelor.
      )}

      {/* 
        Blocat comentat care ar putea fi utilizat pentru a verifica și reda sumarul categoriilor 
        sau mesajul de lipsă a datelor, dar nu este activ în prezent. 
      */}
      {/* {filteredCategories?.length > 0
        ? renderCategorySummary()
        : renderMisingDataMessage()} */}
    </div>
  );
};

// Exportă componenta pentru a putea fi utilizată în alte părți ale aplicației.
export default StatisticsTable;

