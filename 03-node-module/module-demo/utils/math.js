function add (num1, num2) {
    return num1 + num2
}

const MAGIC_NUMBER = Math.round(Math.random() * 100);

function getLuckyNumber (){
    return MAGIC_NUMBER;
}

module.exports = {add : add}



// ES6 - Short-hand properties
// module.exports = {add, getLuckyNumber}

