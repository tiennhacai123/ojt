//lay element cua trang
const formLogin = document.getElementById("formLogin");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");

//element error 
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError")
//lang nghe su kien submit form dang nhap tai khoan
formLogin.addEventListener("submit", function (e) {
    //ngan chan su kien load lai trang
    e.preventDefault();

    //validate du lieu dau vao
    if (!emailElement.value) {
        emailError.style.display = "block";
    } else {
        emailError.style.display = "none";
    }
    if (!passwordElement.value) {
        passwordError.style.display = "block";
    } else {
        passwordError.style.display = "none";
    }
    //lay du lieu tu local ve
    const userLocal = JSON.parse(localStorage.getItem("users")) || [];

    //tim kiem email va mat khau nguoi dung nhap vao co ton tai tren local khong?
    const findUser = userLocal.find((user) => user.email === emailElement.value && user.password === passwordElement.value);
    
    if(!findUser){
        //neu co thi dang nhap thanh con va chuyen huong ve trang chu
        alert("Email or password is incorrect or blank")
        //neu khong thi thong bao cho nguoi dung nhap lai du lieu
    }else{
        window.location.href = "../index.html"
    
    //luu thong tin cua user dang nhap len local
    localStorage.setItem("userLogin", JSON.stringify(findUser));
    }
    
});