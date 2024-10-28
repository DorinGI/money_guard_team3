import { createSelector } from '@reduxjs/toolkit';

const selectTransactionsSummary = state => state.transactions.summary;

const selectFilteredCategories = createSelector(
  [selectTransactionsSummary],
  categoriesSummary => {
    return categoriesSummary?.filter(item => item.name !== 'Income');
  }
);

const selectIsLoading = state => state.transactions.isLoading;

export {
  selectTransactionsSummary,
  selectFilteredCategories,
  selectIsLoading,
};
