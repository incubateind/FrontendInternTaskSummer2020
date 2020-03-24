/* ========================WRITE YOUR JS FROM HERE======================== */
$(document).ready(function() {
  
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
              
              if(username_length < 5 || username_length > 10) {
                  $("#username_error_message").html("*Should be between 5-10 characters");
                  $("#username_error_message").css("color","blue");
                  $("#uname").css("border","2px solid blue");
                  $("#username_error_message").show();
                  error_username = true;
              } else {
                  $("#username_error_message").hide();
                  $("#uname").css("border","2px solid white");
                  $("#uname").css("border-bottom","2px solid black");
              }
          
          }
  
  
          function check_email() {
      
              var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})(.[a-z]{2,8})?$/i);
          
              if(pattern.test($("#email").val())) {
                  $("#email_error_message").hide();
                  $("#email").css("border","2px solid white");
                  $("#email").css("border-bottom","2px solid black");
              } else {
                  $("#email_error_message").html("*Invalid email address");
                  $("#email_error_message").css("color","blue");
                  $("#email").css("border","2px solid blue");
                  $("#email_error_message").show();
                  error_email = true;
              }
          
          }
  
          function check_password() {
  
              var pattern = new RegExp(/^[a-zA-Z]\w{3,14}$/);
  
              if(pattern.test($("#pwd").val())) {
                  $("#pwd_error_message").hide();
                  $("#pwd").css("border","2px solid white");
                  $("#pwd").css("border-bottom","2px solid black");
              } else {
                  $("#pwd_error_message").html("*Invalid Password");
                  $("#pwd_error_message").css("color","blue");
                  $("#pwd").css("border","2px solid blue");
                  $("#pwd_error_message").show();
                  error_password = true;
              }
  
          }
      
          function check_confirm_password() {
          
              var password = $("#pwd").val();
              var retype_password = $("#cpwd").val();
              
              if(password !=  retype_password) {
                  $("#cpwd_error_message").html("Passwords don't match");
                  $("#cpwd_error_message").css('color','blue');
                  $("#cpwd").css("border","2px solid blue");
                  $("#cpwd_error_message").show();
                  error_confirm_password = true;
              } else {
                  $("#cpwd_error_message").hide();
                  $("#cpwd").css("border","2px solid white");
                  $("#cpwd").css("border-bottom","2px solid black");
              }
          
          }
  
          function check_phonenumber() {
  
              var pattern = new RegExp(/^[6789]\d{9}$/);
  
              if(pattern.test($("#pno").val())) {
                  $("#phonenumber_error_message").hide();
                  $("#pno").css("border","2px solid white");
                  $("#pno").css("border-bottom","2px solid black");
              } else {
                  $("#phonenumber_error_message").html("*Invalid phone number");
                  $("#phonenumber_error_message").css("color","blue");
                  $("#pno").css("border","2px solid blue");
                  $("#phonenumber_error_message").show();
                  error_phonenumber = true;
              }
  
          }
      
      
          
  
      });
  
  });