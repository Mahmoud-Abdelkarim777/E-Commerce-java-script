let wellcome = document.getElementById("wellcome");
let signin = document.getElementById("signin");
let signup = document.getElementById("signup");
let logout = document.getElementById("logout");
let basket = document.getElementById("basket");
let username = localStorage.getItem("username");

if (username) {
    wellcome.innerHTML = `
        <p class="navbar-brand  m-0 w-100" id="wellcome">Hi  ${username} 👋 !</p>
    `
}else{
    basket.style.display = "none"
    basketnum.style.display = "none" 
    logout.style.display = "none"
}