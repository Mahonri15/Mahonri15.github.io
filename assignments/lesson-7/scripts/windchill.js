var tempF = document.getElementById("highlow");
var speed = document.getElementById("windSpeed");
var result = windChill (tempF, speed);
document.getElementById("windChillFactor").innerHTML = result;
function windChill (tempF, speed) {
    var f = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(speed, 0.16));
    return result;
}
	   	   