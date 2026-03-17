let div = document.getElementById("div");
let inputTextArea = document.getElementById("textarea");
let btn = document.getElementById("button");
let deleter = document.getElementById("deleter");
//lưu
btn.addEventListener("click",()=> {
    //lấy giá trị thẻ textArea từ thoong tin người dùng(value là giá trị bên trong thẻ đó)
    let conten = inputTextArea.value;
    localStorage.setItem("store",conten);
});

let savedContent = localStorage.getItem("store");
//khôi phục bản nháp
if (savedContent !=="" && savedContent !== "null") {//nếu saveConten không rỗng thì tthực hiện
    //phần nhập vào của người dùng sẽ được lưu lại với tên thẻ là "store"
    inputTextArea.value = savedContent; 
    console.log("Đã khôi phục bản nháp!");
}

deleter.addEventListener("click",()=>{
    inputTextArea.value="";//gán cho thẻ input... đó thành mảng rỗng
    localStorage.removeItem("store")//xoá sạch trong bộ nhớ
});