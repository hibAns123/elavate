const login = () => {
    if ( pword.value == "" || email.value== "") {
        alert("plase fill the form completely!!")
    }else {
        email=email.value
        localStorage.setItem("email",email)
        window.location.href = "main.html"
        alert("login successfully")
    }
}
