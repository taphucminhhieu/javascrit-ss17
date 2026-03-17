//SetItem : Tạo key và value
localStorage.setItem("name","Đạt bé bỏng")

// .getItem : lấy value của key
let nameByLocal= localStorage.getItem("name");
console.log(nameByLocal);

// // .removeItem : xoá theo key
// localStorage.removeItem("name")

// //.clear : xoá hết tất cả 
// localStorage.clear();

//cách lưu giá trị là mảng hoặc object lên localstorage
let todos = [
    {id: 0 , name: "chơi game", status: true},
    {id: 1 , name: "Xem phim", status: false}
];

//kiểu dữ liệu JSON
// stringify chuyển string về JSON
localStorage.setItem("listTodo",JSON.stringify(todos));


// JSON.parse: chuyển JSON về kiểu dữ liệu mảng hoặc object
let data = JSON.parse(localStorage.getItem("listTodo"));
console.log(data);


