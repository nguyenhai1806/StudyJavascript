var headingElement = document.getElementById("contain");
//chèn thêm code
headingElement.innerHTML = "<p>Thẻ p</p>";
console.log(headingElement);

var courses = ["HTML & CSS", "Javascript", "PHP", "Java"];

function render(courses = []) {
  var htmlSctipt = courses.map((course) => {
    return `<li>${course}</li>`;
  }).join('');

 document.querySelector('ul').listElement.innerHTML = htmlSctipt;
}

// render(courses)
