$(document).ready(function(event) { 
    $('#login').click(function() {
        $('#loginmodal').modal();
    })
    $('#call-reserve').click(function() {
        $('#reservemodal').modal();
    })
    $('#reserve-modal').click(function() {
        $('#reservemodal').modal('hide');
    })
    $('#login-modal').click(function() {
        $('#loginmodal').modal('hide');
    })
    $('#cancel-modal2').click(function() {
        $('#reservemodal').modal('hide');
    })
    $('#cancel-modal1').click(function() {
        $('#loginmodal').modal('hide');
    })
});