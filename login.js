function login() {
let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

if(username === "ayush" && password === "9627") {
showToast("Login Successful ✅");
setTimeout(()=>{
  window.location.href = "dashboard.html";
}, 800);
} else {
showToast("Wrong Username or Password ❌");
}
}
function showToast(msg){
let t = document.getElementById("toast");
t.innerText = msg;
t.style.display = "block";

setTimeout(()=>{
t.style.display = "none";
},2000);
}

