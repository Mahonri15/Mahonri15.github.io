let franklinRequest = new XMLHttpRequest();
let frankURL = "https://byui-cit230.github.io/weather/data/towndata.json";
franklinRequest.open("GET", frankURL, true);
franklinRequest.send();

franklinRequest.onload = function() {
    let townData = JSON.parse(franklinRequest.responseText);
    
    document.getElementById("cityMotto").innerHTML = townData.towns[0].motto;
    document.getElementById("cityYear").innerHTML = townData.towns[0].yearFounded;
    document.getElementById("cityPopulation").innerHTML = townData.towns[0].currentPopulation;
    document.getElementById("cityRainfall").innerHTML = townData.towns[0].averageRainfall;
    document.getElementById("franklinEvent").innerHTML = townData.towns[0].events;
}


    
   