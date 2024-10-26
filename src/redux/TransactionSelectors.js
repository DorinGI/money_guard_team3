import { createSelector } from '@reduxjs/toolkit'; // Importă createSelector din Redux Toolkit pentru a crea selecții memoizate.

// * Selectori simpli

// Selector simplu pentru a obține toate tranzacțiile din starea aplicației.
const selectAllTransactions = state => state.transactions.items;

// Selector simplu pentru a obține sumarul tranzacțiilor din starea aplicației.
const selectTransactionsSummary = state => state.transactions.summary;

// Selector simplu pentru a obține sumarul pe categorii din sumarul tranzacțiilor.
const selectCategoriesSummary = state =>
  state.transactions.summary?.categoriesSummary;

// * Selector complex

// Selector memoizat pentru a obține doar categoriile de tranzacții, excluzând categoriile de tip "Income".
const selectFilteredCategories = createSelector(
  [selectCategoriesSummary], // Folosește selectCategoriesSummary ca intrare.
  categoriesSummary => {
    return categoriesSummary?.filter(item => item.name !== 'Income'); // Returnează doar categoriile care nu sunt de tip "Income".
  }
);

// * Selectori pentru acțiuni specifice

// Selector simplu pentru a obține ID-ul tranzacției care urmează să fie șters din starea aplicației.
const selectTrasactionIdForDelete = state =>
  state.transactions.trasactionIdForDelete;

// Selector simplu pentru a obține tranzacția care urmează să fie actualizată.
const selectTransactionForUpdate = state =>
  state.transactions.transactionForUpdate;

// Selector simplu pentru a obține starea de încărcare, indicând dacă aplicația încă încarcă date despre tranzacții.
const selectIsLoading = state => state.transactions.isLoading;

// Exportă toți selectorii pentru a fi utilizați în alte părți ale aplicației.
export {
  selectAllTransactions,
  selectTransactionsSummary,
  selectTrasactionIdForDelete,
  selectTransactionForUpdate,
  selectFilteredCategories,
  selectIsLoading,
};

