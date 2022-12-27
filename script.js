function prepisCas(){

    const date = new Date();
    let pozadi = document.querySelector("body");
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    
    if(hours < 10){
        hours = "0"+hours;
    }
    if(min < 10){
        min = "0"+min;
    }
    if(sec < 10){
        sec = "0"+sec;
    }
    let time = hours+""+min+""+sec;
    pozadi.style.backgroundColor = "#"+time;
    document.querySelector(".Mian_Clock").innerHTML = "#"+time;
    setTimeout(prepisCas, 1000);
}
prepisCas();