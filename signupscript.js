let form = document.getElementById("form")
let Email = document.getElementById("Email")
let Password = document.getElementById("Password")

form.addEventListener("submit",function(event){
    event.preventDefault();
    
    let userDetails = {
        email : email.value,
        password : password.value
    }
    localStorage.setItem("userDetails",JSON.stringify(userDetails))   
     
})