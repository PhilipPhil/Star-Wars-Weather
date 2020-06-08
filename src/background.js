chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        localStorage["data"] = JSON.stringify(request.data)
    }
);

data = JSON.parse(localStorage.getItem("data"))
document.getElementById('planetimg').src = data.iconpath
document.getElementById('planet').innerText = data.planet;
