//we create a date object and set the time to the day we want it to count down to
//getTime is to get the timestamp in milliseconds 
var countDownDate = new Date("Mar 9, 2024").getTime();
//we set an interval that is executed every one second(1000 millisecond)
var x = setInterval(function(){
    // this collects the curent date and time and assigns it to the variable now
    var now = new Date().getTime();
    // this calculates the difference
    var distance = countDownDate - now;
    //calculations for days, hours ,minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //this with diplay the update time in the html file
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    // when the countdown is done, it'll stop it from counting backwards and just stay at 0
    if (distance < 0) {
        setInterval(x);
        countDownDate = new Date(now + 10 * 24 * 60 * 60 * 1000).getTime(); // reset to be 10 days ahead
        document.getElementById("days").innerHTML = "10"; // set days to 10
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
    //the 1000 is the interaval which is in millisecond(1 second)
},1000);