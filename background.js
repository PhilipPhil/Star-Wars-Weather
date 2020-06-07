chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
       localStorage["data"] = request
    }
);

document.getElementById('planet').innerText = localStorage.getItem("data").planet;