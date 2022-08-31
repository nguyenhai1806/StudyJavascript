const romanArray = [
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000],
];
//Can't use "return" breakout forEach
function romanCharToInteger(charRoman) {
  var result = NaN;
  romanArray.forEach((element) => {
    if (charRoman == element[0]) {
      result = element[1];
    }
  });
  return result;
}
console.log(romanCharToInteger("I"));

var romanToInt = function (s) {
  var beforeValue = undefined;
  var integer = 0;
  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    var valueChar = romanCharToInteger(element);
    if (valueChar == NaN) return NaN;
    else {
      integer += valueChar;
      if (beforeValue != undefined) {
        if ((valueChar == 5 || valueChar == 10) && beforeValue == 1)
          integer -= beforeValue * 2;
        else if ((valueChar == 50 || valueChar == 100) && beforeValue == 10)
          integer -= beforeValue * 2;
        else if ((valueChar == 500 || valueChar == 1000) && beforeValue == 100)
          integer -= beforeValue * 2;
      }
    }
    beforeValue = valueChar;
  }
  return integer;
};
