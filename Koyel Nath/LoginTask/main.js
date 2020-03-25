/* ========================WRITE YOUR JS FROM HERE======================== */


function init()
{
	  document.getElementById("res").style.display = "none";
	   document.getElementById("cnfp").style.display = "none";
	   document.getElementById("ema").style.display = "none";
	  
	   document.getElementById("field").style.display = "none";
}

function validate()
{
   
   if(isphn() && isemail() && ispass() && iscnfpass())
   {
   	  
   	  if (document.getElementById('below').checked)
   	  {
             alert("You are under age..Are you sure you want to procced?");
   	  }

   	  return true;
   }

   	else
   	{
        document.getElementById("field").style.display="inline";
         document.getElementById("field").innerHTML = "All the required fields should be correctly filled before submissions";  
   		return false;
   	}

}


function isphn()
{

	var phn = document.getElementById("phn").value;
      var regx = /^[6-9]\d{9}$/;

	return(regx.test(phn));
	
}

function isemail()
{

	var email = document.getElementById("email").value;
      var regx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,4})$/;

	return(regx.test(email));
	
}

function ispass()
{

	var pass = document.getElementById("pass").value;
      var regx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*)[a-zA-Z0-9\S]{6,8}$/;
      /*passwords with min 6 - max 8 character length, at least one uppercase letter, one lowercase letter, one number*/

	return(regx.test(pass));
	
}
function iscnfpass()
{
	var pass = document.getElementById("pass").value;
	var cnfpass = document.getElementById("cnfpass").value;

	if(cnfpass === pass)
		return true;
	else
		return false;

}

function fun1()
{
	var phn = document.getElementById("phn").value;
	if(phn.length != 10)
	{
		document.getElementById("res").style.display = "inline";
      document.getElementById('res').innerHTML = 'Phone number must be 10 digit long';
	}
	  
  else
  {
   if(isphn())
  	  document.getElementById("res").style.display = "none";
  
   else
   {
   	  document.getElementById("res").style.display = "inline";
      document.getElementById('res').innerHTML = 'Phone number is not valid';
   }
 }
}

function fun2()
{

	if(iscnfpass())
	{
		document.getElementById("cnfp").style.display = "none";
         
	}
	else {
		document.getElementById("cnfp").style.display = "inline";
          document.getElementById("cnfp").innerHTML = "Password does not match";
	}
}



function fun4()
{
	if(isemail())
	{
	  document.getElementById("ema").style.display = "none";	
	}

	else
		{
			
			document.getElementById("ema").style.display = "inline";
			document.getElementById("ema").innerHTML = "Please Enter a valid email";

    }
}


function fun7() {
  document.getElementById("psw").style.display = "inline";
}

function fun5() {
  document.getElementById("psw").style.display = "none";
}

function fun6() {
 
   var Input = document.getElementById("pass");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var special = document.getElementById("special");


  var lowerCaseLetters = /[a-z]/g;
  if(Input.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  var upperCaseLetters = /[A-Z]/g;
  if(Input.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  var numbers = /[0-9]/g;
  if(Input.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }


  if(Input.value.length >= 6 && Input.value.length <= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }


}
