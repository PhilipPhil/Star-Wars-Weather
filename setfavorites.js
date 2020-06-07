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
  // console.log(parsed.tld); // 'com'
  // console.log(parsed.sld); // 'google'
  // console.log(parsed.domain); // 'google.com'
  // console.log(parsed.subdomain); // null

  websitename = websitedomain.split('.' + parsed.tld)[0]
  websitename = websitename.replace('www.', '')
  // websitename = parsed.sld
  websitedomain = parsed.domain

  newhtml = '<div class="row"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>' +
    "<a href='" + url + "' style='text-decoration: none;'><div class='favorite'>" +
    "<img style='border-radius: 50%; width: 50px; height: 50px;' src='https://logo.clearbit.com/" + websitedomain + "/'>" +
    "<p style='word-wrap: break-word;'>" + websitename + "</p></div></a>"
  document.getElementById('fav' + index).innerHTML = newhtml
  document.getElementById('fav' + index).classList.add('used');
  document.getElementById('fav' + index).classList.remove('notused');
}