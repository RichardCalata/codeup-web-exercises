"use strict";

var mermaid = prompt ("How many days did you rent the Little Mermaid?");

var brotherBear = prompt ("How many days did you rent Brother Bear?");

var hercules = prompt ("How many days did you rent Hercules?");



var totalCost = ((parseInt(brotherBear)) + (parseInt(mermaid)) + (parseInt(hercules))) * 3;

// var totalCost =brotherBear + mermaid + hercules;

alert("your total cost is " + totalCost);
