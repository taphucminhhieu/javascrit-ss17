let inputElement = document.getElementById("div");
let h1 = document.getElementById("h1");
let count = Number(h1.innerHTML);
let buttonAdd = document.getElementById("add");
let buttonMinius= document.getElementById("minius");
let buttonReset = document.getElementById("reset");

//thêm 
buttonAdd.addEventListener("click",() => {
    count++;//thêm 1 số khi clcick
    h1.innerHTML = count; // cật nhập 
});

//bỏ
buttonMinius.addEventListener("click",() => {
    count--;//trừ
    h1.innerHTML = count;//dựa vào h1 mà trừ 
});

//reset 
buttonReset.addEventListener("click",() => {
    count = 0;// đưa biến về số 0
    h1.innerHTML = count //reset lại thành 0
});