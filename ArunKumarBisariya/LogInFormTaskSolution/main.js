/*...............................form-validations....................................*/


function validation(){
  var characters=/^[A-Za-z]+$/;
  var username=document.getElementById("username").value;
  var email=document.getElementById("email").value;
  var password=document.getElementById("password").value;
  var cnfpassword=document.getElementById("cnfpassword").value;
  var mbnumber=document.getElementById("mbnumber").value;
  var myButton = document.getElementById("myButton");
  var message=document.getElementById("message").value;
  var age=document.getElementsByName("age");
  var login = document.getElementById("submit");

  var flag_username = 0, flag_username1 = 0, flag_email = 0, flag_pass = 0, flag_pass1 = 0, flag_cnf_pass = 0;
  var flag_cnf_pass1 = 0, flag_mbno = 0, flag_age = 0;
   /*..................................all-empty-validation....................................*/
if((username==="")&& (email==="")&& (password==="") && (cnfpassword==="") && (mbnumber==="")){
    document.getElementById("uservalidationmessage").innerHTML="*Please fill username";
    document.getElementById("username").style.borderColor = "red";
    document.getElementById("emailvalidationmessage").innerHTML="*Please enter email id";
    document.getElementById("email").style.borderColor = "red";
    document.getElementById("passwordvalidationmessage").innerHTML="*please enter password";
    document.getElementById("password").style.borderColor = "red";
    document.getElementById("cnfpasswordvalidationmessage").innerHTML="*please enter password";
    document.getElementById("cnfpassword").style.borderColor = "red";
    document.getElementById("mbnumbervalidationmessage").innerHTML="*Please fill mobile number";
    document.getElementById("mbnumber").style.borderColor = "red";
return false;
  }

  /*..................................username-validation....................................*/
else if(username===""){
  document.getElementById("uservalidationmessage").style.color = "red";
    document.getElementById("uservalidationmessage").innerHTML="*Please fill username";
    document.getElementById("username").style.borderColor = "red";
    // return false;
    flag_username = 1;
  }
else if((username.length<4) || (username.length>30)){
  document.getElementById("uservalidationmessage").style.color = "red";
    document.getElementById("uservalidationmessage").innerHTML="*Please enter a valid username";
    document.getElementById("username").style.borderColor = "red";
    // return false;
    flag_username = 1;
  }
else{
  document.getElementById("username").style.borderColor = "green";
  document.getElementById("uservalidationmessage").style.color = "green";
  document.getElementById("uservalidationmessage").innerHTML="*valid";
  }
 /*...............................email-validation....................................*/

var atpos=email.indexOf("@");
var dotpos=email.lastIndexOf(".");
 if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length ||email===""){
  document.getElementById("emailvalidationmessage").style.color = "red";
     document.getElementById("emailvalidationmessage").innerHTML="*Enter valid email address";
     document.getElementById("email").style.borderColor = "red";
    //  return false;
    flag_email = 1;
     }
     else{
     document.getElementById("email").style.borderColor = "green";
     document.getElementById("emailvalidationmessage").style.color = "green";
     document.getElementById("emailvalidationmessage").innerHTML="*valid";
 }
 /*...............................password-validation....................................*/

  if (password===""){
    document.getElementById("passwordvalidationmessage").style.color = "red";
     document.getElementById("passwordvalidationmessage").innerHTML="*please enter password";
     document.getElementById("password").style.borderColor = "red";
     flag_pass = 1;
  //  return false;
   }

  else if (password.length <6 || password.length >25){
    document.getElementById("passwordvalidationmessage").style.color = "red";
     document.getElementById("passwordvalidationmessage").innerHTML="*password is too short. ";
     document.getElementById("password").style.borderColor = "red";
     flag_pass = 1;
  // return false;
   }
 else{
   document.getElementById("password").style.borderColor = "green";
   document.getElementById("passwordvalidationmessage").style.color = "green";
   document.getElementById("passwordvalidationmessage").innerHTML="*valid";
 }
   /*...............................confirm-password-validation....................................*/
   /*.......when-passwords-doesn't-matches-then-on-submit-click-form-will-reset-validation.........*/
  if (cnfpassword===""){
    document.getElementById("cnfpasswordvalidationmessage").style.borderColor = "red";
     document.getElementById("cnfpasswordvalidationmessage").innerHTML="*please enter password";
     document.getElementById("cnfpassword").style.borderColor = "red";
  //  return false;
  flag_cnf_pass = 1;
   }
   else if (cnfpassword!= password){

     document.getElementById("username").style.borderColor = "silver";
     document.getElementById("uservalidationmessage").innerHTML="";
     document.getElementById("email").style.borderColor = "silver";
     document.getElementById("emailvalidationmessage").innerHTML="";
     document.getElementById("password").style.borderColor = "silver";
     document.getElementById("passwordvalidationmessage").innerHTML="";
     document.getElementById("cnfpassword").style.borderColor = "silver";
     document.getElementById("cnfpasswordvalidationmessage").innerHTML="";
     document.getElementById("mbnumber").style.borderColor = "silver";
     document.getElementById("mbnumbervalidationmessage").innerHTML="";


     alert("Passwords must be same, try again.");

     myButton.value="reset";
     myButton.type = "reset";

     flag_username=0; flag_email=0; flag_mbno=0; flag_cnf_pass=0; flag_pass=0;
     myButton.type = "submit";
   return false;
   }
  else{
     document.getElementById("cnfpassword").style.borderColor = "green";
     document.getElementById("cnfpasswordvalidationmessage").style.color = "green";
     document.getElementById("cnfpasswordvalidationmessage").innerHTML="*valid";
   }

 /*.............................mobile-number-validation....................................*/
  if (mbnumber===""){
    document.getElementById("mbnumbervalidationmessage").style.color = "red";
     document.getElementById("mbnumbervalidationmessage").innerHTML="*Please fill mobile number";
     document.getElementById("mbnumber").style.borderColor = "red";
  // return false;
      flag_mbno = 1;
   }
  else if (isNaN(mbnumber)){
    document.getElementById("mbnumbervalidationmessage").style.color = "red";
     document.getElementById("mbnumbervalidationmessage").innerHTML="*Please enter mobile number";
     document.getElementById("mbnumber").style.borderColor = "red";
  //  return false;
  flag_mbno = 1;
   }
   else if ((mbnumber.length<10) || (mbnumber.length>10)){
    document.getElementById("mbnumbervalidationmessage").style.color = "red";
     document.getElementById("mbnumbervalidationmessage").innerHTML="*Number must have 10 digits";
     document.getElementById("mbnumber").style.borderColor = "red";
  //  return false;
  flag_mbno = 1;
   }

   else if ((mbnumber.charAt(0)!=9) && (mbnumber.charAt(0)!=8) && (mbnumber.charAt(0)!=7) && (mbnumber.charAt(0)!=6)){
    document.getElementById("mbnumbervalidationmessage").style.color = "red";
     document.getElementById("mbnumbervalidationmessage").innerHTML="*Number must start with 9,8,7,6.";
     document.getElementById("mbnumber").style.borderColor = "red";
  //  return false;
  flag_mbno = 1;
   }
   else{
     document.getElementById("mbnumber").style.borderColor = "green";
     document.getElementById("mbnumbervalidationmessage").style.color = "green";
     document.getElementById("mbnumbervalidationmessage").innerHTML="*valid";
   }


  // if(!(age[0].checked || age[1].checked))
  //  {

  //    document.getElementById("username").style.borderColor = "silver";
  //    document.getElementById("uservalidationmessage").innerHTML="";
  //    document.getElementById("email").style.borderColor = "silver";
  //    document.getElementById("emailvalidationmessage").innerHTML="";
  //    document.getElementById("password").style.borderColor = "silver";
  //    document.getElementById("passwordvalidationmessage").innerHTML="";
  //    document.getElementById("cnfpassword").style.borderColor = "silver";
  //    document.getElementById("cnfpasswordvalidationmessage").innerHTML="";
  //    document.getElementById("mbnumber").style.borderColor = "silver";
  //    document.getElementById("mbnumbervalidationmessage").innerHTML="";

  //  alert('Oops...Try again...please select one age.');
  //  myButton.value="reset";
  //  myButton.type = "reset";
  //  return false;
  //  }

  // added extra condition for opening success page
  if(flag_username === 1 || flag_email === 1 || flag_pass === 1 || flag_cnf_pass === 1 || flag_mbno === 1){
    flag_username=0; flag_email=0; flag_mbno=0; flag_cnf_pass=0; flag_pass=0;
    return false;
  }else{
    document.getElementById("success_page").href = "success.html";
    document.getElementById("success_page").click();
  }

}
