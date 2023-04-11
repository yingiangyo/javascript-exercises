const add = function(num1, num2) {
	let sum = 0;
  sum = (num1 + num2);
  return sum;
};

const subtract = function(num1, num2) {
  let difference = 0;
  difference = (num1 - num2);
  return difference;
};

const sum = function(arr) {
  let sumAll = 0;
  for(let i = 0; i < arr.length; i++) {
    sumAll += arr[i];
  }
  return sumAll;
};

const multiply = function(arr) {
  let productAll = 1;
  for(let i = 0; i < arr.length; i++) {
    productAll *= arr[i];
  }
  return productAll;
};

const power = function(num, pow) {
	return(num ** pow);
};

const factorial = function(num) {
  let factorialNum = 1;
  for(let i = 1; i <= num; i++) {
    factorialNum *= i;
  }
  return factorialNum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
