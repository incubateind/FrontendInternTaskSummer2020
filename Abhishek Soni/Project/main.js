/* ========================WRITE YOUR JS FROM HERE======================== */


//Animations with input fields
var myusername = document.querySelector("#myusername");
var myemail = document.querySelector("#myemail");
var mynumber = document.querySelector("#mynumber");
var mypassword = document.querySelector("#mypassword");
var mypasswordconfirm = document.querySelector("#mypasswordconfirm");

var t1 = new TimelineMax();

t1.fromTo(myusername,0.5,{width:"50%"},{width:"80%"});
t1.fromTo(myemail,0.5,{width:"50%"},{width:"80%"});
t1.fromTo(mynumber,0.5,{width:"50%"},{width:"80%"});
t1.fromTo(mypassword,0.5,{width:"50%"},{width:"80%"});
t1.fromTo(mypasswordconfirm,0.5,{width:"50%"},{width:"80%"});




//Validations for input fields
$(document).ready(function() {
    $('#login-form').bootstrapValidator({
        container: '#messages',
        fields: {
//            validations for username
            username: {
                validators: {
                    notEmpty: {
                        message: '<div>The username is required and cannot be empty</div>'
                    }
                }
            },
//            validations for email
            email: {
                validators: {
                    notEmpty: {
                        message: '<div>The email address is required and cannot be empty</div>'
                    },
                    emailAddress: {
                        message: '<div>The email address is not valid</div>'
                    }
                }
            },
//            validations for phone number
            pnumber: {
                validators: {
                    notEmpty: {
                        message: '<div>The phone number is required and cannot be empty</div>'
                    },
                    stringLength: {
                        min: 10,
                        message: '<div>The phone number must be atleast of length 8</div>'
                    }

                }
            },
//            validations for password
            password: {
                validators: {
                    notEmpty: {
                        message: '<div>The password is required and cannot be empty</div>'
                    },
                    stringLength: {
                        min: 8,
                        message: '<div>The password must be atleast of length 8</div>'
                    }

                }
            },
//            validations for confirm password
            cnfpassword: {
                validators: {
                    identical: {
                        field: 'password',
                        message: '<div>passwords dont match</div>'
                    }
                }
            }
        }
});
});



