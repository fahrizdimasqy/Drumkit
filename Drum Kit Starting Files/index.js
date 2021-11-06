var button = document.querySelectorAll(".drum");
for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function() {
    alert('I got Click');
  });
}


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
  return num1 / num 2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

operator(3, 4, add)