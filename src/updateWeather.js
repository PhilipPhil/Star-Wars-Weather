function getDateString(unixTime) {
    date = new Date(unixTime);
    hours = date.getHours();
    minutes = "0" + date.getMinutes();
    if (hours > 12) {
        hours = hours - 12
        unixTime = hours + ':' + minutes.substr(-2) + " p.m.";
    } else {
        unixTime = hours + ':' + minutes.substr(-2) + " a.m.";
    }
    return unixTime
}

function showMap(position) {
    lat = position.coords.latitude
    lon = position.coords.longitude
    apikey = '3e7cd6048bd8114abedeee14fcc11575'
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + apikey)
        .then(response => response.json())
        .then(data => getData(data));
}

function getData(data) {
    cel = Math.round(data["main"]["temp"] - 273.15) + "°C"
    far = Math.round((data["main"]["temp"] - 273.15) * 9 / 5 + 32) + "°F"
    sunrise = "Sunrise " + getDateString(data["sys"]["sunrise"] * 1000);
    sunset = "Sunset " + getDateString(data["sys"]["sunset"] * 1000);
    city = data["name"]
    description = data["weather"][0]['description']
    description = description.charAt(0).toUpperCase() + description.slice(1)
    data = { "cel": cel, "far": far, "sunrise": sunrise, "sunset": sunset, "city": city, "description": description }
    localStorage["newData"] = JSON.stringify(data)
    document.getElementById('description').innerText = description
    document.getElementById('cel').innerText = cel
    document.getElementById('far').innerText = far
    document.getElementById('sunrise').innerText = sunrise
    document.getElementById('sunset').innerText = sunset
    document.getElementById('city').innerText = city;
}

navigator.geolocation.getCurrentPosition(showMap);