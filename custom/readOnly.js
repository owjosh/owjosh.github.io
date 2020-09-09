var readOnlyCss = document.createElement('link');
readOnlyCss.rel = 'stylesheet';
readOnlyCss.type = 'text/css';
readOnlyCss.href = 'https://owjosh.github.io/custom/read-only.css';
document.getElementsByTagName('HEAD')[0].appendChild(readOnlyCss);

$.ajax({
    url: "https://openwater-themes.s3.amazonaws.com/js/waitForElement.js",
    dataType: "script",
    success: success
});

$(function() {
    $(".read-only input[type='text'], .read-only textarea, .read-only select").waitUntilExists(function() {
        this.readOnly = true;
        this.tabIndex = -1;
    });
});