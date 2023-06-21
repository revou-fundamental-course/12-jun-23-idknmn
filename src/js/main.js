alert('Hello World');
var button;
var input;
var Change_Name_placeholder;

function convertTemperature() {
  var temperatureInput = document.getElementById("temperature");
  var unitSelect = document.getElementById("unit");
  var resultCelsius = document.getElementById("resultCelsius");
  var resultFahrenheit = document.getElementById("resultFahrenheit");
  var resultKelvin = document.getElementById("resultKelvin");

  var temperature = parseFloat(temperatureInput.value);
  var unit = unitSelect.value;

  if (unit === "celsius") {
    var celsius = temperature;
    var fahrenheit = (celsius * 9/5) + 32;
    var kelvin = celsius + 273.15;
    
    resultCelsius.textContent = "Celsius: " + celsius.toFixed(2);
    resultFahrenheit.textContent = "Fahrenheit: " + fahrenheit.toFixed(2);
    resultKelvin.textContent = "Kelvin: " + kelvin.toFixed(2);
  } else if (unit === "fahrenheit") {
    var fahrenheit = temperature;
    var celsius = (fahrenheit - 32) * 5/9;
    var kelvin = (fahrenheit + 459.67) * 5/9;
    
    resultCelsius.textContent = "Celsius: " + celsius.toFixed(2);
    resultFahrenheit.textContent = "Fahrenheit: " + fahrenheit.toFixed(2);
    resultKelvin.textContent = "Kelvin: " + kelvin.toFixed(2);
  } else if (unit === "kelvin") {
    var kelvin = temperature;
    var celsius = kelvin - 273.15;
    var fahrenheit = (kelvin * 9/5) - 459.67;
    
    resultCelsius.textContent = "Celsius: " + celsius.toFixed(2);
    resultFahrenheit.textContent = "Fahrenheit: " + fahrenheit.toFixed(2);
    resultKelvin.textContent = "Kelvin: " + kelvin.toFixed(2);
  }
}