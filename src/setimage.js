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
    description = data["weather"][0]['description']
    date = new Date();
    currentTime = date.getTime();
    imgUrl = getImgUrl({ "cel": cel, "far": far, "sunrise": sunrise, "sunset": sunset, "currentTime": currentTime, "city": city, "description": description })
    setBackgroundImage(imgUrl)
}

function getImgUrl(info) {
    let file
    if (info.cel < 0) {
        info['planet'] = "Hoth"
        info['iconpath'] = 'img/planet/planetIcons/hoth.png'
        chrome.runtime.sendMessage({greeting: 'hoth', data: info})
        document.getElementById('planet').innerText = 'Hoth'
        f = Math.floor(Math.random() * 10) + 1
        file = 'img/planet/hoth/' + f + '.jpg'

    } else if (info.cel > 34) {
        info['planet'] = "Mustafar"
        info['iconpath'] = 'img/planet/planetIcons/mustafar.png'
        chrome.runtime.sendMessage({greeting: 'Mustafar', data: info})
        document.getElementById('planet').innerText = 'Mustafar'
        file = 'img/planet/mustafar/1.jpg'

    } else if (info.cel > 31) {
        info['planet'] = "Jakku"
        info['iconpath'] = 'img/planet/planetIcons/jakku.png'
        if (info.currentTime < info.sunset && info.currentTime > info.sunrise) {
            chrome.runtime.sendMessage({greeting: 'Jakku', data: info})
            document.getElementById('planet').innerText = 'Jakku'
            f = Math.floor(Math.random() * 3) + 1
            file = 'img/planet/jakku/day/' + f + '.jpg'
        } else {
            chrome.runtime.sendMessage({greeting: 'Jakku', data: info})
            document.getElementById('planet').innerText = 'Jakku'
            file = 'img/planet/jakku/night/1.jpg'
        }

    } else if (info.cel > 26) {
        info['planet'] = "Tatooine"
        info['iconpath'] = 'img/planet/planetIcons/tatooine.png'
        if (info.currentTime < info.sunset && info.currentTime > info.sunrise) {
            chrome.runtime.sendMessage({greeting: 'Tatooine', data: info})
            document.getElementById('planet').innerText = 'Tatooine'
            f = Math.floor(Math.random() * 6) + 1
            file = 'img/planet/tatooine/day/' + f + '.jpg'
        } else {
            chrome.runtime.sendMessage('Tatooine')
            chrome.runtime.sendMessage({greeting: 'Tatooine', data: info})
            f = Math.floor(Math.random() * 3) + 1
            file = 'img/planet/tatooine/night/' + f + '.jpg'
        }

    } else if (info.cel == 0) {
        info['planet'] = "Dagobah"
        info['iconpath'] = 'img/planet/planetIcons/dagobah.png'
        chrome.runtime.sendMessage({greeting: 'Dagobah', data: info})
        document.getElementById('planet').innerText = 'Dagobah'
        file = 'img/planet/dagobah/1.jpg'

    } else if (info.cel > 19) {
        info['planet'] = "Bespin"
        info['iconpath'] = 'img/planet/planetIcons/bespin.png'
        chrome.runtime.sendMessage({greeting: "bespin", data: info})
        document.getElementById('planet').innerText = 'Bespin'
        f = Math.floor(Math.random() * 5) + 1
        file = 'img/planet/bespin/' + f + '.jpg'

    } else if (info.cel > 17) {
        info['planet'] = "Naboo"
        info['iconpath'] = 'img/planet/planetIcons/naboo.png'
        if (info.currentTime < info.sunset && info.currentTime > info.sunrise) {
            chrome.runtime.sendMessage({greeting: "Naboo", data: info})
            document.getElementById('planet').innerText = 'Naboo'
            f = Math.floor(Math.random() * 2) + 1
            file = 'img/planet/naboo/day/' + f + '.jpg'
        } else {
            chrome.runtime.sendMessage({greeting: "Naboo", data: info})
            document.getElementById('planet').innerText = 'Naboo'
            file = 'img/planet/naboo/night/1.jpg'
        }

    } else if (info.cel > 10) {
        info['planet'] = "Coruscant"
        info['iconpath'] = 'img/planet/planetIcons/coruscant.png'
        if (info.currentTime < info.sunset && info.currentTime > info.sunrise) {
            chrome.runtime.sendMessage({greeting: "Coruscant", data: info})
            document.getElementById('planet').innerText = 'Coruscant'
            f = Math.floor(Math.random() * 6) + 1
            file = 'img/planet/coruscant/day/' + f + '.jpg'
        } else {
            chrome.runtime.sendMessage({greeting: "Coruscant", data: info})
            document.getElementById('planet').innerText = 'Coruscant'
            f = Math.floor(Math.random() * 5) + 1
            file = 'img/planet/coruscant/night/' + f + '.jpg'
        }
    } else if (info.cel > 0) {
        info['planet'] = "Endor"
        info['iconpath'] = 'img/planet/planetIcons/endor.png'
        if (info.currentTime < info.sunset && info.currentTime > info.sunrise) {
            chrome.runtime.sendMessage({greeting: "Endor", data: info})
            document.getElementById('planet').innerText = 'Endor'
            f = Math.floor(Math.random() * 5) + 1
            file = 'img/planet/endor/day/' + f + '.jpg'
        } else {
            chrome.runtime.sendMessage({greeting: "Endor", data: info})
            document.getElementById('planet').innerText = 'Coruscant'
            f = Math.floor(Math.random() * 3) + 1
            file = 'img/planet/endor/night/' + f + '.jpg'
        }
    } else {
        info['planet'] = "Space"
        info['iconpath'] = 'img/planet/planetIcons/stars.jpg'
        chrome.runtime.sendMessage({greeting: "Space", data: info})
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
