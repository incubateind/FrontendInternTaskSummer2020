

function validateinput(){
	var user,email,pas,cpas,phone,x=0;
	user= document.getElementById("username").value;
	email = document.getElementById("email").value;
	phone = document.getElementById("phone").value;
	pas = document.getElementById("password").value;
	cpas = document.getElementById("cpassword").value;
	
	if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/).test(email)){

		document.getElementById('eail').innerHTML="invalid email";
	console.log('inv');
	x=1;
	}
	else
	{
		console.log('val');
		document.getElementById('eail').innerHTML=""
	}


	if(user==''){
		document.getElementById('user').innerHTML='Username should not be empty';
	x=1;
	}
		else
	{
		document.getElementById('user').innerHTML=""
	}

	if(pas.length<8){
		console.log('less than 8')
		document.getElementById('pas').innerHTML="password should be greater than 8 characters";
x=1;
	}
		else
	{
		document.getElementById('pas').innerHTML=""
	}

	
	if(isNaN(phone) && phone.length!=10 && phone==''){
		document.getElementById('numb').innerHTML="invalid phone number";
	x=1;
	}

	else
	{
		document.getElementById('numb').innerHTML=""
	}

	if(pas===cpas){

		document.getElementById('cpp').innerHTML=""
	}

		else
	{
		x=1;
		document.getElementById('cpp').innerHTML="password and confirm password is not same";
	}
if(x==0){
	document.getElementById('disp').innerHTML="User successfully logged in";
}

}/* ========================WRITE YOUR JS FROM HERE======================== */
