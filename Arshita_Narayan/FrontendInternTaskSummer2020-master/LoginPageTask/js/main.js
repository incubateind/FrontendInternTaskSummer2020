/* ========================WRITE YOUR JS FROM HERE======================== */
// var username=document.getElementById('username');
// var username_label=document.getElementById('username_label');
//Reloads on use on back button
if(performance.navigation.type == 2){
  location.reload(true);
}
//prevents the forward navigation
$( document ).ready( function(){
  history.pushState(null,  document.title, location.href);        
 });
var username = document.getElementById('username');
var inputEmail = document.getElementById('inputEmail');
var password = document.getElementById('password');
var cnfpassword = document.getElementById('cnfpassword');
var pass_match = document.getElementById('pass_match');
// var pass_match1 = document.getElementById('pass_match1');
var pass_strength = document.getElementById('pass_strength');
var pass_length = document.getElementById('pass_strength');
var phone_no = document.getElementById('phone_no');
var phone_validation = document.getElementById('phone_validation');
var strong_password = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*_])(?=.{8,})");
var medium_password = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
var pass_valid;
var phone_valid = false;
var email_valid = false;
// JS for validation of email
inputEmail.onkeyup=()=>{

  if(inputEmail.value.match(new RegExp("^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\\.([a-zA-Z]{2,})")))
{

  email_valid = true;

  document.getElementById('info-icon0').style.display="none";
  document.getElementById('cross-icon0').style.display="none";
        document.getElementById('info-label0').style.display="none";
        
}
else
{
  email_valid = false;
  
  document.getElementById('info-icon0').style.display="inline";
  document.getElementById('cross-icon0').style.display="none";
  document.getElementById('info-label0').style.display="none";

}
}

password.onfocus=()=>{
    pass_match.style.display="block";
    pass_strength.style.display="block";
}
password.onblur=()=>{
    pass_match.style.display="none";
    pass_strength.style.display="none";
    if(password.classList.contains('green-shadow'))
    {
        password.classList.remove('green-shadow');
    }
    if(password.classList.contains('yellow-shadow'))
    {
        password.classList.remove('yellow-shadow');
    }
    if(password.classList.contains('red-shadow'))
    {
        password.classList.remove('red-shadow');
    }
    
}
cnfpassword.onfocus=()=>{
    pass_match.style.display="block";
}
cnfpassword.onblur=()=>{
    pass_match.style.display="none";
}
// JS for the strength of password 
//Also to validate length
password.onkeyup=()=>{

if(password.value.length>=6)
{
  document.getElementById('info-icon2').style.display="none";
        document.getElementById('cross-icon2').style.display="none";
        document.getElementById('info-label2').style.display="none";
       
}
if(password.value!=cnfpassword.value)
{
    pass_valid=false;
}
if(password.value.match(strong_password))
{
    if(password.classList.contains('yellow-shadow'))
    {
        password.classList.remove('yellow-shadow');
        pass_strength.classList.remove('yellow-line');
    }
    if(password.classList.contains('red-shadow'))
    {
        password.classList.remove('red-shadow');
        pass_strength.classList.remove('red-line');
    }
    password.classList.add('green-shadow');
    pass_strength.classList.add('green-line');
    // pass_strength.innerHTML="Strong";
    
}
else if(password.value.match(medium_password))
{
    if(password.classList.contains('green-shadow'))
    {
        password.classList.remove('green-shadow');
        pass_strength.classList.remove('green-line');
    }
    if(password.classList.contains('red-shadow'))
    {
        password.classList.remove('red-shadow');
        pass_strength.classList.remove('red-line');
    }
    password.classList.add('yellow-shadow');
    pass_strength.classList.add('yellow-line');
    // pass_strength.innerHTML="Medium";
    
}
else{

   
    if(password.classList.contains('green-shadow'))
    {
        password.classList.remove('green-shadow');
        pass_strength.classList.remove('green-line');
    }
    if(password.classList.contains('yellow-shadow'))
    {
        password.classList.remove('yellow-shadow');
        pass_strength.classList.remove('yellow-line');
    }
    password.classList.add('red-shadow');
    pass_strength.classList.add('red-line');

    
}
}
//To validate confirm password
cnfpassword.onkeyup=()=>{
    if(password.value!=cnfpassword.value)
    {
        pass_valid=false;
        document.getElementById('cross-icon1').style.display="inline";
        document.getElementById('info-label1').style.display="inline";
        // pass_match.innerHTML="Passwords Dont Match";
        password.classList.add('red-shadow');
        cnfpassword.classList.add('red-shadow');
        
    }
    else
    {
        pass_valid=true;
        password.classList.remove('red-shadow');
        cnfpassword.classList.remove('red-shadow');
        // pass_match.innerHTML="Passwords Match";
        document.getElementById('info-icon1').style.display="none";
        document.getElementById('cross-icon1').style.display="none";
        document.getElementById('info-label1').style.display="none";
        
    }
    }
    //To validate Phone Number ; checks the phone number against RegExp
    phone_no.onkeyup=()=>{

        if(phone_no.value.match(phone_no.pattern))
        {
            phone_no.classList.remove('red-shadow');

            document.getElementById('info-icon3').style.display="none";
            document.getElementById('cross-icon3').style.display="none";
            document.getElementById('info-label3').style.display="none";
                  
            // phone_validation.style.color="green";
            phone_valid=true;            
            
        }
        else{
            
          document.getElementById('info-icon3').style.display="inline";
          document.getElementById('cross-icon3').style.display="none";
          document.getElementById('info-label3').style.display="none";
         phone_validation.style.bordercolor="red";
            phone_no.classList.add('red-shadow');
            phone_valid=false;
            
        }
    }
  
    phone_no.onfocus= ()=>
    {
        phone_validation.style.display="inline";
    }
  
    //Code to iterate through multiple steps of Form
    var currentPage = 0; // Current tab is set to be the first tab (0)
    showPage(currentPage); // Display the current tab
    
    function showPage(n) {
        var page = document.getElementsByClassName("page");
      // This function will display the specified tab of the form ...
     
      page[n].style.display = "block";
      // ... and fix the Previous/Next buttons:
      if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
      } else {
        document.getElementById("prevBtn").style.display = "flex";
      }
      if (n == (page.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Sign In";
      } else {
        document.getElementById("nextBtn").innerHTML = "Next";
      }
      // ... and run a function that displays the correct step indicator:
      fixMarkerIndicator(n)
    }
    
    function nextPrev(n) {
        
        var page = document.getElementsByClassName("page");
       
      // Exit the function if any field in the current tab is invalid:
      if (n == 1 && !validateForm()) return false;
      // Hide the current tab:
      page[currentPage].style.display = "none";
      // Increase or decrease the current tab by 1:
      currentPage = currentPage + n;
  
      // if you have reached the end of the form... :
      if (currentPage >= page.length) {
        s
          document.getElementById('logForm').submit();

        return false;
      }
      // Otherwise, display the correct tab:
      showPage(currentPage);
    }
    
    function validateForm() {
        var page = document.getElementsByClassName("page");
      // This function deals with validation of the form fields
      var x, y, i, valid = true;
      if(currentPage == 0)
      {
        y = page[currentPage].getElementsByTagName("input");
        for (i = 0; i < y.length; i++) {
            // If a field is empty...
            if (y[i].value == "") {
              // add an "invalid" class to the field:
              y[i].className += " invalid";
              // and set the current valid status to false:
              valid = false;
            }
          }
          if(email_valid == false)
          {
            valid = false;
            
            document.getElementById('#info-icon0').style.color="red";
          }
          
          // If the valid status is true, mark the step as finished and valid:
          if (valid) {
            document.getElementsByClassName("markers")[currentPage].className += " finish";
          }
          return valid; // return the valid status  
      }
      if(currentPage == 1)
      {var page = document.getElementsByClassName("page");
        y = page[currentPage].getElementsByTagName("input");
        for (i = 0; i < y.length; i++) {
            // If a field is empty...
            if (y[i].value == "") {
              // add an "invalid" class to the field:
              y[i].className += " invalid";
              // and set the current valid status to false:
              valid = false;
            }
          }
          if(password.value.length < 6)
          {
            valid= false;
            document.getElementById('cross-icon2').style.display="inline";
            document.getElementById('info-label2').style.display="inline";

          }
          if(password.value!=cnfpassword.value)
          {
              valid=false;
              document.getElementById('cross-icon1').style.display="inline";
              document.getElementById('info-label1').style.display="inline";
               
              y[0].classList.add( "invalid");
              y[1].classList.add( "invalid");
              
              
          }
          // If the valid status is true, mark the step as finished and valid:
          if (valid) {
            document.getElementsByClassName("markers")[currentPage].className += " finish";
          }
          return valid; // return the valid status  
      }
      if(currentPage == 2)
      {var page = document.getElementsByClassName("page");
        y = page[currentPage].getElementsByTagName("input");
        
          if(phone_valid==false)
          {
              valid=false;
              y[0].classList.add ("invalid");
          }
          if (valid) {
            document.getElementsByClassName("markers")[currentPage].className += " finish";
          }
          return valid; // return the valid status  
      }
      // A loop that checks every input field in the current tab:
      if(currentPage == 3)
      {
        if(document.getElementById('message').value =="")
          valid= false;
          if (valid) {
            document.getElementsByClassName("markers")[currentPage].className += " finish";
          }
          return valid;
        }
           
      
      return valid;
     
    }
    
    function fixMarkerIndicator(n) {
      // This function removes the "active" class of all steps...
      var i, x = document.getElementsByClassName("markers");
      for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
      }
      //... and adds the "active" class to the current step:
      x[n].className += " active";
    }
    function show_message(i)
    {
      var id = "info-icon"+i;
      
      var new_id = document.getElementById(id);
      var info = "info-label"+i;
      var info_id = document.getElementById(info);
     var cross ="cross-icon"+i;
     var cross_id = document.getElementById(cross);

         info_id.style.display="inline";
         new_id.style.display="none";
         cross_id.style.display="inline";
         }
         function hide_message(i)
         {
          
          var id = "info-icon"+i;
      var new_id = document.getElementById(id);
      var info = "info-label"+i;
      var info_id = document.getElementById(info);
     var cross ="cross-icon"+i;
     var cross_id = document.getElementById(cross);
    
             info_id.style.display="none";
             new_id.style.display="inline";
             cross_id.style.display="none";
         }