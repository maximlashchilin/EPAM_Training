function calculator() {
    calculator.result = 0;
    this.getResult = function() {
        return calculator.result;
    };
    this.add = function (a) {
        calculator.result += a;
        return function(b) {
            calculator.result = a + b;
        };
    };
    this.subtract = function(a) {
        calculator.result -= a;
        return function(b) {
            calculator.result = a - b;
        };        
    };
    this.devide = function (a) {
        calculator.result /= a;
        return function(b) {
            calculator.result = a / b;
        };
    };
    this.multiply = function (a){
        calculator.result *= a;
        return function(b) {
            calculator.result = a * b;
        };
    };
    this.reset = function() {
        calculator.result = 0;
    };
};

var Calculator = new calculator();
console.log(Calculator.getResult());
Calculator.add(3);
console.log(Calculator.getResult());
Calculator.subtract(2)(1);
console.log(Calculator.getResult());
Calculator.devide(3)(2);
console.log(Calculator.getResult());
Calculator.multiply(3)(2);
console.log(Calculator.getResult());
Calculator.reset();
console.log(Calculator.getResult());