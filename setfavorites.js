index = 1
document.addEventListener('DOMContentLoaded', function () {
  chrome.topSites.get(function (urls) {
    urls.forEach(function ({ url }) {
      setNewHtml(url, index)
      index++
    })
  });
});


function setNewHtml(url, index) {
  i = url.indexOf('/', 1 + url.indexOf('/', 1 + url.indexOf('/')));
  websitedomain = url.substring(0, i);
  websitedomain = websitedomain.split('://')[1]

  var parsed = psl.parse(websitedomain);
  console.log(parsed.tld); // 'com'
  console.log(parsed.sld); // 'google'
  console.log(parsed.domain); // 'google.com'
  console.log(parsed.subdomain); // null


  websitename = parsed.sld
  websitedomain = parsed.domain




  // alert(websitename)


  newhtml = "<a href='" + url + "'>" +
    // "<img style='border-radius: 50%; width: 50px; height: auto;' src='https://s2.googleusercontent.com/s2/favicons?domain="+websiteUrl+"'></a>" +
    // "<img style='border-radius: 50%; width: 50px; height: auto;' src='http://logo.clearbit.com/spotify.com'></a>" +
    "<img style='border-radius: 50%; width: 50px; height: auto;' src='https://logo.clearbit.com/" + websitedomain + "/'></a>" +
    "<p>" + websitename + "</p>"
  document.getElementById('fav' + index).innerHTML = newhtml
}