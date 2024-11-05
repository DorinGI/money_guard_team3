import { RotatingLines } from 'react-loader-spinner';
import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  
  return (
    <RotatingLines
      visible={true}
      height="96"
      width="96"
      color="grey"
      strokeWidth="5"
      animationDuration="0.50"
      ariaLabel="rotating-lines-loading"
      wrapperClass={styles.loadingSpinner}
    />
  );
};


export default LoadingSpinner;