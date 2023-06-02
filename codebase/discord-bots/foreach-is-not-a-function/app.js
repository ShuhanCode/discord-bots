let arr = [1, 2, 3, 4, 5];

let newArr = ["a red car"];

let variable = "a red car";

// foreach function, what works and why?

arr.forEach((a => {
    console.log(a);
}));

newArr.forEach(function(b) {
    console.log(b);
});

/* variable.forEach((c => {
    console.log(c);
})); */

// forEach is not a function = you can only run forEach function on an array.

let myData = [1, 2, 3];
let myData2 = 1;

function printData(data){
    data.forEach((d) => {
        console.log(d);
    });
}

printData(myData);