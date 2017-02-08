$(document).ready(function () {
    var login, password, login_validation, password_validation;

    $("#login").focusout(function () {
        console.log("yay")
        login = $(this).val();
        console.log(login);
    });

    $("#password").focusout(function () {
        password = $(this).val();
        console.log(password)
    });

    $("#submit").click(function () {

        if (password == localStorage.password && login == localStorage.login) {
            location.href = 'welcome.html';

        } else {
            alert("Your login or password are incorrect")
        }
    });

})