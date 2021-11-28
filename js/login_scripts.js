$(document).ready(function () {
    
    const sessionKey = 'is_logged_in_to_erin_iggy_webpage';
    
    /********************** Check if logged in *********************/
    if (sessionStorage.getItem(sessionKey) === 'true') {
        location = 'index.html';
    }
    
    
    /********************** Login *********************/    
    $('#btn-login').click(function() {
//        console.log($('#password-input').val());
        console.log("click");
        loginHelper();
    });
    
    $('#login-form').submit(function() {
        console.log("submit");
        loginHelper();
    });
    
    function loginHelper() {
        if ($('#password-input').val() == 'pw') {
            sessionStorage.setItem(sessionKey, true); 
            location = "index.html";            
        } else {
             $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> It is pw ya noob. '));
        }
    }
    
    // alert_markup
    function alert_markup(alert_type, msg) {
        return '<div class="alert alert-' + alert_type + '" role="alert">' + msg + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>';
    }

});