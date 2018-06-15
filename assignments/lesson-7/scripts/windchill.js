 let h = document.getElementById("highTemp").innerHTML;
 let l = document.getElementById("lowTemp").innerHTML;
 let avg = getAverage(h, l);
 document.getElementById("highlow").innerHTML = avg / 2;
 
 function getAverage(h, l) {
  let low = parseInt(l);
  let high = parseInt(h);
 	let average = low + high;
  return average;
 }



let tempF = document.getElementById("highlow").innerHTML;
let speed = document.getElementById("windSpeed").innerHTML;
let result = windChill(tempF, speed);
document.getElementById("windChillFactor").innerHTML = result;


function windChill(tempF, speed) {
  let f = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(speed, 0.16));
  return f.toFixed(2);
}
