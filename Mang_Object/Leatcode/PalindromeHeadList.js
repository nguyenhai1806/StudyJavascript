head = [1, 2];
//5 -> 2
//6 -> 3
var isPalindrome = function (head) {
  var length = head.length;
  var result = true;
  for (let index = 0; index < length / 2; index++) {
    if (head[index] != head[length - index - 1]) {
      result = false;
      break;
    }
  }
  return result;
};

console.log(isPalindrome(head));
