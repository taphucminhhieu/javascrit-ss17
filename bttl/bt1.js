let inputElement = document.getElementById("input");
let buttonSave = document.getElementById("save");
let outputElement = document.getElementById("output")

//gắn chuyển động cho nút khi click
buttonSave.addEventListener("click",() => {

    //lấy giá trị value ở thẻ inputElement
    let valueInput = inputElement.value;
    //đẩy lên localStrorage
    localStorage.setItem("name",valueInput);
    //dùng value để đẩy 
    outputElement.value = `xin chào bạn ${valueInput}`
});
outputElement.value = `xin chào bạn ${localStorage.getItem("name")}`