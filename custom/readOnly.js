$(function() {
    $(".read-only").waitUntilExists(function() {
        $(".read-only input[type='text']").attr("readonly", "readonly");
        console.log('read only');
    });
});