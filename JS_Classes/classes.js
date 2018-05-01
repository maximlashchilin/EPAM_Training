// Parent
function Animal(name) {
    this._name = name;
    this._speed = 0;
};
Animal.prototype.run = function(speed) {
    this._speed += speed;
    console.log(this._name + ' бежит со скоростью ' + this._speed);
};
Animal.prototype.stop = function() {
    this._speed = 0;
    console.log(this._name + ' остановился');
};

// Child 1
function Rabbit(name) {
    Animal.apply(this, arguments);
    this._heightOfJump = 0;
};
Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;
Rabbit.prototype.jump = function(height) {
    this._heightOfJump = height;
    console.log(this._name + ' прыгнул на высоту ' + this._heightOfJump);
    this._heightOfJump = 0;
    console.log(this._name + ' приземлился');
};

// Child 2
function Cat(name) {
    Animal.apply(this, arguments);
    this._lengthOfJump = 0;
};
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.jump = function(length) {
    this._lengthOfJump = length;
    console.log(this._name + ' прыгнул в длину ' + this._lengthOfJump);
    this._lengthOfJump = 0;
};

// Child 1 from Child 2
function Tiger(name) {
    Cat.apply(this, arguments);
    this.numOfStripes = 50;
};
Tiger.prototype = Object.create(Cat.prototype);
Tiger.prototype.constructor = Tiger;
Tiger.prototype.eat = function() {
    console.log('Tiger ate pig');
};

var tiger = new Tiger('Тигра');
tiger.eat();
var cat = new Cat('Васька');
cat.jump(50);