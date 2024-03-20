//Lay ra element cua tran
const formRegister = document.getElementById("formRegister");
const userNameElement = document.getElementById("userName");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");

//element lien quan den loi
const userNameError = document.getElementById("userNameError");
const emailErororr = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

//lay du lieu tu localStorage
const userLocal = JSON.parse(localStorage.getItem("users")) || [];

//lang nghe su kien submit form dki tai khoan
formRegister.addEventListener("submit", function (e) {

    //ngan chan su kien load lai trang
    e.preventDefault();
    //validate du lieu dau vao
    if (!userNameElement.value) {
        //hien thi loi
        userNameError.style.display = "block";
    } else {
        userNameError.style.display = "none";
    }

    if (!emailElement.value) {
        //hien thi loi
        emailErororr.style.display = "block";
    } else {
        emailErororr.style.display = "none";
    }

    if (!passwordElement.value) {
        //hien thi loi
        passwordError.style.display = "block";
    } else {
        passwordError.style.display = "none";
    }
    //gui du lieu
    if (userNameElement.value && emailElement.value && passwordElement.value) {
        //lay du lieu tu form va gop thanh doi tuong user
        const user = {
            userId: Math.ceil(Math.random() * 100000000),
            username: userNameElement.value,
            email: emailElement.value,
            password: passwordElement.value,
        };

        //push user vao mang userlocal
        userLocal.push(user);

        //luu tru du lieu len local
        localStorage.setItem("users", JSON.stringify(userLocal));

        //chuyen huong ve trang dang nhap sau 1s
        setTimeout(function () {
            window.location.href = "login.html";
        }, 1000)
    }

});