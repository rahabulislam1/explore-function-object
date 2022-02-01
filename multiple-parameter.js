function addTwoNumbers(num1, num2) {
    console.log(num1, num2);
    // console.log(num2);
    var total = num1 + num2;
    return total;
}

function multyplyTwoNum(num1, num2) {
    console.log(num1, num2);
    var multiply = num1 * num2;
    return multiply;
}

var firstNum = 24, secondNum = 43;
var resultSum = addTwoNumbers(firstNum, secondNum);
var resultMul = multyplyTwoNum(firstNum, secondNum);
console.log('Sum of two numbers: ', resultSum);
console.log('Multiply of two numbers: ', resultMul);