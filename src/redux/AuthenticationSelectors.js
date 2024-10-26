// Funcția selectUserData returnează informațiile utilizatorului din starea aplicației.
// 'state' reprezintă starea globală a aplicației, iar 'state.auth.user' accesează obiectul 'user' din sub-obiectul 'auth'.
const selectUserData = state => state.auth.user;

// Funcția selectToken returnează token-ul de autentificare din starea aplicației.
// Token-ul este adesea utilizat pentru a verifica dacă utilizatorul este autentificat.
const selectToken = state => state.auth.token;

// Funcția selectIsLoggedIn returnează un boolean care indică dacă utilizatorul este autentificat sau nu.
// 'isLoggedIn' este o proprietate din starea 'auth' care ar trebui să fie true dacă utilizatorul este conectat.
const selectIsLoggedIn = state => state.auth.isLoggedIn;

// Funcția selectIsLoading returnează un boolean care indică dacă aplicația este în stare de încărcare.
// Acest lucru este util pentru a gestiona starea de încărcare a interfeței utilizatorului.
const selectIsLoading = state => state.auth.isLoading;

// Funcția selectError returnează eventualele erori întâmpinate în procesul de autentificare.
// 'error' este o proprietate din starea 'auth' care poate conține mesajele de eroare.
const selectError = state => state.auth.error;

// Funcția selectBalance returnează soldul utilizatorului din starea aplicației.
// Soldul este o proprietate a obiectului 'user' din starea 'auth'.
const selectBalance = state => state.auth.user.balance;

// Exportăm funcțiile pentru a le face disponibile în alte module ale aplicației.
export {
  selectToken,          // Exportăm funcția pentru a obține token-ul de autentificare
  selectIsLoggedIn,    // Exportăm funcția pentru a verifica starea de autentificare a utilizatorului
  selectUserData,      // Exportăm funcția pentru a obține informațiile despre utilizator
  selectIsLoading,     // Exportăm funcția pentru a verifica dacă aplicația este în încărcare
  selectError,         // Exportăm funcția pentru a obține eventualele erori
  selectBalance,       // Exportăm funcția pentru a obține soldul utilizatorului
};
