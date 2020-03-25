/* ========================WRITE YOUR JS FROM HERE======================== */
function validate() {
	var username=document.getElementById('username').value;
	var password=document.getElementById('pswd').value;
	var rpassword=document.getElementById('rpswd').value;
	var message=document.getElementById('msg').value;

	if (password!=rpassword) {
		document.getElementById('danger').innerHTML=`<div class="alert alert-warning" role="alert">Password must be same.</div>`;
		return false;
	}
	if(!isNaN(username))
		{
			document.getElementById('danger').innerHTML=`<div class="alert alert-warning" role="alert">Enter valid Username</div>`;
			return false;
		}
		if(!isNaN(message))
		{
			document.getElementById('danger').innerHTML=`<div class="alert alert-warning" role="alert">Enter message</div>`;
			return false;
		}
}