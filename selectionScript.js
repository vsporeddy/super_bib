chrome.tabs.executeScript( {
  code: "window.getSelection().toString();"
}, function(selection) {
if(selection)
  document.getElementById('sett').innerHTML = selection;
 else
 document.getElementById('sett').innerHTML = "";
});