/* ========================WRITE YOUR JS FROM HERE======================== */
//Checking if the function matches the passwords.
            const checkPassword = (form) => { 
                password = form.password.value; 
                confirmPassword = form.confirmPassword.value; 
  
				//if password not same.
                if (password != confirmPassword) { 
                    alert ("\nPassword did not match: Please try again...") 
                    return false; 
                } 
  
                // If same return True. 
                else{ 
                    alert("Form submitted successfully") 
                    return true; 
                } 
            } 


