const form = document.getElementById("orderForm");

const product = document.getElementById("product");
const quantity = document.getElementById("quantity");
const dateInput = document.getElementById("date");
const address = document.getElementById("address");
const note = document.getElementById("note");

const totalEl = document.getElementById("total");

const charCount = document.getElementById("charCount");

const confirmBox = document.getElementById("confirmBox");
const summary = document.getElementById("summary");

const success = document.getElementById("success");

const prices = {
"Áo":150000,
"Quần":200000,
"Giày":300000
};

/* error helpers */

function showError(id,msg){
document.getElementById(id+"Error").innerText=msg;
}

function clearError(id){
document.getElementById(id+"Error").innerText="";
}

/* product */

function validateProduct(){

if(product.value===""){
showError("product","Hãy chọn sản phẩm");
return false;
}

clearError("product");
return true;
}

/* quantity */

function validateQuantity(){

const q = Number(quantity.value);

if(!Number.isInteger(q) || q<1 || q>99){
showError("quantity","1-99");
return false;
}

clearError("quantity");
return true;
}

/* date */

function validateDate(){

const d = new Date(dateInput.value);

const today = new Date();
today.setHours(0,0,0,0);

const max = new Date();
max.setDate(today.getDate()+30);

if(d < today){
showError("date","Không chọn ngày quá khứ");
return false;
}

if(d > max){
showError("date","Không quá 30 ngày");
return false;
}

clearError("date");
return true;
}

/* address */

function validateAddress(){

if(address.value.trim().length < 10){
showError("address","Ít nhất 10 ký tự");
return false;
}

clearError("address");
return true;
}

/* note */

function validateNote(){

if(note.value.length > 200){
showError("note","Tối đa 200 ký tự");
return false;
}

clearError("note");
return true;
}

/* payment */

function validatePay(){

const pay =
document.querySelector('input[name="pay"]:checked');

if(!pay){
showError("pay","Chọn phương thức thanh toán");
return false;
}

clearError("pay");
return true;
}

/* character counter */

note.addEventListener("input",function(){

charCount.innerText = note.value.length + "/200";

if(note.value.length > 200){
charCount.style.color="red";
}else{
charCount.style.color="black";
}

validateNote();

});

/* total */

function updateTotal(){

const price = prices[product.value] || 0;
const q = Number(quantity.value) || 0;

const total = price * q;

totalEl.innerText =
total.toLocaleString("vi-VN");

}

product.addEventListener("change",updateTotal);
quantity.addEventListener("input",updateTotal);

/* blur validation */

product.addEventListener("blur",validateProduct);
quantity.addEventListener("blur",validateQuantity);
dateInput.addEventListener("blur",validateDate);
address.addEventListener("blur",validateAddress);
note.addEventListener("blur",validateNote);

/* clear errors */

address.addEventListener("input",()=>clearError("address"));

/* submit */

form.addEventListener("submit",function(e){

e.preventDefault();

const valid =
validateProduct() &
validateQuantity() &
validateDate() &
validateAddress() &
validateNote() &
validatePay();

if(valid){

confirmBox.style.display="block";

summary.innerText =
`Sản phẩm: ${product.value}
 | SL: ${quantity.value}
 | Tổng: ${totalEl.innerText} VND
 | Ngày giao: ${dateInput.value}`;

}

});

/* confirm */

document
.getElementById("confirmBtn")
.addEventListener("click",function(){

confirmBox.style.display="none";
form.style.display="none";

success.innerText =
"Đặt hàng thành công 🎉";

});

/* cancel */

document
.getElementById("cancelBtn")
.addEventListener("click",function(){

confirmBox.style.display="none";

});