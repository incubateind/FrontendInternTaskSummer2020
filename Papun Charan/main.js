/* ========================WRITE YOUR JS FROM HERE======================== */

document.getElementById("eye").addEventListener("click", function showPass() {
    var pass = document.getElementById("password");

    if (pass.type = "text")
        pass.type = "password";
    else
        pass.type = "text";
});