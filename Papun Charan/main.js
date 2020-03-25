/* ========================WRITE YOUR JS FROM HERE======================== */

document.getElementById("eye").addEventListener("click", function showPass() {
    var pass = document.getElementById("password");

    if (pass.type = "text")
        pass.type = "password";
    else
        pass.type = "text";
});

// password match check

var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm_password");

function validatePassword() {
    if (password.value != confirm_password.value) {
        document.getElementById("submit").disabled = true;
    } else {
        document.getElementById("submit").disabled = false;
    }
}