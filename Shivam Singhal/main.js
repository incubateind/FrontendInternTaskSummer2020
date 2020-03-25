/* ========================WRITE YOUR JS FROM HERE======================== */
// function made to check for all the validations
function validate()                  //this function is called in the form element
  {
    var count=0;              
    var pass = document.getElementById("pwd1");  //with help of id variables each class is checked
    var cpass = document.getElementById("pwd2");  //with help of id variables each class is checked
    var mail = document.getElementById("email1");   //with help of id variables each class is checked
    var pno = document.getElementById("phno");    //with help of id variables each class is checked
    var regx = /^[7-9]\d{9}$/;

     // All charaters, numbers or special char which shuold be present in email

    var mailchecking=/^([a-z 0-9 \.-]+)@([a-z 0-9 -]+).([a-z]{2,8})(.[a-z]{2,8})?$/;  

    // All charaters, numbers or special char which shuold be present in password

    var pwd=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    
    // checks every if condition in the form if any condition is true then it will alert the user

    if(pass.value.trim()=="")
    {
        alert("Password is blank"); 			//if pass field is blank 
        pass.style.border = "solid 2px red";
        count++;
    }
    if(pwd.test(pass.value)==false)
    {
        alert("Password syntax is wrong");   //when pass with all conditions are not given
        pass.style.border="solid 2px red";
        count++;
    }
    if(cpass.value.trim()=="")
    {
        alert("Confirm Password is blank");   //if confirm pass field is blank
        cpass.style.border = "solid 2px red";
        count++;
    }
    if(pass.value!=cpass.value)
    {
        alert("Passwords dosent match!!!");    //when pass does'nt match confirm pass
        pass.style.border ="solid 2px red";
        cpass.style.border ="solid 2px red";
        count++;
    }
    if(mail.value.trim()=="")
    {
        alert("Email is blank");       // if email field is blank
        mail.style.border = "solid 2px red";
        count++;
    }
    if(mailchecking.test(mail.value)==false)
    {
        alert("Mail syntax is incorrect");     //mail syntax is incorrect
        mail.style.border ="solid 2px red";
        count++;
    }
    if(pno.value.trim()=="")
    {
        alert("Phone Number is blank");     //phone no field is blank
        pno.style.border = "solid 2px red";
        count++;
    }
    if(regx.test(pno.value)==false)
    {
        alert("Number should be of 10 digits \n It should start from 7-9");   //phone no should be started in btw 7-9 and length should be 10 
        pno.style.border ="solid 2px red";
        count++;
    }
    if (count>0)
    {
        return false;
    }

    // when all if conditions are false then else will execute
    //i.e., data entered is correct

    else
    {
        alert("All Details added successfully");     //success message will be shown
        return true;
    }
}