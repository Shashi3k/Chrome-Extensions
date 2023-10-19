const apiKey = 'VUYx+938/M4coN9EPSsU4Q==093K7hj4u6pIHwuB';

fetch('https://api.api-ninjas.com/v1/facts?category=tech&limit=1', {
  headers: {
    'X-Api-Key': apiKey
  },
})
  .then(response => response.json())
  .then(factData => {
    const techFact = factData[0].fact;
    const factElement = document.getElementById('factElement');

    factElement.innerHTML = techFact;
  })
  .catch(error => {
    console.error('Error:', error);
  });