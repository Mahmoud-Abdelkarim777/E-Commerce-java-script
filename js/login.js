let signin = document.getElementById("signin");
let wellcome = document.getElementById("wellcome");

let email = document.getElementById("email");
let password = document.getElementById("password");
let loginButton = document.getElementById("loginButton");

let getemail = localStorage.getItem("email");
let getpass = localStorage.getItem("password");
let username = localStorage.getItem("username");


loginButton.onclick = function () {
    emailValue = email.value.trim();
    passwordValue = password.value;
    
    if (emailValue === '' || passwordValue === '') {
        alert("Please fill Data");
        return;
    }else{
        if( getemail === emailValue && getpass === passwordValue){
            setTimeout(() => {
                window.location = "index.html"
            }, 1500);
        }else{
            alert("email not existed or password is not correct");
        }
    }
}


// if (getemail.length > 0) {
//     signin.style.display = "none";
//     wellcome.style.display = "none";
// }