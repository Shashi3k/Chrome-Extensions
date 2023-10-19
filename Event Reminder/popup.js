document.getElementById('setReminder').addEventListener('click',()=>{
    var eventDate = document.getElementById('eventDate').ariaValueMax;
    chrome.storage.sync.set({'eventDate':eventDate});
})