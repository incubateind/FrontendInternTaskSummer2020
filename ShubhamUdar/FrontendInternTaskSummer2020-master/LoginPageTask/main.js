/* ========================WRITE YOUR JS FROM HERE======================== */
/*
bootstrapValidate('#email','email: Enter a valid email address')
bootstrapValidate('#username','required:Please fill out this field')
bootstrapValidate('#myPassword','matches:#passwordConfirm:Your password should match!')
*/

$(document).ready(function (){
$('#validateForm').bootstrapValidator({
    feedbackIcons: {
        valid: 'fa fa-check',
        invalid: 'fa fa-times',
        validating: 'fa fa-refresh'
    },
    fields: {
        username: {
            validators: {
                stringLength: {
                    min: 5,
                    message: 'please enter your Username with minimum 5 letters length'
                },
                notEmpty: {
                    message: 'Please enter your Username'
                }
            }
        },
        address:{
            validators:{
                stringLength: {
                    min: 10,
                    max:100,
                    message:'Please enter at least 15 charcters and no more than 100'
                },
                notEmpty: {
                    message:'Please enter message'
                }
            }
        },
        email:{
            validators:{
                notEmpty:{
                    message:'Please enter your email address'
                },
                emailAddress:{
                    message:'Please enter a valid email address'
                }
            }
        },
        password:{
            validators:{
                notEmpty:{
                    message: 'Enter your password'
                }
            }
        },
        confirmPassword:{
            validators:{
                notEmpty:{
                    message:'Enter your Confirm password'
                },
                identical:{
                    field:'password',
                    message:'Enter the password,what enter in password field'
                }
            }
        }


    }
});
});

$('.submit').click(function () {
    const element =  document.querySelector('.submit')
    element.classList.add('animated', 'zoomIn')
});



