let div = document.getElementById("id");
let nameInput = document.getElementById("name");
let ageInput = document.getElementById("age");
let buttonSave = document.getElementById("button");
let output =document.getElementById("output");
let deleter = document.getElementById("deleter");
buttonSave.addEventListener("click",()=> {
    let saveName = nameInput.value;
    let saveAge = ageInput.value;
    let profile ={
        name:saveName,
        age:saveAge
    };

    //in vào
    //stringify chuyển từ object thành chuỗi 
    localStorage.setItem("infor",JSON.stringify(profile));

    //đẩy ra
    //chuyển từ object thành string
    let data = JSON.parse(localStorage.getItem("infor"));

    //đẩy input lên màn(value ở trong thẻ đc đẩy lên)
    output.value  = `tên : ${data.name} - tuổi: ${data.age}`

});

deleter.addEventListener("click",() => {
    //cho profile là mảng rỗng tạm thởi
    nameInput.value = "";
    ageInput.value = "";
    output.value = "";
    
    localStorage.clear("infor")//xoá sạch bộ nhớ thẻ infor

});