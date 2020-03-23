/* ========================WRITE YOUR JS FROM HERE======================== */
$(document).ready(function(){
         $("#myModal").modal('show');
     });
//get all the information
var username = document.getElementById('username');
var email=document.getElementById('mail');
var password = document.getElementById('password');
var cnfpw = document.getElementById('cnfpassword');
var phone= document.getElementById('phone');

var all_letters = /^[a-zA-Z]+$/;
//database array of correct crdeentials
var dbArray = [
	{ 
		username: "Shrist",
		email:"abc@abc.com",
		password: "abcdef@12",
		phone: 7064181875
	},
	{ 
		username: "IncubateInd",
		email:"def@def.com",
		password: "qwerty@12",
		phone: 8327770914
	},
];
//verify the credentials to move forward to success page
function check()
{	
	for(i=0 ; i<dbArray.length ; i++)
	{
	if (username.value==dbArray[i].username && email.value==dbArray[i].email && password.value==dbArray[i].password && phone.value==dbArray[i].phone)
	{
		alert("Successfully Logged In");							
		 $('#login_form').submit(function(e) {
    	e.preventDefault();
    	$('#myModal').modal('hide'); 				//hides the modal once successfully logged in and proceeds to the main website 
		});
		 return;
	}
	}
	alert("Invalid Attempt.Please Try Again")
}

//validation for input fields.
function validation()
{
	if(username.value.trim() == "")		//To not allow "  " this as an valid submission 
	{
		alert("Blank username not allowed");
		return false;
	}	
  	else if(password.value != cnfpw.value) 			//Confirm Password and Password should match
  	{
  		alert("Password and Confirm Password fields don't match");
  		return false;
  	}
  	else
  	 {
  	 	true;
  	 }
}

//show/not show  password on click
function showpwsd()
{
	if(password.type==="password")
		password.type="text";
	else
		password.type="password";
}
//show/not show confirm password on click
function showcnfpw()
{
	if(cnfpw.type==="password")
		cnfpw.type="text";
	else
		cnfpw.type="password";
}

//Register
var r_uname = document.getElementById('r_uname');
var r_mail=document.getElementById('r_mail');
var r_pswd = document.getElementById('r_pswd');
var r_cnfpw = document.getElementById('r_cnfpw');
var r_phone= document.getElementById('r_phone');
function show()
{
	if(r_pswd.type==="password")
		r_pswd.type="text";
	else
		r_pswd.type="password";
}
//show/not show confirm password on click
function view()
{
	if(r_cnfpw.type==="password")
		r_cnfpw.type="text";
	else
		r_cnfpw.type="password";
}
