const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const restartButton = document.getElementById("restart");
const timer = document.getElementById("timer");
let time = String(timer);
let milli = time.slice(0, -2)
let sec = time.slice(0, -4);
let minutes = time.slice(0, 2);
const interval = 99;

// Pause the watch
pauseButton.onclick() = () =>{ pause();}

// Restart
restartButton.onclick() = ()=> {
    restart();
}

startButton.onclick() = ()=>{
timer.setInterval(() => {
   milliIncrement();
}, interval);

if (milli === interval) secIncrement();
if (sec === 59) minIncrement();

};

const milliIncrement = function(milli){
return milli++;

}
const secIncrement = function(sec){
    return sec++;
}
const minIncrement = function(){
    return minutes++;
}

//Pause function
const pause = function(){timer.clearInterval();}

//Restart function
const restart = function(){
   pause();
   milli = "00";
   sec = "00";
   minutes = "00";
}
