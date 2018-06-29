let dataRequest = new XMLHttpRequest();
let apiURL = "https://byui-cit230.github.io/weather/data/towndata.json";
dataRequest.open("GET", apiURL, true);
dataRequest.send();

dataRequest.onload = function() {
    let townData = JSON.parse(dataRequest.responseText);
    
    document.getElementById("cityName").innerHTML = townData.towns[0].name;
    document.getElementById("cityMotto").innerHTML = townData.towns[0].motto;
    document.getElementById("cityYear").innerHTML = townData.towns[0].yearFounded;
    document.getElementById("cityPopulation").innerHTML = townData.towns[0].currentPopulation;
    document.getElementById("cityRainfall").innerHTML = townData.towns[0].averageRainfall;   
}
    
    //document.getElementById("event1").innerHTML = townData.event[0].March 4: March to the Drum of Donuts;