$("body").css({ backgroundColor: "yellow" });

$(".changeSolicitation").hide();
$.get('/a/organizations/main/solicitations/selectcurrentsolicitation', function(data) {
    $(data).find("script:contains('currentSolicitationId')").each(function() {
        var checkers = $(this).text().slice(127, 129);;
        if (checkers != '""') {
            Backbone.post('/a/organizations/main/solicitations/selectcurrentsolicitation', {
                solicitationId: ''
            })
        }
    })
});