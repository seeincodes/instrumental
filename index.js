#!/usr/bin/node

'use strict';


let timeStamps = [];
function count(seconds){
    let response = 0;
    timeStamps.push(new Date());
    let lowerBound = new Date().setSeconds(new Date().getSeconds() - seconds);
    timeStamps.forEach(timestamp => {
        if (timestamp >= lowerBound){
            response++;
        }
    });
    console.log(response);
    return response;
}


// count(10); 
// count(10);
// count(10);
// count(10);
// count(10);
// count(10);
// count(10);
// count(10);
// count(10);
// count(10);
