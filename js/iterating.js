    "use strict";

var names = ["aName", "aAnotherName", "yetAnotherName", "stillAnotherName"];

console.log(names.length + names[0] + names[1] + names[2] + names[3]);

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);


for(var i = 0; i < names.length; i++) {

    console.log(names[i]);
}

names.forEach(function(names) {
    console.log("this is a name " + names + '.');
});

/*****************************************************/



var birds = ['eagle', 'hawk', 'heron','shrike','pigeon'];

var lakes = ['superior', 'huron','michigan','canyon lake','ontario','baikal'];

first(bugs);
second(birds);
last(lakes);

function first(input) {
    var bugs = ['mosquito', 'wasp', 'dragonfly', 'noseeum'];
console.log(input[0]);
}

function second(input){
console.log(input[1]);
}

function last(input){

console.log(input[input.length-1]);
}

(function(){

    // /**
    //  * TODO:
    //  * Create the following three functions, each will accept an array and
    //  * return an an element from it
    //  * - first: returns the first item in the array
    //  * - second: returns the second item in the array
    //  * - last: returns the last item in the array
    //  *
    //  * Example:
    //  *  > first([1, 2, 3, 4, 5]) // returns 1
    //  *  > second([1, 2, 3, 4, 5]) // returns 2
    //  *  > last([1, 2, 3, 4, 5]) // return 5
    //  */
    //

    // /**
    //  * TODO:
    //  * Create an array of 4 people's names and store it in a variable called
    //  * 'names'.
    //  */

    // /**
    //  * TODO:
    //  * Create a log statement that will log the number of elements in the names
    //  * array.
    //  */

    // /**
    //  * TODO:
    //  * Create log statements that will print each of the names individually by
    //  * accessing each element's index.
    //  */

    // /**
    //  * TODO:
    //  * Write some code that uses a for loop to log every item in the names
    //  * array.
    //  */

    // /**
    //  * TODO:
    //  * Refactor your above code to use a `forEach` loop
    //  */


})();
