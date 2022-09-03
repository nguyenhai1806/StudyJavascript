// var myInfo = {
//   name: "Nguyen Hai",
//   age: 18,
//   address: "TP.HCM",
//   getInFo: function () {
//     return `${this.name} - ${this.age} - ${this.address}`;
//   },
// };

// function Person(fristName, lastName, avatar) {
//   this.fristName = fristName;
//   this.lastName = lastName;
//   this.avatar = avatar;
//   this.fullname = fristName + " " + lastName;
// }

// // var faculty = new Person("Hai", "Nguyen", 20);
// // person1.address = "TP.HCM";
// // var student = new Person("Thao", "Hoang", 20);
// // person2.job = "dev";
// // console.log(faculty);
// // console.log(student);

// // var faculty = new Person("Hai", "Nguyen", 20);
// // person1.address = "TP.HCM";
// // var student = new Person("Thao", "Hoang", 20);
// // person2.job = "dev";
// // console.log(faculty);
// // console.log(student);

function run(a) {
  if (a % 15 == 0) return 3;
  else if (a % 5 == 0) return 2;
  else if (a % 3 == 0) return 1;
}

// Kỳ vọng
console.log(run(3)); // 1
console.log(run(5)); // 2
console.log(run(15)); // 3
