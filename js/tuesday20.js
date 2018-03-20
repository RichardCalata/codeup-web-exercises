"use strict";

// function decrement(someNumber) {
//
//     return someNumber -1;
//
// }
//
// console.log(decrement(45));

function identity(aParameter) {

return aParameter;

}

console.log(identity("john"));



function isOdd(number) {

    return  number + " is odd :" + ((number % 2) === 1);

}


console.log(isOdd(11));

function isEven(number) {

    // console.log("the number you passed is even :" + return);

    return number + " is even: " + ((number % 2) === 0);

}

console.log(isEven(24));

// console.log("The number you passed is even: " + result);

function isPositive(number) {

    return number + " is a positive number: "  + (number > 0);
}

console.log(isPositive(12));


function decrement(number) {

    return number + " minus 1 equals " + (number - 1);

}

console.log(decrement(92));


function hasSpaces(This) {

    return This + " has spaces? " + (This.indexOf(" ") >= 0);

}


console.log(hasSpaces("bad_motorscooter"));


function isFive(number) {

    return "is " + number + " equal to 5? " + (number === 5);

}

console.log(isFive(5));

function square(number) {

    return number + " squared is " + (number * number);

}

console.log(square(7));


function cube(number) {

    return number + " cubed is " + (number * number * number);

}

console.log(cube(3));


function half(number) {

    return "half of " + number + " is " + (number/2);
}

console.log(half(34));


function double(number) {

    return (number * 2) + " is " + number + " multiplied by two.";

}

console.log(double(42));

function isValidPassword(password) {

    return (password.length >= 5) && !(password.indexOf(" ") >= 0);

}

console.log(isValidPassword("astrongpassword"));

function isRightTriangle(a,b,c) {

    return "is this a right triangle? " + (((a * a) + (b * b)) === (c * c))

}


console.log(isRightTriangle(3, 4, 5));

