(function() {
    "use strict";

    var circle = {
        radius: 3,

        getArea: function (circle) {

            // hint: area = pi * radius^2

            var area = Math.PI * Math.pow(this.radius, 2);

            return area;
        },

        logInfo: function () {

            var rounded =  Math.round(circle.getArea());

            if(rounded === circle.getArea()){
                console.log("message a");
            } else {
                console.log(circle.getArea());
            }


            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("HEY!! Area of a circle with radius: " + this.radius + ", is: " + circle.getArea());
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
