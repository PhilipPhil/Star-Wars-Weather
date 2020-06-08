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
    celsius = Math.round(data["main"]["temp"] - 273.15)
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

    if (celsius < 0) {
        document.getElementById('planet').innerText = "Hoth"
        document.getElementById('planetimg').src = 'img/planet/planetIcons/hoth.png'
    } else if (celsius > 34) {
        document.getElementById('planet').innerText = "Mustafar"
        document.getElementById('planetimg').src = 'img/planet/planetIcons/mustafar.png'
    } else if (celsius > 31) {
        document.getElementById('planet').innerText = "Jakku"
        document.getElementById('planetimg').src = 'img/planet/planetIcons/jakku.png'


    } else if (celsius > 26) {
        document.getElementById('planet').innerText = "Tatooine"
        document.getElementById('planetimg').src = 'img/planet/planetIcons/tatooine.png'

    } else if (celsius == 0) {
        document.getElementById('planet').innerText = "Dagobah"
        document.getElementById('planetimg').src = 'img/planet/planetIcons/dagobah.png'


    } else if (celsius > 19) {
        document.getElementById('planet').innerText = "Bespin"
        document.getElementById('planetimg').src = 'img/planet/planetIcons/bespin.png'

    } else if (celsius > 17) {
        document.getElementById('planet').innerText = "Naboo"
        document.getElementById('planetimg').src = 'img/planet/planetIcons/naboo.png'

    } else if (celsius > 10) {
        document.getElementById('planet').innerText = "Coruscant"
        document.getElementById('planetimg').src = 'img/planet/planetIcons/coruscant.png'

    } else if (celsius > 0) {
        document.getElementById('planet').innerText = "Endor"
        document.getElementById('planetimg').src = 'img/planet/planetIcons/endor.png'

    } else {
        document.getElementById('planet').innerText = "Space"
        document.getElementById('planetimg').src = 'img/planet/planetIcons/stars.jpg'
    }

}

navigator.geolocation.getCurrentPosition(showMap);