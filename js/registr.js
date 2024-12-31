let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let submit = document.getElementById("submit");

let signup = document.getElementById("signup");
let signin = document.getElementById("signin");
let wellcome = document.getElementById("wellcome");


submit.onclick = function (event) {
    event.preventDefault();

    // Trim inputs to remove extra spaces
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;

    // Check if any field is empty
    if (usernameValue === "" || emailValue === "" || passwordValue === "" || confirmPasswordValue === "") {
        alert("Please fill out all your data");
        return;
    } 

    // Check if passwords match
    if (passwordValue !== confirmPasswordValue) {
        alert("Passwords do not match");
        return;
    }

    // Save data to localStorage
    localStorage.setItem('username' , usernameValue)
    localStorage.setItem('email' , emailValue)
    localStorage.setItem('password' , passwordValue)
    localStorage.setItem('confirmPassword' , confirmPasswordValue)
    
    
    // Redirect to login page after a short delay
    setTimeout(() => {
        window.location.href = "login.html";
    }, 1500);
    
    }


let user = localStorage.getItem("username");

// if (user) {
//     signup.style.display = "none";
//     wellcome.style.display = "none";
// }