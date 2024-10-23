const helpForm = document.getElementById("helpForm");
const userInfo = {}

function validateForm() {
    let isValid = true;
    const nameRegex = /^\D{3,}\D$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const messageRegex = /\w{5,}/;
    const phoneRegex = /^\+380\d{9}$/;


    if (!userInfo.email.trim()){
        document.querySelector("#emailError").innerHTML = "Email is a required field!";
        isValid = false;
    } else if (!emailRegex.test(userInfo.email)){
        document.querySelector("#emailError").innerHTML = "Incorrect mail!";
        isValid = false;
    }
    if (!userInfo.name.trim()){
        document.querySelector("#nameError").innerHTML = "Name is a required field!";
        isValid = false;
    } else if (!nameRegex.test(userInfo.name)){
        document.querySelector("#nameError").innerHTML = "The name length must be more than 3 characters and without numbers!";
        isValid = false;
    }

    if (!userInfo.message.trim()){
        document.querySelector("#messageError").innerHTML = "Message is a required field!";
        isValid = false;
    } else if (!messageRegex.test(userInfo.message)){
        document.querySelector("#messageError").innerHTML = "The message length must be more than 5 characters!";
        isValid = false;
    }

    if (!userInfo.phone.trim()){
        document.querySelector("#phoneError").innerHTML = "Phone is a required field!";
        isValid = false;
    } else if (!phoneRegex.test(userInfo.phone)){
        document.querySelector("#phoneError").innerHTML = "Incorrect phone number!";
        isValid = false;
    }

    return isValid;
}

function clearErrors() {
    document.querySelector("#emailError").innerHTML = "";
    document.querySelector("#nameError").innerHTML = "";
    document.querySelector("#messageError").innerHTML = "";
    document.querySelector("#phoneError").innerHTML = "";
}

helpForm.addEventListener("submit", e => {
    e.preventDefault();
    clearErrors();

    userInfo.email = document.getElementById("email").value;
    userInfo.name = document.getElementById("name").value;
    userInfo.message = document.getElementById("message").value;
    userInfo.phone = document.getElementById("phone").value;

    if (validateForm()) {
        console.log(userInfo);
    }
})