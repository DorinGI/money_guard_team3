// Importă componenta RotatingLines din biblioteca react-loader-spinner
import { RotatingLines } from 'react-loader-spinner';
// Importă stilurile din fișierul LoadingSpinner.module.css
import styles from './LoadingSpinner.module.css';

// Definirea componentului funcțional LoadingSpinner
const LoadingSpinner = () => {
  // Returnează JSX care conține componenta RotatingLines
  return (
    <RotatingLines
      // Controlează vizibilitatea spinner-ului (true = vizibil)
      visible={true}
      // Setează înălțimea spinner-ului la 96 pixeli
      height="96"
      // Setează lățimea spinner-ului la 96 pixeli
      width="96"
      // Setează culoarea spinner-ului la gri
      color="grey"
      // Setează lățimea liniei spinner-ului la 5 pixeli
      strokeWidth="5"
      // Setează durata animației la 0.75 secunde
      animationDuration="0.75"
      // Oferă o etichetă de accesibilitate pentru cititoarele de ecran
      ariaLabel="rotating-lines-loading"
      // Aplică stiluri personalizate din CSS la wrapper-ul componentului
      wrapperClass={styles.loadingSpinner}
    />
  );
};


export default LoadingSpinner;

  