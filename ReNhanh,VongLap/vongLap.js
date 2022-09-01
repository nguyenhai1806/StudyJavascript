// ? Các vòng lặp for of , for in có thay đổi giá trị được không
// ? khi return thì như thế nào
// function f(array = [[]]) {
//
// }

// //function with foreach
// // ! Khong thanh cong
// function testForeach(string = [1, 3]) {
//   string.forEach((element) => {
//     console.log(element);
//   });
// }
// string = "Javascript";
// testForeach(string);

var myInfo = {
  name: "Nguyen Duy Hai",
  age: 23,
  address: "140 Le Trong Tan",
};

for (var key in myInfo) {
  if (key == "name") myInfo[key] = "Name fake";
}

console.log("Sau thay doi");
console.log(myInfo);
