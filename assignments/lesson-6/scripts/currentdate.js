function renderTime(){
    var mydate = new Date();
    var year = mydate.getYear();
        if(year < 1000){
            year +=1900
        }
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    var dayarray = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
    var montharray = new Array("January","February","March","April","May","June","July","August","September","Ovtober","November","December");
    
    var myActualDate = document.getElementById("currentdate");
    myActualDate.textContent = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year;
    myActualDate.innerText = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year;