$(document).ready(function () {
    var first_name, last_name, male, femelle, other, password, birthday, city, email, phone, website, colour, hobbies;
    var email_validation, website_validation, password_validation, phone_validation;

    first_name = $("#first_name").val(); last_name = $("#last_name").val(); password = $("#password"); birthday = $("#birthday").val(); city; email = $("#email"); phone = $("#phone"); website = $("#website"); colour = $("#colour").val(); hobbies = $("#hobbies").val();


    /**** hobbies ****/

    var max = 200;
    $("#hobbies").keypress(function (e) {
        if (e.which < 0x20) {
            return;
        }
        if (this.value.length == max) {
            e.preventDefault();
        } else if (this.value.length > max) {
            this.value = this.value.substring(0, max);
        }
    });

    /**** email ****/

    var testEmail = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
    $(email).bind('input propertychange', function () {
        if (testEmail.test($(this).val())) {
            $(this).css({ 'border': '2px solid green' });
            email_validation = true;
        } else {
            $(this).css({ 'border': '2px solid red' });
            email_validation = false;
        }
    });

    /**** password ****/

    var upperCase = new RegExp('[A-Z]');
    var lowerCase = new RegExp('[a-z]');
    var numbers = new RegExp('[0-9]');
    var special = new RegExp('[&._-]');

    $(password).bind('input propertychange', function () {
        if (password.val().match(upperCase) && password.val().match(lowerCase) && password.val().match(numbers) && password.val().match(special) && password.val().length >= 8) {
            $(this).css({ 'border': '2px solid green' });
            password_validation = true;
        } else {
            $(this).css({ 'border': '2px solid red' });
            password_validation = false;
        }
    })

    /**** website ****/

    url_validate = /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/;

    $(website).bind('input propertychange', function () {
        if (url_validate.test($(this).val())) {
            $(this).css({ 'border': '2px solid green' });
            website_validation = true;
        } else {
            $(this).css({ 'border': '2px solid red' });
            website_validation = false;
        }
    });

    /**** City *****/

    $("#city").autocomplete({
        source: function (request, response) {
            jQuery.getJSON(
                "http://gd.geobytes.com/AutoCompleteCity?callback=?&q=" + request.term,
                function (data) {
                    response(data);
                }
            );
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



    if (first_name && last_name && birthday && colour && hobbies && city && email_validation && website_validation && password_validation) {
        $("#submit").prop("disabled", false);
    } else {
        $("#submit").prop("disabled", true);
    }


    console.log(first_name, last_name, password);
    // for (var i = 0, i<)
    localStorage.setItem("first_name", first_name);
    localStorage.setItem("first_name", first_name);


    $("#submit").click(function () {
        // if (){
        //     console.log("prénom pas ok");
        location.href = 'success.html';

        // } else {
        //     console.log("prénom ok");
        // }






    });

})


