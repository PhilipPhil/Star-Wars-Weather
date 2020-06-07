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
    far = Math.round((data["main"]["temp"] - 273.15) * 9 / 5 + 32)
    sunrise = data["sys"]["sunrise"] * 1000;
    sunset = data["sys"]["sunset"] * 1000;
    city = data["name"]
    date = new Date();
    currentTime = date.getTime();
    imgUrl = getImgUrl({ "cel": cel, "far": far, "sunrise": sunrise, "sunset": sunset, "currentTime": currentTime, "city": city })
    setBackgroundImage(imgUrl)
}

function getImgUrl(info) {
    let file
    if (info.cel < 0) {
        chrome.runtime.sendMessage('Hoth')
        document.getElementById('planet').innerText = 'Hoth'
        f = Math.floor(Math.random() * 10) + 1
        file = 'img/planet/hoth/' + f + '.jpg'

    } else if (info.cel > 34) {

        chrome.runtime.sendMessage('Mustafar')
        document.getElementById('planet').innerText = 'Mustafar'
        file = 'img/planet/mustafar/1.jpg'

    } else if (info.cel > 31) {

        if (info.currentTime < info.sunset && info.currentTime > info.sunrise) {
            chrome.runtime.sendMessage('Jakku')
            document.getElementById('planet').innerText = 'Jakku'
            f = Math.floor(Math.random() * 3) + 1
            file = 'img/planet/jakku/day/' + f + '.jpg'
        } else {
            chrome.runtime.sendMessage('Jakku')
            document.getElementById('planet').innerText = 'Jakku'
            file = 'img/planet/jakku/night/1.jpg'
        }

    } else if (info.cel > 26) {

        if (info.currentTime < info.sunset && info.currentTime > info.sunrise) {
            chrome.runtime.sendMessage('Tatooine')
            document.getElementById('planet').innerText = 'Tatooine'
            f = Math.floor(Math.random() * 6) + 1
            file = 'img/planet/tatooine/day/' + f + '.jpg'
        } else {
            chrome.runtime.sendMessage('Tatooine')
            document.getElementById('planet').innerText = 'Tatooine'
            f = Math.floor(Math.random() * 3) + 1
            file = 'img/planet/tatooine/night/' + f + '.jpg'
        }

    } else if (info.cel == 0) {

        chrome.runtime.sendMessage('Dagobah')
        document.getElementById('planet').innerText = 'Dagobah'
        file = 'img/planet/dagobah/1.jpg'

    } else if ( info.cel > 19 ) {
        info['planet'] = 'Bespin'
        chrome.runtime.sendMessage(info)
        document.getElementById('planet').innerText = 'Bespin'
        f = Math.floor(Math.random() * 5) + 1
        file = 'img/planet/bespin/' + f + '.jpg'

    } else if ( info.cel > 17 ) {

        if (info.currentTime < info.sunset && info.currentTime > info.sunrise) {
            chrome.runtime.sendMessage('Nabooo')
            document.getElementById('planet').innerText = 'Nabooo'
            f = Math.floor(Math.random() * 2) + 1
            file = 'img/planet/naboo/day/' + f + '.jpg'
        } else {
            chrome.runtime.sendMessage('Nabooo')
            document.getElementById('planet').innerText = 'Nabooo'
            file = 'img/planet/naboo/night/1.jpg'
        }

    } else if ( info.cel > 10 ) {

        if (info.currentTime < info.sunset && info.currentTime > info.sunrise) {
            chrome.runtime.sendMessage('Coruscant')
            document.getElementById('planet').innerText = 'Coruscant'
            f = Math.floor(Math.random() * 6) + 1
            file = 'img/planet/coruscant/day/' + f + '.jpg'
        } else {
            chrome.runtime.sendMessage('Coruscant')
            document.getElementById('planet').innerText = 'Coruscant'
            f = Math.floor(Math.random() * 5) + 1
            file = 'img/planet/coruscant/night/' + f + '.jpg'
        }
    } else if ( info.cel > 0 ) {

        if (info.currentTime < info.sunset && info.currentTime > info.sunrise) {
            chrome.runtime.sendMessage('Endor')
            document.getElementById('planet').innerText = 'Endor'
            f = Math.floor(Math.random() * 5) + 1
            file = 'img/planet/endor/day/' + f + '.jpg'
        } else {
            chrome.runtime.sendMessage('Coruscant')
            document.getElementById('planet').innerText = 'Coruscant'
            f = Math.floor(Math.random() * 3) + 1
            file = 'img/planet/endor/night/' + f + '.jpg'
        }
    } else {
        chrome.runtime.sendMessage('Space')
        document.getElementById('planet').innerText = 'Space'
        f = Math.floor(Math.random() * 3) + 1
        file = 'img/planet/night/' + f + '.jpg'
    }

    let imgUrl = chrome.extension.getURL(file)
    return imgUrl
}

function setBackgroundImage(imgUrl) {
    document.body.style.backgroundImage = "url('" + imgUrl + "')"
}
