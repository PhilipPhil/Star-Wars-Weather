chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
       localStorage["planet"] = request
    }
);

document.getElementById('planet').innerText = localStorage.getItem("planet");