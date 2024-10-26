import axios from "axios"; // Importă librăria axios pentru a facilita efectuarea cererilor HTTP

// Funcție pentru setarea URL-ului de bază pentru toate cererile axios
const setAxiosBaseURL = () => {
  axios.defaults.baseURL = "https://wallet.b.goit.study/api/"; // Setează URL-ul de bază în configurația implicită a axios
};

// Funcție pentru setarea header-ului de autorizare folosind token-ul primit ca parametru sau cel salvat local
const setAxiosHeader = (tokenReceived) => {
  // Obține datele de autentificare salvate în localStorage ca un string
  const savedDataLocalString = localStorage.getItem("persist:auth");

  // Parsează string-ul JSON din localStorage într-un obiect JavaScript, dacă există date
  const savedDataLocal = savedDataLocalString
    ? JSON.parse(savedDataLocalString)
    : null;

  // Extrage token-ul salvat local, ignorând valoarea "null" și verificând dacă token-ul există
  const savedToken =
    savedDataLocal?.token === "null" || !savedDataLocal?.token
      ? null
      : savedDataLocal?.token.slice(1, -1); // Elimină primele și ultimele caractere din token pentru formatare

  // Setează header-ul de autorizare cu token-ul primit sau cu token-ul salvat
  axios.defaults.headers.common.Authorization = tokenReceived || savedToken;
};

// Funcție pentru a elimina header-ul de autorizare
const clearAxiosHeader = () => {
  delete axios.defaults.headers.common.Authorization; // Șterge header-ul Authorization din configurația axios
};

// Obiect de configurare axios, exportat pentru a putea fi folosit în alte module
const axiosConfig = {
  setAxiosBaseURL,
  setAxiosHeader,
  clearAxiosHeader,
};

export default axiosConfig; // Exportă configurația pentru a fi accesibilă în alte module
