# 29. JSON Data text lecture

**JSON Data. JavaScript Object Notation**

JSON is used within Discord bots. The events that return data is of JSON.

```
{
    name : "Erik",
    lastname : "Petersson"
}
```

The object is surrounded with brackets { object }

name and lastname are properties within the object. What's the name of the object itself? In this case there is no name of the object. However we can store the object inside a variable because simply by writing the JSON above isn't valid inside a JavaScript file.

```
let obj = { 
    name : "Erik",
    lastname : "Petersson"
}
```

The code above is valid. Now, we can access the properties by delving deeper into the obj variable like this:

```
console.log(obj.name); // prints Erik to the console.
```

We could go through more examples and scenarios but we will cover JSON later on. This is just to get you warmed up.


<details>
  <summary> Section 3: (Optional) Nodejs Basics (2023) </summary>

  -   [Codebase: Codeforudemy](../codebase/discord-bots/Codeforudemy/)

</details>

---

[Previous](./28_JSON-Data-Preperation.md) | [Next](./30_Temperature-Converter-Program.md)