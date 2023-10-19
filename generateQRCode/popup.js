    document.getElementById("generateButton").addEventListener("click",async ()=>{
    let imgBox = document.getElementById("imgBox")
    let qrImage = document.getElementById("qrImage")
    let qrText = document.getElementById('qrText').value;
    async function generateQR(){
        qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText;
        imgBox.classList.add("show-img")
    }

    generateQR()
})
    
    