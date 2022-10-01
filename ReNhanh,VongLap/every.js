Array.prototype.myEvery = function(cb) {
    for(const index in this){
        if(this.hasOwnProperty(index)){
            if(cb(this[index],index,this) == false){
               return false;
            }
        }
    }
    return true;
 }
 
 
 // Expected results
 
 const numbers = [1, 3, 3, 5];

 console.log(numbers.myEvery(function (number) {
     return number % 2 !== 0;
 })); // Output: true
 
 console.log(numbers.myEvery(function (number, index) {
     return index % 2 === 0;
 })); // Output: false
 
 console.log(numbers.myEvery(function (number, index, array) {
     return array.length % 2 === 0;
 })); // Output: true
 