symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
var romanToInt = function (s) {
  var value = 0;
  var arrayLength = s.length;
  for (let i = 0; i < arrayLength; i += 1) {
    valueRomanChar = symbols[s[i]];
    if (valueRomanChar < symbols[s[i + 1]]) value -= valueRomanChar;
    else value += valueRomanChar;
  }
  return value;
};
