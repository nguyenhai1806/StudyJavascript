var numbers = [12, 3, 4, 5, 6, 7, 3, 2, 1, 435];
var topics = [
    {
        topic: 'Frontend',
        courses:[
            {
                id: 1,
                name: 'HTML CSS',
            },
            {
                id: 2,
                name: 'React'
            }
        ]
    },
    {
        topic: 'Backend',
        courses: [
            {
                id: 3,
                name: 'PHP'
            },
            {
                id: 4,
                name: 'NodeJS'
            }
        ]
    }
]
Array.prototype.reduce2 = function (callback, initialValue) {
  if((typeof callback) == 'function'){
    var accumulator;
    for (const index in this) {
        if (this.hasOwnProperty(index)) {
        if (index == 0)
            if (initialValue == undefined) {
            accumulator = this[0];
            } else {
            accumulator = initialValue;
            accumulator += this[0];
            }
        else {
            accumulator = callback(accumulator, this[index], index, this);
        }
        }
    }
    return accumulator;
  }
};

var sum = numbers.reduce2((accumulator, value) => {
  return accumulator + value;
}, []);
var courses = topics.reduce2(123,[])

var arrayTest1 = [2,3,4];
var arrayTest2 = [10,11,23];