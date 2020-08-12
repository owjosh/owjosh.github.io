$.get('/a/organizations/main/solicitations/selectcurrentsolicitation', function(data) {
    $(data).find("script:contains('currentSolicitationId')").each(function() {
        $("#wl_msg").text('hhhhhh');
        var checkers = $(this).text().slice(127, 129);;
        if (checkers != '""') {
            Backbone.post('/a/organizations/main/solicitations/selectcurrentsolicitation', {
                solicitationId: ''
            })
        }
    })

});