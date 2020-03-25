function myFunc() {
    const check = document.getElementById('checkbox');
    if (check.checked == true) {
        document.body.style.backgroundColor = "#EEEEEE";


        document.getElementById("container").style.backgroundColor = "#EEEEEE";
        document.getElementById("username").style.backgroundColor = "#EEEEEE";
        document.getElementById("email").style.backgroundColor = "#EEEEEE";
        document.getElementById("form").style.backgroundColor = "#EEEEEE";


        document.getElementById("password").style.backgroundColor = "#EEEEEE";
        document.getElementById("conf-pass").style.backgroundColor = "#EEEEEE";
        document.getElementById("phnum").style.backgroundColor = "#EEEEEE";
        document.getElementById("message").style.backgroundColor = "#EEEEEE";
        document.getElementById("container").style.color = "#262626";
        document.getElementById("logo").src = 'https://incubateind.com/images/IncubateIND%20Black.png';
        document.getElementById("container").style.boxShadow = "-12px -12px 12px 0 rgba(255, 255, 255, 1), 12px 12px 12px 0 rgba(0, 0, 0, .03)";
        document.getElementById("switch-text").style.color = "#262626";
        document.getElementById("switch-text").innerHTML = "Disable Light Mode";
        document.getElementById("username").style.color = "#262626";
        document.getElementById("email").style.color = "#262626";
        document.getElementById("form").style.color = "#262626";


        document.getElementById("password").style.color = "#262626";
        document.getElementById("conf-pass").style.color = "#262626";
        document.getElementById("phnum").style.color = "#262626";
        document.getElementById("message").style.color = "#262626";








    }
    if (check.checked == false) {
        document.body.style.backgroundColor = "#262626";

        document.getElementById("container").style.backgroundColor = "#262626";
        document.getElementById("username").style.backgroundColor = "#262626";
        document.getElementById("email").style.backgroundColor = "#262626";
        document.getElementById("form").style.backgroundColor = "#262626";

        document.getElementById("password").style.backgroundColor = "#262626";
        document.getElementById("conf-pass").style.backgroundColor = "#262626";
        document.getElementById("phnum").style.backgroundColor = "#262626";
        document.getElementById("message").style.backgroundColor = "#262626";
        document.getElementById("container").style.color = "#EEEEEE";
        document.getElementById("logo").src = 'logo2.png';
        document.getElementById("container").style.boxShadow = "#000000 4px 4px 8px, #4d4d4d -4px -4px 8px";
        document.getElementById("switch-text").style.color = "#EEEEEE";
        document.getElementById("switch-text").innerHTML = "Enable Light Mode";

        document.getElementById("username").style.color = "#EEEEEE";
        document.getElementById("email").style.color = "#EEEEEE";
        document.getElementById("form").style.color = "#EEEEEE";


        document.getElementById("password").style.color = "#EEEEEE";
        document.getElementById("conf-pass").style.color = "#EEEEEE";
        document.getElementById("phnum").style.color = "#EEEEEE";
        document.getElementById("message").style.color = "#EEEEEE";








    }
}

function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}

function Validate() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("conf-pass").value;
    if (password != confirmPassword) {
        // alert("Passwords do not match.");
        document.getElementById('pass-check').innerHTML = "Passwords are not same!";
        document.getElementById('pass-check2').innerHTML = "Passwords are not same!";

        return false;
    }
    return true;
}