var readOnlyCss = document.createElement('link');
readOnlyCss.rel = 'stylesheet';
readOnlyCss.type = 'text/css';
readOnlyCss.href = 'https://owjosh.github.io/custom/read-only.css';
document.getElementsByTagName('HEAD')[0].appendChild(readOnlyCss);

$(function() {
    $.getScript("https://openwater-themes.s3.amazonaws.com/js/waitForElement.js", function(data, textStatus, jqxhr) {
        console.log(data); //data returned
        console.log(textStatus); //success
        console.log(jqxhr.status); //200
        console.log('Load was performed.');
        $(".read-only input[type='text'], .read-only textarea, .read-only select").waitUntilExists(function() {
            this.readOnly = true;
            this.tabIndex = -1;
        });
    });
});