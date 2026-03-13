const form = document.getElementById("registerForm");

const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const terms = document.getElementById("terms");

const successMessage = document.getElementById("successMessage");

/* hiển thị lỗi */

function showError(id,message){
document.getElementById(id+"Error").innerText = message;
}

/* xóa lỗi */

function clearError(id){
document.getElementById(id+"Error").innerText = "";
}

/* validate họ tên */

function validateFullname(){

const value = fullname.value.trim();

const regex = /^[A-Za-zÀ-ỹ\s]+$/;

if(value === ""){
showError("fullname","Không được để trống");
return false;
}

if(value.length < 3){
showError("fullname","Ít nhất 3 ký tự");
return false;
}

if(!regex.test(value)){
showError("fullname","Chỉ chứa chữ cái");
return false;
}

clearError("fullname");
return true;

}

/* validate email */

function validateEmail(){

const value = email.value.trim();

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(value === ""){
showError("email","Không được để trống");
return false;
}

if(!regex.test(value)){
showError("email","Email không hợp lệ");
return false;
}

clearError("email");
return true;

}

/* validate phone */

function validatePhone(){

const value = phone.value.trim();

const regex = /^0\d{9}$/;

if(value === ""){
showError("phone","Không được để trống");
return false;
}

if(!regex.test(value)){
showError("phone","SĐT phải 10 số và bắt đầu bằng 0");
return false;
}

clearError("phone");
return true;

}

/* validate password */

function validatePassword(){

const value = password.value;

const regex =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

if(value === ""){
showError("password","Không được để trống");
return false;
}

if(!regex.test(value)){
showError("password","Ít nhất 8 ký tự, có hoa, thường, số");
return false;
}

clearError("password");
return true;

}

/* confirm password */

function validateConfirm(){

if(confirmPassword.value !== password.value){
showError("confirm","Mật khẩu không khớp");
return false;
}

clearError("confirm");
return true;

}

/* gender */

function validateGender(){

const gender =
document.querySelector('input[name="gender"]:checked');

if(!gender){
showError("gender","Phải chọn giới tính");
return false;
}

clearError("gender");
return true;

}

/* terms */

function validateTerms(){

if(!terms.checked){
showError("terms","Phải đồng ý điều khoản");
return false;
}

clearError("terms");
return true;

}

/* submit */

form.addEventListener("submit",function(e){

e.preventDefault();

const isValid =
validateFullname() &
validateEmail() &
validatePhone() &
validatePassword() &
validateConfirm() &
validateGender() &
validateTerms();

if(isValid){

form.style.display = "none";

successMessage.innerText =
"Đăng ký thành công! 🎉 Xin chào " +
fullname.value;

}

});

/* blur validation */

fullname.addEventListener("blur",validateFullname);
email.addEventListener("blur",validateEmail);
phone.addEventListener("blur",validatePhone);
password.addEventListener("blur",validatePassword);
confirmPassword.addEventListener("blur",validateConfirm);

/* xóa lỗi khi gõ */

fullname.addEventListener("input",()=>clearError("fullname"));
email.addEventListener("input",()=>clearError("email"));
phone.addEventListener("input",()=>clearError("phone"));
password.addEventListener("input",()=>clearError("password"));
confirmPassword.addEventListener("input",()=>clearError("confirm"));