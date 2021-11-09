var button = document.querySelectorAll(".drum");

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml)
  });
}
document.addEventListener("keypress", function(event) {
  makeSound(event.key)
});

function makeSound(key) {
  switch (key) {
    case 'w':
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case 'a':
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case 's':
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case 'd':
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case 'j':
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case 'k':
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case 'l':
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    default:
      console.log(key);
  }
}

// Higher order function
// function add(num1, num2) {
//   return num1 + num2;
// }
//
// function substract(num1, num2) {
//   return num1 - num2;
// }
//
// function multiply(num1, num2) {
//   return num1 * num2;
// }
//
// function divide(num1, num2) {
//   return num1 / num2;
// }
//
// function calculator(num1, num2, operator) {
//   return operator(num1, num2);
// }

// calculator(3, 4, add)

// Constructor function
// namanya ditulis huruf awal harus kpaital

// function BellBoy(name, age, hasWorkPermit, languages) {
// melakuan pencockan input/parameter dengan nama properti
// this.name = name;
// this.age = age;
// this.hashWorkPermit = hasWorkPermit;
// this.languages = languages;
// }

// menginisialisasi object yang baru / membuat objek
// var bellboy1 = new BellBoy("fahriz", 20, 2, ["Indonesia", "English"]);
// console.log(BellBoy)

// function HouseKeeper(yearsOfExpreince, name, cleaningRepertoire) {
//   this.yearsOfExpreince = yearsOfExpreince;
//   this.name = name;
//   this.cleaningRepertoire = cleaningRepertoire;
//   this.clean = function() {
//     alert('Cleaning in progress.');
//   }
// }
//
// var houseKeeper1 = new HouseKeeper(2, "test", "test")
// houseKeeper1.clean();