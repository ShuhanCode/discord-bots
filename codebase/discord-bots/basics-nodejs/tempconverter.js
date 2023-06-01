// this function converts celsius to fahrenheit with input celsius value
function celsiusToFahrenheit(celsius){
    const f = (celsius * 1.8) + 32; // the calculation formula celsius to fahrenheit
    console.log(celsius + " Celsius = " + f + " Fahrenheit");

    if (f > 86){
        console.log("The temperature is very hot!");
    }

    if (f > 122){
        console.log("The temperature is extremely hot!");
    }
}

// this function converts fahrenheit to celsius with input fahrenheit
function fahrenheitToCelsius(fahrenheit){
    const c = (fahrenheit - 32) * 0.5556; // the calculation formula fahrenheit to celsius
    console.log(fahrenheit + " Fahrenheit = " + c + " Celsius"); 

    if (c > 30){
        console.log("The temperature is very hot!");
    }

    if (c > 50){
        console.log("The temperature is extremely hot!");
    }
}

celsiusToFahrenheit(30); // converting celsius to fahrenheit
celsiusToFahrenheit(50); // converting celsius to fahrenheit

fahrenheitToCelsius(86); // converting fahrenheit to celsius
fahrenheitToCelsius(122); // converting fahrenheit to celsius