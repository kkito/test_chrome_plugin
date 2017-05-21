// React when a browser action's icon is clicked.
chrome.runtime.onInstalled.addListener(function(){
console.log("on installed listen")
})
chrome.tabs.onUpdated.addListener(function(tab_id , info , tab){
console.log("on updated")
console.log("on updated" + info.status)
})
chrome.tabs.onCreated.addListener(function(){
console.log("on created")
})
