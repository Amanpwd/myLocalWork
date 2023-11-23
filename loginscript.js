let form = document.getElementById("form")
let Email = document.getElementById("email")
let Password = document.getElementById("password")

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let userDetails = {
        email: email.value,
        password: password.value,
    };
    let savedDetails = JSON.parse(localStorage.getItem("userDetails")) || {};
    if (
        userDetails.email === savedDetails.email &&
        userDetails.password === savedDetails.password
    ) {
        localStorage.setItem("isAuth", "Authenticated")
        alert("Login successful !")
    }
    else {

        alert("Wrong Credential")
    }

})
