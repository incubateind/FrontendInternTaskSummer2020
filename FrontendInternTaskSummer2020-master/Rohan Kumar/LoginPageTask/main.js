/* ========================WRITE YOUR JS FROM HERE======================== */

/* password and confirm password validation and reset the target value of all input fields
  whenever submit button is hitted */

document.querySelector('.passval').addEventListener('submit',(event)=>{
    event.preventDefault();
    if(event.target.password.value==event.target.cnfpassword.value){
        
    console.log(event.target.username.value);
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    console.log(event.target.cnfpassword.value);
    console.log(event.target.number.value);
    console.log(event.target.textarea.value);
    event.target.username.value=''
    event.target.email.value=''
    event.target.password.value=''
    event.target.repassword.value=''
    event.target.number.value=''
    event.target.textarea.value=''
    }else{
        alert("password doesnot match")
    event.target.name.value=''
    event.target.email.value=''
    event.target.password.value=''
    event.target.cnfpassword.value=''
    event.target.number.value=''
    event.target.textarea.value=''
    }
}); 