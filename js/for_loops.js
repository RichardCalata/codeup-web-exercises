"use strict";


function isEvenOdd(number) {

    if (number % 2 > 0) {

        return number + " is odd ";

    } else {

        return number + " is even ";
    }
}


for (var i =0; i<10; i++) {

var number = Math.floor(Math.random() * 180) + 20;
    console.log(isEvenOdd(number));
    document.write(isEvenOdd(number) + " <br>")
}

//***********************************************//

var number = Math.floor(Math.random() * 10) + 1;

function showMultiplicationTable(number) {

    console.log(number + " x " + i + " = " + number*i);


}

for(var i=1; i<11; i++) {

    showMultiplicationTable(number)

    }



    for(var i=1; i < 10; i++) {
        i = i.toString();
        console.log(i.repeat(i));

    }

    for(var i = 100; i >=5; i-=5){
        console.log(i);
    }