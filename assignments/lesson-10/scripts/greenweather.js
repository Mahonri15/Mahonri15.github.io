let weatherRequest = new XMLHttpRequest();
let apiURL = "https://api.openweathermap.org/data/2.5/weather?&id=4951788&units=imperial&APPID=73e67a92250e95ec52b196fc27ab8f04";
weatherRequest.open("GET", apiURL, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
 
    document.getElementById("currentDescription").innerHTML = weatherData.weather[0].main;
    document.getElementById("currentTemp").innerHTML = weatherData.main.temp;
    document.getElementById("humidity").innerHTML = weatherData.main.humidity;
    document.getElementById("windspeed").innerHTML = weatherData.wind.speed;
    document.getElementById("weathericon").src = "https://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
}