function kilosToPounds(kg){ return kg * 2.2; } // function converts kilos to pounds and returning the result
function poundsToKilos(lbs){ return lbs / 2.2046; } // function converts pounds to kilos and returning the result
function metricTons(kg){ return Math.floor(kg / 1000); } // function converts kilos to metric tons and returns the floored result

let kilosResult = kilosToPounds(22222); // variable holds the result of kilos being converted to pounds
let poundsResult = poundsToKilos(kilosResult); // variable holds the result of pounds being converted to kilos

// printing the results
console.log(kilosResult);
console.log(poundsResult);
console.log(metricTons(poundsResult) + " metric tons.");