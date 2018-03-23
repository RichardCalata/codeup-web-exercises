"use strict";





for(var i = 0; i < 10; i++){
    i = i.toString();
    console.log(i.repeat(i));
}


//
// function isEven(i){
//
//     return number % 2 == 0
// }


var number = prompt("an ODD number between 1 and 50");

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


    console.log(i);
    document.write(i);


}