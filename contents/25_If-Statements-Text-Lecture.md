# 25. If Statements Text Lecture

**If statements, else if statements and else statements**

If statements are used to determine what to do next depending on the result of the code. A basic example, a coin vending machine. In this example, a soda costs 5 and if the input is 5, the user can buy a soda. Otherwise user can't buy a soda.

```
let input = 5;
if (input == 5) {
    console.log("user can buy a soda");
}
else { 
    console.log("user can not buy a soda");
}
```

What if user gives 7 and soda costs 5? Now we can use else if statements. An else if statement is going to evaluated if the first if statement isn't correct (executed). The user will get 2 in return after buying a soda.

```
let input = 7;
if (input == 5) {
    console.log("user can buy a soda");
}
else if (input > 5) {
    console.log("user can buy soda and gets change in return: " + input - 5);
}
else { 
    console.log("user can not buy a soda");
}
```


<details>
  <summary> Section 3: (Optional) Nodejs Basics (2023) </summary>

  -   [Codebase: basics.js](../codebase/discord-bots/basics.js)

</details>

## Resources & Links

-   [nodejs+basics.zip](https://rfpga.s3.us-west-1.amazonaws.com/Develop-Discord-Bots-in-Nodejs_Complete-Course-in-2023/nodejs%2Bbasics.zip)

---

[Previous](./24_if-else-statement.md) | [Next](./26_functions.md)