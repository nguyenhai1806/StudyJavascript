var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var languages = ["Java", "Javascipt222", "Python", "Cshap"];
/**
 * Duyệt qua từng phần tử
 */
Array.prototype.forEach2 = function (callback) {
  var arrayLength = this.length;
  for (var i = 0; i < arrayLength; i++) {
    callback(array[i], i, this);
  }
};
Array.prototype.every2 = function (callback) {
  var arrayLength = this.length;
  for (var i = 0; i < arrayLength; i++) {
    if (callback(this[i], i, this) == false) return false;
  }
  return true;
};

Array.prototype.some2 = function (callback) {
  var arrayLength = this.length;
};
