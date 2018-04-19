//create secretNumber

"use strict";
    $(document).ready(function() {
        var secretNumber = Math.floor(Math.random() * 9 + 1);
        var playerGuess = $("#guess").val();
        $("#output").text("the secret number is " +secretNumber);
        // console.log("secret number is " + secretNumber);
        $("#theButton").on("click",function(){
            console.log("this should do something");
            $("#output2").text($("#guess").val());

            if($("#guess").val()==secretNumber) {

                $("#win").text("You Win!");
                console.log("PG " + $("#guess").val());
            }else $("#win").text("Guess again!");

        });





//ask user for guess

//check if guess is right

//check if guess is higher


});


//otherwise, check if lower
//         while (guess != secretNumber) {
//             stringGuess = prompt("Guess a number between 1 to 10");
//             guess = parseInt(stringGuess);
//             if (guess === secretNumber) {
//                 alert("YOU GOT IT RIGHT!");
//             } else
//
//         if (guess > secretNumber) {
//             alert("Too high.  Guess again!");
//             prompt("Guess a number between 1 to 10")
//         }
//
//         else if (guess < secretNumber) {
//             alert("Too low.  Guess again!");
//             prompt("Guess a number between 1 to 10")
//         }
//
//     }
