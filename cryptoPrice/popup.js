document.getElementById('fetchPriceButton').addEventListener("click",()=>{
    const selectedCryptoCurrencySymbol = document.getElementById('cryptoSymbol').value;
    const priceElement = document.getElementById('priceElement')


fetch(`https://api.api-ninjas.com/v1/cryptoprice?symbol=${selectedCryptoCurrencySymbol}`, {
  method: 'GET',
  headers: {
    'X-API-Key': 'VUYx+938/M4coN9EPSsU4Q==093K7hj4u6pIHwuB',
  },
})
  .then((response) => response.json())
  .then((priceData) => {
    const cryptoPrice = priceData.price;
if (cryptoPrice) {
  priceElement.textContent = `Price of ${selectedCryptoCurrencySymbol}: $${cryptoPrice}`;
} else {
  console.error('The price element does not exist.');
}
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});