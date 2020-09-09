var readOnlyCss = document.createElement('link');
readOnlyCss.rel = 'stylesheet';
readOnlyCss.type = 'text/css';
readOnlyCss.href = 'https://owjosh.github.io/custom/read-only.css';
var waitForElement = document.createElement('script');
waitForElement.rel = 'stylesheet';
waitForElement.type = 'text/css';
waitForElement.src = 'https://openwater-themes.s3.amazonaws.com/js/waitForElement.js';
document.getElementsByTagName('HEAD')[0].appendChild(readOnlyCss)
document.getElementsByTagName('HEAD')[0].appendChild(waitForElement);

$(function() {
    $(".read-only input[type='text'], .read-only textarea, .read-only select").waitUntilExists(function() {
        this.readOnly = true;
        this.tabIndex = -1;
    });
});