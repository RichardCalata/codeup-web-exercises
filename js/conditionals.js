"use strict";

// I'll call this function inside the if-else
function isNumber(number) {

    if (isNaN(parseFloat(number))) {

        return false;

    } else {

        return true;

    }
}

var willEnterNumber = confirm("would you like to enter a number?");

    if(willEnterNumber) {

        var number = prompt("Enter a number");
        parseFloat(number);

        if (!isNumber(number)) {

            alert("enter a numerical number please");

        } else {

            if (number % 2 == 0) {

                alert(number + " is even");

            } else {

                alert(number + " is odd");

            }
alert(number + " + 100 is " + (parseFloat(number) +100));
        }

        if(number>0) {

            alert(number + " is positive");
        } else {

            alert(number + " is negative");
        }
    }

/* ########################################################################## */

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

var string = prompt("Enter a color");

function analyzeColor(string) {

        switch(string) {

            case "blue": alert("BLUE! Blue is the color of the sky");
            break;
            case "red":  alert("RED!");
            break;
            default: alert(string + "?: is that really a color?");

            }

}

analyzeColor(string);

/* ########################################################################## */

var luckyNumber = Math.floor(Math.random() * 6);

alert("Your lucky Number is " + luckyNumber +", Good Luck!");

var total = parseFloat(prompt("enter your total"));

calculateTotal(luckyNumber, total);

function calculateTotal(luckyNumber, total) {

        var discount;

        switch(luckyNumber) {
            case 0: discount = 0;
            break;
            case 1: discount = .10;
            break;
            case 2: discount = .25;
            break;
            case 3: discount = .35;
            break;
            case 4: discount = .50;
            break;
            default: discount = 1;
        }

        var finalPrice = total - (total * discount);

        return alert("Your discounted total is " + finalPrice);

}
/**********************************************************************/
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
//  */
//
// var enterANumber = confirm("wouldja like to enter a number?");
//
//         if(enterANumber) {
//
//             var number = prompt("Enter a number");
//             if(number%2>0){
//                 alert(number + " is odd");
//             } else {
//
//                 alert(number + " is even");
//             }
//
//             alert(number + " + 100 is " + (parseFloat(number) + 100));
//
//             if(number>0){
//
//                 alert(number + " is positive");
//             } else {
//
//                 alert(number + " is negative ");
//             }
//
//
//         } else {
//
//         alert(":(")
// }

/************************************************************/

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

//*******************************************************




