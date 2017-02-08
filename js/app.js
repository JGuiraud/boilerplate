$(document).ready(function () {
    $("#submit").prop("disabled", true);
    var first_name, last_name, male, femelle, other, password, birthday, city, email, phone, website, colour, hobbies, gender;
    var email_validation, website_validation, password_validation, phone_validation, city_validation, login_validation;

    phone = $("#phone"); hobbies = $("#hobbies").val();

    $("#first_name").focusout(function () {
        first_name = $(this).val();
        if (first_name && first_name.length > 0) {
            $(this).css({ 'border': '2px solid green' });
            submitButton()
        } else {
            $(this).css({ 'border': '2px solid red' });
        }
    });

    $("#last_name").focusout(function () {
        last_name = $(this).val();
        if (last_name && last_name.length > 0) {
            $(this).css({ 'border': '2px solid green' });
            submitButton()
        } else {
            $(this).css({ 'border': '2px solid red' });
        }
    })

    $("#birthday").focusout(function () {
        birthday = $(this).val();
        if (birthday && birthday.length > 0) {
            $(this).css({ 'border': '2px solid green' });
            submitButton()
        } else {
            $(this).css({ 'border': '2px solid red' });
        }
    })

    $("#colour").focusout(function () {
        colour = $(this).val();
        if (colour && colour.length > 0) {
            $(this).css({ 'border': '2px solid green' });
            submitButton()
        } else {
            $(this).css({ 'border': '2px solid red' });
        }
    })

    $("#hobbies").focusout(function () {
        hobbies = $(this).val();
        if (hobbies && hobbies.length > 0) {
            $(this).css({ 'border': '2px solid green' });
            submitButton()
        } else {
            $(this).css({ 'border': '2px solid red' });
        }
    })

    /**** email ****/

    var testEmail = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
    email = $("#email")
    $(email).bind('input propertychange', function () {
        if (testEmail.test($(this).val())) {
            $(this).css({ 'border': '2px solid green' });
            email_validation = true;
        } else {
            $(this).css({ 'border': '2px solid red' });
            email_validation = false;
        }
    });

    /**** Login ****/
    login = $("#login");

    $(login).bind('input propertychange', function () {
        if (login.val() !== localStorage.login) {
            $(this).css({ 'border': '2px solid green' });
            login_validation = true;
            localStorage.setItem("login", login.val())
            submitButton();

        } else {
            $(this).css({ 'border': '2px solid red' });
            login_validation = false;
            $("#submit").prop("disabled", true);
        }
    })

    /**** password ****/

    var upperCase = new RegExp('[A-Z]');
    var lowerCase = new RegExp('[a-z]');
    var numbers = new RegExp('[0-9]');
    var special = new RegExp('[&._-]');
    password = $("#password");

    $(password).bind('input propertychange', function () {
        if (password.val().match(upperCase) && password.val().match(lowerCase) && password.val().match(numbers) && password.val().match(special) && password.val().length >= 8) {
            $(this).css({ 'border': '2px solid green' });
            password_validation = true;
            localStorage.setItem("password", password.val())
            submitButton();

        } else {
            $(this).css({ 'border': '2px solid red' });
            password_validation = false;
            $("#submit").prop("disabled", true);
        }
    })

    /**** website ****/

    var url_validate = /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/;
    website = $("#website")

    $(website).bind('input propertychange', function () {
        if (url_validate.test($(this).val())) {
            $(this).css({ 'border': '2px solid green' });
            website_validation = true;
            submitButton();
        } else {
            $(this).css({ 'border': '2px solid red' });
            website_validation = false;
        }
    });

    /**** City *****/

    $("#city").autocomplete({
        source: function (request, response) {
            $.getJSON(
                "http://gd.geobytes.com/AutoCompleteCity?callback=?&q=" + request.term,
                function (data) {
                    response(data);
                });
        },
        minLength: 3,
        select: function (event, ui) {
            var selectedObj = ui.item;
            $("#city").val(selectedObj.value);
            city = ($("#city").val())
            return false;
        },
        open: function () {
            $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
        },
        close: function () {
            $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
        }
    });
    $("#city").autocomplete("option", "delay", 100);

    $("#city").focusout(function () {
        city = $(this).val()
        if (city && city.length > 0) {
            $(this).css({ 'border': '2px solid green' });
            city_validation = true;
            submitButton();
        } else {
            $(this).css({ 'border': '2px solid red' });
            city_validation = false;
        }
    })

    /**** gender ****/

    $("#gender").on('change', function () {
        gender = ($('input[name="gender"]:checked').val())
        if (gender) {
            $("#gender").css({ 'border-left': '2px solid green' });
            submitButton()
        }
    })

    /**** Telephone ****/

    var testPhone = /^(01|02|03|04|05|06|08)[0-9]{8}/gi;
    phone = $("#phone")
    $(phone).bind('input propertychange', function () {
        if (testPhone.test($(this).val())) {
            $(this).css({ 'border': '2px solid green' });
            phone_validation = true;
            submitButton();
        } else {
            $(this).css({ 'border': '2px solid red' });
            phone_validation = false;
        }
    });

    /**** Submit ****/

    function submitButton() {
        if (password_validation && first_name && last_name && birthday && colour && hobbies && website_validation && city_validation && email_validation && gender && phone_validation && login_validation) {
            $("#submit").prop("disabled", false);
        }
    }

    $("#submit").click(function () {
        console.log(localStorage.login, localStorage.password)
        location.href = 'success.html';
    });

});


