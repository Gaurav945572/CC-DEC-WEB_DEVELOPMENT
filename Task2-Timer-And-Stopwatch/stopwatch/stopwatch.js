var ms=0,s=0,m=0,h=0;
var timer;
var stopwatchEl = document.querySelector('.stopwatch');
var lapsContainer = document.querySelector('.laps');
var audio = new Audio('sound/742KUC8-countdown-timer.mp3');
var audio2 = new Audio('sound/crash.mp3')

function start(){
    audio.play();
    timer =setInterval(run,10);

}

function run(){
    audio2.pause();
    audio.play();
    stopwatchEl.textContent = (h<10? "0" +h :h) +":" +(m <10 ? "0" +m  :m) +":" + ( s<10 ? "0" +s :s) + ":" + (ms<10 ? "0" +ms :ms);
    ms++;
    if(ms==100){
        ms=0;
        s++;
    }
    if(s==60){
        s=0;
        m++;
    }
    if(m==60){
        m=0;
        h++;
    }
}
function pause(){
    audio.pause();

    
    clearInterval(timer);
    timer = false;
    

}
function stop(){
    audio.pause();
    audio2.play();
    clearInterval(timer);
    timer = false;
    ms=0;
    s=0;
    m=0;
    h=0;
    stopwatchEl.textContent =(h<10? "0" +h :h) +":"+ (m <10 ? "0" +m  :m) +":" + ( s<10 ? "0" +s :s) + ":" + (ms<10 ? "0" +ms :ms);

}
function restart(){
    audio2.pause();
    audio.play();
    clearInterval(timer);
    timer = false;
    h=0;
    ms=0;
    s=0;
    m=0;
    stopwatchEl.textContent =(h<10? "0" +h :h)+":"+ (m <10 ? "0" +m  :m) +":" + ( s<10 ? "0" +s :s) + ":" + (ms<10 ? "0" +ms :ms);
    start();

}
