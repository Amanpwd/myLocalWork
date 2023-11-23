let isAuth = localStorage.getItem("isAuth") || "Not Authenticated"
if (isAuth !== "Authenticated") {
    window.location.href = "./login.html"
}