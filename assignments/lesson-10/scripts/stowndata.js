let springfieldRequest = new XMLHttpRequest();
let springURL = "https://byui-cit230.github.io/weather/data/towndata.json";
springfieldRequest.open("GET", springURL, true);
springfieldRequest.send();

springfieldRequest.onload = function() {
    let townData = JSON.parse(springfieldRequest.responseText);
    
    document.getElementById("cityMotto2").innerHTML = townData.towns[2].motto;
    document.getElementById("cityYear2").innerHTML = townData.towns[2].yearFounded;
    document.getElementById("cityPopulation2").innerHTML = townData.towns[2].currentPopulation;
    document.getElementById("cityRainfall2").innerHTML = townData.towns[2].averageRainfall;
    document.getElementById("franklinEvent").innerHTML = townData.towns[2].events;
    
}

