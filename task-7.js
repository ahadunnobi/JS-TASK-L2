const toCelsius = (fahrenheit) => ((fahrenheit - 32) * 5/9).toFixed(1);
console.log(`90.6°F is ${toCelsius(90.6)}°C`);