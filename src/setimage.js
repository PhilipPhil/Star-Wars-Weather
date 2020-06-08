navigator.geolocation.getCurrentPosition(showMap);

function showMap(position) {
    lat = position.coords.latitude
    lon = position.coords.longitude
    apikey = '3e7cd6048bd8114abedeee14fcc11575'
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + apikey)
        .then(response => response.json())
        .then(data => createBackGround(data));
}

function createBackGround(data) {
    cel = Math.round(data["main"]["temp"] - 273.15)
    sunrise = data["sys"]["sunrise"] * 1000;
    sunset = data["sys"]["sunset"] * 1000;
    date = new Date();
    currentTime = date.getTime();
    imgUrl = getImgUrl({ "cel": cel, "sunrise": sunrise, "sunset": sunset, "currentTime": currentTime })
    setBackgroundImage(imgUrl)
}

function getImgUrl(info) {
    let file
    if (info.cel > 34) {
        document.getElementById('planet').innerText = 'Mustafar'
        f = Math.floor(Math.random() * 3) + 1
        file = 'img/planet/mustafar/' + f + '.jpg'
    } else if (info.cel > 31) {
        document.getElementById('planet').innerText = 'Jakku'
        if (info.currentTime < info.sunset && info.currentTime > info.sunrise) {
            f = Math.floor(Math.random() * 9) + 1
            file = 'img/planet/jakku/day/' + f + '.jpg'
        } else {
            f = Math.floor(Math.random() * 2) + 1
            file = 'img/planet/jakku/night/' + f + '.jpg'
        }
    } else if (info.cel > 25) {
        document.getElementById('planet').innerText = 'Tatooine'
        if (info.currentTime < info.sunset && info.currentTime > info.sunrise) {
            f = Math.floor(Math.random() * 12) + 1
            file = 'img/planet/tatooine/day/' + f + '.jpg'
        } else {
            f = Math.floor(Math.random() * 6) + 1
            file = 'img/planet/tatooine/night/' + f + '.jpg'
        }
    } else if (info.cel > 19) {
        document.getElementById('planet').innerText = 'Bespin'
        f = Math.floor(Math.random() * 9) + 1
        file = 'img/planet/bespin/' + f + '.jpg'
    } else if (info.cel > 16) {
        document.getElementById('planet').innerText = 'Naboo'
        if (info.currentTime < info.sunset && info.currentTime > info.sunrise) {
            f = Math.floor(Math.random() * 3) + 1
            file = 'img/planet/naboo/day/' + f + '.jpg'
        } else {
            f = Math.floor(Math.random() * 2) + 1
            file = 'img/planet/naboo/night/' + f + '.jpg'
        }
    } else if (info.cel > 10) {
        document.getElementById('planet').innerText = 'Coruscant'
        if (info.currentTime < info.sunset && info.currentTime > info.sunrise) {
            f = Math.floor(Math.random() * 4) + 1
            file = 'img/planet/coruscant/day/' + f + '.jpg'
        } else {
            f = Math.floor(Math.random() * 5) + 1
            file = 'img/planet/coruscant/night/' + f + '.jpg'
        }
    } else if (info.cel > 3) {
        document.getElementById('planet').innerText = 'Endor'
        if (info.currentTime < info.sunset && info.currentTime > info.sunrise) {
            f = Math.floor(Math.random() * 7) + 1
            file = 'img/planet/endor/day/' + f + '.jpg'
        } else {
            f = Math.floor(Math.random() * 5) + 1
            file = 'img/planet/endor/night/' + f + '.jpg'
        }
    } else if (info.cel > -1) {
        document.getElementById('planet').innerText = 'Dagobah'
        f = Math.floor(Math.random() * 6) + 1
        file = 'img/planet/dagobah/' + f + '.jpg'
    } else {
        document.getElementById('planet').innerText = 'Hoth'
        f = Math.floor(Math.random() * 12) + 1
        file = 'img/planet/hoth/' + f + '.jpg'
    }
    return file
}

function setBackgroundImage(imgUrl) {
    document.body.style.backgroundImage = "url('" + imgUrl + "')"
}
