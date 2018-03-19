"use strict";

console.log("hello world");

var myAge = 90

console.log (myAge);

alert("message goes here");

var confirmed = confirm ("are you sure you want to XYZ?")

console.log (confirmed);

var userInput = prompt ("type something");

console.log ("The user entered: " + userInput);

alert ("Welcome to my website");

var favoriteColor = prompt ("What is your favorite color?");

alert (favoriteColor +" is my favorite color too.");

var myNumber = prompt ("enter a number");

console.log (myNumber);



alert(parseInt(myNumber));

function increment(x) {
   return x + 1;
}

var four = increment(3);
var six = increment(increment(increment(7)));

alert(six);


