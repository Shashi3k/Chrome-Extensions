document.getElementById('enterButton').addEventListener("click",() =>{
    const selectedLogo=document.getElementById('textInput').value;
    const logoLinkElement = document.getElementById('outputLink')

    fetch(`https://api.api-ninjas.com/v1/logo?name=${selectedLogo}`,{
        method:"Get",
        headers:{
            'X-API-Key': 'VUYx+938/M4coN9EPSsU4Q==093K7hj4u6pIHwuB'
        },
    })
    .then(response => response.json())
    .then(logoInfo => {
        if(logoInfo && logoInfo.length>0){
            console.log(logoInfo[0])
            const logoLink=logoInfo[0].image;
            logoLinkElement.textContent = logoLink;
            logoLinkElement.href = logoLink;
        }
        else{
            logoLinkElement.textContent = `There is no logo with the name ${selectedLogo}`;
        }
    })
    .catch(error => {
        console.log('Error: ',error);
    });
});

