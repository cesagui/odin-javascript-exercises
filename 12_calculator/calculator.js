const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, number) => {
    total += number;
    return total;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, str) => {
    product *= Number(str);
    return product;
  }, 1);
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	let ret = 1;
  let i = 0;
  while (i < a){
    i++;
    ret *= i;
  }
  return ret;
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
