async function getExchangeRate() {
  const app_id = '8b363fd5da974ff799c5f684a0aaa34a';
  const apiUrl = `https://openexchangerates.org/api/latest.json?app_id=${app_id}`;
  const localStorageKey = 'exchangeRateData';
  const oneHour = 60 * 60 * 1000;

  const storedData = JSON.parse(localStorage.getItem(localStorageKey));
  const currentTime = new Date().getTime();

  if (storedData && currentTime - storedData.timestamp < oneHour) {
    console.log('Returning cached data');
    return storedData.data;
  }
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch exchange rate');
    }

    const exchangeRateData = await response.json();

    localStorage.setItem(
      localStorageKey,
      JSON.stringify({
        data: exchangeRateData,
        timestamp: currentTime,
      })
    );

    return exchangeRateData;
  } catch (error) {
    console.error('Error fetching exchange rate:', error);
    return null;
  }
}

export default getExchangeRate;
