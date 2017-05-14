function append_text(text){
    var status = document.getElementById('status');
    status.innerHTML = status.innerHTML + "<br/>" + text;

}
//https://developer.chrome.com/extensions/tabs#method-executeScript
document.addEventListener('DOMContentLoaded', function() {
    append_text("hello world")
    append_text("hello world")
    chrome.tabs.executeScript({
        code: 'document.body.style.backgroundColor="red"'
    });
    chrome.runtime.getBackgroundPage(function(page){
        append_text("hello world1")
        window.aa = 123;
        append_text("hello world3")
        page.mytest="mytestdd"
        var item = page.getElementById('slides')
        append_text("hello world2")
        append_text(item.innerHTML);
    })
});
