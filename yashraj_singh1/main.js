/* ========================WRITE YOUR JS FROM HERE======================== */
function validateSubmit(){
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone_number').value;
    let password = document.getElementById('password').value;
    let cnf_password = document.getElementById('cnf_password').value;
    let message = document.getElementById('message').value;
    let age_below = document.getElementById('below');
    let age_above = document.getElementById('above');
    
    let error_username = document.getElementById('error_username');
    error_username.innerHTML='';

    let error_email = document.getElementById('error_email');
    error_email.innerHTML='';

    let error_phone = document.getElementById('error_phone');
    error_phone.innerHTML='';

    let error_password = document.getElementById('error_password');
    error_password.innerHTML='';

    let error_cnfpassword = document.getElementById('error_cnfpassword');
    error_cnfpassword.innerHTML='';

    let error_age = document.getElementById('error_age');
    error_age.innerHTML='';

    let error_message = document.getElementById('error_message');
    error_message.innerHTML='';

    //Validate Username
    if(username.length==0){
        error_username.innerHTML = "Username should not be blank";
        return false;
    }else{
        var username_reg = /^([a-zA-Z0-9]){8,32}$/;
        if(!username_reg.test(username)){
            error_username.innerHTML = "Username should be AlphaNumeric and 8 to 32 Characters";
            return false;
        }

    }
    // console.log("Here1");
    //Validate Email Id
    if(email.length==0){
        error_email.innerHTML = "Email should not be blank";
        return false;
    }else{
        // console.log("Here2");
        var emailReg = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/
        if(!emailReg.test(email)){
            error_email.innerHTML = "Enter Valid Email";
            return false;
        }

    }
    // console.log("Here");


    //Validate Phone
    if(phone.length==0){
        error_phone.innerHTML = "Phone should not be blank";
        return false;
    }else{
        var phone_reg = /^([0-9]){10}$/;
        if(!phone_reg.test(phone)){
            console.log(phone);
            error_phone.innerHTML = "Invalid Phone Number";
            return false;
        }

    }
    var password_regex = /^.{5,32}$/;
    if(password==""){
        error_password.innerHTML = "Password Should Not be blank."
        return false;
    }else if(!password_regex.test(password)){
        error_password.innerHTML = "Password length should be between 5 and 32"
        return false;
    }
    else{
        if(!(password===cnf_password)){
            error_cnfpassword.innerHTML = "Passwords Doesn't Match."
            return false;
        }
    }

    //Validate Message
    if(message==""){
        error_message.innerHTML='Message should not be empty.';
        return false;
    }

    //Validate Age
    if(!(age_above.checked || age_below.checked)){
        error_age.innerHTML='Select Age';
        return false;
    }
    if(age_below.checked){
        error_age.innerHTML='You should be atleast 18 years old.';
        return false;
    }

    return true;
}