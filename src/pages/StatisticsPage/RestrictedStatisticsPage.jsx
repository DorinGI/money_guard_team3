
// Aceasta ne permite să accesăm valorile din store-ul Redux.
import { useSelector } from "react-redux";

// Aceasta ne ajută să redirecționăm utilizatorul către o altă pagină.
import { Navigate } from "react-router-dom";

// Aceasta este componenta paginii de statistici, pe care dorim să o afișăm doar pentru utilizatorii autentificați.
import StatisticsPage from "./StatisticsPage";

// Acest selector verifică dacă utilizatorul este autentificat sau nu.
import { selectIsLoggedIn } from "../../redux/AuthenticationSelectors";

// Aceasta componentă decide dacă afișează pagina de statistici sau redirecționează utilizatorul.
const RestrictedStatisticsPage = () => {

  // Variabila isLoggedIn va fi true dacă utilizatorul este autentificat și false în caz contrar.
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // Verifică dacă utilizatorul NU este autentificat.
  if (!isLoggedIn) {

    // Aceasta redirecționează utilizatorul către pagina de start ("/").
    return <Navigate to="/" />;
  }

  // În acest caz, pagina de statistici va fi afișată pe ecran.
  return <StatisticsPage />;
};

export default RestrictedStatisticsPage;
