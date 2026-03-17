//bỏ làm lại
let settingTheme = document.getElementById("div");
let buttonTheme = document.getElementById("buttonTheme");

//cho phép dùng nhiều lần 
function resetTheme(theme){
    if(theme == "dark" ){
        document.body.style.background ="black";
        document.body.style.color="white";
    }else{
        document.body.style.background ="white";
        document.body.style.color="black";
    }
};



//gắn hiệu ứng cho nút
buttonTheme.addEventListener("click",() => {
    //check theme hiện tại
    //nếu là màu trắng thì có thể chuyển lại màu đen khi click
    let checkTheme = localStorage.getItem("theme") || "light"; 

    //đổi theme 
    let themeNew;
    if(checkTheme === "dark"){
        themeNew = "light";
    }else{
        themeNew = "dark";
    }
    resetTheme(themeNew);
    localStorage.setItem("theme", themeNew);
});