"use strict";

const errorMessage = document.getElementById("message");
const emailField = document.getElementById("email-field");
const passwordField = document.getElementById("password-field");
const loginBtn = document.getElementById("login-btn");

const emailRegex = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/;

let messageTimeoutId;

function showMessage(message) {
    errorMessage.innerText = message;

    if (messageTimeoutId) {
        clearTimeout(messageTimeoutId);
    } else {
        errorMessage.style.display = "block";
    }

    messageTimeoutId = setTimeout(function() {
        messageTimeoutId = null;
        errorMessage.style.display = "none";
    }, 7000);
}

window.addEventListener("load", () => {
    if (localStorage.getItem("email") && localStorage.getItem("password")) {
        return;
    }

    localStorage.setItem("email", "mkorzhan@outlook.com");
    localStorage.setItem("password", "123password!");
});

loginBtn.addEventListener("click", () => {
    let email = emailField.value.trim();

    if (!(email && emailRegex.test(email))) {
        showMessage("Please enter a valid email");
        return;
    }

    let password = passwordField.value.trim();

    if (!password) {
        showMessage("Please enter a valid password");
        return;
    }

    if (email === localStorage.getItem("email") && password === localStorage.getItem("password")) {
        window.location.assign("./home.html");
        return;
    }

    showMessage("Email or password is incorrect");
});