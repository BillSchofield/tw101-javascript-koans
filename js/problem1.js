"use strict";

// helper function for output
function changeElementText(element, answer) {
    $(element).text(answer);
}

function kiteGame(numberOfKites) {
    changeElementText("#numberOfKites", numberOfKites);
    var answer = "";

    // write some code here!

    changeElementText("#answer", answer);
}