function Calculator() {
    this.result = 0;
    this.getResult = function() {
        return this.result;
    };

    this.add = function (a) {
        this.result += a;
        return this;
    };

    this.subtract = function(a) {
        this.result -= a;
        return this;      
    };

    this.devide = function (a) {
        this.result /= a;
        return this;
    };

    this.multiply = function (a){
        this.result *= a;
        return this;
    };
    
    this.reset = function() {
        this.result = 0;
        return this;
    };

    this.getInitialState = function() {
        setTimeout(function() {
            this.result = 5;
            console.log('async', this.result);
        }.bind(this), 1000);
        return this;
    };

    this.valueOf = function() {
        return this.result;
    };
};

function myBind(func, context) {
    return function() {
        return func.apply(context, arguments);
    }
};

var calculator = new Calculator();
console.log(calculator.getResult());
console.log(+calculator.add(5).add(5));