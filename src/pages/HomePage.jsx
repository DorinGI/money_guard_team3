import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllTransactions } from '../redux/transactions/operations';
// import { getTransactionsCategories } from './StatisticsPage';
import TransactionList from './common/components/TransactionsList';
import AddButton from './common/components/AddButton/AddButton';
function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllTransactions());
    // dispatch(getTransactionsCategories());
  }, [dispatch]);
  return (
    <>
      <TransactionList />
      <AddButton></AddButton>
    </>
  );
}

export default Home;
