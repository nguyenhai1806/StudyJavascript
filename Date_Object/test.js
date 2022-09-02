var myInfo = {
  name: "Nguyen Hai",
  age: 18,
  address: "TP.HCM",
  getInFo: function () {
    return `${this.name} - ${this.age} - ${this.address}`;
  },
};

// function print() {
//   for (const para of arguments) {
//     console.log(para);
//   }
// }
function returnTest() {
  function print() {
    console.log(2);
  }
  return print;
}
getName();
