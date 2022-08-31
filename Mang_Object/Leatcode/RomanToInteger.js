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
  for (let element of romanArray) {
    if (element[0] == charRoman) return element[1];
  }
  return NaN;
}

var romanToInt = function (s) {
  var beforeValue = undefined;
  var integer = 0;
  for (let element of s) {
    var valueChar = romanCharToInteger(element[0]);
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
console.log(romanToInt("IV"));
