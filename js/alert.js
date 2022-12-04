// if no cookie
if (!$.cookie('alert')) {
    $( ".cookie-alert" ).show();
    $(".close").click(function() {
        $( ".alert-box" ).slideUp( "slow" );
        // set the cookie for 24 hours
        var date = new Date();
        date.setTime(date.getTime() + 24 * 60 * 60 * 1000); 
        $.cookie('alert', true, { expires: date });
    });
}