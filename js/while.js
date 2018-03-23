"use strict";


var i = 2;

while (i <=65536) {


    console.log(i);
    document.write(i + "<br>");
    i=i+i;
}

// This is how you get a random number between 50 and 100

var allCones = Math.floor(Math.random() * 50) + 50;

// This expression will generate a random number between 1 and 5


do {
var customerBuys = Math.floor(Math.random() * 5) + 1;
    if(customerBuys>allCones){
        document.write("I can't sell " + customerBuys + " cones. I have only " + allCones + " left.<br>")
        continue;
    }
    allCones = allCones - customerBuys;

    document.write(customerBuys + ' cones sold. <br>');
    console.log(allCones +' cones remain.');


    if(allCones === 0){
        document.write("All sold out! <br>");
    }

} while (allCones >0);

