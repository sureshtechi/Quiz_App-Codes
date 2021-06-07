const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username == "") {
    	loginForm.username.placeholder = 'Enter the username';
    	loginForm.username.classList.toggle("login-field-error");
    }
    if (password == "") {
    	loginForm.password.placeholder = 'Enter the password';
    	loginForm.password.classList.toggle("login-field-error");
    }
    if ((username === "user" || username === "inventory" || username === "shipment") && password === "web")  {
        if (username === "user" && password === "web") {
        alert("You have successfully logged in.");
        window.location.href = "Customer.html";
    }
    else if (username === "inventory" && password === "web") {
        alert("You have successfully logged in.");
        window.location.href = "Inventory_Main.html";
    }
    else if (username === "shipment" && password === "web") {
        alert("You have successfully logged in.");
        window.location.href = "ship_list.html";
    }}
    else if ((username === "user" || username === "inventory" || username === "shipment") && password !="web") {
        loginErrorMsg.style.opacity = 1;
        loginForm.password.placeholder = 'Enter a valid password';
        loginForm.password.classList.toggle("login-field-error");
        loginForm.password.value = '';
    }
    else {
        loginErrorMsg.style.opacity = 1;
        loginForm.password.placeholder = 'Enter a valid password';
        loginForm.password.classList.toggle("login-field-error");
        loginForm.password.value = '';
        loginForm.username.placeholder = 'Enter a valid username';
        loginForm.username.classList.toggle("login-field-error");
        loginForm.username.value = '';
    }
    loginForm.username.value = '';
    loginForm.password.value = '';
})