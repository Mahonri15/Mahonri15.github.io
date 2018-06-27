let dataRequest = new XMLHttpRequest();
let apiURL = "https://byui-cit230.github.io/weather/data/towndata.json";
dataRequest.open("GET", apiURL, true);
dataRequest.send();

dataRequest.onload = function() {
    let townData = JSON.parse(dataRequest.responseText);
    //console.log(townData);
    document.getElementById("cityName").innerHTML = townData.towns[0].name;
    document.getElementById("cityMotto").innerHTML = townData.towns[0].motto;
    document.getElementById("cityYear").innerHTML = townData.towns[0].yearFounded;
    document.getElementById("cityPopulation").innerHTML = townData.towns[0].currentPopulation;
    document.getElementById("cityRainfall").innerHTML = townData.towns[0].averageRainfall;
    
    document.getElementById("cityName1").innerHTML = townData.towns[1].name;
    document.getElementById("cityMotto1").innerHTML = townData.towns[1].motto;
    document.getElementById("cityYear1").innerHTML = townData.towns[1].yearFounded;
    document.getElementById("cityPopulation1").innerHTML = townData.towns[1].currentPopulation;
    document.getElementById("cityRainfall1").innerHTML = townData.towns[1].averageRainfall;
    
    document.getElementById("cityName2").innerHTML = townData.towns[3].name;
    document.getElementById("cityMotto2").innerHTML = townData.towns[3].motto;
    document.getElementById("cityYear2").innerHTML = townData.towns[3].yearFounded;
    document.getElementById("cityPopulation2").innerHTML = townData.towns[3].currentPopulation;
    document.getElementById("cityRainfall2").innerHTML = townData.towns[3].averageRainfall;
}