function passwordCheck() {
    password = document.querySelector("#password").value;
    confirmPassword = document.querySelector("#confirm-pass").value;

    if (password == confirmPassword) {
        return true;
    }
    else {
        errorMessage = document.querySelector(".error-message");
        errorMessage.textContent = "Passwords do not match";
        errorMessage.style.display = "block";
        return false;
    }
}
