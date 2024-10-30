import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTransactions } from '../redux/transactions/operations';
import { getTransactionsCategories } from './StatisticsPage';
import TransactionList from './common/components/TransactionsList';
import AddButton from './common/components/AddButton/AddButton';
function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactions());
    dispatch(getTransactionsCategories());
  }, [dispatch]);
  return (
    <>
      <TransactionList />
      <AddButton></AddButton>
    </>
  );
}

export default Home;
