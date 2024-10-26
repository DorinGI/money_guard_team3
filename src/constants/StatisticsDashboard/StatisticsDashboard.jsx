// Importă hook-urile necesare din React
import { useEffect, useRef, useState } from "react";
// Importă stilurile din fișierul StatisticsDashboard.module.css
import styles from "./StatisticsDashboard.module.css";
// Importă useDispatch din react-redux pentru a trimite acțiuni către Redux
import { useDispatch } from "react-redux";
// Importă opțiunile pentru luni și ani din constante
import {
  Months_OPTIONS,
  YEARS_OPTIONS,
} from "../../constants/TransactionConstants";
// Importă funcția pentru a obține sumarul tranzacțiilor din operațiile Redux
import { fetchTransactionsSummary } from "../../redux/TransactionOperations";

// Definirea componentei funcționale StatisticsDashboard
const StatisticsDashboard = () => {
  // Crează un dispatch pentru a trimite acțiuni în Redux
  const dispatch = useDispatch();
  
  // Definește starea curentă a lunii și anului folosind useState
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1); // Luna curentă (1-12)
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear()); // Anul curent

  // Folosește useRef pentru a crea referințe către selectoare
  const monthRef = useRef(); // Referința pentru selectorul de luni
  const yearRef = useRef();  // Referința pentru selectorul de ani

  // useEffect care se execută atunci când se schimbă luna sau anul
  useEffect(() => {
    // Trimite o acțiune pentru a obține sumarul tranzacțiilor cu luna și anul selectat
    dispatch(
      fetchTransactionsSummary({
        month: monthRef.current.value, // Luna selectată
        year: yearRef.current.value,     // Anul selectat
      })
    );
  }, [currentMonth, currentYear, dispatch]); // Dependențe: currentMonth, currentYear și dispatch

  // useEffect care setează valoarea referinței pentru lună atunci când currentMonth se schimbă
  useEffect(() => {
    monthRef.current.value = currentMonth; // Actualizează referința cu luna curentă
  }, [currentMonth]); // Dependență: currentMonth

  // Returnează JSX pentru componentă
  return (
    <div className={styles.dropdownsWrapper}> {/* Container pentru selectoare */}
      {/* Selector pentru lună */}
      <select
        onChange={() => setCurrentMonth(parseInt(monthRef.current.value))} // Actualizează starea currentMonth la selectarea unei luni
        ref={monthRef} // Asociază referința
      >
        {Months_OPTIONS.map((item) => ( // Mapează opțiunile lunilor
          <option
            key={item.value} // Cheia unică pentru fiecare opțiune
            value={item.value} // Valoarea opțiunii
            label={item.label} // Eticheta opțiunii
          ></option>
        ))}
      </select>
      {/* Selector pentru an */}
      <select
        onChange={() => setCurrentYear(parseInt(yearRef.current.value))} // Actualizează starea currentYear la selectarea unui an
        ref={yearRef} // Asociază referința
      >
        {YEARS_OPTIONS.map((item) => ( // Mapează opțiunile anilor
          <option key={item} value={item}> {/* Cheia unică pentru fiecare opțiune */}
            {item} {/* Afișează anul ca etichetă */}
          </option>
        ))}
      </select>
    </div>
  );
};

// Exportă componenta StatisticsDashboard pentru a fi utilizată în alte părți ale aplicației
export default StatisticsDashboard;
