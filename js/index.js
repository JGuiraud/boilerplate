$(document).ready(function () {
    $("#right").on("click", function () {
        if (localStorage.login && localStorage.password) {
            $("#right").attr("href", "./pages/welcome.html");
        }
    });
})