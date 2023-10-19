document.getElementById('enterButton').addEventListener("click", () => {
    const selectedCelebrity = document.getElementById('textInput').value;
    const areUAliveElement = document.getElementById('output');
    const bodyElement = document.body;
  
    fetch(`https://api.api-ninjas.com/v1/celebrity?name=${selectedCelebrity}`, {
      method: 'GET',
      headers: {
        'X-API-Key': 'VUYx+938/M4coN9EPSsU4Q==093K7hj4u6pIHwuB',
      },
    })
      .then((response) => response.json())
      .then((celebrityInfo) => {
        if (celebrityInfo && celebrityInfo.length > 0) {
          const areUAlive = celebrityInfo[0].is_alive;
          console.log(areUAlive);
          if (areUAlive) {
            areUAliveElement.textContent = `${selectedCelebrity} is Alive!!!`;
            bodyElement.classList.remove('dead');
            bodyElement.classList.add('alive');
          } else {
            areUAliveElement.textContent = `Unfortunately ${selectedCelebrity} is No more with us`;
            bodyElement.classList.remove('alive');
            bodyElement.classList.add('dead');
          }
        } else {
          areUAliveElement.textContent = 'Error: Could not fetch celebrity information.';
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
  