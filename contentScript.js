function setBackgroundImage(temp) {
    let file
    if (temp > 287) {
        file = 'img/hoth/1.jpg'
    } else {
        file = 'img/coruscant/1.jpg'
    }
    let url = chrome.extension.getURL(file)
    document.body.style.background = "url('" + url + "')"
    document.body.style.fontWeight = ['bold']

}

function createBackGround(data) {
    temp = data["main"]["temp"]
    setBackgroundImage(temp)
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

