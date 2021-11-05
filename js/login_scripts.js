$(document).ready(function () {
    
    const sessionKey = 'is_logged_in_to_erin_iggy_webpage';
    
    /********************** Check if logged in *********************/
    if (sessionStorage.getItem(sessionKey) === 'true') {
        location = 'index.html';
    }
    
    
    /********************** Login *********************/    
    $('#btn-login').click(function() {
        sessionStorage.setItem(sessionKey, true); 
        location = "index.html";

    });

});