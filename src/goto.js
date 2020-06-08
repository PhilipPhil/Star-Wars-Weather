document.getElementById('goToApps').addEventListener('click', function(e) {
    chrome.tabs.create({"url":"chrome://apps"})

})

document.getElementById('goToDefault').addEventListener('click', function(e) {
    chrome.tabs.query ({ active: true, currentWindow: true }, tabs => {
        if (tabs[0]) { chrome.tabs.reload (tabs[0].id) }
        chrome.runtime.reload ()
      })
})