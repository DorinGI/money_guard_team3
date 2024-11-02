import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBalance } from '../../../redux/auth/selectors';
import { getUserInfo } from '../../../redux/auth/operations';
import styles from './Balance.module.css';

function formatNumberWithSpaces(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function Balance() {
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  return (
    <div className={styles.balanceContainer}>
      <h3>Your Balance</h3>
      <p>
        ₴{' '}
        <span>
          {balance ? formatNumberWithSpaces(balance.toFixed(2)) : '0.00'}
        </span>
      </p>
    </div>
  );
}

export default Balance;
