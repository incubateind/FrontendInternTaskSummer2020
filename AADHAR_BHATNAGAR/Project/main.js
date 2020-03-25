/* ========================WRITE YOUR JS FROM HERE======================== */


//to check that passwords match and correct phone number  
function Validate() 
{
        var password = document.getElementById("password-input").value;
        var confirmPassword = document.getElementById("password-input-confirm").value;
        if (password != confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }
        var mobile = document.getElementById("mobile").value;

        if(mobile.length!==10){
        	alert("Please enter correct number");
            return false;
        }
        
        return true;
}

