"use strict";




//*******************************************************/
//
// function isEven(i){
//
//     return number % 2 == 0
// }
//*************didn't work had to add it in loop*********/

var number = prompt("an ODD number between 1 and 50");
    console.log("We will be skipping " + number + ".");


// function isEven(number) {
//
//     return number % 2 == 0;
// }

while(isNaN(parseFloat(number))){


    number = prompt("an ODD number between 1 and 50");
}

for(var i=1; i<51;i++){


    if(isNaN(number)){
    document.write("That's not a number!");

        break;

    }
    if(i % 2 == 0) {

        continue;
    }
    if(i == number){
        console.log("ALERT!! SKIPPING "  + i)
        continue;
    }


    console.log("Here is an ODD number: " + i);
    document.write(i + "<br>");


}


