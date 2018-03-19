"use strict";

// var isClassFull = true;
//
// var isSchedConflict = true

var isClassOpen = confirm ("Is the class open?");
 console.log(isClassOpen);
var isSchedConflict = confirm ("is there a schedule conflict?");

// var canEnroll = true;

var canEnroll = isClassOpen && !isSchedConflict;

console.log(canEnroll);

alert(canEnroll);