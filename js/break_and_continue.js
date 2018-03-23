"use strict";




//*******************************************************/
//
// function isEven(i){
//
//     return number % 2 == 0
// }
//*************didn't work had to add it in loop*********/
// (isNaN(parseFloat(number)))
var number = prompt("an ODD number between 1 and 50");


// function isEven(number) {
//
//     return number % 2 == 0;
// }

while((number%2==0)||(isNaN(parseFloat(number)))){


    number = prompt("an ODD number between 1 and 50");

}

    console.log("We will be skipping " + number + ".");

for(var i=1; i<51;i++){



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


