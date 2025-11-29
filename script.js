function login(){
    let email = document.getElementById("email").ariaValueMax;
    let password = document.getElementById("password").ariaValueMax;

    let validEmail = "admin@gmail.com";
    let validPassword = "admin1234";

    if(email === validEmail && password === validPassword){
        alert("Login Success");
        window.location.href = "admin.html"
    }
    else{
        alert("Wrong Email or Password");
    }
}