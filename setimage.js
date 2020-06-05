
function setBackgroundImage(imgUrl) {
    document.body.style.background = "url('" + imgUrl + "')"
}

function getImgUrl(temp) {
    let file
    if (temp < 287) {
        chrome.runtime.sendMessage('Hoth')
        document.getElementById('planet').innerText = 'Hoth'
        file = 'img/planet/hoth/1.jpg'
    } else {
        chrome.runtime.sendMessage('Coruscant')
        document.getElementById('planet').innerText = 'Coruscant'
        file = 'img/planet/coruscant/1.jpg'
    }
    let imgUrl = chrome.extension.getURL(file)
    return imgUrl
}

function createBackGround(data) {
    temp = data["main"]["temp"]
    imgUrl = getImgUrl(temp)
    setBackgroundImage(imgUrl)
}

function showMap(position) {
    lat = position.coords.latitude
    lon = position.coords.longitude
    apikey = '3e7cd6048bd8114abedeee14fcc11575'
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + apikey)
        .then(response => response.json())
        .then(data => createBackGround(data));
}

navigator.geolocation.getCurrentPosition(showMap);

