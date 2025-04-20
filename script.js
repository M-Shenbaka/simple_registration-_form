function validateForm(event) 
{
    event.preventDefault();
    var name = document.getElementById("name")
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var submit = document.getElementById("submit")
  

    let isValid = true
    // Disable the submit button initially when form is submitted
    submit.disabled = true;

      /* Name validation */ 
    if(name.value.trim() === "")
    {
      document.getElementById('nameError').textContent = "Name is required.";
      isValid = false;
    }
    else
    {
      document.getElementById('nameError').textContent = "";
    }

    /* Email validation */
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        document.getElementById('emailError').textContent = "Enter a valid email address.";
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = "";
    }

    if (password.value.trim().length < 6) 
    {
      document.getElementById('passwordError').textContent = "Password must be atleast 6 char.";
      isValid = false;
    } 
    else 
    {
      document.getElementById('passwordError').textContent = "";
    }

   /* If the form is valid, show success message, else don't submit */
   submit.disabled = !isValid;

   /*Real-time validation on input */
      ["name", "email", "password"].forEach(id => {
            document.getElementById(id).addEventListener("input", validateForm);
      });

  }
