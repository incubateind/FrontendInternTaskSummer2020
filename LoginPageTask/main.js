/* ========================WRITE YOUR JS FROM HERE======================== */
function validateForm() {
    var x = document.forms["myForm"]["user"].value;
    console.log(x); 
    var email=document.forms["myForm"]["email"].value;
    atpos = email.indexOf("@");
    dotpos = email.lastIndexOf(".");
    console.log(email);
    var phone=document.forms["myForm"]["phone"].value;
    console.log(phone);
    var password=document.forms["myForm"]["password"].value;
    console.log(password);
    var message=document.forms["myForm"]["message"].value;
    //Validation of username is done
    if (x == "" || name==null) {
      alert("Name must be filled out");
      return false;
    }
   //Validation of email id
   if( email == "" ||atpos < 1 || ( dotpos - atpos < 2)) {
    alert( "Please provide your  correct Email!" );
    return false;
 }
 //Validating phone number
 if(isNaN(phone)||phone.indexOf(" ")!=-1||phone.length<9)
 {
    alert( "Please provide your  correct Phone" );
    return false;
 }
 if ( message== "" || message==null) {
    alert("Please write some message");
    return false;
  }
//  Validating the password
 if (password.match(/[a-z]/g) && password.match( 
    /[A-Z]/g) && password.match( 
    /[0-9]/g) && password.match( 
    /[^a-zA-Z\d]/g) && password.length >= 8) 
return true; 
else 
alert( "Please provide your  valid password" );
    return false

  }