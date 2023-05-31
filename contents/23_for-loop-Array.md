# 23 For loop + Array

**For loops**

```
for (let i = 0; i < 10; i++) {
   console.log(i);
}
```

prints the numbers 0 to 9 to the console.
For loops are used to iterate x amount of times, how many times? Depends. in this case 10 times. But if you iterate through an array the length of the array decides that. We will look at how that works below.

**Array**

An array is a variable which can hold multiple items. A normal variable like `let name = "Erik";` Can only hold one value. An array can hold many.
`let myArray = ["Erik", "Petersson", 26];`

myArray holds 3 items.
**Loop through myArray,** how many times can we loop?

```
for (let i = 0; i < myArray.length; i++) {
   console.log(i); 
}
// also print each value of the array using a for loop
for (let i = 0; i < myArray.length; i++) {
   console.log(myArray[i]); 
}
```

We will loop through this for loop 3 times. Why? Because myArray holds 3 values/items.

<details>
  <summary> Section 3: (Optional) Nodejs Basics (2023) </summary>

  -   [Codebase: basics.js](../codebase/discord-bots/basics.js)

</details>

## Resources & Links

-   [nodejs+basics.zip](https://rfpga.s3.us-west-1.amazonaws.com/Develop-Discord-Bots-in-Nodejs_Complete-Course-in-2023/nodejs%2Bbasics.zip)

---

[Previous](./22_Array.md) | [Next](./24_if-else-statement.md)