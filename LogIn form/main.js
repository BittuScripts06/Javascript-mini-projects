let signUpBtn = document.querySelector(".signUpBtn");
let signInBtn = document.querySelector(".signInBtn");
let nameField = document.querySelector(".name-field");
let title = document.querySelector(".title");
let underline = document.querySelector(".underline");
let text = document.querySelector(".text");
let form = document.querySelector("#form")

form.addEventListener("submit", (e) => {
    e.preventDefault();
})

signInBtn.addEventListener("click", () => {

    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In"
    text.innerHTML = "Lost Password"
    signUpBtn.classList.add("disable");
    signInBtn.classList.remove("disable");
    underline.style.transform = "translateX(35px)"
})

signUpBtn.addEventListener("click", () => {
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up"
    text.innerHTML = "Password Suggestions"
    signUpBtn.classList.remove("disable");
    signInBtn.classList.add("disable");
    underline.style.transform = "translateX(0)"
})
