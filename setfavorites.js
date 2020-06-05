index = 1

chrome.bookmarks.getTree(function(itemTree){
  itemTree.forEach(function(item){
    if( index > 12) {
      return
    }
      processNode(item);
  });
});

function processNode(node) {

  if(node.children) {
      node.children.forEach(function(child) { processNode(child); });
  }

  if(node.url) { 
    setNewHtml(node.url, index);
    index++ 
  }
}

function setNewHtml(websiteUrl, index) {
  websitename = 'Website Name'
  newhtml = "<a class='nav-link' href='" + websiteUrl + "'>" +
    "<img class='rounded' src='https://s2.googleusercontent.com/s2/favicons?domain=" + websiteUrl + "'" +
    " alt='Link'" +
    '<p class="text-center">'+websitename+'</p>' +
    "</a>"
  document.getElementById('fav'+index).innerHTML = newhtml
}


