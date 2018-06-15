 let h = parseFloat(document.getElementById("highTemp").innerHTML);
let l = parseFloat(document.getElementById("lowTemp").innerHTML);
let speed = parseFloat(document.getElementById("windSpeed").innerHTML);
let avg = (h + l) / 2;
let result = windChill(avg, speed);
document.getElementById("windChillFactor").innerHTML = result.toFixed(2);



function windChill(avg, speed) {
  let f = 35.74 + (0.6215 * avg) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * avg *     Math.pow(speed, 0.16));{
  return f;
  }
}