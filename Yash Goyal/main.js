// When the user scrolls the page, execute below function i.e scroll indicator

$(document).ready(function() {

  /* $("#btn1").click(function() {
        $("#btn1").css("visibility","hidden");
        $("#btn2").css("visibility","visible");
        $("#btn2").css("float","left");
    }); */

    $(window).scroll(function() {
        var scroll = $(window).scrollTop(),
                dh = $(document).height(),
                wh = $(window).height();
                value = (scroll / (dh-wh)) * 100;
                $("#myBar").css('width', value + '%');
    });

    $("#dateinput").datepicker({
            numberOfMonths: 1,
            changeYear: true,
            changeMonth: true,
            showWeek: true,
            weekHeader: "Week",
            showOtherMonths: true,
            yearRange: '1985:2000'
    });

    $(function() {
        
        $("#username_error_message").hide();
        $("#email_error_message").hide();
        $("#pwd_error_message").hide();
        $("#cpwd_error_message").hide();
        $("#phonenumber_error_message").hide();

        var error_username = false;
        var error_email = false;
        var error_password = false;
        var error_confirm_password = false;
        var error_phonenumber = false;

        $("#uname").focusout(function() {
            check_username();
        });

        $("#email").focusout(function() {
            check_email();
        });
        
        $("#pwd").focusout(function() {
            check_password();
        });

        $("#cpwd").focusout(function() {
            check_confirm_password();
        });

        $("#pno").focusout(function() {
            check_phonenumber();
        });

        function check_username() {
	
            var username_length = $("#uname").val().length;
            
            if(username_length < 5 || username_length > 20) {
                $("#username_error_message").html("*Should be between 5-20 characters");
                $("#username_error_message").css("color","red");
                $("#uname").css("border","1px solid red");
                $("#username_error_message").show();
                error_username = true;
            } else {
                $("#username_error_message").hide();
                $("#uname").css("border","1px solid white");
                $("#uname").css("border-bottom","1px solid black");
            }
        
        }


        function check_email() {
    
            var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})(.[a-z]{2,8})?$/i);
        
            if(pattern.test($("#email").val())) {
                $("#email_error_message").hide();
                $("#email").css("border","1px solid white");
                $("#email").css("border-bottom","1px solid black");
            } else {
                $("#email_error_message").html("*Invalid email address");
                $("#email_error_message").css("color","red");
                $("#email").css("border","1px solid red");
                $("#email_error_message").show();
                error_email = true;
            }
        
        }

        function check_password() {

            var pattern = new RegExp(/^[a-zA-Z]\w{3,14}$/);

            if(pattern.test($("#pwd").val())) {
                $("#pwd_error_message").hide();
                $("#pwd").css("border","1px solid white");
                $("#pwd").css("border-bottom","1px solid black");
            } else {
                $("#pwd_error_message").html("*Invalid Password");
                $("#pwd_error_message").css("color","red");
                $("#pwd").css("border","1px solid red");
                $("#pwd_error_message").show();
                error_password = true;
            }

        }
    
        function check_confirm_password() {
        
            var password = $("#pwd").val();
            var retype_password = $("#cpwd").val();
            
            if(password !=  retype_password) {
                $("#cpwd_error_message").html("Passwords don't match");
                $("#cpwd_error_message").css('color','red');
                $("#cpwd").css("border","1px solid red");
                $("#cpwd_error_message").show();
                error_confirm_password = true;
            } else {
                $("#cpwd_error_message").hide();
                $("#cpwd").css("border","1px solid white");
                $("#cpwd").css("border-bottom","1px solid black");
            }
        
        }

        function check_phonenumber() {

            var pattern = new RegExp(/^[6789]\d{9}$/);

            if(pattern.test($("#pno").val())) {
                $("#phonenumber_error_message").hide();
                $("#pno").css("border","1px solid white");
                $("#pno").css("border-bottom","1px solid black");
            } else {
                $("#phonenumber_error_message").html("*Invalid phone number");
                $("#phonenumber_error_message").css("color","red");
                $("#pno").css("border","1px solid red");
                $("#phonenumber_error_message").show();
                error_phonenumber = true;
            }

        }
    
    
        $("#btn1").click(function() {
                                                
            error_username = false;
            error_email = false;
            error_password = false;
            error_confirm_password = false;
            error_phonenumber = false;
                                                
            check_username();
            check_email();
            check_password();
            check_confirm_password();
            check_phonenumber();
            
            if(error_username == false && error_password == false && error_confirm_password == false && error_email == false && error_phonenumber == false) {
                $("#btn1").css("visibility","hidden");
                $("#btn2").css("visibility","visible");
                $("#btn2").css("float","left");
             console.log("You have successfully entered your details.");
             setTimeout("alert('Boom!');", 6000);

                  return true;
             } else {
                return false;	
            }
    
        });

    });

});

