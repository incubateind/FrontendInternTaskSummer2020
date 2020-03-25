/* ========================WRITE YOUR JS FROM HERE======================== */

function validateForm(){

 
  var user = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  var conpass = document.getElementById("cnfpassword").value;
  var number = document.getElementById("phone").value;
  var message = document.getElementById("msz").value;
  var age = document.getElementsByName("age");

  


 
  /*-------------------- Username Validation -------------------------*/

  if(user == ""){
    document.getElementById("user").innerHTML = "username can't be empty";
    return false;
  }
  
  if((user.length<=2) || (user.length>10)){
    document.getElementById("user").innerHTML = "username must be between 2 and 10";
    return false;
  }
  
  if(!isNaN(user)){
    document.getElementById("user").innerHTML = "username must be character";
    return false;
  }
 document.getElementById("user").innerHTML = "";

 
 /*------------------------------ Email Validation -------------------- */
 
   
 if(email == ""){
   document.getElementById("checkEmail").innerHTML = "email id can't be empty";
   return false;
 }
 
 if(email.indexOf('@')<=0){
   document.getElementById("checkEmail").innerHTML = "@ is in invalid position";
   return false;
 }
 
 if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
   document.getElementById("checkEmail").innerHTML = ". is in invalid position";
   return false;
 }
 document.getElementById("checkEmail").innerHTML = "";
 
 
   /*---------------------------- Validation for password ---------------------*/
 

   if(pass == ""){
     document.getElementById("pass").innerHTML = "password cannot be empty";
     return false;
   }

   if((pass.length<=5) || (pass.length>20)){
     document.getElementById("pass").innerHTML = "password  must be between 5 and 20";
     return false;
   }

   document.getElementById("pass").innerHTML = "";
   
 
   
   /*---------------------------- Validation for confirm password ----------------*/
 

   if(conpass == ""){
     document.getElementById("matchPass").innerHTML = "password cannot be empty";
     return false;
   }
 
   
  if(pass!=conpass){
    document.getElementById("matchPass").innerHTML = "password doesn't match";
    return false;
  }
  
  document.getElementById("matchPass").innerHTML = "";
  
 
  /*---------------------------- Validation for phone number --------------------*/
 

  if(number == ""){
   document.getElementById("number").innerHTML = "phone number cannot be empty";
   return false;
 }
 
 
  if(number.length!=10){
   document.getElementById("number").innerHTML = "phone number must be 10 digits";
   return false;
 }
 
  if(isNaN(number)){
   document.getElementById("number").innerHTML = "phone number must be digits not character";
   return false;
 }
 
  if((number.indexOf('7')!= 0) && (number.indexOf('8')!= 0) && (number.indexOf('9')!= 0)){
   document.getElementById("number").innerHTML = "Number should starts from 7,8 or 9 digit";
   return false;
 }
 document.getElementById("number").innerHTML = "";
 
 
  /*---------------------------- Validation for message -------------------------*/
 


 if(message == ""){
   document.getElementById("message").innerHTML = "message cannot be empty";
   return false;
 }
 
  if((message.length)<=50){
    document.getElementById("message").innerHTML = "message length should be greater than 50 character";
    return false;
 }
 
 document.getElementById("message").innerHTML = "";

 /*---------------------------- Validation for radio -------------------------*/


 for(var i=0;i<age.length;i++){
   if(age[i].checked == true)
     return true;
  
 }
  document.getElementById("radio").innerHTML = "please select anyone";
  return false;

 }