function celsiusToFahrenheit(celsius){
    const f = (celsius * 1.8) + 32;
    console.log(celsius + " Celsius = " + f + " Fahrenheit");

    if (f > 86){
        console.log("The temperature is very hot!");
    }

    if (f > 122){
        console.log("The temperature is extremely hot!");
    }
}

function fahrenheitToCelsius(fahrenheit){
    const c = (fahrenheit - 32) * 0.5556;
    console.log(fahrenheit + " Fahrenheit = " + c + " Celsius");

    if (c > 30){
        console.log("The temperature is very hot!");
    }

    if (c > 50){
        console.log("The temperature is extremely hot!");
    }
}

celsiusToFahrenheit(30);
celsiusToFahrenheit(50);

fahrenheitToCelsius(86);
fahrenheitToCelsius(122);