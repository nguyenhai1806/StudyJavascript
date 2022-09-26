var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var languages = ["Java", "Javascipt222", "Python", "Cshap"];

function Student(name, birthday, avatar, mark) {
  this.name = name;
  this.birthday = birthday;
  this.avatar = avatar;
  this.mark = mark;
}
var students = [
  new Student("Nguyễn Duy Hải", new Date(2000, 12, 25), "1.jpg", 5),
  new Student("Nguyễn Văn Khải", new Date(2001, 12, 25), "2.jpg", 4.5),
  new Student("Nguyễn Duy Khánh", new Date(2002, 12, 25), "3.jpg", 6),
  new Student("Huỳnh Văn Huy", new Date(2003, 12, 25), "5.jpg", 9.5),
  new Student("Nguyễn Đức Tài", new Date(1998, 12, 25), "6.jpg", 8.5),
];

//! Duyệt qua từng phần tử
// students.forEach((student) => {
//   if (student.mark > 5) {
//     console.log(student);
//   }
// });

// Array.prototype.forEach2 = function (callback) {
//   var length = this.length;
//   for (var i = 0; i < length; i++) {
//     callback(this[i], i, this);
//   }
// };

// students.forEach2((student) => {
//   if (student.mark > 5) {
//     console.log(student);
//   }
// });
console.log("");

//! Kiểm tra tất cả phần tử thoả điều kiện
// var sinhvien = students.every(function checkBirthday(student) {
//   var now = new Date();
//   return now.getFullYear() - student.birthday.getFullYear() > 17;
// });

// Array.prototype.every2 = function (callback) {
//   var length = this.length;
//   for (var i = 0; i < length; i++) {
//     if (callback(this[i], i, this) == false) return false;
//   }
//   return true;
// };

// var sinhvien = students.every2((student) => {
//   var now = new Date();
//   return now.getFullYear() - student.birthday.getFullYear() > 15;
// });
console.log("");

//! Kiểm tra tồn tại phần tử thoả điều kiện
// var result = languages.some((language) => {
//   return language.length <= 4;
// });
// console.log(result);

// Array.prototype.some2 = function (callback) {
//   var length = this.length;
//   for (var i = 0; i < length; i++) {
//     if (callback(this[i], i, this) == true) return true;
//   }
//   return false;
// };

// var result = languages.some2((languages) => {
//   return languages.length <= 4;
// });
console.log("");

//! Tìm phần tử thoả điều kiện
// var sinhVienThoaDK = students.find((student) => {
//   return student.mark > 10;
// });

// Array.prototype.find2 = function (callback) {
//   var length = this.length;
//   for (var i = 0; i < length; i++) {
//     if (callback(this[i], i, this)) return this[i];
//   }
//   return undefined;
// };

// var sinhVienThoaDK = students.find2((student) => {
//   return student.mark > 6;
// });
console.log("");

function tinhTuoi(ngaySinh) {
  return new Date().getFullYear() - ngaySinh.getFullYear();
}
//! Tìm tất cả phần tử thoả điều kiện
// var sinhvienThoaDK = students.filter((student) => {
//   console.log(tinhTuoi(student.birthday));
//   return tinhTuoi(student.birthday) > 26;
// });

// Array.prototype.filter2 = function (callback) {
//   var arrayLength = this.length;
//   var result = [];
//   for (var i = 0; i < arrayLength; i++) {
//     if (callback(this[i], i, this)) result.push(this[i]);
//   }
//   return result;
// };

// var sinhvienThoaDK = students.filter2((student) => {
//   return tinhTuoi(student.birthday) > 20;
// });
console.log("");

//! Map: Thay dổi
// var resultMap = students.map((student) => {
//   return "</h2>" + "Tên" + student.name + "</h2>";
// });
// console.log(resultMap.join(""));

// Array.prototype.map2 = function (callback) {
//   var length = this.length;
//   var result = [];
//   for (var i = 0; i < length; i++) {
//     result.push(callback(this[i], i, this));
//   }
//   return result;
// };

// var resultMap = students.map2((student) => {
//   return "<h1>" + student.name + "</h1>";
// });
console.log("");

//! reduce
var sumMark = students.reduce((accumulator, currenValue) => {
  return accumulator + currenValue.mark;
});
console.log(sumMark);
