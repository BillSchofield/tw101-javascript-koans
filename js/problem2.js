"use strict";

/*
 <!--
 Problem 2:

 Background:
 Bangalore has heavy traffic. One common cause is slow-moving vehicles using the same lanes as fast-moving vehicles.
 Auto rickshaws form a majority of these slow-moving vehicles.
 http://bit.ly/oz3969

 Problem statement:
 The Indian government traffic jam analysis department has done some research and has found that traffic jams will occur
 when the number of auto rickshaws on the road is more than 40. Unless it is after 8pm in which case there are no
 traffic jams because the daytime traffic has finished.

 Examples:
 Given there are 30 auto rickshaws in the road
 And the time is 3pm
 When the traffic jam system is queried
 Then no traffic jam is predicted

 Given there are 41 auto rickshaws in the road
 And the time is 3pm
 When the traffic jam system is queried
 Then a traffic jam is predicted

 Given there are 60 auto rickshaws in the road
 And the time is 10pm
 When the traffic jam system is queried
 Then no traffic jam is predicted


 */


// helper function for output
function changeElementText(element, answer) {
    $(element).text(answer);
}

function isTrafficJam(numberOfAutoRickshaws, isAfterEightPm) {
    var answer;

    // write some code here!

    writeAnswer(answer);
}

