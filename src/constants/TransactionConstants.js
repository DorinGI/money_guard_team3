// Definește un array de categorii de tranzacții, fiecare având un ID, un nume și un tip.
const transactionCategories = [
  {
    id: "c9d9e447-1b83-4238-8712-edc77b18b739", // ID unic pentru categoria "Main expenses"
    name: "Main expenses",
    type: "EXPENSE", // Tipul categoriei (EXPENSE sau INCOME)
  },
  {
    id: "27eb4b75-9a42-4991-a802-4aefe21ac3ce",
    name: "Products",
    type: "EXPENSE",
  },
  {
    id: "128673b5-2f9a-46ae-a428-ec48cf1effa1",
    name: "Household products",
    type: "EXPENSE",
  },
  {
    id: "3caa7ba0-79c0-40b9-ae1f-de1af1f6e386",
    name: "Car",
    type: "EXPENSE",
  },
  {
    id: "bbdd58b8-e804-4ab9-bf4f-695da5ef64f4",
    name: "Self care",
    type: "EXPENSE",
  },
  {
    id: "76cc875a-3b43-4eae-8fdb-f76633821a34",
    name: "Child care",
    type: "EXPENSE",
  },
  {
    id: "1272fcc4-d59f-462d-ad33-a85a075e5581",
    name: "Education",
    type: "EXPENSE",
  },
  {
    id: "c143130f-7d1e-4011-90a4-54766d4e308e",
    name: "Leisure",
    type: "EXPENSE",
  },
  {
    id: "3acd0ecd-5295-4d54-8e7c-d3908f4d0402",
    name: "Entertainment",
    type: "EXPENSE",
  },
  {
    id: "719626f1-9d23-4e99-84f5-289024e437a8",
    name: "Other expenses",
    type: "EXPENSE",
  },
  {
    id: "063f1132-ba5d-42b4-951d-44011ca46262",
    name: "Income", // Categoria specială pentru venituri
    type: "INCOME",
  },
];

// Funcție pentru a obține ID-ul unei categorii de tranzacție pe baza numelui acesteia.
const getTransactionId = (transactionCategory) => {
  const transactionTargeted = transactionCategories.find(
    (item) => item.name === transactionCategory // Caută categoria cu numele specificat.
  );

  return transactionTargeted.id; // Returnează ID-ul categoriei găsite.
};

// Funcție pentru a obține numele unei categorii de tranzacție pe baza ID-ului acesteia.
const getTransactionCategory = (transactionId) => {
  const transactionTargeted = transactionCategories.find(
    (item) => item.id === transactionId // Caută categoria cu ID-ul specificat.
  );

  return transactionTargeted.name; // Returnează numele categoriei găsite.
};

// Funcție pentru a formata datele dintr-un timestamp UNIX în format DD.MM.YYYY.
const formatData = (unixData) => {
  const year = new Date(unixData).getFullYear(); // Obține anul din timestamp.
  const month = new Date(unixData).getMonth() + 1; // Obține luna din timestamp (adaugă 1 deoarece lunile încep de la 0).
  const day = new Date(unixData).getDate(); // Obține ziua din timestamp.

  // Formatează luna și ziua pentru a avea două cifre (ex: 01, 02, ... 10).
  const doubleDigitsFormatmonth = String(month).padStart(2, 0);
  const doubleDigitsFormatDay = String(day).padStart(2, 0);

  return `${doubleDigitsFormatDay}.${doubleDigitsFormatmonth}.${year}`; // Returnează data în format DD.MM.YYYY.
};

// Definește o listă de opțiuni pentru luni, fiecare având o valoare și o etichetă.
const Months_OPTIONS = [
  { value: 1, label: "January" },
  { value: 2, label: "February" },
  { value: 3, label: "March" },
  { value: 4, label: "April" },
  { value: 5, label: "May" },
  { value: 6, label: "June" },
  { value: 7, label: "July" },
  { value: 8, label: "August" },
  { value: 9, label: "September" },
  { value: 10, label: "October" },
  { value: 11, label: "November" },
  { value: 12, label: "December" },
];

// Obține anul curent.
const CURRENT_YEAR = new Date().getFullYear();

// Definește o listă de opțiuni pentru ani, inclusiv anul curent și ultimele două.
const YEARS_OPTIONS = [CURRENT_YEAR, CURRENT_YEAR - 1, CURRENT_YEAR - 2];

// Funcție pentru a obține culoarea asociată unei categorii de tranzacție.
const getTrasactionCategoryColor = (category) => {
  switch (category) {
    case "Main expenses":
      return "rgba(254, 208, 87, 1)"; // Culoarea pentru "Main expenses".

    case "Products":
      return "rgba(255, 0, 255, 1)"; // Culoarea pentru "Products".

    case "Car":
      return "rgba(253, 148, 152, 1)"; // Culoarea pentru "Car".

    case "Self care":
      return "rgba(197, 186, 255, 1)"; // Culoarea pentru "Self care".

    case "Child care":
      return "rgba(127, 255, 0, 1)"; // Culoarea pentru "Child care".

    case "Household products":
      return "rgba(74, 86, 226, 1)"; // Culoarea pentru "Household products".

    case "Education":
      return "rgba(0, 255, 255, 1)"; // Culoarea pentru "Education".

    case "Leisure":
      return "rgba(255, 119, 0, 1)"; // Culoarea pentru "Leisure".

    case "Other expenses":
      return "rgba(0, 173, 132, 1)"; // Culoarea pentru "Other expenses".

    case "Entertainment":
      return "rgba(177, 15, 72, 1)"; // Culoarea pentru "Entertainment".

    default:
      return "rgb(128, 128, 128)"; // Culoare implicită pentru categorii necunoscute.
  }
};

// Exportă toate funcțiile și constantele pentru a fi utilizate în alte părți ale aplicației.
export {
  transactionCategories,
  getTransactionId,
  getTransactionCategory,
  formatData,
  Months_OPTIONS,
  YEARS_OPTIONS,
  getTrasactionCategoryColor,
};

