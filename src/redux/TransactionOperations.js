import axios from "axios"; // Importă biblioteca Axios pentru a realiza cereri HTTP.
import { createAsyncThunk } from "@reduxjs/toolkit"; // Importă createAsyncThunk pentru a crea acțiuni asincrone în Redux.
import axiosConfig from "../redux/axiosConfig"; // Importă configurația personalizată Axios.
import Notiflix from "notiflix"; // Importă Notiflix pentru notificări

// Configurare Axios: setează URL-ul de bază și antetul pentru toate cererile Axios.
axiosConfig.setAxiosBaseURL();
axiosConfig.setAxiosHeader();

// *Adăugare tranzacție
const addTransaction = createAsyncThunk(
  "transactions/addTransaction", // Definim tipul acțiunii în Redux.
  
  // Funcția asincronă care gestionează adăugarea unei tranzacții.
  async (transactionData, thunkAPI) => {
    try {
      // Trimitere POST pentru a adăuga o tranzacție cu datele specificate.
      const response = await axios.post("/transactions", transactionData);

      Notiflix.Notify.success("Transaction added successfully!"); // Notificare de succes.
      return response.data; // Returnează datele răspunsului.
    } catch (error) {
      // Gestionarea erorilor și notificarea utilizatorului.
      const errorNotify =
        error.response.data.message ?? 
        "Operation failed, transaction not saved. We are facing some technical problems with our servers!";

      Notiflix.Notify.failure(errorNotify); // Notificare de eroare.
      return thunkAPI.rejectWithValue(error); // Returnează eroarea pentru reducer.
    }
  }
);

// *Obținere toate tranzacțiile
const fetchAllTransactions = createAsyncThunk(
  "transactions/fetchAllTransaction", // Tipul acțiunii.

  async (_, thunkAPI) => {
    try {
      // Cerere GET pentru a obține toate tranzacțiile.
      const response = await axios.get("/transactions");

      return response.data; // Returnează datele răspunsului.
    } catch (error) {
      // Gestionare eroare și notificare.
      const errorNotify =
        error.response.data.message ?? 
        "Operation failed, transaction not saved. We are facing some technical problems with our servers!";

      Notiflix.Notify.failure(errorNotify);
      return thunkAPI.rejectWithValue(error); // Returnează eroarea pentru reducer.
    }
  }
);

// *Ștergere tranzacție
const deleteTransaction = createAsyncThunk(
  "transactions/deleteTransaction", // Tipul acțiunii.

  async (transactionId, thunkAPI) => {
    try {
      // Cerere DELETE pentru a șterge o tranzacție specificată prin ID.
      await axios.delete(`/transactions/${transactionId}`);

      Notiflix.Notify.success("Transaction deleted successfully!"); // Notificare de succes.
      return transactionId; // Returnează ID-ul tranzacției șterse.
    } catch (error) {
      // Gestionare eroare și notificare.
      const errorNotify =
        error.response.data.message ?? 
        "Operation failed, transaction not deleted. We are facing some technical problems with our servers!";

      Notiflix.Notify.failure(errorNotify);
      return thunkAPI.rejectWithValue(error); // Returnează eroarea pentru reducer.
    }
  }
);

// *Modificare tranzacție
const modifyTransaction = createAsyncThunk(
  "transactions/modifyTransaction", // Tipul acțiunii.

  async ({ transactionId, transactionData }, thunkAPI) => {
    try {
      // Cerere PATCH pentru a modifica tranzacția specificată.
      const response = await axios.patch(
        `/transactions/${transactionId}`,
        transactionData
      );

      Notiflix.Notify.success("Transaction modified successfully!"); // Notificare de succes.
      return response.data; // Returnează datele răspunsului.
    } catch (error) {
      // Gestionare eroare și notificare.
      const errorNotify =
        error.response.data.message ?? 
        "Operation failed and transaction not modified. We are facing some technical problems with our servers!";

      Notiflix.Notify.failure(errorNotify);
      return thunkAPI.rejectWithValue(error); // Returnează eroarea pentru reducer.
    }
  }
);

// *Obținere sumar tranzacții
const fetchTransactionsSummary = createAsyncThunk(
  "transactions/fetchTransactionsSummary", // Tipul acțiunii.

  async ({ month, year }, thunkAPI) => {
    try {
      // Cerere GET pentru a obține sumarul tranzacțiilor pe o anumită lună și an.
      const response = await axios.get(
        `/transactions-summary?month=${month}&year=${year}`
      );

      return response.data; // Returnează datele răspunsului.
    } catch (error) {
      // Gestionare eroare și notificare.
      const errorNotify =
        error.response.data.message ?? 
        "Operation failed and transaction not saved. We are facing some technical problems with our servers!";
      
      Notiflix.Notify.failure(errorNotify);
      return thunkAPI.rejectWithValue(error); // Returnează eroarea pentru reducer.
    }
  }
);

// Exportăm toate funcțiile createAsyncThunk pentru a le putea folosi în alte părți ale aplicației.
export {
  fetchAllTransactions, // Funcție pentru obținerea tuturor tranzacțiilor.
  addTransaction,       // Funcție pentru adăugarea unei tranzacții noi.
  deleteTransaction,    // Funcție pentru ștergerea unei tranzacții.
  fetchTransactionsSummary, // Funcție pentru obținerea sumarului tranzacțiilor.
  modifyTransaction,    // Funcție pentru modificarea unei tranzacții existente.
};

