let greenvilleRequest = new XMLHttpRequest();
let greenURL = "https://byui-cit230.github.io/weather/data/towndata.json";
greenvilleRequest.open("GET", greenURL, true);
greenvilleRequest.send();

greenvilleRequest.onload = function() {
    let townData = JSON.parse(greenvilleRequest.responseText);
    
    document.getElementById("cityMotto1").innerHTML = townData.towns[1].motto;
    document.getElementById("cityYear1").innerHTML = townData.towns[1].yearFounded;
    document.getElementById("cityPopulation1").innerHTML = townData.towns[1].currentPopulation;
    document.getElementById("cityRainfall1").innerHTML = townData.towns[1].averageRainfall;
    document.getElementById("franklinEvent").innerHTML = townData.towns[1].events;
    
}

