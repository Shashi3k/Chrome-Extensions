chrome.runtime.onInstalled.addListener(()=>{
    console.log("Event Reminder Extension Installed");
});

chrome.runtime.onStartup.addListener(()=>{
    console.log("Event Reminder Extension Started");
});

chrome.alarms.create({periodInMinutes:1});

chrome.alarms.onAlarm.addListener(function(alarm){
    chrome.storage.sync.get('eventDate',function(data){
        var currentDate = new Date().toISOString().split('T')[0];
        if(Date.eventDate === currentDate){
            const accountSid = process.env.
        }
    })
})
