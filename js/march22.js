"use strict";

function isBoolean(input) {

    return typeof input === "boolean";
}

function isNumeric(input) {

    return !isNaN(parseFloat(input));
}

function isString(input) {

    return typeof input === "string";
}

function isArray(input) {

    return Array.isArray(input);
}

function isPositive(input) {

    return parseFloat(input)>0;
}

var answer = confirm("Do you like pizza?");

while(answer != true) {

    alert("everybody likes pizza");
    answer = confirm("do you like pizza?");
}

//////////

do {


} while(  );




///////////


for (var i = 1 , i <= 10, i++) {

    console.log(i);
};