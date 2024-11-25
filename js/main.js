//payment method
const enrollBtn = document.getElementById(`enroll-btn`);
const payment = document.getElementById(`payment`);
const back = document.getElementById(`back`);

enrollBtn.addEventListener("click", () => payment.style.top = '0');

back.addEventListener("click", () => payment.style.top = '-2000px');

//meun bars open and close 

const meunClose = document.getElementById(`meun-close`);
const meunOpen = document.getElementById(`meun-open`);
const meunList = document.getElementById(`meun-list`);

meunOpen.addEventListener("click", () => meunList.style.right = '0');
meunClose.addEventListener("click", () => meunList.style.right = '-360px');