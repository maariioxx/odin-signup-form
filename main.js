submitButton = document.querySelector("button");
passwordInput = document.querySelector(".password");
confirmPasswordInput = document.querySelector(".conf-password")
errorMessage = document.querySelector(".error-message");
signIn = document.querySelector(".sign-in");

function checkPassword(){
    if(typeof passwordInput.value != 'string' || passwordInput.value.length < 8){
        passwordInput.classList.add("error");
        confirmPasswordInput.classList.add("error");
        errorMessage.textContent = "*Enter a valid password (letters and numbers and 8 characters minimum)"
    }
    else if(passwordInput.value != confirmPasswordInput.value){
        passwordInput.classList.add("error");
        confirmPasswordInput.classList.add("error");
        errorMessage.textContent = "*Passwords do not match"
    } else {

        setTimeout(window.location.reload(), 5000)
    }
}

submitButton.addEventListener("click", checkPassword)