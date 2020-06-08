function getDateString(unixTime){
    date = new Date(unixTime);
    hours = date.getHours();
    if(hours > 12){
        hours = hours - 12
        minutes = "0" + date.getMinutes();
        unixTime = hours + ':' + minutes.substr(-2) + "pm";
    } else {
        unixTime = hours + ':' + minutes.substr(-2) + "am";
    }
    return unixTime
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        localStorage["data"] = JSON.stringify(request.data)
    }
);

data = JSON.parse(localStorage.getItem("data"))

document.getElementById('planetimg').src = data.iconpath

document.getElementById('planet').innerText = data.planet;
document.getElementById('city').innerText = data.city;

description = data.description
description = description.charAt(0).toUpperCase() + description.slice(1)
document.getElementById('description').innerText =  description;

document.getElementById('cel').innerText = data.cel + "°C"
document.getElementById('far').innerText = data.far + "°F"


currentTime = getDateString(data.currentTime)
document.getElementById('currentTime').innerText = "Last updated " + currentTime;

sunrise = getDateString(data.sunrise)
sunset = getDateString(data.sunset)

document.getElementById('sunrise').innerText = "Sunrise " + sunrise
document.getElementById('sunset').innerText = "Sunset " + sunset



navigator.geolocation.getCurrentPosition(showMap);