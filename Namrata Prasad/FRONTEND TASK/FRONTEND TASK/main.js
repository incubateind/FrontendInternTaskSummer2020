//To open the full screen navigation
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

//To close the full screen navigation
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

//To display date
//to get the entire date and time string in dt
var dt= new Date();
//to get only the day and date out of that string
document.getElementById("datetime1").innerHTML=dt.toDateString();

//Display clock
function displayClock()
{
  var date= new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  //checking condition for AM and PM
  midday = (hour >= 12) ? "PM" : "AM";
  hour=check(hour);
  min=check(min);
  sec=check(sec);

  //displaying the time in 12 hour format
  hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour);
  document.getElementById("datetime2").innerHTML=hour + ":" + min + ":" + sec + " " + midday;
}

//function for formating the number so that even the one digit numbers are displayed as 2 digits
function check(k)
{
    return (k<10? "0"+k : k);
}

//setting the interval for the clock so tht it updates every 500 ms
setInterval(displayClock,500);

// to disable form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // to get the input we want to add validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

//Checking if the both the password fields are equal
var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirmPassword");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
