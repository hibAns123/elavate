const login = () => {
    if (username.value == "" || pword.value == "" || email.value== "") {
        alert("plase fill the form completely!!")
    }else {
        user = username.value
        email=email.value
        localStorage.setItem("user", user)
        localStorage.setItem("email",email)
        window.location.href = "main.html"
        alert("login successfully")
    }
}
