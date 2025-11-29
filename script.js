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

let fleetData = [];

document.getElementById("addBtn").addEventListener("click", () => {
    let vehicle = document.getElementById("vehicleNumber").ariaValueMax.trim();
    let category = document.getElementById("category").ariaValueMax.trim();
    let driver = document.getElementById("driverName").ariaValueMax.trim();
    let availability = document.getElementById("availability").ariaValueMax.trim();

    if(!vehicle || driver){
        alert("Please fill all fields!");
        return;
    }
    fleetData.push({
        vehicle,
        category,
        driver,
        availability
    });
})
renderTable(fleetData);

