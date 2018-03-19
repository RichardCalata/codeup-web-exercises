"use strict";

var googleRate = 400;

var amazonRate = 380;

var facebookRate = 350;

var googleHours = prompt ("Hours worked for Google");

var googlePay = googleRate * googleHours;

var amazonHours = prompt ("Hours worked for Amazon");

var amazonPay = amazonRate * amazonHours;

var facebookHours = prompt ("Hours worked for Facebook");

var facebookPay = facebookRate * facebookHours;

var payday = googlePay + amazonPay + facebookPay;

alert("your total pay " + payday);

