// project 1

/**
 * This app will estimate the length of a trip.
 */

const tripCalculator = {
  getTripLength(a, b) {
    return a / b;
  }
};

const form = document.querySelector("form");
const num1 = document.querySelector("#num-1");
const num2 = document.querySelector("num-2");
const select = document.querySelector("select");
const output = document.querySelector("output");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  output.textContent = tripCalculator[select.value](num1.value, num2.value);
});
