/* ========================WRITE YOUR JS FROM HERE======================== */

window.addEventListener('load', () => {
  let form = document.querySelector('#formSignUp');
  let username = document.querySelector('#username');
  let email = document.querySelector('#email');
  let password = document.querySelector('#password');
  let password_confirm = document.querySelector('#passwordConfirm');
  let message = document.querySelector('#message');
  let ageBelow = document.querySelector('#ageBelow');
  let ageAbove = document.querySelector('#ageAbove');
  let error_text = document.querySelector('.form-error-text');
  let submit_button = document.querySelector('#formSubmitBtn');

  let text_input_fields = document.querySelectorAll('.regex-input');

  // All input regex can be edited here
  // Note: Name of each regex is same as the 'name' attribute of each input in HTML
  let regex = {
    username: {
      pattern: /^[a-zA-Z0-9_][a-zA-Z0-9_.]{3,15}$/,
      tooltip: "Username should be 3 to 15 characters and can only contain _ symbol.",
      error: "Enter a valid username.",
      valid: false
    },
    email: {
      pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      tooltip: "",
      error: "Enter a valid email address.",
      valid: false
    },
    phone: {
      pattern: /^[0-9]{10}$/,
      tooltip: "",
      error: "Enter a valid phone number.",
      valid: false
    },
    password: {
      pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      tooltip: "Password must contain minimum eight characters, at least one letter, one number and one special character.",
      error: "Enter a valid password.",
      valid: false
    },
    passwordcnf: {
      pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      tooltip: "",
      error: "Passwords do not match.",
      valid: false
    },
    message: {
      pattern: /[\w\d]{1,250}/,
      tooltip: "Message can be upto 250 character.",
      error: "Enter a message.",
      valid: false
    }
  }

  const validatePasswordcnf = () => {
    if(password.value === password_confirm.value) {
      password_confirm.classList.add("green-border");
      password_confirm.classList.remove("red-border");
      regex[password_confirm.getAttribute("name")].valid = true;
    } else {
      password_confirm.classList.add("red-border");
      password_confirm.classList.remove("green-border");
      regex[password_confirm.getAttribute("name")].valid = false;
    }
  }

  const updatePasswordTooltip = () => {
    let letter = document.querySelector('.tooltip-password-letter');
    let number = document.querySelector('.tooltip-password-number');
    let symbol = document.querySelector('.tooltip-password-symbol');
    let input_length = document.querySelector('.tooltip-password-length');

    // Validate letter
    let letters = /[a-zA-Z]/g;
    if(password.value.match(letters)) {
      letter.classList.remove("password-invalid");
      letter.classList.add("password-valid");
    } else {
      letter.classList.remove("password-valid");
      letter.classList.add("password-invalid");
    }

    // Validate number
    let numbers = /[0-9]/g;
    if(password.value.match(numbers)) {
      number.classList.remove("password-invalid");
      number.classList.add("password-valid");
    } else {
      number.classList.remove("password-valid");
      number.classList.add("password-invalid");
    }
    
    // Validate special character
    let symbols = /[\W]/g;
    if(password.value.match(symbols)) {
      symbol.classList.remove("password-invalid");
      symbol.classList.add("password-valid");
    } else {
      symbol.classList.remove("password-valid");
      symbol.classList.add("password-invalid");
    }
    
    // Validate length
    if(password.value.length >= 8) {
      input_length.classList.remove("password-invalid");
      input_length.classList.add("password-valid");
    } else {
      input_length.classList.remove("password-valid");
      input_length.classList.add("password-invalid");
    }
  }

  // Validate input fields where regular expressions is used
  text_input_fields.forEach(item => {
    item.addEventListener('keyup', event => {
      if(event.target.value.length != 0) {
        // Validate 'password' confirm field
        if(event.target.getAttribute("name") === "passwordcnf") {
          validatePasswordcnf();
        }
        // Validate all other field
        else {
          if(regex[event.target.getAttribute("name")].pattern.test(event.target.value)) {
            event.target.classList.add("green-border");
            event.target.classList.remove("red-border");
            regex[event.target.getAttribute("name")].valid = true;
          } else {
            event.target.classList.add("red-border");
            event.target.classList.remove("green-border");
            regex[event.target.getAttribute("name")].valid = false;
          }

          if(event.target.getAttribute("name") === "password") {
            // if 'password' field is changed, trigger 'password confirm' field validation
            validatePasswordcnf();

            // update password tooltip
            updatePasswordTooltip();
          }
        }
      } else {
        event.target.classList.remove("green-border");
        event.target.classList.remove("red-border");
        regex[event.target.getAttribute("name")].valid = false;

        if(event.target.getAttribute("name") === "password") {
          // if 'password' field is changed, trigger 'password confirm' field validation
          validatePasswordcnf();

          // update password tooltip
          updatePasswordTooltip();

          if(password_confirm.value.length === 0) {
            password_confirm.classList.remove("red-border");
            password_confirm.classList.remove("green-border");
          }
        }
      }
    });
  });

  // Perform checks on form submit
  form.addEventListener('submit', event => {
    // prevent default submit action of HTML form
    event.preventDefault();

    // refresh error text animation
    error_text.classList.remove('wobble-hor-bottom');
    void error_text.offsetWidth;
    error_text.classList.add('wobble-hor-bottom');

    let all_valid = true;

    // check if atleast one age option selected
    if(ageBelow.checked === false && ageAbove.checked === false) {
      all_valid = false;
      error_text.style.display = "block";
      error_text.innerText = "Select age category.";
      ageBelow.focus({preventScroll:false});
    }

    // check if all fields are valid
    for (let [key, value] of Object.entries(regex)) {
      if(value.valid === false) {
        all_valid = false;
        error_text.style.display = "block";
        error_text.innerText = value.error;
        document.querySelector(`input[name="${key}"]`).focus({preventScroll:false});
        return;
      }
    }
    
    // submit form if all fields valid
    if(all_valid === true) {
      document.querySelector('.log-form').innerHTML = `
        <h2>Submitted!</h2>
        <svg class="checkmark" viewBox="0 0 52 52">
          <circle class="checkmark_circle" cx="26" cy="26" r="25" fill="none"/>
          <path class="checkmark_check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
        </svg>
      `;
    }
  });
});