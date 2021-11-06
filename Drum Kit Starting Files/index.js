var button = document.querySelectorAll(".drum");

var wDrum = document.querySelector('.w');
var aDrum = document.querySelector('.a');
var sDrum = document.querySelector('.s');
var dDrum = document.querySelector('.d');
var jDrum = document.querySelector('.j');
var kDrum = document.querySelector('.k');
var lDrum = document.querySelector('.l');

// for (var i = 0; i < button.length; i++) {
//   button[i].addEventListener("click", function() {
//     var audio = new Audio('sounds/tom-1.mp3');
//     audio.play();
//   });
// }

wDrum.addEventListener('click', function(){
  var audio = new Audio('sounds/tom-1.mp3');
  audio.play();
})

aDrum.addEventListener('click', function(){
  var audio = new Audio('sounds/tom-2.mp3');
  audio.play();
})

sDrum.addEventListener('click', function(){
  var audio = new Audio('sounds/tom-3.mp3');
  audio.play();
})

dDrum.addEventListener('click', function(){
  var audio = new Audio('sounds/tom-4.mp3');
  audio.play();
})

jDrum.addEventListener('click', function(){
  var audio = new Audio('sounds/snare.mp3');
  audio.play();
})

kDrum.addEventListener('click', function(){
  var audio = new Audio('sounds/crash.mp3');
  audio.play();
})

lDrum.addEventListener('click', function(){
  var audio = new Audio('sounds/kick-bass.mp3');
  audio.play();
})



// Higher order function
function add(num1, num2) {
  return num1 + num2;
}

function substract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

calculator(3, 4, add)
