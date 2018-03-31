function getRandomNumberFromMinToMax(min, max) {
    return Math.floor(min + Math.random()*(max + 1 - min));
};

console.log(getRandomNumberFromMinToMax(1, 5));