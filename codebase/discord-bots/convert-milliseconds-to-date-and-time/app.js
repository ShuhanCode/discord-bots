// convert milliseconds to date and time... how?
// test by checking how big the difference is between 0 milliseconds and 3,600,000 milliseconds (1 hour)
// test with 34,560,000,000 milliseconds (400 days)

let date = new Date(0);
let date2 = new Date(3600000);

console.log(date.toString());
console.log(date2.toString());

let date3 = new Date(34560000000);
console.log(date3.toString());