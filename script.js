let mainClock = document.querySelector(".Mian_Clock");
const date = new Date();
let hours = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
let pozadi = document.querySelector("body");




function prepisCas(){
    let time = "#"+hours+""+min+""+sec;
    if(hours < 10){
        hours = "0"+hours;
    }
    if(min < 10){
        min = "0"+min;
    }
    if(sec < 10){
        sec = "0"+sec;
    }
    mainClock.innerHTML = time;
    pozadi.style.background = time;
    mainClock.innerHTML = time;
    setTimeout(prepisCas, 1000);
}
prepisCas();

