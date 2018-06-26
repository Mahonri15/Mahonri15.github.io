let dataRequest = new XMLHttpRequest();
let apiURL = "https://byui-cit230.github.io/weather/data/towndata.json";
dataRequest.open("GET", apiURL, true);
dataRequest.send();

dataRequest.onload = function() {
    let townData = JSON.parse(dataRequest.responseText);
    console.log(townData);
    document.getElementById("cityName").innerHTML = dataRequest.towns[0].name;
    document.getElementById("cityMotto").innerHTML = dataRequest.towns[0].motto;
    document.getElementById("cityYear").innerHTML = dataRequest.towns[0].yearFounded;
    document.getElementById("cityPopulation").innerHTML = dataRequest.towns[0].currentPopulation;
    document.getElementById("cityRainfall").innerHTML = dataRequest.towns[0].averageRainfall;
    
    document.getElementById("cityName1").innerHTML = dataRequest.towns[1].name;
    document.getElementById("cityMotto1").innerHTML = dataRequest.towns[1].motto;
    document.getElementById("cityYear1").innerHTML = dataRequest.towns[1].yearFounded;
    document.getElementById("cityPopulation1").innerHTML = dataRequest.towns[1].currentPopulation;
    document.getElementById("cityRainfall1").innerHTML = dataRequest.towns[1].averageRainfall;
    
    document.getElementById("cityName2").innerHTML = dataRequest.towns[3].name;
    document.getElementById("cityMotto2").innerHTML = dataRequest.towns[3].motto;
    document.getElementById("cityYear2").innerHTML = dataRequest.towns[3].yearFounded;
    document.getElementById("cityPopulation2").innerHTML = dataRequest.towns[3].currentPopulation;
    document.getElementById("cityRainfall2").innerHTML = dataRequest.towns[3].averageRainfall;
}