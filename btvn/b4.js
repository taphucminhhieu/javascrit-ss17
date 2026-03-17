let div = document.getElementById("id");
let nameInput = document.getElementById("name");
let ageInput = document.getElementById("age");
let buttonSave = document.getElementById("button");
let output =document.getElementById("output");

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
    let data = JSON.parse(localStorage.getItem("infor"));

    //đẩy input lên màn(value ở trong thẻ đc đẩy lên)
    output.value  = `tên : ${data.name} - tuổi: ${data.age}`
});
