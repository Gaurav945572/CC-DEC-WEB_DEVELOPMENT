var endHour = (document.getElementById('hour'));
var endMinute = (document.getElementById('minute'));
var endSecond = (document.getElementById("second"));
var display = document.getElementById('display');
var btn = document.getElementById('Start');
function getendDate() {
    if (second.value) {
        display.innerHTML = "COUNTDOWN LIMIT : " + (hour.value > 9 ? hour.value : '0' + hour.value) + "  hours  " + (minute.value > 9 ? minute.value : '0' + minute.value) + "   minutes " + (second.value > 9 ? second.value : '0' + second.value) + "  second ";
    }
}
function clock() {
    var p= document.getElementById('Start');
    p.style.visibility='hidden';
    // Start.remove=true;
    Start.disabled = true;
    hour.disabled = true;
    minute.disabled = true;
    second.disabled = true;
    var date1 = new Date();
    var countDownDate = new Date();
    
    countDownDate.setTime(date1.getTime() + (hour.value * 60 * 60 * 1000) + (minute.value * 60 * 1000) + (second.value * 1000) + (1 * 1000));
    var audio3= new Audio('sound/742KUC8-countdown-timer.mp3');
    audio3.play();
    var x = setInterval(function () {
         var now = new Date().getTime();
         var distance = countDownDate - now;
         var hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        var minutes = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
        var seconds = Math.floor((distance % (60 * 1000)) / (1000));
        display.innerHTML = (hours > 9 ? hours : '0' + hours) + " hours " + (minutes > 9 ? minutes : '0' + minutes) + " minutes " + (seconds> 9 ? seconds : '0' + seconds) + " seconds ";
        btn.innerHTML=" ";
        var audio = new Audio('sound/crash.mp3');
        if(hours='00'&&minutes=='00'&&seconds=='0' ){
            audio3.pause();
            clearInterval(x);
            p.style.visibility='visible';
            btn.innerHTML="Ends";
           
            audio.play();
        }    
    }, 1000)
}



